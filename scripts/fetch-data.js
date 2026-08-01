const fs = require("fs");
const path = require("path");

const API_KEY = process.env.YOUTUBE_API_KEY;
const DATA_FILE = path.join(__dirname, "..", "data.js");
const OUT_FILE = path.join(__dirname, "..", "data", "youtube.json");
const BACKUP_FILE = path.join(__dirname, "..", "data", "youtube.backup.json");

const API = "https://www.googleapis.com/youtube/v3";

eval(fs.readFileSync(DATA_FILE, "utf8").replace(/^const (\w+) =/gm, "globalThis.$1 ="));

if (!API_KEY) {
  console.error("YOUTUBE_API_KEY is not set");
  process.exit(1);
}

const members = MEMBERS.filter((m) => m.links && m.links.yt && m.id !== "milchan");
const handleOf = (m) => {
  const u = m.links.yt;
  const i = u.indexOf("@");
  return i >= 0 ? u.slice(i) : null;
};

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    let reason = "";
    try {
      const j = JSON.parse(body);
      if (j.error) reason = ` [${j.error.code || ""} ${j.error.status || ""} ${(j.error.errors || []).map((e) => e.reason || e.message).join(", ")}]`;
    } catch (e) {
      if (body) reason = ` [${body.slice(0, 200)}]`;
    }
    throw new Error(`YouTube API ${res.status}: ${url}${reason}`);
  }
  return res.json();
}

async function fetchAll(url) {
  const items = [];
  let next = null;
  do {
    const j = await fetchJson(url + (next ? `&pageToken=${next}` : ""));
    items.push(...(j.items || []));
    next = j.nextPageToken || null;
  } while (next);
  return items;
}

const valid = (v) => v && v.id && v.title;

async function main() {
  const errors = [];

  const channelResults = await Promise.all(
    members.map(async (m) => {
      const handle = handleOf(m);
      try {
        const j = await fetchJson(
          `${API}/channels?part=contentDetails&forHandle=${encodeURIComponent(handle)}&key=${API_KEY}`
        );
        const ch = j.items && j.items[0];
        return ch ? { member: m, playlistId: ch.contentDetails.relatedPlaylists.uploads } : null;
      } catch (e) {
        errors.push(`${m.id}: ${e.message}`);
        return null;
      }
    })
  );

  const withPlaylist = channelResults.filter(Boolean);
  if (withPlaylist.length === 0) {
    console.error("all channels failed:", errors.join("; "));
    process.exit(1);
  }

  const videos = (
    await Promise.all(
      withPlaylist.map(async ({ member, playlistId }) => {
        try {
          const items = await fetchAll(
            `${API}/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&maxResults=5&key=${API_KEY}`
          );
          return items.map((it) => ({
            id: it.contentDetails.videoId,
            memberId: member.id,
            member: member.name,
            channelTitle: it.snippet.channelTitle,
            title: it.snippet.title,
            thumb: it.snippet.thumbnails.high ? it.snippet.thumbnails.high.url : "",
            publishedAt: it.snippet.publishedAt,
            live: /配信|ライブ|雑談/.test(it.snippet.title)
          }));
        } catch (e) {
          errors.push(`${member.id}: ${e.message}`);
          return [];
        }
      })
    )
  )
    .flat()
    .filter(valid)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, 30);

  const streams = (
    await Promise.all(
      withPlaylist.map(async ({ member }) => {
        try {
          const j = await fetchJson(
            `${API}/channels?part=id&forHandle=${encodeURIComponent(handleOf(member))}&key=${API_KEY}`
          );
          const channelId = j.items && j.items[0] && j.items[0].id;
          if (!channelId) return [];
          const items = await fetchAll(
            `${API}/search?part=snippet&channelId=${channelId}&eventType=upcoming&type=video&maxResults=10&key=${API_KEY}`
          );
          return items.map((it) => ({
            id: it.id.videoId,
            memberId: member.id,
            member: member.name,
            title: it.snippet.title,
            thumb: it.snippet.thumbnails.high ? it.snippet.thumbnails.high.url : "",
            scheduledStart: it.snippet.publishedAt
          }));
        } catch (e) {
          errors.push(`${member.id} (streams): ${e.message}`);
          return [];
        }
      })
    )
  )
    .flat()
    .filter((v) => v && v.id)
    .sort((a, b) => (a.scheduledStart > b.scheduledStart ? 1 : -1));

  const output = {
    updatedAt: new Date().toISOString(),
    streams,
    videos,
    live: streams.filter((s) => {
      const t = Date.parse(s.scheduledStart);
      return t && t <= Date.now() + 60 * 60 * 1000;
    })
  };

  const invalid = [...output.videos, ...output.streams].filter((v) => !v.id || !v.title);
  if (invalid.length > 0) {
    console.error("invalid items found, aborting:", JSON.stringify(invalid.slice(0, 5)));
    process.exit(1);
  }

  if (fs.existsSync(OUT_FILE)) {
    fs.copyFileSync(OUT_FILE, BACKUP_FILE);
  }
  fs.writeFileSync(OUT_FILE, JSON.stringify(output, null, 2) + "\n", "utf8");

  console.log(
    `ok: ${output.videos.length} videos, ${output.streams.length} streams (${output.live.length} live)`
  );
  if (errors.length) console.warn("partial errors:", errors.join("; "));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
