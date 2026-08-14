const SITE_CONFIG = {
  name: "Milli Orbis",
  siteUrl: "https://milli-orbis-portal.onrender.com",
  ogImage: "/images/Milli-Orbis-OGP.png",
  tagline: "ここを開けば、今のミリプロのすべてにアクセスできる",
  disclaimer: "本サイトはファンが運営する非公式のポータルサイトです。ミリプロ公式様とは一切関係ありません。",
  sourceNote: "タレント情報の出典: ミリプロ公式サイト（https://milpr.com/）・ミリプロ非公式wiki（https://wikiwiki.jp/millipro10/）・Wikipedia。メンカラーはファン間の慣習色です。"
};

const DECO_SVG = {
  heart: '<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M50,88 C28,66 12,50 12,34 C12,22 21,12 32,12 C41,12 48,18 50,24 C52,18 59,12 68,12 C79,12 88,22 88,34 C88,50 72,66 50,88 Z"/></svg>',
  paw: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="currentColor"><ellipse cx="50" cy="66" rx="24" ry="20"/><ellipse cx="14" cy="30" rx="12" ry="15"/><ellipse cx="36" cy="18" rx="12" ry="15"/><ellipse cx="64" cy="18" rx="12" ry="15"/><ellipse cx="86" cy="30" rx="12" ry="15"/></g></svg>',
  note: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><path d="M37,79 L37,20 L83,8 L83,60"/><circle cx="23" cy="80" r="12"/><circle cx="70" cy="70" r="12"/></g></svg>',
  diamond: '<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M50,8 L86,50 L50,92 L14,50 Z"/></svg>',
  spade: '<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M48,6 C28,24 16,36 16,52 C16,63 24,70 34,70 C40,70 45,67 48,63 L48,72 L36,72 L30,88 L70,88 L64,72 L52,72 L52,63 C55,67 60,70 66,70 C76,70 84,63 84,52 C84,36 72,24 52,6 Z"/></svg>',
  horn: '<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M16,50 C8,32 16,14 34,8 C24,20 22,34 26,46 Z M84,50 C92,32 84,14 66,8 C76,20 78,34 74,46 Z"/></svg>',
  flame: '<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M50,4 C60,20 74,28 74,48 C74,63 63,72 50,72 C37,72 26,63 26,48 C26,28 40,20 50,4 Z"/></svg>',
  shell: '<svg viewBox="0 0 100 100" aria-hidden="true"><g><path fill="currentColor" d="M14,52 A36,36 0 0 1 86,52 Z"/><path d="M50,54 L20,54 M50,54 L28,46 M50,54 L50,44 M50,54 L72,46 M50,54 L80,54" stroke="#fff" stroke-width="5" stroke-linecap="round"/></g></svg>',
  wave: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-linecap="round"><path stroke-width="7" d="M4,54 C14,40 24,40 34,54 C44,68 54,68 64,54 C74,40 84,40 94,54"/><path stroke-width="5" opacity="0.7" d="M4,72 C14,58 24,58 34,72 C44,86 54,86 64,72 C74,58 84,58 94,72"/></g></svg>',
  jelly: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"><path d="M28,50 A22,22 0 0 1 72,50"/><path d="M31,52 C29,62 31,72 34,80 M41,52 C40,60 42,68 44,76 M50,52 C50,62 48,72 48,80 M59,52 C58,60 60,68 62,76 M69,52 C71,62 69,72 66,80"/></g></svg>',
  bub: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"><circle cx="50" cy="50" r="28"/><path d="M36,36 C40,30 46,27 52,26"/></g></svg>',
  hex: '<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M50,6 L88,28 L88,72 L50,94 L12,72 L12,28 Z"/></svg>',
  top: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="currentColor"><path d="M50,20 C40,20 32,28 32,38 C32,52 40,64 50,70 C60,64 68,52 68,38 C68,28 60,20 50,20 Z"/><path d="M50,6 L54,18 L46,18 Z"/><path d="M50,70 L58,86 C53,90 47,90 42,86 Z"/></g></svg>',
  drop: '<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M50,6 C60,20 74,28 74,46 C74,61 63,72 50,72 C37,72 26,61 26,46 C26,28 40,20 50,6 Z"/></svg>',
  cloud: '<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M70,66 A16,16 0 0 0 68,34 A22,22 0 0 0 26,30 A15,15 0 0 0 28,66 Z"/></svg>',
  pen: '<svg viewBox="0 0 100 100" aria-hidden="true"><g><circle cx="50" cy="52" r="32" fill="none" stroke="currentColor" stroke-width="7"/><circle cx="26" cy="34" r="7" fill="currentColor"/><circle cx="68" cy="28" r="7" fill="currentColor"/><circle cx="80" cy="54" r="7" fill="currentColor"/><circle cx="60" cy="76" r="7" fill="currentColor"/><circle cx="50" cy="58" r="8" fill="none" stroke="currentColor" stroke-width="7"/></g></svg>',
  rainbow: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-linecap="round"><path stroke-width="9" d="M10,86 A40,40 0 0 1 90,86"/><path stroke-width="7" opacity="0.8" d="M24,86 A26,26 0 0 1 76,86"/><path stroke-width="5" opacity="0.6" d="M36,86 A14,14 0 0 1 64,86"/></g></svg>',
  ring: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="7"><circle cx="50" cy="50" r="34"/><circle cx="50" cy="50" r="7"/></g></svg>'
};

/* グッズジャンル別の手描きSVGアイコン（画像掲載はしない方針 §9 のため、
   商品画像の代わりにジャンルを表す自作アイコンを表示する） */
const GOODS_ICON = {
  fullset: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 46h60v36H20z"/><path d="M14 32h72v14H14z"/><path d="M50 32v50"/><path d="M50 32c0-9-7-13-14-13-6 0-12 5-12 11 0 4 3 7 7 7 8 0 15-3 19-5z"/><path d="M50 32c0-9 7-13 14-13 6 0 12 5 12 11 0 4-3 7-7 7-8 0-15-3-19-5z"/></g></svg>',
  stand: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><rect x="30" y="14" width="40" height="54" rx="9"/><circle cx="50" cy="29" r="6" fill="currentColor" stroke="none"/><path d="M42 51a8 8 0 0 1 16 0"/><path d="M22 76h56v8H22z"/></g></svg>',
  necklace: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 24c8-7 20-10 34-4 14-6 26-3 34 4"/><path d="M16 24c5 10 8 18 10 24l22 34 22-34c2-6 5-14 10-24"/><circle cx="50" cy="80" r="5"/></g></svg>',
  keyholder: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="24" r="10"/><path d="M50 34v10"/><rect x="32" y="46" width="36" height="38" rx="10"/><path d="M40 56h20M40 66h14"/></g></svg>',
  card: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="20" width="68" height="60" rx="9"/><rect x="27" y="30" width="46" height="34" rx="5"/><circle cx="39" cy="41" r="5"/><path d="M29 60l12-11 9 9 8-7 13 11"/></g></svg>',
  badge: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="46" r="28"/><circle cx="50" cy="42" r="4" fill="currentColor" stroke="none"/><path d="M50 60v12"/><path d="M36 80h28"/></g></svg>',
  voice: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><path d="M24 56v-10a26 26 0 0 1 52 0v10"/><rect x="14" y="54" width="18" height="24" rx="9"/><rect x="68" y="54" width="18" height="24" rx="9"/></g></svg>',
  bottleholder: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><path d="M40 14h20v12h-7v8h-6v-8h-7z"/><path d="M34 42c0-9 7-14 16-14s16 5 16 14v28a16 16 0 0 1-32 0z"/><path d="M34 52h32M34 62h32"/></g></svg>',
  clearfile: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 20h56a6 6 0 0 1 6 6v48a6 6 0 0 1-6 6H22a6 6 0 0 1-6-6V26a6 6 0 0 1 6-6z"/><path d="M28 34h44M28 46h44M28 58h30"/></g></svg>',
  bodypillow: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="22" width="72" height="56" rx="24"/><path d="M14 40h72M14 60h72M36 22v8M64 22v8"/></g></svg>',
  sock: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><path d="M26 14h48v26c0 16-10 26-24 26s-24-10-24-26V26z"/><path d="M26 14h12v16M42 14h12v16M58 14h12v16"/><path d="M26 40h48M34 52h16"/></g></svg>'
};

const GOODS = [
  { name: "虹深°ぬふ 1周年記念グッズ フルセット", memberId: "nuhu", kind: "fullset", price: 19900, oldPrice: 20200, tag: "NEW", url: "https://shop.milpr.com/products/nufu_1st_anniversary_full" },
  { name: "虹深°ぬふ 1周年記念グッズ アクリルスタンド", memberId: "nuhu", kind: "stand", price: 1800, tag: "NEW", url: "https://shop.milpr.com/products/nufu_1st_anniversary_acrylicstand" },
  { name: "虹深°ぬふ 1周年記念 シチュエーションボイス", memberId: "nuhu", kind: "voice", price: 1000, tag: "NEW", url: "https://shop.milpr.com/products/nufu_1st_anniversary_voice" },
  { name: "ミリプロTCG「Million Production OFFICIAL CARD GAME vol.4」1パック", memberId: "", memberLabel: "ミリプロ全員", kind: "card", price: 600, tag: "NEW", url: "https://shop.milpr.com/products/milpr_tcg_vol4" },
  { name: "ミリプロTCG「Million Production OFFICIAL CARD GAME vol.4」11パックセット", memberId: "", memberLabel: "ミリプロ全員", kind: "card", price: 6000, tag: "NEW", url: "https://shop.milpr.com/products/milpr_tcg_vol4_11" },
  { name: "ミリプロ サマーコレクション 2026 プレミアムタレントセット", memberId: "", memberLabel: "ミリプロ全員", kind: "fullset", price: 23400, oldPrice: 23700, tag: "NEW", url: "https://shop.milpr.com/products/summer_2026_talentset_premium" },
  { name: "ミリプロ サマーコレクション 2026 オーロラアクリルスタンド", memberId: "", memberLabel: "ミリプロ全員", kind: "stand", price: 2200, tag: "NEW", url: "https://shop.milpr.com/products/summer_2026_aurora_acsta" },
  { name: "小廻こま 誕生日記念グッズ 2026 フルセット", memberId: "koma", kind: "fullset", price: 12300, tag: "NEW", url: "https://shop.milpr.com/products/koma_birthday2026_full" },
  { name: "小廻こま 誕生日記念グッズ 2026 ジオラマアクリルスタンド", memberId: "koma", kind: "stand", price: 3500, tag: "NEW", url: "https://shop.milpr.com/products/koma_birthday2026_diorama_acsta" },
  { name: "小廻こま 誕生日記念グッズ 2026 アクリルスタンド", memberId: "koma", kind: "stand", price: 1800, tag: "NEW", url: "https://shop.milpr.com/products/koma_birthday2026_acrylicstand" },
  { name: "あくび・でもんすぺーど 50万人記念グッズ フルセット", memberId: "akubi", kind: "fullset", price: 11500, tag: "NEW", url: "https://shop.milpr.com/products/akubi_50_full" },
  { name: "あくび・でもんすぺーど 50万人記念グッズ メタルチャームネックレス", memberId: "akubi", kind: "necklace", price: 5000, tag: "NEW", url: "https://shop.milpr.com/products/akubi_50_necklace" }
];


/* Milli Games のゲーム紹介（ホームの目立つ場所に表示） */
const GAME_FEATURE = [
  {
    tag: "Milli Games ピックアップ",
    game: "Milli Pulse",
    desc: "ミリプロの楽曲で遊べる無料のブラウザ音ゲー！音ノ乃のの「Princess Viral」・音ノ瀬らこ「ルミナス」・小廻こま「おきらくスーパースター」の3曲を収録。キーボードでもタップでも遊べるので、PC・スマホどちらの端末でもOK！この他にも様々なゲームを用意しています！",
    icon: "images/games/milli-pulse-rogo.png",
    url: "https://milli-games.onrender.com/games/music.html"
  },
  {
    tag: "Milli Games ピックアップ",
    game: "Milli Spectrum",
    desc: "ミリプロ好き度がわかる無料の診断ゲーム！10問の質問に答えると、あなたの9つの「ミリプロ力」パラメータを分析して診断結果を表示。結果画像の保存やX（Twitter）での共有にも対応しています。",
    icon: "images/games/milli-spectrum-rogo.png",
    url: "https://milli-games.onrender.com/games/diagnosis.html"
  }
];

const MEMBERS = [
  {
    id: "konomi",
    gen: "0期生・創設メンバー",
    name: "甘狼このみ",
    nameEn: "Amakami Konomi",
    color: "#5f97a4",
    subColor: "#d8ecf2",
    birthday: "02-14",
    debut: "2022-12-23",
    catch: "オオカミ人間の完全セルフ受肉VTuber。将来の夢は世界征服",
    fanName: "このっ子",
    fanMark: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="#5f97a4"><circle cx="5.8" cy="8.4" r="2"/><circle cx="11" cy="6.2" r="2.1"/><circle cx="16.2" cy="8.4" r="2"/><ellipse cx="12" cy="15.2" rx="4.6" ry="3.6"/><path d="M10 18.6h4l.9 2H9.1z"/></g></svg>',
    calls: "この / このち / このちゃん / このみん",
    profile: "オオカミ人間。身長150cm（耳・ヒール込み）、年齢2歳、MBTI: INFJ。ミリプロを2023年4月1日に設立した0期生。全メンバーのキャラクターデザイン・イラスト・Live2Dを手がける「ママ」的存在で、かなりの天然（本人は「養殖」と主張）。",
    skills: "イラスト・Live2D（完全セルフ受肉）。お酒に弱くすぐ幼女化する",
    phrases: ["えへへ", "えへへ言ったら即終了"],
    likes: "チョコ（ロイズの生チョコに詳しい）、博多とんこつ、お酒、二度寝、野球観戦、ゲーム、お絵描き",
    dislikes: "セロリ、ピクルス、歌うこと、海、高いところ、ホラー、絶叫マシン、ダンス、虫",
    achievements: [
      "2022/12/23 個人勢として初配信",
      "2023/4/1 ミリプロ設立（0期生）",
      "2025/1/25 3Dお披露目",
      "書籍2冊出版（完全セルフVTuberが教える！一瞬で“かわいい”が作れるイラスト術 等）",
      "2025/12/23 1st Digital Single「想わせ♡らぶりー」",
      "2026/5 チャンネル登録者80万人達成"
    ],
    tags: { stream: "あまかみらいぶ", clip: "このこれくしょん", art: "このみすけっち" },
    links: { yt: "https://www.youtube.com/@AmakamiKonomi", x: "https://x.com/AmakamiKonomi", tiktok: "https://www.tiktok.com/@amakamikonomi" },
    img: "images/talents/konomi.webp",
    logo: "images/rogo/konomirogo.webp",
    icon: "images/icon/konomi_profile.jpg",
    catchphrase: "あなたと「すき」を共有したい。あなたと「すき」で繋がりたい。",
    introVoice: "",
    fx: "choco",
    deco: {
      label: "paw",
      shape: "paw",
      floats: [
        { k: "heart", x: 8, y: 14, size: 74, dur: 13 },
        { k: "paw", x: 88, y: 10, size: 60, dur: 15 },
        { k: "paw", x: 12, y: 74, size: 54, dur: 17 },
        { k: "heart", x: 86, y: 82, size: 48, dur: 12 }
      ]
    },
    featuredVideos: ["MN_OKWKp0rI", "GNKxOwdJgC8", "qL5FGwPkoQ4"],
    voice: "assets/voices/甘狼このみ.mp3",
    intro: ""
  },
  {
    id: "nono",
    gen: "1期生",
    name: "音ノ乃のの",
    nameEn: "Nonono Nono",
    color: "#6d609d",
    subColor: "#e4dff4",
    birthday: "05-04",
    debut: "2023-06-03",
    catch: "ダイヤのように輝きたいっ！♢ VSinger",
    fanName: "ののの隊",
    fanMark: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="none" stroke="#6d609d" stroke-width="2.3" stroke-linecap="round"><path d="M5.5 12.6a6.5 6.5 0 0 1 13 0"/></g><g fill="#6d609d"><rect x="3.6" y="11.9" width="4" height="6" rx="2"/><rect x="16.4" y="11.9" width="4" height="6" rx="2"/><rect x="6.3" y="14.4" width="11.4" height="2.6" rx="1.3"/></g></svg>',
    calls: "ののちゃん / ののち",
    profile: "VSinger。身長149cm、年齢20歳（ミリプロ内最年少）、MBTI: ENFP。路上ライブの録音がきっかけでスカウトされて加入。しっかり者でPONすることが滅多にない。兄4人の末っ子のブラコン。",
    skills: "歌うこと（メジャーデビュー実績）。ピアノ・ギター・ドラムも嗜む",
    phrases: ["シリアルなシーン", "ちくわ代表"],
    likes: "ちくわ（主食・最大1日8袋）、もずく、梅干し、するめいか、ブルーベリー、楽器、インテリア・お洋服集め",
    dislikes: "セロリ・パセリ等「雑草っぽいもの」",
    achievements: [
      "2023/4/1 short動画投稿開始",
      "2023/6/3 初配信（1期生デビュー）",
      "2024/5 ユニバーサルミュージックからメジャーデビュー",
      "オリジナル曲「約束」「アルテマ」「ののの音々ネ！」「ロクデナシテンシ」「HYPE SEEKER」"
    ],
    tags: { stream: "ののん家", clip: "ののちょき", art: "のののーと" },
    links: { yt: "https://www.youtube.com/@_nonono_nono", x: "https://x.com/_nonono_nono", tiktok: "" },
    img: "images/talents/nono.webp",
    logo: "images/rogo/nonorogo.webp",
    icon: "images/icon/nono_profile.jpg",
    catchphrase: "ダイヤのように輝きたいっ！",
    introVoice: "",
    fx: "note",
    deco: {
      label: "note",
      floats: [
        { k: "note", x: 10, y: 16, size: 70, dur: 13 },
        { k: "diamond", x: 86, y: 10, size: 52, dur: 16 },
        { k: "note", x: 13, y: 78, size: 46, dur: 14 },
        { k: "note", x: 72, y: 85, size: 58, dur: 12 }
      ]
    },
    featuredVideos: ["9jF60mq9Qdk", "lBUrJcR474U", "1HdUN5AP5BY"],
    voice: "assets/voices/音ノ乃のの.mp3",
    intro: ""
  },
  {
    id: "akubi",
    gen: "2期生",
    name: "あくび・でもんすぺーど",
    nameEn: "Akubi Demonspade",
    color: "#5c1125",
    subColor: "#f2dde3",
    birthday: "10-31",
    debut: "2024-01-19",
    catch: "貴様ら、跪け！あくび・でもんすぺーど様だ！",
    fanName: "びぃの一族",
    fanMark: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="#5c1125"><path d="M12 4.2c-2.3 2.3-5.2 5.1-7 6.7-1 .9-.7 2.7.7 3.1.7.2 1.4 0 2-.5-.1 2-1 3.6-2.6 4.8l.7 1.2h12.4l.7-1.2c-1.6-1.2-2.5-2.8-2.6-4.8.6.5 1.3.7 2 .5 1.4-.4 1.7-2.2.7-3.1-1.8-1.6-4.7-4.4-7-6.7z"/><path d="M8 2.4c-.4-1-1.9-.7-1.8.4l.2 3.1c1-.3 1.5-1.5 1.6-3.5z"/><path d="M16 2.4c.4-1 1.9-.7 1.8.4l-.2 3.1c-1-.3-1.5-1.5-1.6-3.5z"/></g></svg>',
    calls: "あくび様 / あく様 / びー様",
    profile: "悪魔（ツノあり）。身長140cm、年齢2000歳くらい、MBTI: ISTP。同事務所初のオーディション合格者（倍率500倍）。多声類で歌が非常に上手く、MIXも自分でこなすマルチクリエイティブ。クソガキだが根は真面目。",
    skills: "声を変えて歌う（多声類）、歌・MIX、寝る",
    phrases: ["貴様ら、跪け！あくび・でもんすぺーど様だ！", "オタク"],
    likes: "ミニトマト、イチゴ、細くてカリカリのポテト、おさつどき、オタク、歌う、MIX、寝る、ワンピース（人生の教科書）",
    dislikes: "ピーマン、とうもろこし、あんこ、マジレス、急ぐこと、計画通りに動くこと、ネタバレ、ホラー、FPSゲーム（画面酔い）",
    achievements: [
      "2023/10/31 short動画初投稿",
      "2024/1/19 初配信（2期生デビュー・初のオーディション合格者）",
      "Xで万バズ多数（サブ垢で10万超いいね）",
      "2026/5/9 1st 3Dライブ「Million Story」に映像出演"
    ],
    tags: { stream: "生あくび", clip: "録あくび", art: "でもんすぺ絵ど" },
    links: { yt: "https://www.youtube.com/@Akubi.demonspade", x: "https://x.com/AkubiU_Uzz", tiktok: "https://www.tiktok.com/@akubiu_uzzzz" },
    img: "images/talents/akubi.webp",
    logo: "images/rogo/akubirogo.webp",
    icon: "images/icon/akubi_profile.jpg",
    catchphrase: "貴様ら、跪け！あくび・でもんすぺーど様だ！",
    introVoice: "",
    fx: "demon",
    deco: {
      label: "spade",
      floats: [
        { k: "spade", x: 9, y: 15, size: 66, dur: 14 },
        { k: "horn", x: 87, y: 12, size: 58, dur: 15 },
        { k: "spade", x: 13, y: 76, size: 50, dur: 13 },
        { k: "flame", x: 78, y: 83, size: 44, dur: 12 }
      ]
    },
    featuredVideos: ["PSdEXx6yKoI", "YNe2YuSqncc", "kpyynMWu-o0"],
    voice: "assets/voices/あくび・でもんすぺーど.mp3",
    intro: ""
  },
  {
    id: "koma",
    gen: "3期生",
    name: "小廻こま",
    nameEn: "Komawari Koma",
    color: "#d09559",
    subColor: "#fff0dd",
    birthday: "08-01",
    debut: "2025-03-22",
    catch: "みんなの一コマ、こまにちょーだい！",
    fanName: "こまめいと",
    fanMark: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="#d09559"><path d="M2.2 13.2l19.6-.2L20.3 11H3.7z"/><rect x="3.4" y="10.6" width="17.2" height="1.6" rx=".5"/><rect x="4.6" y="4.6" width="14.8" height="2.1" rx=".6"/><rect x="6.8" y="12.4" width="1.7" height="6.4" rx=".4"/><rect x="15.5" y="12.4" width="1.7" height="6.4" rx=".4"/><rect x="6.7" y="18.4" width="10.6" height="1.1" rx=".3"/></g></svg>',
    calls: "こま / 小廻",
    profile: "あそび大好きな巫女風VTuber。身長148cm、MBTI: ESFJ-T。とにかく声がでかい（コンプレッサー込みでも10%で音割れ）。社会人経験のある常識人・苦労人で、普段は人見知りだが歌うと変わる。",
    skills: "いろんな声と大声を出すこと、歌（歌い始めると圧巻）",
    phrases: ["みんなの一コマ、こまにちょーだい！", "こまの芸をとくとご覧あれ！"],
    likes: "お酒（酒豪・ラッパ飲みの理由は「洗い物がめんどくさいから」）、果物、卵料理、ohayo乳業のブリュレアイス、歌う、動画編集",
    dislikes: "生クリーム、きのこ、カレーのにんじん、バター、豆、球技、この世のすべての虫、だるい・めんどくさいと言われること",
    achievements: [
      "2024/12/15 活動開始（ミリちゃんのスカウトで加入）",
      "2025/3/22 初配信（3期生デビュー）",
      "2025/10 「MadTownGTA」で話題に。当月の登録者増加ランキング全VTuber中1位",
      "最高同接8000超「0.7釈迦」の異名",
      "ユニット: ゆまの酒盛り（ゆらぎゆら）・こまつくりーず（雨夜リズ・眠雲ツクリ）"
    ],
    tags: { stream: "こまにお立合い", clip: "こま斬り", art: "こまのえま" },
    links: { yt: "https://www.youtube.com/@komawarikoma", x: "https://x.com/komawarikoma", tiktok: "https://www.tiktok.com/@komawarikoma" },
    img: "images/talents/koma.webp",
    logo: "images/rogo/komarogo.webp",
    icon: "images/icon/koma_profile.jpg",
    catchphrase: "みんなの一コマ、こまにちょーだい！",
    introVoice: "",
    fx: "koma",
    deco: {
      label: "hex",
      floats: [
        { k: "hex", x: 9, y: 15, size: 58, dur: 13 },
        { k: "hex", x: 88, y: 12, size: 54, dur: 15 },
        { k: "top", x: 12, y: 78, size: 44, dur: 13 },
        { k: "top", x: 82, y: 82, size: 52, dur: 12 }
      ]
    },
    featuredVideos: ["EoCUHLE9GTc", "ssvo2Umq0sc", "1UdnoJ6qgPs"],
    voice: "assets/voices/小廻こま.mp3",
    intro: ""
  },
  {
    id: "raco",
    gen: "ミリプロNOVA",
    name: "音ノ瀬らこ",
    nameEn: "Otonose Raco",
    color: "#cba60b",
    subColor: "#fdf3cf",
    birthday: "04-08",
    debut: "2024-06-08",
    catch: "君に元気をおすそ分け！ DJラッコ",
    fanName: "らっ子",
    fanMark: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="#cba60b"><ellipse cx="12" cy="14.4" rx="6" ry="5.2"/><circle cx="8" cy="10.6" r="1.7"/><circle cx="16" cy="10.6" r="1.7"/><path d="M10.8 13.2h2.4l-.5 1.9h-1.4z" fill="#fdf3cf"/></g><g fill="none" stroke="#cba60b" stroke-width="1.1" stroke-linecap="round"><path d="M4.6 15.2h3M16.4 15.2h3M4.8 12l2.9.7M19.2 12l-2.9.7"/></g></svg>',
    calls: "らこち / らこちゃん",
    profile: "DJラッコVTuber。身長151cm（アホ毛込み）、年齢20ピー歳、MBTI: ESTP-T。キャラデザ・イラストは本人（セルフデザイン）、Live2Dは甘狼このみ。ミリプロタレントかつかなりのミリプロオタク。よく5歳児・小学生とイジられる。",
    skills: "歌（高音が綺麗、超高音でもがなりを効かせられる）、お絵描き",
    phrases: ["お腹空いた～", "はくばのおうじさま（白長須鯨の読み間違い）"],
    likes: "チョコミントアイス、クッキー＆クリーム、たらこパスタ、からあげ、カルボナーラ、歌うこと、ボカロ、ミリプロ、動物を見ること",
    dislikes: "フルーツ全般・トマト・ナス、早起き、虫、機械、マルチタスク、急かされること",
    achievements: [
      "2023/12/13 short動画投稿で活動開始（研究生）",
      "2024/3 ゆらぎゆらと共に正式加入（登録者2万人達成）",
      "2024/6/8 初配信",
      "2026/6/8 2周年に1st Single「ルミナス」をMillion RECORDSからリリース"
    ],
    tags: { stream: "らこといっしょ", clip: "らこの貝殻", art: "らこあーと" },
    links: { yt: "https://www.youtube.com/@OtonoseRaco", x: "https://x.com/OtonoseRaco", tiktok: "" },
    img: "images/talents/rako.webp",
    logo: "images/rogo/rakorogo.webp",
    icon: "images/icon/rako_profile.jpg",
    catchphrase: "君に元気をおすそ分け！",
    introVoice: "",
    fx: "sea",
    deco: {
      label: "shell",
      floats: [
        { k: "shell", x: 8, y: 14, size: 64, dur: 13 },
        { k: "shell", x: 88, y: 10, size: 56, dur: 15 },
        { k: "shell", x: 12, y: 76, size: 44, dur: 12 },
        { k: "wave", x: 80, y: 84, size: 58, dur: 12 }
      ]
    },
    featuredVideos: ["IAwrziSiqVI", "MklYo2c3QmM", "GgIbQ5mHAQk"],
    voice: "assets/voices/音ノ瀬らこ.mp3",
    intro: ""
  },
  {
    id: "yura",
    gen: "ミリプロNOVA",
    name: "ゆらぎゆら",
    nameEn: "Yuragi Yura",
    color: "#7f96bf",
    subColor: "#e7effb",
    birthday: "11-03",
    debut: "2024-06-09",
    catch: "あなたに安らぎを届けたい。ミズクラゲ",
    fanName: "ゆらふぃら",
    fanMark: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="#7f96bf"><path d="M14.9 3.1a8.5 8.5 0 1 0 6.6 9.2 6.9 6.9 0 0 1-6.6-9.2z"/><circle cx="5.2" cy="17.8" r="1.8"/><circle cx="9.4" cy="21.2" r="1.1"/><circle cx="19.8" cy="15.8" r="1.4"/></g></svg>',
    calls: "ゆらち / ゆらねぇ",
    profile: "ミズクラゲVTuber。沖縄出身、身長155cm、MBTI: ENFP-A。ミリプロのせくすぃー担当＆お姉様枠（かつては清楚枠）。配信頻度はミリプロ内随一でゲーム配信多め。バンド経験あり（ベース・ボーカル）。",
    skills: "歌（バラード得意）、絵（男性を描くのが得意）、ASMR",
    phrases: ["せくすぃー", "3時間は1時間", "腐女子は誰だって心にタマ飼ってんだよ"],
    likes: "お酒（特に梅酒）、マカロン、たまごボーロ、タコス、ハンバーガー、絵を描くこと、歌、配信、推し活",
    dislikes: "辛いもの・辛いお酒、ホラーゲーム、甘えること、虫",
    achievements: [
      "2023/12/23 short投稿で活動開始（研究生）",
      "2024/3 音ノ瀬らこと共に正式加入",
      "2024/6/9 初配信",
      "「せくすぃー」がミリプロ流行語大賞2025に選出",
      "「3時間は1時間」が公式グッズ化",
      "ユニット: ゆまの酒盛り（小廻こま）・ゆららこ（音ノ瀬らこ）"
    ],
    tags: { stream: "ゆらのやすらぎ", clip: "ゆらあつめ", art: "ゆらぎあーと" },
    links: { yt: "https://www.youtube.com/@_YuraYuragi", x: "https://x.com/_YuraYuragi", tiktok: "" },
    img: "images/talents/yura.webp",
    logo: "images/rogo/yurarogo.webp",
    icon: "images/icon/yura_profile.jpg",
    catchphrase: "あなたに安らぎを届けたい",
    introVoice: "",
    fx: "deep",
    deco: {
      label: "bub",
      shape: "bub",
      floats: [
        { k: "jelly", x: 88, y: 12, size: 72, dur: 14 },
        { k: "bub", x: 8, y: 18, size: 56, dur: 13 },
        { k: "bub", x: 15, y: 80, size: 40, dur: 12 },
        { k: "bub", x: 78, y: 78, size: 48, dur: 16 }
      ]
    },
    featuredVideos: ["zkyfZ9Zg2bQ", "73hzg0X6jWk", "LqdUhTK2sCY"],
    voice: "assets/voices/ゆらぎゆら.mp3",
    intro: ""
  },
  {
    id: "nuhu",
    gen: "ミリプロNOVA",
    name: "虹深°ぬふ",
    nameEn: "Nijipuka Nuhu",
    color: "#c6989a",
    subColor: "#fdecec",
    birthday: "11-30",
    debut: "2025-08-08",
    catch: "ぬふのごはんは褒めことば！",
    fanName: "ぷかぬファミリー",
    fanMark: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="#c6989a"><rect x="10.4" y="14.4" width="3.2" height="6.2" rx="1"/><path d="M10.4 18.4L12 21.6l1.6-3.2z"/></g><g fill="none" stroke="#c6989a" stroke-width="1.8" stroke-linecap="round"><path d="M6.2 13.2a5.8 5.8 0 0 1 11.6 0"/><path d="M3.8 13.2a8.2 8.2 0 0 1 16.4 0"/></g></svg>',
    calls: "ぬふ / ぬふちゃん / ぬふち",
    profile: "めんだこ×人間のハーフのイラストレーターVTuber。福岡出身、身長150cm、年齢（永遠の）17歳。完全セルフ受肉（イラスト・Live2Dとも本人、Live2Dは独学）。表情によって髪色が変わる。部屋の汚さはミリプロ内ぶっちぎり。",
    skills: "イラスト・アニメーション（ティザーPVも自作）。衣装制作も担当",
    phrases: ["オ↑レ↓", "ｴｰﾔｯﾀ‐、ｳﾚｼｰ", "体が清潔じゃなくても心は清楚だから"],
    likes: "ハンバーグ、動画編集（アニメーション）、イラスト制作、ご飯を食べること、褒められること",
    dislikes: "トマト、片付け、お風呂、勉強",
    achievements: [
      "個人勢イラストレーターとして活動",
      "設立当初の誘いを一度断るも自ら加入を熱望",
      "2025/7 ミリプロNOVA加入発表、8/8初配信",
      "NEWTOWN（GTA配信）で「アトリエぬふ」をオープンし話題に",
      "登録者30万人記念グッズ発売"
    ],
    tags: { stream: "ぬふライブ", clip: "にじぷかぬふ", art: "にじぷかーと" },
    links: { yt: "https://www.youtube.com/@NijipukaNuhu", x: "https://x.com/nijipukanuhu", tiktok: "" },
    img: "images/talents/nuhu.webp",
    logo: "images/rogo/nuhurogo.webp",
    icon: "images/icon/nuhu_profile.jpg",
    catchphrase: "ぬふのごはんは褒めことば！",
    introVoice: "",
    fx: "paint",
    deco: {
      label: "pen",
      shape: "wheel",
      floats: [
        { k: "pen", x: 9, y: 16, size: 58, dur: 13 },
        { k: "pen", x: 86, y: 14, size: 54, dur: 14 },
        { k: "pen", x: 14, y: 76, size: 44, dur: 13 },
        { k: "rainbow", x: 80, y: 86, size: 56, dur: 13 }
      ]
    },
    featuredVideos: ["FJO8obFEvIw", "9yClH5ihXXU", "7klVnwL9gH4"],
    voice: "assets/voices/虹深°ぬふ.mp3",
    intro: ""
  },
  {
    id: "tsukuri",
    gen: "ミリプロUNI",
    name: "眠雲ツクリ",
    nameEn: "Nemukumo Tsukuri",
    color: "#a8a6ab",
    subColor: "#f0eff6",
    birthday: "09-03",
    debut: "2025-05-17",
    catch: "君との思い出つくってあげる。",
    fanName: "つくらうど",
    fanMark: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="#a8a6ab"><path d="M7.2 17.6a4.2 4.2 0 0 1-.8-8.3 5.4 5.4 0 0 1 10.4.4c1.5.3 2.5 1.6 2.5 3.2 0 1.9-1.4 3.4-3.3 3.5-.9 1.2-2.4 1.9-4 1.9-1.2 0-2.4-.3-3.3-1z"/><path d="M17.2 14.8l-3.6-3.6 1.2-1.1a3.2 3.2 0 0 0-3.7-4.7c.5 1 .4 2-.4 2.9l-5.2 5.2a1.1 1.1 0 0 0 1.5 1.5l3.4-3.4 3.6 3.6a1.1 1.1 0 0 0 1.5-1.5z"/></g></svg>',
    calls: "ツクリ / 眠ちゃん",
    profile: "マルチクリエイティブVTuber。身長160cm（厚底なし156cm）、MBTI: INTP。作曲・作詞・歌唱・MIX・動画編集・イラスト・デザインを全てこなす。真面目で落ち着いたツッコミ役。バンド経験あり。illustrator: りいちゅ / Live2D: 猫科純。",
    skills: "作曲・作詞・歌唱・MIX・動画編集・イラスト・デザイン。料理も得意",
    phrases: ["フ↑フ↓", "マジでツクるぞ？"],
    likes: "冷やし中華、チーズ、ミルクティー、油そば、マカロン、歌、ホラゲー、長時間睡眠",
    dislikes: "刺激物・辛いもの、梅、大根、大葉、水泳、ダンス",
    achievements: [
      "2025/5/17 初配信（雨夜リズと共にミリプロUNIとしてデビュー）",
      "ミリプロ抜き打ちテスト2位（唯二の留年回避者）",
      "ミリプロタレントのモノマネが得意",
      "ユニット: こまつくりーず（小廻こま・雨夜リズ）"
    ],
    tags: { stream: "ツクリーム", clip: "ツクリップ", art: "ツクリーンショット" },
    links: { yt: "https://www.youtube.com/@NemukumoTsukuri", x: "https://x.com/nemukumotsukuri", tiktok: "" },
    img: "images/talents/tukuri.webp",
    logo: "images/rogo/tukurirogo.webp",
    icon: "images/icon/tukuri_profile.jpg",
    catchphrase: "君との思い出つくってあげる",
    introVoice: "",
    fx: "sleep",
    deco: {
      label: "cloud",
      shape: "zzz",
      floats: [
        { k: "cloud", x: 88, y: 12, size: 76, dur: 14 },
        { k: "cloud", x: 10, y: 70, size: 56, dur: 15 },
        { k: "cloud", x: 78, y: 80, size: 46, dur: 13 }
      ]
    },
    featuredVideos: ["2UHLDOqb194", "UHf4Szx02iM", "Hs-gxOofX1s"],
    voice: "assets/voices/眠雲ツクリ.mp3",
    intro: ""
  },
  {
    id: "liz",
    gen: "ミリプロUNI",
    name: "雨夜リズ",
    nameEn: "Amayo Liz",
    color: "#617a7a",
    subColor: "#e4eeec",
    birthday: "03-19",
    debut: "2025-05-18",
    catch: "迷い込んで、雨宿り。雨女VTuber",
    fanName: "リズナイト",
    fanMark: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="none" stroke="#617a7a" stroke-width="1.9" stroke-linecap="round"><path d="M3.4 12.6a8.6 8.6 0 0 1 17.2 0z"/><path d="M12 12.8v6.2a2 2 0 0 0 4 0"/><path d="M12 3.6v1.4"/></g></svg>',
    calls: "リズ / 雨夜さん / まよちゃん",
    profile: "雨女VTuber。身長161cm、MBTI: INFP-T。「ミリプロの清楚かつロリ枠」を自称するが、PON（やらかし）が多いのが名物。自炊派で料理上手。相棒はかえるの「けろまる」（けろまるの片思い）。illustrator: りいちゅ / Live2D: 猫科純。",
    skills: "歌うこと、絵を描くこと、料理、モノマネ",
    phrases: ["やらかしの女王"],
    likes: "スイーツ全般、味の薄いもの、K-POP、歌い手、ボカロ",
    dislikes: "マルチタスク、早食い（食べ物の苦手はほぼなし）",
    achievements: [
      "2025/5/18 初配信（眠雲ツクリと共にミリプロUNIとしてデビュー）",
      "「ミリプロの清楚かつロリ枠」を自称",
      "PON伝説多数（炊飯器の米1週間放置・社用Discord晒し・アーカイブ2時間→45秒 等）",
      "ユニット: こまつくりーず（小廻こま・眠雲ツクリ）"
    ],
    tags: { stream: "リズと雨宿り", clip: "切り取リズ", art: "てるてるぼう図" },
    links: { yt: "https://www.youtube.com/@Amayo_liz", x: "https://x.com/amayoliz_", tiktok: "" },
    img: "images/talents/rizu.webp",
    logo: "images/rogo/rizurogo.webp",
    icon: "images/icon/rizu_profile.jpg",
    catchphrase: "迷い込んで、雨宿り。",
    introVoice: "",
    fx: "rain",
    deco: {
      label: "drop",
      shape: "rain",
      floats: [
        { k: "drop", x: 8, y: 14, size: 54, dur: 13 },
        { k: "drop", x: 86, y: 10, size: 64, dur: 15 },
        { k: "drop", x: 14, y: 78, size: 42, dur: 13 }
      ]
    },
    featuredVideos: ["IS6J88gLpAw", "gA2vNb2wDOo", "g5dmsdj-btY"],
    voice: "assets/voices/雨夜リズ.mp3",
    intro: ""
  },
  {
    id: "rei",
    gen: "ミリプロUNI",
    name: "夕霧レイ",
    nameEn: "Yugiri Ray",
    color: "#7e97b1",
    subColor: "#e8f0fa",
    birthday: "01-30",
    debut: "2026-07-11",
    catch: "霧に紛れて、作戦開始。霧のスナイパー",
    fanName: "オペレイター",
    fanMark: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="#7e97b1"><circle cx="8.4" cy="12" r="4.1"/><circle cx="15.6" cy="12" r="4.1"/><rect x="9.2" y="10.4" width="5.6" height="3.2" rx="1.6"/></g><g fill="none" stroke="#7e97b1" stroke-width="1.7" stroke-linecap="round"><path d="M4.3 11.4l-.6-1.7a2.6 2.6 0 0 1 2.7-3.3"/><path d="M19.7 11.4l.6-1.7a2.6 2.6 0 0 0-2.7-3.3"/></g><g fill="#fff" opacity=".8"><circle cx="6.7" cy="10.4" r="1.1"/><circle cx="13.9" cy="10.6" r="1.1"/></g></svg>',
    calls: "レイちゃん / レイぴょん（好きに呼んでOK）",
    profile: "「霧のスナイパー」VTuber。身長155cm、MBTI: INFP。元伝説のスナイパーで、世の中のものは大体撃ち抜いたので今度は人間の心を撃ち抜きに来た。2026年7月11日デビューの新人。illustrator: 巻羊 / Live2D: rariemonn。",
    skills: "ごはんとおかずをぴったり同時に食べ切ること",
    phrases: ["ターゲット、ロックオン"],
    likes: "お寿司、辛い食べ物、マック、邦ロック、アイドルソング、洋楽、ボカロ、VALORANT、マイクラ、APEX、ポケモン",
    dislikes: "朝（毎日5度寝くらい）、虫、夏、ラ行（発音ネタ）",
    achievements: [
      "2026/5/3 X初投稿",
      "2026/5/9 「Million Story」でティザーPV公開",
      "2026/7/11 初配信（配信前に登録者6万人、当日7万人突破）",
      "初配信同日に「怪獣の花唄/Vaundy」カバー公開"
    ],
    tags: { stream: "レイ作戦中", clip: "切り取レイ", art: "描いてくレイ" },
    links: { yt: "https://www.youtube.com/@yugiriray", x: "https://x.com/YugiriRay", tiktok: "" },
    img: "images/talents/rei.webp",
    logo: "images/rogo/reirogo.webp",
    icon: "images/icon/rei_profile.jpg",
    catchphrase: "霧に紛れて、作戦開始",
    introVoice: "",
    fx: "lockon",
    deco: {
      label: "ring",
      shape: "cross",
      floats: [
        { k: "ring", x: 9, y: 15, size: 64, dur: 13 },
        { k: "ring", x: 86, y: 12, size: 56, dur: 15 },
        { k: "ring", x: 12, y: 78, size: 44, dur: 13 }
      ]
    },
    featuredVideos: ["pb4bJ6x8oSg", "rvXcbRifIYM", "cphW85uNiuI"],
    voice: "assets/voices/夕霧レイ.mp3",
    intro: ""
  },
  {
    id: "milchan",
    gen: "事務所スタッフ・マスコット",
    name: "ミリちゃん",
    nameEn: "",
    color: "#74a5ae",
    subColor: "#e6f4f7",
    birthday: "",
    debut: "2023-04-01",
    catch: "謎のアザラシ。ミリプロ創設者＆マスコット",
    fanName: "",
    fanMark: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="#74a5ae"><ellipse cx="12" cy="14.6" rx="6.4" ry="5.2"/><circle cx="8.4" cy="10.8" r="1.6"/><circle cx="15.6" cy="10.8" r="1.6"/><path d="M10.8 13.6h2.4l-.5 1.8h-1.4z" fill="#e6f4f7"/></g><g fill="none" stroke="#74a5ae" stroke-width="1.1" stroke-linecap="round"><path d="M5 16.2h3M16 16.2h3"/></g></svg>',
    calls: "ミリちゃん",
    profile: "謎のアザラシ。ミリプロの創設者＆マスコットキャラクター。タレントではなくスタッフで、公式チャンネル（@Mil_Pro）や全体企画に登場。ミリプロのスカウト役としても有名（音ノ乃のの・小廻こまをスカウトした）。",
    skills: "スカウト・事務所の顔",
    phrases: [],
    likes: "",
    dislikes: "",
    achievements: [
      "2023/4/1 ミリプロ設立と同時に活動開始",
      "音ノ乃のの・小廻こまをスカウト"
    ],
    tags: { stream: "", clip: "", art: "" },
    links: { yt: "https://www.youtube.com/@Mil_Pro", x: "https://x.com/Mil_Staff_", tiktok: "" },
    img: "images/talents/milli%20chan.JPEG",
    icon: "images/icon/milli%20chan_profile.JPEG",
    catchphrase: "進捗どうですか？",
    introVoice: "",
    featuredVideos: ["hMl1U4Mu3kg", "7exy16BEnHY", "g5Y9wMxEwKw"],
    voice: "",
    intro: ""
  }
];

const COUNTDOWN = [
  { id: "milpro-presents", label: "ミリプロプレゼンツ ～超重大発表配信～", date: "2026-08-16T21:00:00", note: "ミリ創作コンテスト結果発表＆重大告知！", url: "https://youtu.be/4lba9sduOzI", featured: true },
  { id: "koma-birthday", label: "小廻こま 誕生日", date: "2026-08-01T00:00:00", note: "こまめいと、お祝いだ！", url: "koma.html" },
  { id: "nuhu-anniv", label: "虹深°ぬふ デビュー1周年", date: "2026-08-08T00:00:00", note: "ぷかぬファミリー、お祝いだ！", url: "nuhu.html" },
  { id: "resort", label: "ミリプロリゾート", date: "2026-08-29T10:00:00", note: "秋葉原UDXにて開催", url: "https://milpr.com/news/milpr_resort" },
  { id: "tsukuri-birthday", label: "眠雲ツクリ 誕生日", date: "2026-09-03T00:00:00", note: "つくらうど、お祝いだ！", url: "tsukuri.html" },
  { id: "akubi-birthday", label: "あくび・でもんすぺーど 誕生日", date: "2026-10-31T00:00:00", note: "びぃの一族、お祝いだ！", url: "akubi.html" },
  { id: "yura-birthday", label: "ゆらぎゆら 誕生日", date: "2026-11-03T00:00:00", note: "ゆらふぃら、お祝いだ！", url: "yura.html" },
  { id: "nuhu-birthday", label: "虹深°ぬふ 誕生日", date: "2026-11-30T00:00:00", note: "ぷかぬファミリー、お祝いだ！", url: "nuhu.html" }
];

const NEWS = [
  {
    date: "2026-08-29",
    tag: "イベント",
    title: "ミリプロリゾート 開催",
    desc: "ミリプロサマー2026のリアルイベントが秋葉原UDXで開催されます。",
    url: "https://milpr.com/news/milpr_resort"
  },
  {
    date: "2026-08-14",
    tag: "コンテスト",
    title: "ミリ創作 ゲーム・インタラクティブ部門 募集締切",
    desc: "Webサイト・ファンサイトが対象の部門です。募集は2026年8月14日まで。",
    url: "https://milpr.com/sosaku"
  },
  {
    date: "2026-08-13",
    tag: "コラボ",
    title: "Risdom（リズダム）× ミリプロ コラボ開催決定！",
    desc: "ゲーム型英語学習アプリ「Risdom（リズダム）」とのコラボがスタート。コラボを記念して甘狼このみが登場します。",
    url: "https://milpr.com/news/konomi_Risdom"
  },
  {
    date: "2026-08-08",
    tag: "グッズ",
    title: "虹深°ぬふ 1周年記念グッズ 受注開始！",
    desc: "ぬふちゃん1周年を記念して、描き下ろしイラスト商品を含む全6点のグッズの受注がスタート。",
    url: "https://milpr.com/news/nufu_1st_anniversary"
  },
  {
    date: "2026-08-08",
    tag: "書籍",
    title: "『キャラが動き出すイラストの教科書』発売決定！",
    desc: "虹深°ぬふによるイラスト本の発売が決定しました。",
    url: "https://milpr.com/news/nuhubook1"
  },
{
    date: "2026-08-07",
    tag: "達成",
    title: "夕霧レイ チャンネル登録者数10万人突破！",
    desc: "デビューから約1か月での快挙。",
    url: "https://milpr.com/news/rei_100k"
  }
];

const LAUNCHERS = [
  { icon: "images/icon/Milli%20Unishare-icon.PNG", shape: { char: "U", grad: ["#00bec4", "#00878c"] }, name: "Milli Unishare", desc: "配信・動画の情報を共有するファンサービス", url: "https://milli-unishare.onrender.com/" },
  { icon: "images/icon/Millipro%20Chronicle-icon.jpeg", shape: { char: "C", grad: ["#f7cb0e", "#e6a700"] }, name: "Millipro Chronicle", desc: "ミリプロの歴史を記録するファン資料集（準備中）", url: "" },
  { icon: "images/icon/Milli%20Games-icon.png", shape: { char: "G", grad: ["#8575bf", "#5f4f9e"] }, name: "Milli Games", desc: "ミリプロ関連のファンゲーム集", url: "https://milli-games.onrender.com/index.html" }
];

const LINKS = [
  { name: "公式サイト", desc: "ミリプロ コーポレートサイト", url: "https://milpr.com/" },
  { name: "YouTube", desc: "ミリプロ公式チャンネル", url: "https://www.youtube.com/@Mil_Pro" },
  { name: "公式切り抜き", desc: "ミリプロ公式切り抜きチャンネル", url: "https://www.youtube.com/@mil_kiri" },
  { name: "X（旧Twitter）", desc: "ミリプロ公式X", url: "https://x.com/Mil_Pro_" },
  { name: "オンラインショップ", desc: "公式グッズショップ", url: "https://shop.milpr.com/" },
  { name: "二次創作ガイドライン", desc: "二次創作のルールを確認できます", url: "https://milpr.com/guideline" },
  { name: "ミリ創作", desc: "二次創作コンテスト特設ページ", url: "https://milpr.com/sosaku" }
];

const EVENTS = [
  { type: "event", date: "2026-08-11", title: "ミリプロサマー2026 夏曲歌枠リレー", desc: "総勢10名による夏曲歌枠リレー（各メンバーチャンネル）", url: "https://milpr.com/news/millipro_summer_2026" },
  { type: "event", date: "2026-08-16", title: "ミリプロ夏祭り in ナイトプール", desc: "ミリプロマイクラサーバーで開催（各メンバーチャンネル）", url: "https://milpr.com/news/millipro_summer_2026" },
  { type: "event", date: "2026-08-16", title: "ミリプロプレゼンツ 超重大発表配信", desc: "ミリ創作コンテスト結果発表＆重大告知（ミリプロ公式YouTube）", url: "https://youtu.be/4lba9sduOzI" },
  { type: "event", date: "2026-08-29", title: "ミリプロリゾート", desc: "秋葉原UDXギャラリーにて開催（POP UP展示＆グッズ販売）", url: "https://milpr.com/news/milpr_resort" },
  { type: "event", date: "2026-08-29", title: "ミリプロTCG サマーカップ 2026", desc: "ミリプロリゾート内で開催（ミリプロTCG初の公式大会）", url: "https://milpr.com/millipro_resort" },
  { type: "event", date: "2026-08-30", title: "ミリプロサマー2026 閉会式", desc: "公式YouTubeチャンネルにて", url: "https://milpr.com/news/millipro_summer_2026" },
  { type: "birthday", member: "koma", title: "小廻こま 誕生日", url: "koma.html" },
  { type: "birthday", member: "nono", title: "音ノ乃のの 誕生日", url: "nono.html" },
  { type: "birthday", member: "raco", title: "音ノ瀬らこ 誕生日", url: "raco.html" },
  { type: "birthday", member: "liz", title: "雨夜リズ 誕生日", url: "liz.html" },
  { type: "birthday", member: "konomi", title: "甘狼このみ 誕生日", url: "konomi.html" },
  { type: "birthday", member: "rei", title: "夕霧レイ 誕生日", url: "rei.html" },
  { type: "birthday", member: "tsukuri", title: "眠雲ツクリ 誕生日", url: "tsukuri.html" },
  { type: "birthday", member: "akubi", title: "あくび・でもんすぺーど 誕生日", url: "akubi.html" },
  { type: "birthday", member: "yura", title: "ゆらぎゆら 誕生日", url: "yura.html" },
  { type: "birthday", member: "nuhu", title: "虹深°ぬふ 誕生日", url: "nuhu.html" },
  { type: "anniversary", member: "konomi", title: "甘狼このみ デビュー記念日", url: "konomi.html" },
  { type: "anniversary", member: "nono", title: "音ノ乃のの デビュー記念日", url: "nono.html" },
  { type: "anniversary", member: "akubi", title: "あくび・でもんすぺーど デビュー記念日", url: "akubi.html" },
  { type: "anniversary", member: "koma", title: "小廻こま デビュー記念日", url: "koma.html" },
  { type: "anniversary", member: "raco", title: "音ノ瀬らこ デビュー記念日", url: "raco.html" },
  { type: "anniversary", member: "yura", title: "ゆらぎゆら デビュー記念日", url: "yura.html" },
  { type: "anniversary", member: "nuhu", title: "虹深°ぬふ デビュー記念日", url: "nuhu.html" },
  { type: "anniversary", member: "tsukuri", title: "眠雲ツクリ デビュー記念日", url: "tsukuri.html" },
  { type: "anniversary", member: "liz", title: "雨夜リズ デビュー記念日", url: "liz.html" },
  { type: "anniversary", member: "rei", title: "夕霧レイ デビュー記念日", url: "rei.html" },
  { type: "event", date: "2026-04-01", title: "ミリプロ設立3周年", desc: "2023年4月1日設立", url: "https://milpr.com/" }
];

const X_POSTS = [
  "https://x.com/Mil_Pro_/status/2086061757869805859",
  "https://x.com/Mil_Pro_/status/2085935896235499775",
  "https://x.com/Mil_Pro_/status/2078068096661627227"
];

const HISTORY = [
  { date: "2022/12/23", title: "甘狼このみ、個人勢として初配信" },
  { date: "2023/4/1", title: "ミリプロ設立（甘狼このみ・ミリちゃん）", desc: "「無数の」という意味のMillionには、無数の可能性を秘めたタレントが飛躍するサポートをしたいという想いが込められています" },
  { date: "2023/6/3", title: "音ノ乃のの デビュー（1期生）" },
  { date: "2024/1/19", title: "あくび・でもんすぺーど デビュー（2期生）", desc: "初のオーディション合格者（倍率500倍）" },
  { date: "2024/5", title: "音ノ乃のの、ユニバーサルミュージックからメジャーデビュー" },
  { date: "2024/6/8-9", title: "音ノ瀬らこ・ゆらぎゆら デビュー（ミリプロNOVA）", desc: "研究生から正式加入" },
  { date: "2025/3/22", title: "小廻こま デビュー（3期生）" },
  { date: "2025/5/17-18", title: "眠雲ツクリ・雨夜リズ デビュー（ミリプロUNI）", desc: "音楽特化型グループUNI始動" },
  { date: "2025/8/8", title: "虹深°ぬふ デビュー（ミリプロNOVA）" },
  { date: "2026/4/5", title: "自社音楽レーベル「Million RECORDS」設立" },
  { date: "2026/5/9", title: "1st 3Dライブ「Million Story」開催", desc: "Zepp Shinjukuにて。3D出演8名＋映像出演あくび" },
  { date: "2026/7/11", title: "夕霧レイ デビュー（ミリプロUNI）" },
  { date: "2026/7", title: "あくび・でもんすぺーど、チャンネル登録者数50万人突破" },
  { date: "2026/8/5", title: "夕霧レイ、チャンネル登録者数10万人突破", desc: "デビューから約1か月での突破" },
  { date: "2026/8/13", title: "英語学習アプリ「Risdom」とコラボ開始", desc: "甘狼このみが登場するゲーム型英語学習アプリ「Risdom（リズダム）」とのコラボ" }
];

const YOUTUBE = {
  dataUrl: "data/youtube.json",
  maxVideos: 10,
  maxStreams: 8
};

/* ミリプロ検定（quiz.html）10問。a: 正解の選択肢インデックス */
const QUIZ = [
  {
    q: "ミリプロが設立されたのはいつ？",
    opts: ["2022年12月23日", "2023年4月1日", "2024年1月19日"],
    a: 1,
    exp: "甘狼このみとミリちゃんの2名で2023年4月1日に設立。「無数の可能性」を意味するMillionが社名の由来です。"
  },
  {
    q: "音ノ乃ののが「主食」と語る食べ物は？",
    opts: ["たまごボーロ", "チョコミントアイス", "ちくわ"],
    a: 2,
    exp: "ちくわ！最大1日8袋食べることもあるそうです。「シリアルなシーン」など独特の語彙も有名です。"
  },
  {
    q: "あくび・でもんすぺーどが受けたオーディションの倍率は？",
    opts: ["50倍", "500倍", "1000倍"],
    a: 1,
    exp: "同事務所初のオーディション合格者で、倍率はなんと500倍。多声類の歌とMIXはすべてセルフです。"
  },
  {
    q: "小廻こまのファンネームは？",
    opts: ["こまめいと", "こまっ娘", "こまねえず"],
    a: 0,
    exp: "「こまめいと」。声はコンプレッサー込みでも10%で音割れするらしい…。"
  },
  {
    q: "音ノ瀬らこの身長は「アホ毛込み」で何cm？",
    opts: ["148cm", "151cm", "155cm"],
    a: 1,
    exp: "アホ毛込みで151cm。キャラデザ・イラストは本人のセルフデザイン、Live2Dは甘狼このみが担当しています。"
  },
  {
    q: "「3時間は1時間」が公式グッズ化されたのは誰？",
    opts: ["小廻こま", "ゆらぎゆら", "雨夜リズ"],
    a: 1,
    exp: "ゆらぎゆら。配信中に発言した「3時間は1時間」があまりに有名になり公式グッズ化されました。「せくすぃー」はミリプロ流行語大賞2025に選出。"
  },
  {
    q: "虹深°ぬふの出身地はどこ？",
    opts: ["沖縄", "札幌", "福岡"],
    a: 2,
    exp: "福岡出身のめんだこ×人間ハーフ。イラスト・Live2Dとも独学の完全セルフ受肉です。"
  },
  {
    q: "ミリプロ抜き打ちテストで2位を取り「唯二の留年回避者」と言われたのは？",
    opts: ["眠雲ツクリ", "音ノ乃のの", "夕霧レイ"],
    a: 0,
    exp: "眠雲ツクリ。作曲・作詞・歌唱・MIX・動画編集・イラスト・デザインまでこなすマルチクリエイティブです。"
  },
  {
    q: "雨夜リズの相棒であるかえるの名前は？",
    opts: ["けろたん", "けろまる", "ケロちゃん"],
    a: 1,
    exp: "「けろまる」。ちなみにけろまるの雨夜リズへの想いは片思いだそうです。"
  },
  {
    q: "夕霧レイの初配信日はいつ？",
    opts: ["2026年5月9日", "2026年6月8日", "2026年7月11日"],
    a: 2,
    exp: "2026年7月11日。配信前は登録者6万人、当日には7万人を突破したミリプロUNIの新人スナイパーです。"
  }
];
