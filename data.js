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
  ring: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="7"><circle cx="50" cy="50" r="34"/><circle cx="50" cy="50" r="7"/></g></svg>',
  ichigo: '<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M50,90 C30,72 14,58 14,40 C14,26 24,16 36,16 C42,16 47,19 50,25 C53,19 58,16 64,16 C76,16 86,26 86,40 C86,58 70,72 50,90 Z"/><g fill="#6fbf73"><path d="M50,33 C45,25 37,20 28,21 C37,25 43,30 47,36 C45,27 41,20 37,13 C41,20 47,27 50,33 Z"/><path d="M50,33 C55,25 63,20 72,21 C63,25 57,30 53,36 C55,27 59,20 63,13 C59,20 53,27 50,33 Z"/><path d="M46,28 C46,20 48,13 50,8 C52,13 54,20 54,28 C51,32 49,32 46,28 Z"/></g><g fill="#ffe14d"><ellipse cx="30" cy="44" rx="2.6" ry="3.6"/><ellipse cx="50" cy="38" rx="2.6" ry="3.6"/><ellipse cx="70" cy="44" rx="2.6" ry="3.6"/><ellipse cx="38" cy="58" rx="2.6" ry="3.6"/><ellipse cx="62" cy="58" rx="2.6" ry="3.6"/><ellipse cx="50" cy="72" rx="2.6" ry="3.6"/><ellipse cx="30" cy="62" rx="2.2" ry="3"/><ellipse cx="70" cy="62" rx="2.2" ry="3"/></g></svg>',
  ribbon: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="currentColor"><path d="M50,40 C38,24 12,28 14,46 C16,60 34,58 50,44 C66,58 84,60 86,46 C88,28 62,24 50,40 Z"/><path d="M50,44 C48,56 42,68 34,80 L44,82 C48,70 51,58 52,46 Z"/><path d="M50,44 C52,56 58,68 66,80 L56,82 C52,70 49,58 48,46 Z"/><rect x="44" y="33" width="12" height="21" rx="6"/></g></svg>',
  antler: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"><path d="M22,90 C26,66 28,48 36,30 C40,20 47,14 56,10"/><path d="M31,60 C24,54 18,52 12,48"/><path d="M33,44 C27,38 24,34 22,26"/><path d="M39,30 C45,24 49,20 54,16"/></g></svg>'
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
  { name: "虹深°ぬふ 1周年記念グッズ フルセット", memberId: "nuhu", kind: "fullset", price: 19900, oldPrice: 20200, url: "https://shop.milpr.com/products/nufu_1st_anniversary_full", en: { name: "Nijipuka Nuhu 1st Anniversary Goods Full Set" } },
  { name: "虹深°ぬふ 1周年記念グッズ アクリルスタンド", memberId: "nuhu", kind: "stand", price: 1800, url: "https://shop.milpr.com/products/nufu_1st_anniversary_acrylicstand", en: { name: "Nijipuka Nuhu 1st Anniversary Acrylic Stand" } },
  { name: "虹深°ぬふ 1周年記念 シチュエーションボイス", memberId: "nuhu", kind: "voice", price: 1000, url: "https://shop.milpr.com/products/nufu_1st_anniversary_voice", en: { name: "Nijipuka Nuhu 1st Anniversary Situation Voice" } },
  { name: "ミリプロTCG「Million Production OFFICIAL CARD GAME vol.4」1パック", memberId: "", memberLabel: "ミリプロ全員", kind: "card", price: 600, tag: "NEW", url: "https://shop.milpr.com/products/milpr_tcg_vol4", en: { name: "MilliPro TCG \"Million Production OFFICIAL CARD GAME vol.4\" 1 Pack", memberLabel: "All Members" } },
  { name: "ミリプロTCG「Million Production OFFICIAL CARD GAME vol.4」11パックセット", memberId: "", memberLabel: "ミリプロ全員", kind: "card", price: 6000, tag: "NEW", url: "https://shop.milpr.com/products/milpr_tcg_vol4_11", en: { name: "MilliPro TCG \"Million Production OFFICIAL CARD GAME vol.4\" 11-Pack Set", memberLabel: "All Members" } },
  { name: "ミリプロ サマーコレクション 2026 プレミアムタレントセット", memberId: "", memberLabel: "ミリプロ全員", kind: "fullset", price: 23400, oldPrice: 23700, tag: "NEW", url: "https://shop.milpr.com/products/summer_2026_talentset_premium", en: { name: "MilliPro Summer Collection 2026 Premium Talent Set", memberLabel: "All Members" } },
  { name: "ミリプロ サマーコレクション 2026 オーロラアクリルスタンド", memberId: "", memberLabel: "ミリプロ全員", kind: "stand", price: 2200, tag: "NEW", url: "https://shop.milpr.com/products/summer_2026_aurora_acsta", en: { name: "MilliPro Summer Collection 2026 Aurora Acrylic Stand", memberLabel: "All Members" } },
  { name: "小廻こま 誕生日記念グッズ 2026 フルセット", memberId: "koma", kind: "fullset", price: 12300, url: "https://shop.milpr.com/products/koma_birthday2026_full", en: { name: "Komawari Koma 2026 Birthday Goods Full Set" } },
  { name: "小廻こま 誕生日記念グッズ 2026 ジオラマアクリルスタンド", memberId: "koma", kind: "stand", price: 3500, url: "https://shop.milpr.com/products/koma_birthday2026_diorama_acsta", en: { name: "Komawari Koma 2026 Birthday Diorama Acrylic Stand" } },
  { name: "小廻こま 誕生日記念グッズ 2026 アクリルスタンド", memberId: "koma", kind: "stand", price: 1800, url: "https://shop.milpr.com/products/koma_birthday2026_acrylicstand", en: { name: "Komawari Koma 2026 Birthday Acrylic Stand" } },
  { name: "あくび・でもんすぺーど 50万人記念グッズ フルセット", memberId: "akubi", kind: "fullset", price: 11500, tag: "NEW", url: "https://shop.milpr.com/products/akubi_50_full", en: { name: "Akubi Demonspade 500K Subscriber Goods Full Set" } },
  { name: "あくび・でもんすぺーど 50万人記念グッズ メタルチャームネックレス", memberId: "akubi", kind: "necklace", price: 5000, tag: "NEW", url: "https://shop.milpr.com/products/akubi_50_necklace", en: { name: "Akubi Demonspade 500K Subscriber Metal Charm Necklace" } }
];


/* Milli Games のゲーム紹介（ホームの目立つ場所に表示） */
const GAME_FEATURE = [
  {
    tag: "Milli Games ピックアップ",
    game: "Milli Pulse",
    desc: "ミリプロの楽曲で遊べる無料のブラウザ音ゲー！音ノ乃のの「Princess Viral」・音ノ瀬らこ「ルミナス」・小廻こま「おきらくスーパースター」の3曲を収録。キーボードでもタップでも遊べるので、PC・スマホどちらの端末でもOK！この他にも様々なゲームを用意しています！",
    icon: "images/games/milli-pulse-rogo.png",
    url: "https://milli-games.onrender.com/games/music.html",
    en: {
      tag: "Milli Games Pickup",
      desc: "A free browser rhythm game you can play with MilliPro songs! Includes 3 tracks: Nono's \"Princess Viral\", Raco's \"Luminous\", and Koma's \"Okiraku Super Star\". Playable with keyboard or touch, so it works on both PC and smartphone! Many more games are also available!"
    }
  },
  {
    tag: "Milli Games ピックアップ",
    game: "Milli Spectrum",
    desc: "ミリプロ好き度がわかる無料の診断ゲーム！10問の質問に答えると、あなたの9つの「ミリプロ力」パラメータを分析して診断結果を表示。結果画像の保存やX（Twitter）での共有にも対応しています。",
    icon: "images/games/milli-spectrum-rogo.png",
    url: "https://milli-games.onrender.com/games/diagnosis.html",
    en: {
      tag: "Milli Games Pickup",
      desc: "A free diagnosis game that tells you how much of a MilliPro fan you are! Answer 10 questions and your 9 \"MilliPro Power\" parameters will be analyzed to show your result. You can also save your result image or share it on X (Twitter)."
    }
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
    intro: "",
    en: {
      gen: "Gen 0 / Founding Member",
      catch: "A werewolf VTuber, fully self-made. Her dream for the future is world domination",
      fanName: "Kono-kko",
      calls: "Kono / Konochi / Kono-chan / Konomi-n",
      profile: "A werewolf girl. 150 cm tall (including ears & heels), age 2, MBTI: INFJ. A Gen 0 member who founded MilliPro on April 1, 2023. She is the \"Mama\" who handles character design, illustrations, and Live2D for all members, and is quite airheaded (she insists she's \"farm-raised\").",
      skills: "Illustration & Live2D (fully self-made). Gets drunk easily and reverts to a little girl",
      phrases: ["Ehehe", "Say ehehe and it's over immediately"],
      likes: "Chocolate (an expert on Royce nama chocolate), Hakata tonkotsu ramen, alcohol, sleeping in, watching baseball, games, drawing",
      dislikes: "Celery, pickles, singing, the sea, heights, horror, thrill rides, dancing, bugs",
      achievements: [
        "2022/12/23 First stream as an indie VTuber",
        "2023/4/1 Founded MilliPro (Gen 0)",
        "2025/1/25 3D debut",
        "Published 2 books (\"The Complete Self-Made VTuber's Guide to Making Things Cute in a Flash\", etc.)",
        "2025/12/23 1st Digital Single \"Omowase♡Lovely\"",
        "2026/5 Reached 800K channel subscribers"
      ],
      catchphrase: "I want to share \"love\" with you. I want to connect with you through \"love\"."
    }
  },
  {
    id: "nono",
    gen: "ミリプロSONA",
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
    intro: "",
    en: {
      gen: "MilliPro SONA",
      catch: "I want to shine like a diamond! ♢ VSinger",
      fanName: "Nonono-tai (Nono's Squad)",
      calls: "Nono-chan / Nonochi",
      profile: "A VSinger. 149 cm tall, age 20 (the youngest in MilliPro), MBTI: ENFP. Joined after being scouted from a recording of her street performance. Reliable and almost never messes up. The youngest of four brothers and a total brocon.",
      skills: "Singing (has a major label debut). Also plays piano, guitar, and drums",
      phrases: ["Cereal scene", "Chikuwa representative"],
      likes: "Chikuwa (her staple; up to 8 packs a day), mozuku seaweed, umeboshi, dried squid, blueberries, instruments, collecting interior items and clothes",
      dislikes: "Celery, parsley, and other \"weed-like\" things",
      achievements: [
        "2023/4/1 Started posting shorts",
        "2023/6/3 First stream (Gen 1 debut)",
        "2024/5 Major label debut under Universal Music",
        "Original songs \"Yakusoku\", \"Ultima\", \"NONONO NENE!\", \"Rokudenashi Tenshi\", \"HYPE SEEKER\""
      ],
      catchphrase: "I want to shine like a diamond!"
    }
  },
  {
    id: "akubi",
    gen: "ミリプロSONA",
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
    intro: "",
    en: {
      gen: "MilliPro SONA",
      catch: "Kneel, you lot! I am Akubi Demonspade-sama!",
      fanName: "Bii Clan",
      calls: "Akubi-sama / Aku-sama / Bii-sama",
      profile: "A demon (with horns). 140 cm tall, around 2000 years old, MBTI: ISTP. The first audition winner in the agency (with 500:1 odds). A multi-voiced singer who is extremely good at singing and does her own mixing — a multi-creative. A brat at heart, but serious underneath.",
      skills: "Singing in different voices (multi-voice), singing & mixing, sleeping",
      phrases: ["Kneel, you lot! I am Akubi Demonspade-sama!", "Otaku"],
      likes: "Cherry tomatoes, strawberries, thin crispy fries, O-satsu Doki (sweet potato snacks), otaku stuff, singing, mixing, sleeping, One Piece (her textbook for life)",
      dislikes: "Green peppers, corn, red bean paste, taking things seriously in chat, rushing, following plans, spoilers, horror, FPS games (motion sickness)",
      achievements: [
        "2023/10/31 First short video posted",
        "2024/1/19 First stream (Gen 2 debut; first audition winner)",
        "Multiple viral hits on X (over 100K likes on a sub-account)",
        "2026/5/9 Video appearance in 1st 3D live \"Million Story\""
      ],
      catchphrase: "Kneel, you lot! I am Akubi Demonspade-sama!"
    }
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
    intro: "",
    en: {
      gen: "Gen 3",
      catch: "Gimme your frame of fun, Koma!",
      fanName: "Komamate",
      calls: "Koma / Komawari",
      profile: "A play-loving shrine maiden-style VTuber. 148 cm tall, MBTI: ESFJ-T. Her voice is incredibly loud (it clips even at 10% with a compressor). A sensible, hardworking former working adult; shy at first, but transforms when she sings.",
      skills: "Making various voices and being loud, singing (spectacular once she starts)",
      phrases: ["Gimme your frame of fun, Koma!", "Behold Koma's art!"],
      likes: "Alcohol (a heavy drinker; she drinks straight from the bottle because \"washing dishes is a hassle\"), fruit, egg dishes, ohayo dairy crème brûlée ice cream, singing, video editing",
      dislikes: "Fresh cream, mushrooms, carrots in curry, butter, beans, ball sports, every bug in the world, being called \"lazy and whiny\"",
      achievements: [
        "2024/12/15 Started activities (scouted by Mil-chan)",
        "2025/3/22 First stream (Gen 3 debut)",
        "2025/10 Went viral in \"MadTownGTA\"; #1 among all VTubers in monthly subscriber growth",
        "Earned the nickname \"0.7 Shaka\" with 8,000+ peak concurrent viewers",
        "Units: Yuma's Drinking Party (with Yuragi Yura), Komatsuri-zu (with Amayo Liz & Nemukumo Tsukuri)"
      ],
      catchphrase: "Gimme your frame of fun, Koma!"
    }
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
    intro: "",
    en: {
      gen: "MilliPro NOVA",
      catch: "Sharing my energy with you! DJ Otter",
      fanName: "Rakko",
      calls: "Rakochi / Rako-chan",
      profile: "A DJ otter VTuber. 151 cm tall (including her ahoge), 20-pee years old, MBTI: ESTP-T. Character design and illustrations are by herself (self-designed); Live2D by Amakami Konomi. A MilliPro talent and quite the MilliPro otaku. Often teased for acting like a 5-year-old / elementary schooler.",
      skills: "Singing (beautiful high notes; can add grit even at extremely high pitches), drawing",
      phrases: ["I'm hungry~", "Hakuba no oujisama (misreading of \"fin whale\")"],
      likes: "Chocomint ice cream, cookies & cream, tarako pasta, karaage, carbonara, singing, Vocaloid, MilliPro, watching animals",
      dislikes: "Fruit in general, tomatoes, eggplant, waking up early, bugs, machines, multitasking, being rushed",
      achievements: [
        "2023/12/13 Started with short videos (as a trainee)",
        "2024/3 Officially joined with Yuragi Yura (reached 20K subscribers)",
        "2024/6/8 First stream",
        "2026/6/8 Released 1st Single \"Luminous\" on her 2nd anniversary via Million RECORDS"
      ],
      catchphrase: "Sharing my energy with you!"
    }
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
    intro: "",
    en: {
      gen: "MilliPro NOVA",
      catch: "I want to bring you peace of mind. A moon jellyfish",
      fanName: "Yurafira",
      calls: "Yurachi / Yura-nee",
      profile: "A moon jellyfish VTuber. From Okinawa, 155 cm tall, MBTI: ENFP-A. MilliPro's \"sexy\" specialist and big-sister slot (formerly the \"pure & innocent\" slot). Streams more frequently than anyone else in MilliPro, mostly games. Has band experience (bass & vocals).",
      skills: "Singing (great at ballads), drawing (great at drawing men), ASMR",
      phrases: ["Sexy", "3 hours is 1 hour", "Every fujoshi has a tama in her heart"],
      likes: "Alcohol (especially umeshu), macarons, tamago boro, tacos, hamburgers, drawing, singing, streaming, oshi activities",
      dislikes: "Spicy food and spicy drinks, horror games, being spoiled, bugs",
      achievements: [
        "2023/12/23 Started with shorts (as a trainee)",
        "2024/3 Officially joined with Otonose Raco",
        "2024/6/9 First stream",
        "\"Sexy\" chosen for the MilliPro Buzzword of the Year 2025",
        "Units: Yuma's Drinking Party (with Komawari Koma), Yurara-ko (with Otonose Raco)"
      ],
      catchphrase: "I want to bring you peace of mind"
    }
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
    intro: "",
    en: {
      gen: "MilliPro NOVA",
      catch: "Nuhu's food is praise words!",
      fanName: "Pukanu Family",
      calls: "Nuhu / Nuhu-chan / Nuhuchi",
      profile: "An illustrator VTuber who is half octopus-dog, half human. From Fukuoka, 150 cm tall, forever 17 years old. Fully self-made (both illustration and Live2D, with Live2D self-taught). Her hair color changes with her mood. Her room is the messiest in MilliPro by far.",
      skills: "Illustration & animation (she even makes her own teaser PVs). Also handles costume production",
      phrases: ["O↑RE↓", "Yatta-, Ureshii-", "My body may be dirty, but my heart is pure"],
      likes: "Hamburg steaks, video editing (animation), illustration, eating, being praised",
      dislikes: "Tomatoes, cleaning up, baths, studying",
      achievements: [
        "Active as an indie illustrator",
        "Declined the initial offer once, then desperately wanted to join",
        "2025/7 MilliPro NOVA joining announcement; first stream on 8/8",
        "Opened \"Atelier Nuhu\" in NEWTOWN (GTA streams) and went viral",
        "300K subscriber commemorative goods released"
      ],
      catchphrase: "Nuhu's food is praise words!"
    }
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
    intro: "",
    en: {
      gen: "MilliPro UNI",
      catch: "I'll make memories with you.",
      fanName: "Tsukuloud",
      calls: "Tsukuri / Nemuchan",
      profile: "A multi-creative VTuber. 160 cm tall (156 cm without platforms), MBTI: INTP. Handles composing, writing lyrics, singing, mixing, video editing, illustration, and design all by herself. A serious, calm straight-man. Has band experience. Illustrator: Riichu / Live2D: Nekoka Jun.",
      skills: "Composing, songwriting, singing, mixing, video editing, illustration, design. Also a good cook",
      phrases: ["Fuu↑fuu↓", "I'll seriously make it, okay?"],
      likes: "Hiyashi chuka, cheese, milk tea, abura soba, macarons, singing, horror games, long sleeps",
      dislikes: "Stimulants and spicy food, ume plums, daikon radish, perilla, swimming, dancing",
      achievements: [
        "2025/5/17 First stream (debuted as MilliPro UNI with Amayo Liz)",
        "2nd place in the MilliPro surprise test (one of only two who avoided repeating a year)",
        "Great at impersonating MilliPro talents",
        "Unit: Komatsuri-zu (with Komawari Koma & Amayo Liz)"
      ],
      catchphrase: "I'll make memories with you"
    }
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
    intro: "",
    en: {
      gen: "MilliPro UNI",
      catch: "Wander in and take shelter from the rain. A rain-bringer VTuber",
      fanName: "Lizknights",
      calls: "Liz / Amayo-san / Mayo-chan",
      profile: "A rain-bringer VTuber. 161 cm tall, MBTI: INFP-T. Calls herself \"MilliPro's pure & loli slot\", but is famous for messing up (PON) a lot. She cooks for herself and is good at it. Her partner is a frog named \"Keromaru\" (Keromaru's love for her is one-sided). Illustrator: Riichu / Live2D: Nekoka Jun.",
      skills: "Singing, drawing, cooking, impersonations",
      phrases: ["Queen of mess-ups"],
      likes: "All kinds of sweets, mild flavors, K-POP, utaite, Vocaloid",
      dislikes: "Multitasking, eating fast (she has almost no food dislikes)",
      achievements: [
        "2025/5/18 First stream (debuted as MilliPro UNI with Nemukumo Tsukuri)",
        "Calls herself \"MilliPro's pure & loli slot\"",
        "Legendary PON moments (left rice in the rice cooker for a week, leaked the work Discord, turned a 2-hour archive into 45 seconds, etc.)",
        "Unit: Komatsuri-zu (with Komawari Koma & Nemukumo Tsukuri)"
      ],
      catchphrase: "Wander in and take shelter from the rain."
    }
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
    intro: "",
    en: {
      gen: "MilliPro UNI",
      catch: "Mist in, mission start. The Sniper of the Mist",
      fanName: "Operator",
      calls: "Ray-chan / Ray-pon (call me whatever you like)",
      profile: "The \"Sniper of the Mist\" VTuber. 155 cm tall, MBTI: INFP. A legendary former sniper who has shot just about everything in the world, so now she's come to shoot people's hearts. A newcomer who debuted on July 11, 2026. Illustrator: Makihitsuji / Live2D: Rariemonn.",
      skills: "Finishing rice and side dishes at exactly the same moment",
      phrases: ["Target, locked on"],
      likes: "Sushi, spicy food, McDonald's, Japanese rock, idol songs, Western music, Vocaloid, VALORANT, Minecraft, Apex, Pokémon",
      dislikes: "Mornings (about 5 more sleeps a day), bugs, summer, the \"ra\" sound (a pronunciation gag)",
      achievements: [
        "2026/5/3 First X post",
        "2026/5/9 Teaser PV shown at \"Million Story\"",
        "2026/7/11 First stream (60K subs before the stream; broke 70K that day)",
        "Released a \"Kaijuu no Hanauta / Vaundy\" cover on her debut day"
      ],
      catchphrase: "Mist in, mission start"
    }
  },
  {
    id: "mahoro",
    gen: "ミリプロSONA",
    name: "鹿乃まほろ",
    nameEn: "Kano Mahoro",
    color: "#e0455e",
    subColor: "#fde8ec",
    birthday: "12-24",
    debut: "2026-08-22",
    catch: "2010年より歌い手として活動するシンガー。2015年メジャーデビュー、MKLNtic メンバー。2026年8月にミリプロSONAへ加入",
    fanName: "？？？",
    fanMark: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="#e0455e"><path d="M12 20.4C6.8 16.4 3.6 12.9 3.6 9.2 3.6 6.6 5.6 4.6 8.2 4.6c1.5 0 2.9.7 3.8 1.9.9-1.2 2.3-1.9 3.8-1.9 2.6 0 4.6 2 4.6 4.6 0 3.7-3.2 7.2-8.4 11.2z"/></g><g fill="#ffe14d"><path d="M8.3 4.7c.3-1 .9-1.8 1.7-2.3-.1 1.2-.7 2.2-1.7 2.3z"/><path d="M12.4 4.3c.5-.9 1.2-1.5 2.1-1.9-.2 1.2-.9 2.1-2.1 1.9z"/></g></svg>',
    calls: "？？？",
    profile: "2010年にニコニコ動画で歌い手として活動を開始し、2015年にメジャーデビューしたシンガー。2022年から音楽ユニットMKLNticのメンバーとしても活動。2026年7月にインクストゥエンターを退所し、同年8月にミリプロSONAへ加入。",
    skills: "作詞作曲・歌唱・ギター（本人プロフィールより）",
    phrases: [],
    likes: "？？？",
    dislikes: "？？？",
    achievements: [
      "2026/8/16 ミリプロSONA加入発表",
      "2026/8/22 初配信予定"
    ],
    tags: { stream: "", clip: "", art: "" },
    links: { yt: "https://www.youtube.com/@Kano_", x: "https://x.com/kano_2525", tiktok: "" },
    img: "",
    logo: "images/rogo/mahororogo.png",
    icon: "images/icon/mahoro_profile.jpg",
    catchphrase: "みんなの毎日を、まほろばに！",
    introVoice: "",
    featuredVideos: [],
    voice: "",
    intro: "",
    en: {
      gen: "MilliPro SONA",
      catch: "A singer active since 2010 as an utaite. Major debut in 2015, member of MKLNtic. Joined Miripro SONA in August 2026",
      fanName: "???",
      calls: "???",
      profile: "A singer who started her utaite activities on Nico Nico Douga in 2010 and made her major debut in 2015. Since 2022 she has also been a member of the music unit MKLNtic. She left Inkst Entertainment in July 2026 and joined Miripro SONA in August of the same year.",
      skills: "Songwriting, singing, guitar (from her own profile)",
      likes: "???",
      dislikes: "???",
      catchphrase: "Making everyone's everyday a mahoroba!"
    },
    deco: {
      label: "ichigo",
      shape: "straw",
      floats: [
        { k: "ribbon", x: 8, y: 14, size: 56, dur: 15 },
        { k: "ichigo", x: 88, y: 10, size: 68, dur: 13 },
        { k: "antler", x: 13, y: 74, size: 52, dur: 14 },
        { k: "note", x: 82, y: 84, size: 48, dur: 12 },
        { k: "ichigo", x: 76, y: 42, size: 38, dur: 16 },
        { k: "heart", x: 26, y: 38, size: 32, dur: 15 }
      ]
    },
    fx: "straw"
  },
  {
    id: "milchan",
    gen: "事務所スタッフ・マスコット",
    name: "ミリちゃん",
    nameEn: "Mil-chan",
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
    intro: "",
    en: {
      gen: "Office Staff / Mascot",
      catch: "A mysterious seal. MilliPro's founder & mascot",
      calls: "Mil-chan",
      profile: "A mysterious seal. Founder & mascot character of MilliPro. She is staff rather than a talent, appearing on the official channel (@Mil_Pro) and group projects. Also famous as MilliPro's scout (she scouted Nono Nono and Komawari Koma).",
      skills: "Scouting, being the face of the office",
      phrases: [],
      likes: "",
      dislikes: "",
      achievements: [
        "2023/4/1 Started activities at the same time as MilliPro's founding",
        "Scouted Nono Nono and Komawari Koma"
      ],
      catchphrase: "How's the progress?"
    }
  }
];

/* グループアイコン（images/icon/group/）。所属グループごとに表示される */
const GROUP_ICON = {
  "0期生・創設メンバー": "images/icon/group/期生.webp",
  "1期生": "images/icon/group/期生.webp",
  "2期生": "images/icon/group/期生.webp",
  "3期生": "images/icon/group/期生.webp",
  "ミリプロNOVA": "images/icon/group/nova.webp",
  "ミリプロUNI": "images/icon/group/uni.webp",
  "ミリプロSONA": "images/icon/group/SONA.png"
};

/* グループ・期生まとめ（新規の方がミリプロの体制を理解しやすいように表示）
   gen: MEMBERS の gen 値、members: 所属メンバー（GEN の場合は期生の gen 値のみ） */
const GROUP_INFO = [
  {
    id: "gen",
    name: "期生",
    nameEn: "Generations",
    icon: "images/icon/group/期生.webp",
    desc: "ミリプロ設立当初は「〇期生」のナンバリング順でデビューしていました。現在は後述の「NOVA」「UNI」「SONA」というコンセプト・属性ごとのグループ（ユニット）を中心とした活動体制へ移行しています。",
    members: [
      { id: "konomi", note: "設立メンバー / CEO兼クリエイター" },
      { id: "koma" }
    ],
    en: {
      name: "Generations",
      desc: "In the early days of MilliPro, talents debuted in numbered \"Generations\". Today, activities are centered around concept-based groups (units) called \"NOVA\", \"UNI\", and \"SONA\"."
    }
  },
  {
    id: "nova",
    name: "ミリプロNOVA",
    nameEn: "MilliPro NOVA",
    icon: "images/icon/group/nova.webp",
    desc: "「Nova（新星）」を意味します。研究生から目標（登録者数など）を達成して正規デビューを果たしたメンバーなど、新たな輝きを放つタレントで構成されたグループです。",
    members: [
      { id: "raco" },
      { id: "yura" },
      { id: "nuhu" }
    ],
    en: {
      name: "MilliPro NOVA",
      desc: "Named after \"Nova (new star)\". A group of talents who shine anew — including members who debuted as full talents after reaching goals (such as subscriber counts) as trainees."
    }
  },
  {
    id: "uni",
    name: "ミリプロUNI",
    nameEn: "MilliPro UNI",
    icon: "images/icon/group/uni.webp",
    desc: "「Unique / Universe / Unity」などの意味合いを持つ音楽特化型ユニット。メンバーそれぞれに「天気（雲・雨・霧）」を連想させるモチーフや名前が取り入れられているのが特徴です。",
    members: [
      { id: "tsukuri", note: "［モチーフ：雲］" },
      { id: "liz", note: "［モチーフ：雨］" },
      { id: "rei", note: "［モチーフ：霧］" }
    ],
    en: {
      name: "MilliPro UNI",
      desc: "A music-specialized unit whose name evokes \"Unique / Universe / Unity\". Each member features weather motifs (clouds, rain, fog) in their names and themes."
    }
  },
  {
    id: "sona",
    name: "ミリプロSONA",
    nameEn: "MilliPro SONA",
    icon: "images/icon/group/SONA.png",
    badge: "new",
    desc: "音楽（Sound）と個性（Persona）を掛け合わせた新ユニット。メンバー一人ひとりの個性とアーティスト性を軸に、それぞれの強みや魅力を最大限に活かす「個としての活動（ソロ・アーティスト活動）」を中心に輝ける場所として設立されました。",
    members: [
      { id: "nono" },
      { id: "akubi" },
      { id: "mahoro", note: "※ミリプロ加入と同時に所属" }
    ],
    en: {
      name: "MilliPro SONA",
      desc: "A new unit combining Sound and Persona. Founded as a place where each member's individuality and artistry shine through \"solo artist activities\" that maximize their strengths and appeal."
    }
  }
];

const COUNTDOWN = [
  { id: "mahoro-debut", label: "鹿乃まほろ 初配信", date: "2026-08-22T20:00:00", note: "ミリプロSONA加入後初の配信！", url: "https://youtu.be/YzfwW0zTSpE", featured: true, en: { label: "Kano Mahoro's Debut Stream", note: "Her first stream after joining MilliPro SONA!" } },
  { id: "milpro-presents", label: "ミリプロプレゼンツ ～超重大発表配信～", date: "2026-08-16T21:00:00", note: "ミリ創作コンテスト結果発表＆重大告知！", url: "https://youtu.be/4lba9sduOzI", featured: true, en: { label: "MilliPro Presents ~Super Major Announcement Stream~", note: "Milli Creation contest results & big announcement!" } },
  { id: "resort", label: "ミリプロリゾート", date: "2026-08-29T10:00:00", note: "秋葉原UDXにて開催", url: "https://milpr.com/news/milpr_resort", en: { label: "MilliPro Resort", note: "Held at Akihabara UDX" } },
  { id: "tsukuri-birthday", label: "眠雲ツクリ 誕生日", date: "2026-09-03T00:00:00", note: "つくらうど、お祝いだ！", url: "tsukuri.html", en: { label: "Tsukuri's Birthday", note: "Congratulations, Tsukuloud!" } },
  { id: "akubi-birthday", label: "あくび・でもんすぺーど 誕生日", date: "2026-10-31T00:00:00", note: "びぃの一族、お祝いだ！", url: "akubi.html", en: { label: "Akubi Demonspade's Birthday", note: "Congratulations, Bii Clan!" } },
  { id: "yura-birthday", label: "ゆらぎゆら 誕生日", date: "2026-11-03T00:00:00", note: "ゆらふぃら、お祝いだ！", url: "yura.html", en: { label: "Yuragi Yura's Birthday", note: "Congratulations, Yurafira!" } },
  { id: "nuhu-birthday", label: "虹深°ぬふ 誕生日", date: "2026-11-30T00:00:00", note: "ぷかぬファミリー、お祝いだ！", url: "nuhu.html", en: { label: "Nijipuka Nuhu's Birthday", note: "Congratulations, Pukanu Family!" } }
];

const NEWS = [
  {
    date: "2026-08-29",
    tag: "イベント",
    title: "ミリプロリゾート 開催",
    desc: "ミリプロサマー2026のリアルイベントが秋葉原UDXで開催されます。",
    url: "https://milpr.com/news/milpr_resort",
    en: { tag: "Event", title: "MilliPro Resort Announced", desc: "A real-life event for MilliPro Summer 2026 will be held at Akihabara UDX." }
  },
  {
    date: "2026-08-16",
    tag: "重大発表",
    title: "【重大発表】鹿乃まほろ ミリプロSONAに加入決定！",
    desc: "Virtual Artist 鹿乃まほろ（@kano_2525）のミリプロSONA加入が決定しました。2026年8月22日20時より初配信を実施予定です！",
    url: "https://x.com/Mil_Pro_/status/2088968988860813750",
    en: { tag: "Major Announcement", title: "[Major Announcement] Kano Mahoro Joins MilliPro SONA!", desc: "Virtual Artist Kano Mahoro (@kano_2525) has joined MilliPro SONA. Her debut stream is scheduled for August 22, 2026 at 8 PM JST!" }
  },
  {
    date: "2026-08-16",
    tag: "重大発表",
    title: "【重大発表】ミリプロ新グループ「ミリプロSONA」設立！",
    desc: "音ノ乃のの、あくび・でもんすぺーど、鹿乃まほろの3名が所属する新グループ「ミリプロSONA」の設立が発表されました。",
    url: "https://x.com/Mil_Pro_/status/2088969048700899793",
    en: { tag: "Major Announcement", title: "[Major Announcement] New MilliPro Group \"MilliPro SONA\" Founded!", desc: "The new group \"MilliPro SONA\" was announced, comprising Nono Nono, Akubi Demonspade, and Kano Mahoro." }
  },
  {
    date: "2026-08-16",
    tag: "配信",
    title: "【お知らせ】3Dお披露目配信決定！",
    desc: "音ノ瀬らこ、ゆらぎゆら、虹深°ぬふ、小廻こま、眠雲ツクリ、雨夜リズの3Dお披露目配信が決定しました。2026年9月実施予定で、各メンバーのチャンネルにて配信予定です。",
    url: "https://x.com/Mil_Pro_/status/2088967029294612927",
    en: { tag: "Stream", title: "[Notice] 3D Debut Streams Announced!", desc: "3D debut streams have been announced for Otonose Raco, Yuragi Yura, Nijipuka Nuhu, Komawari Koma, Nemukumo Tsukuri, and Amayo Liz. Scheduled for September 2026 on each member's channel." }
  },
  {
    date: "2026-08-16",
    tag: "イベント",
    title: "鹿乃まほろ ファンミーティング第8部参加決定！",
    desc: "8月29日(土)に秋葉原UDXギャラリーで開催される「ミリプロリゾート」のファンミーティング第8部に鹿乃まほろの参加が決定。POP UP展示では鹿乃まほろが描いた絵日記も展示予定！",
    url: "https://x.com/Mil_Pro_/status/2088971188920050018",
    en: { tag: "Event", title: "Kano Mahoro Joins Fan Meeting Part 8!", desc: "Kano Mahoro will appear in Fan Meeting Part 8 of \"MilliPro Resort\" at the Akihabara UDX gallery on Saturday, August 29. Her illustrated diary will also be on display at the POP UP exhibit!" }
  },
  {
    date: "2026-08-16",
    tag: "イベント",
    title: "ミリプロサマー2026 後半スケジュール発表！",
    desc: "ミリプロサマー2026後半のスケジュールが発表されました。まだまだミリプロと一緒に夏を楽しみましょう！",
    url: "https://x.com/Mil_Pro_/status/2088971545511444730",
    en: { tag: "Event", title: "MilliPro Summer 2026 Second Half Schedule Announced!", desc: "The second-half schedule for MilliPro Summer 2026 has been announced. Let's keep enjoying summer with MilliPro!" }
  },
  {
    date: "2026-08-16",
    tag: "新メンバー",
    title: "【加入発表】鹿乃まほろ ミリプロSONAに加入！",
    desc: "2010年より歌い手として活動するシンガー「鹿乃まほろ」のミリプロSONA加入が正式に発表されました。2015年メジャーデビュー、MKLNticメンバーとしても活動中。",
    url: "https://x.com/kano_2525",
    en: { tag: "New Member", title: "[Joining Announcement] Kano Mahoro Joins MilliPro SONA!", desc: "The singer \"Kano Mahoro\", active as an utaite since 2010, has officially joined MilliPro SONA. Major debut in 2015, also active as a member of MKLNtic." }
  }
];

const LAUNCHERS = [
  { icon: "images/icon/Milli%20Unishare-icon.PNG", shape: { char: "U", grad: ["#00bec4", "#00878c"] }, name: "Milli Unishare", desc: "配信・動画の情報を共有するファンサービス", url: "https://milli-unishare.onrender.com/", en: { desc: "A fan service for sharing stream and video info" } },
  { icon: "images/icon/Millipro%20Chronicle-icon.jpeg", shape: { char: "C", grad: ["#f7cb0e", "#e6a700"] }, name: "Millipro Chronicle", desc: "ミリプロの歴史を記録するファン資料集（準備中）", url: "", en: { desc: "A fan archive recording MilliPro history (in preparation)" } },
  { icon: "images/icon/Milli%20Games-icon.png", shape: { char: "G", grad: ["#8575bf", "#5f4f9e"] }, name: "Milli Games", desc: "ミリプロ関連のファンゲーム集", url: "https://milli-games.onrender.com/index.html", en: { desc: "A collection of MilliPro fan games" } }
];

const LINKS = [
  { name: "公式サイト", desc: "ミリプロ コーポレートサイト", url: "https://milpr.com/", en: { name: "Official Website", desc: "MilliPro corporate website" } },
  { name: "YouTube", desc: "ミリプロ公式チャンネル", url: "https://www.youtube.com/@Mil_Pro", en: { desc: "MilliPro official channel" } },
  { name: "公式切り抜き", desc: "ミリプロ公式切り抜きチャンネル", url: "https://www.youtube.com/@mil_kiri", en: { name: "Official Clips", desc: "MilliPro official clips channel" } },
  { name: "X（旧Twitter）", desc: "ミリプロ公式X", url: "https://x.com/Mil_Pro_", en: { name: "X (Twitter)", desc: "MilliPro official X" } },
  { name: "オンラインショップ", desc: "公式グッズショップ", url: "https://shop.milpr.com/", en: { name: "Online Shop", desc: "Official goods shop" } },
  { name: "二次創作ガイドライン", desc: "二次創作のルールを確認できます", url: "https://milpr.com/guideline", en: { name: "Fan Works Guidelines", desc: "Check the rules for fan works" } },
  { name: "ミリ創作", desc: "二次創作コンテスト特設ページ", url: "https://milpr.com/sosaku", en: { name: "Milli Creation", desc: "Special page for the fan works contest" } }
];

const EVENTS = [
  { type: "event", date: "2026-08-11", title: "ミリプロサマー2026 夏曲歌枠リレー", desc: "総勢10名による夏曲歌枠リレー（各メンバーチャンネル）", url: "https://milpr.com/news/millipro_summer_2026", en: { title: "MilliPro Summer 2026 Summer-Song Karaoke Relay", desc: "A relay of summer-song karaoke streams by all 10 talents (on each member's channel)" } },
  { type: "event", date: "2026-08-16", title: "ミリプロ夏祭り in ナイトプール", desc: "ミリプロマイクラサーバーで開催（各メンバーチャンネル）", url: "https://milpr.com/news/millipro_summer_2026", en: { title: "MilliPro Summer Festival in the Night Pool", desc: "Held on the MilliPro Minecraft server (on each member's channel)" } },
  { type: "event", date: "2026-08-16", title: "ミリプロプレゼンツ 超重大発表配信", desc: "ミリ創作コンテスト結果発表＆重大告知（ミリプロ公式YouTube）", url: "https://youtu.be/4lba9sduOzI", en: { title: "MilliPro Presents Super Major Announcement Stream", desc: "Milli Creation contest results & major announcement (MilliPro official YouTube)" } },
  { type: "event", date: "2026-08-22", title: "鹿乃まほろ 初配信", desc: "ミリプロSONA加入後初の配信（20:00〜・鹿乃まほろチャンネル）", url: "https://youtu.be/YzfwW0zTSpE", en: { title: "Kano Mahoro's Debut Stream", desc: "Her first stream after joining MilliPro SONA (8 PM JST, on her own channel)" } },
  { type: "event", date: "2026-08-29", title: "ミリプロリゾート", desc: "秋葉原UDXギャラリーにて開催（POP UP展示＆グッズ販売）", url: "https://milpr.com/news/milpr_resort", en: { title: "MilliPro Resort", desc: "Held at the Akihabara UDX gallery (POP UP exhibit & goods sales)" } },
  { type: "event", date: "2026-08-29", title: "ミリプロTCG サマーカップ 2026", desc: "ミリプロリゾート内で開催（ミリプロTCG初の公式大会）", url: "https://milpr.com/millipro_resort", en: { title: "MilliPro TCG Summer Cup 2026", desc: "Held inside MilliPro Resort (the first official MilliPro TCG tournament)" } },
  { type: "event", date: "2026-08-30", title: "ミリプロサマー2026 閉会式", desc: "公式YouTubeチャンネルにて", url: "https://milpr.com/news/millipro_summer_2026", en: { title: "MilliPro Summer 2026 Closing Ceremony", desc: "On the official YouTube channel" } },
  { type: "birthday", member: "koma", title: "小廻こま 誕生日", url: "koma.html", en: { title: "Komawari Koma's Birthday" } },
  { type: "birthday", member: "nono", title: "音ノ乃のの 誕生日", url: "nono.html", en: { title: "Nono Nono's Birthday" } },
  { type: "birthday", member: "raco", title: "音ノ瀬らこ 誕生日", url: "raco.html", en: { title: "Otonose Raco's Birthday" } },
  { type: "birthday", member: "liz", title: "雨夜リズ 誕生日", url: "liz.html", en: { title: "Amayo Liz's Birthday" } },
  { type: "birthday", member: "konomi", title: "甘狼このみ 誕生日", url: "konomi.html", en: { title: "Amakami Konomi's Birthday" } },
  { type: "birthday", member: "rei", title: "夕霧レイ 誕生日", url: "rei.html", en: { title: "Yugiri Ray's Birthday" } },
  { type: "birthday", member: "tsukuri", title: "眠雲ツクリ 誕生日", url: "tsukuri.html", en: { title: "Nemukumo Tsukuri's Birthday" } },
  { type: "birthday", member: "akubi", title: "あくび・でもんすぺーど 誕生日", url: "akubi.html", en: { title: "Akubi Demonspade's Birthday" } },
  { type: "birthday", member: "yura", title: "ゆらぎゆら 誕生日", url: "yura.html", en: { title: "Yuragi Yura's Birthday" } },
  { type: "birthday", member: "nuhu", title: "虹深°ぬふ 誕生日", url: "nuhu.html", en: { title: "Nijipuka Nuhu's Birthday" } },
  { type: "anniversary", member: "konomi", title: "甘狼このみ デビュー記念日", url: "konomi.html", en: { title: "Amakami Konomi's Debut Anniversary" } },
  { type: "anniversary", member: "nono", title: "音ノ乃のの デビュー記念日", url: "nono.html", en: { title: "Nono Nono's Debut Anniversary" } },
  { type: "anniversary", member: "akubi", title: "あくび・でもんすぺーど デビュー記念日", url: "akubi.html", en: { title: "Akubi Demonspade's Debut Anniversary" } },
  { type: "anniversary", member: "koma", title: "小廻こま デビュー記念日", url: "koma.html", en: { title: "Komawari Koma's Debut Anniversary" } },
  { type: "anniversary", member: "raco", title: "音ノ瀬らこ デビュー記念日", url: "raco.html", en: { title: "Otonose Raco's Debut Anniversary" } },
  { type: "anniversary", member: "yura", title: "ゆらぎゆら デビュー記念日", url: "yura.html", en: { title: "Yuragi Yura's Debut Anniversary" } },
  { type: "anniversary", member: "nuhu", title: "虹深°ぬふ デビュー記念日", url: "nuhu.html", en: { title: "Nijipuka Nuhu's Debut Anniversary" } },
  { type: "anniversary", member: "tsukuri", title: "眠雲ツクリ デビュー記念日", url: "tsukuri.html", en: { title: "Nemukumo Tsukuri's Debut Anniversary" } },
  { type: "anniversary", member: "liz", title: "雨夜リズ デビュー記念日", url: "liz.html", en: { title: "Amayo Liz's Debut Anniversary" } },
  { type: "anniversary", member: "rei", title: "夕霧レイ デビュー記念日", url: "rei.html", en: { title: "Yugiri Ray's Debut Anniversary" } }
];

const X_POSTS = [
  "https://x.com/Mil_Pro_/status/2088968988860813750",
  "https://x.com/Mil_Pro_/status/2088969048700899793",
  "https://x.com/Mil_Pro_/status/2088967029294612927",
  "https://x.com/Mil_Pro_/status/2088971188920050018",
  "https://x.com/Mil_Pro_/status/2088971545511444730",
  "https://x.com/Mil_Pro_/status/2088551273322733973"
];

const HISTORY = [
  { date: "2022/12/23", title: "甘狼このみ、個人勢として初配信", en: { title: "Amakami Konomi streams for the first time as an indie" } },
  { date: "2023/4/1", title: "ミリプロ設立（甘狼このみ・ミリちゃん）", desc: "「無数の」という意味のMillionには、無数の可能性を秘めたタレントが飛躍するサポートをしたいという想いが込められています", en: { title: "MilliPro founded (Amakami Konomi & Mil-chan)", desc: "The name \"Million\" means \"countless\" — a wish to support talents with countless possibilities as they take flight." } },
  { date: "2023/6/3", title: "音ノ乃のの デビュー（1期生）", en: { title: "Nono Nono debuts (Gen 1)" } },
  { date: "2024/1/19", title: "あくび・でもんすぺーど デビュー（2期生）", desc: "初のオーディション合格者（倍率500倍）", en: { title: "Akubi Demonspade debuts (Gen 2)", desc: "The first audition winner in the agency (500:1 odds)" } },
  { date: "2024/5", title: "音ノ乃のの、ユニバーサルミュージックからメジャーデビュー", en: { title: "Nono Nono makes her major label debut under Universal Music" } },
  { date: "2024/6/8-9", title: "音ノ瀬らこ・ゆらぎゆら デビュー（ミリプロNOVA）", desc: "研究生から正式加入", en: { title: "Otonose Raco & Yuragi Yura debut (MilliPro NOVA)", desc: "Officially promoted from trainees" } },
  { date: "2025/3/22", title: "小廻こま デビュー（3期生）", en: { title: "Komawari Koma debuts (Gen 3)" } },
  { date: "2025/5/17-18", title: "眠雲ツクリ・雨夜リズ デビュー（ミリプロUNI）", desc: "音楽特化型グループUNI始動", en: { title: "Nemukumo Tsukuri & Amayo Liz debut (MilliPro UNI)", desc: "The music-focused unit UNI begins" } },
  { date: "2025/8/8", title: "虹深°ぬふ デビュー（ミリプロNOVA）", en: { title: "Nijipuka Nuhu debuts (MilliPro NOVA)" } },
  { date: "2026/4/5", title: "自社音楽レーベル「Million RECORDS」設立", en: { title: "In-house music label \"Million RECORDS\" established" } },
  { date: "2026/5/9", title: "1st 3Dライブ「Million Story」開催", desc: "Zepp Shinjukuにて。3D出演8名＋映像出演あくび", en: { title: "1st 3D live \"Million Story\" held", desc: "At Zepp Shinjuku. 8 talents in 3D plus Akubi via video" } },
  { date: "2026/7/11", title: "夕霧レイ デビュー（ミリプロUNI）", en: { title: "Yugiri Ray debuts (MilliPro UNI)" } },
  { date: "2026/7", title: "あくび・でもんすぺーど、チャンネル登録者数50万人突破", en: { title: "Akubi Demonspade surpasses 500K subscribers" } },
  { date: "2026/8/5", title: "夕霧レイ、チャンネル登録者数10万人突破", desc: "デビューから約1か月での突破", en: { title: "Yugiri Ray surpasses 100K subscribers", desc: "About 1 month after debut" } },
  { date: "2026/8/16", title: "新グループ「ミリプロSONA」設立", desc: "音ノ乃のの・あくび・でもんすぺーど・鹿乃まほろの3名が所属", en: { title: "New group \"MilliPro SONA\" founded", desc: "Comprising Nono Nono, Akubi Demonspade, and Kano Mahoro" } },
  { date: "2026/8/22", title: "鹿乃まほろ デビュー（ミリプロSONA）", en: { title: "Kano Mahoro debuts (MilliPro SONA)" } },
  { date: "2026/8/13", title: "英語学習アプリ「Risdom」とコラボ開始", desc: "甘狼このみが登場するゲーム型英語学習アプリ「Risdom（リズダム）」とのコラボ", en: { title: "Collaboration with the English-learning app \"Risdom\" begins", desc: "A collab with the game-based English-learning app \"Risdom\", featuring Amakami Konomi" } }
];

const YOUTUBE = {
  dataUrl: "data/youtube.json",
  maxVideos: 10,
  maxStreams: 8
};

/* ミリプロ検定（quiz.html）。a: 正解の選択肢インデックス */
const QUIZ = [
  {
    k: "q1",
    q: "ミリプロが設立されたのはいつ？",
    opts: ["2022年12月23日", "2023年4月1日", "2024年1月19日"],
    a: 1,
    exp: "甘狼このみとミリちゃんの2名で2023年4月1日に設立。「無数の可能性」を意味するMillionが社名の由来です。",
    link: "index.html#history",
    linkLabel: "ミリプロの歩み（History）はこちら",
    en: {
      q: "When was MilliPro founded?",
      opts: ["Dec 23, 2022", "Apr 1, 2023", "Jan 19, 2024"],
      exp: "Founded on April 1, 2023 by Amakami Konomi and Mil-chan. The name \"Million\" means \"countless possibilities\".",
      linkLabel: "See the MilliPro History here"
    }
  },
  {
    k: "q2",
    q: "音ノ乃ののが「主食」と語る食べ物は？",
    opts: ["たまごボーロ", "チョコミントアイス", "ちくわ"],
    a: 2,
    exp: "ちくわ！最大1日8袋食べることもあるそうです。「シリアルなシーン」など独特の語彙も有名です。",
    link: "nono.html",
    linkLabel: "音ノ乃のの Member Guide",
    en: {
      q: "What food does Nono Nono call her \"staple\"?",
      opts: ["Tamago boro", "Chocomint ice cream", "Chikuwa"],
      exp: "Chikuwa! She sometimes eats up to 8 packs a day. She's also known for unique vocabulary like \"cereal scene\".",
      linkLabel: "Nono Nono Member Guide"
    }
  },
  {
    k: "q3",
    q: "あくび・でもんすぺーどが受けたオーディションの倍率は？",
    opts: ["50倍", "500倍", "1000倍"],
    a: 1,
    exp: "同事務所初のオーディション合格者で、倍率はなんと500倍。多声類の歌とMIXはすべてセルフです。",
    link: "akubi.html",
    linkLabel: "あくび・でもんすぺーど Member Guide",
    en: {
      q: "What were the odds of the audition Akubi Demonspade passed?",
      opts: ["50:1", "500:1", "1000:1"],
      exp: "She was the first audition winner in the agency, with odds of 500:1. Her multi-voice singing and mixing are all self-produced.",
      linkLabel: "Akubi Demonspade Member Guide"
    }
  },
  {
    k: "q4",
    q: "小廻こまのファンネームは？",
    opts: ["こまめいと", "こまっ娘", "こまねえず"],
    a: 0,
    exp: "「こまめいと」。声はコンプレッサー込みでも10%で音割れするらしい…。",
    link: "koma.html",
    linkLabel: "小廻こま Member Guide",
    en: {
      q: "What is Komawari Koma's fan name?",
      opts: ["Komamate", "Komakko", "Koma-nezu"],
      exp: "\"Komamate\". Her voice clips even at 10% with a compressor…",
      linkLabel: "Komawari Koma Member Guide"
    }
  },
  {
    k: "q5",
    q: "音ノ瀬らこの身長は「アホ毛込み」で何cm？",
    opts: ["148cm", "151cm", "155cm"],
    a: 1,
    exp: "アホ毛込みで151cm。キャラデザ・イラストは本人のセルフデザイン、Live2Dは甘狼このみが担当しています。",
    link: "raco.html",
    linkLabel: "音ノ瀬らこ Member Guide",
    en: {
      q: "How tall is Otonose Raco including her ahoge?",
      opts: ["148 cm", "151 cm", "155 cm"],
      exp: "151 cm including her ahoge. Her character design and illustrations are self-made, with Live2D by Amakami Konomi.",
      linkLabel: "Otonose Raco Member Guide"
    }
  },
  {
    k: "q6",
    q: "虹深°ぬふの出身地はどこ？",
    opts: ["沖縄", "札幌", "福岡"],
    a: 2,
    exp: "福岡出身のめんだこ×人間ハーフ。イラスト・Live2Dとも独学の完全セルフ受肉です。",
    link: "nuhu.html",
    linkLabel: "虹深°ぬふ Member Guide",
    en: {
      q: "Where is Nijipuka Nuhu from?",
      opts: ["Okinawa", "Sapporo", "Fukuoka"],
      exp: "A half octopus-dog, half human from Fukuoka. Both her illustrations and Live2D are fully self-taught.",
      linkLabel: "Nijipuka Nuhu Member Guide"
    }
  },
  {
    k: "q7",
    q: "ミリプロ抜き打ちテストで2位を取り「唯二の留年回避者」と言われたのは？",
    opts: ["眠雲ツクリ", "音ノ乃のの", "夕霧レイ"],
    a: 0,
    exp: "眠雲ツクリ。作曲・作詞・歌唱・MIX・動画編集・イラスト・デザインまでこなすマルチクリエイティブです。",
    link: "tsukuri.html",
    linkLabel: "眠雲ツクリ Member Guide",
    en: {
      q: "Who placed 2nd in the MilliPro surprise test and was called one of \"only two who avoided repeating a year\"?",
      opts: ["Nemukumo Tsukuri", "Nono Nono", "Yugiri Ray"],
      exp: "Nemukumo Tsukuri. A multi-creative who handles composing, songwriting, singing, mixing, video editing, illustration, and design.",
      linkLabel: "Nemukumo Tsukuri Member Guide"
    }
  },
  {
    k: "q8",
    q: "雨夜リズの相棒であるかえるの名前は？",
    opts: ["けろたん", "けろまる", "ケロちゃん"],
    a: 1,
    exp: "「けろまる」。ちなみにけろまるの雨夜リズへの想いは片思いだそうです。",
    link: "liz.html",
    linkLabel: "雨夜リズ Member Guide",
    en: {
      q: "What is the name of Amayo Liz's frog partner?",
      opts: ["Kerotan", "Keromaru", "Kero-chan"],
      exp: "\"Keromaru\". By the way, Keromaru's feelings for Amayo Liz are one-sided.",
      linkLabel: "Amayo Liz Member Guide"
    }
  },
  {
    k: "q9",
    q: "夕霧レイの初配信日はいつ？",
    opts: ["2026年5月9日", "2026年6月8日", "2026年7月11日"],
    a: 2,
    exp: "2026年7月11日。配信前は登録者6万人、当日には7万人を突破したミリプロUNIの新人スナイパーです。",
    link: "rei.html",
    linkLabel: "夕霧レイ Member Guide",
    en: {
      q: "When was Yugiri Ray's first stream?",
      opts: ["May 9, 2026", "Jun 8, 2026", "Jul 11, 2026"],
      exp: "July 11, 2026. The new sniper of MilliPro UNI had 60K subscribers before her stream and broke 70K that day.",
      linkLabel: "Yugiri Ray Member Guide"
    }
  },
  {
    k: "q10",
    q: "音ノ乃ののはミリプロの何期生デビュー？",
    opts: ["2期生", "1期生", "3期生"],
    a: 1,
    exp: "2023年6月3日初配信で1期生デビュー。VSingerとして「ダイヤのように輝きたいっ！」がキャッチコピーです。",
    link: "nono.html",
    linkLabel: "音ノ乃のの Member Guide",
    en: {
      q: "Which generation did Nono Nono debut in?",
      opts: ["Gen 2", "Gen 1", "Gen 3"],
      exp: "Gen 1, with her first stream on June 3, 2023. Her catchphrase as a VSinger is \"I want to shine like a diamond!\"",
      linkLabel: "Nono Nono Member Guide"
    }
  },
  {
    k: "q11",
    q: "ミリプロ初のオーディション合格者として2期生デビューしたのは？",
    opts: ["小廻こま", "あくび・でもんすぺーど", "音ノ瀬らこ"],
    a: 1,
    exp: "2024年1月19日初配信のあくび・でもんすぺーど。500倍のオーディションを勝ち抜いた2期生です。",
    link: "akubi.html",
    linkLabel: "あくび・でもんすぺーど Member Guide",
    en: {
      q: "Who debuted in Gen 2 as MilliPro's first audition winner?",
      opts: ["Komawari Koma", "Akubi Demonspade", "Otonose Raco"],
      exp: "Akubi Demonspade, who had her first stream on January 19, 2024 after winning a 500:1 audition.",
      linkLabel: "Akubi Demonspade Member Guide"
    }
  },
  {
    k: "q12",
    q: "小廻こまをミリプロにスカウトしたのは？",
    opts: ["甘狼このみ", "ミリちゃん", "音ノ乃のの"],
    a: 1,
    exp: "2024年12月15日、ミリちゃんのスカウトで加入。2025年3月22日に3期生デビューしました。",
    link: "koma.html",
    linkLabel: "小廻こま Member Guide",
    en: {
      q: "Who scouted Komawari Koma into MilliPro?",
      opts: ["Amakami Konomi", "Mil-chan", "Nono Nono"],
      exp: "She joined on December 15, 2024 after being scouted by Mil-chan, and debuted as Gen 3 on March 22, 2025.",
      linkLabel: "Komawari Koma Member Guide"
    }
  },
  {
    k: "q13",
    q: "音ノ瀬らこが2周年にリリースした1st Singleは？",
    opts: ["Princess Viral", "ルミナス", "おきらくスーパースター"],
    a: 1,
    exp: "2026年6月8日の2周年に「ルミナス」をMillion RECORDSからリリース。公式楽曲として楽曲一覧に載っています。",
    link: "songs.html",
    linkLabel: "楽曲一覧（公式楽曲）",
    en: {
      q: "What was Otonose Raco's 1st Single released on her 2nd anniversary?",
      opts: ["Princess Viral", "Luminous", "Okiraku Super Star"],
      exp: "\"Luminous\" was released via Million RECORDS on June 8, 2026, her 2nd anniversary. It's listed in the song list as an official song.",
      linkLabel: "Song List (Official Songs)"
    }
  },
  {
    k: "q14",
    q: "眠雲ツクリと雨夜リズが同時デビューしたユニットは？",
    opts: ["ミリプロNOVA", "ミリプロUNI", "ミリプロ研究生"],
    a: 1,
    exp: "2025年5月に「ミリプロUNI」として同時デビュー。のちに夕霧レイもUNIに加入しました。",
    link: "tsukuri.html",
    linkLabel: "眠雲ツクリ Member Guide",
    en: {
      q: "What unit did Nemukumo Tsukuri and Amayo Liz debut in together?",
      opts: ["MilliPro NOVA", "MilliPro UNI", "MilliPro Trainee"],
      exp: "They debuted together as \"MilliPro UNI\" in May 2025. Yugiri Ray later joined UNI as well.",
      linkLabel: "Nemukumo Tsukuri Member Guide"
    }
  },
  {
    k: "q15",
    q: "虹深°ぬふが所属するユニットは？",
    opts: ["ミリプロUNI", "ミリプロNOVA", "ミリプロ研究生"],
    a: 1,
    exp: "2025年7月にミリプロNOVA加入が発表され、8月8日に初配信。イラスト・Live2Dとも独学の完全セルフです。",
    link: "nuhu.html",
    linkLabel: "虹深°ぬふ Member Guide",
    en: {
      q: "Which unit does Nijipuka Nuhu belong to?",
      opts: ["MilliPro UNI", "MilliPro NOVA", "MilliPro Trainee"],
      exp: "Her joining of MilliPro NOVA was announced in July 2025, and she had her first stream on August 8. Both her illustration and Live2D are fully self-made.",
      linkLabel: "Nijipuka Nuhu Member Guide"
    }
  },
  {
    k: "q16",
    q: "ミリちゃんは何の生き物？",
    opts: ["オオカミ", "アザラシ", "タコ"],
    a: 1,
    exp: "謎のアザラシ。ミリプロの創設者にしてマスコットで、ミリプロ設立と同時に活動開始しました。",
    link: "milchan.html",
    linkLabel: "ミリちゃん Member Guide",
    en: {
      q: "What kind of creature is Mil-chan?",
      opts: ["A wolf", "A seal", "An octopus"],
      exp: "A mysterious seal. She is MilliPro's founder and mascot, and started activities at the same time as the agency's founding.",
      linkLabel: "Mil-chan Member Guide"
    }
  },
  {
    k: "q17",
    q: "ミリプロの1st 3Dライブ「Million Story」が開催されたのはいつ？",
    opts: ["2026年8月16日", "2026年5月9日", "2026年7月11日"],
    a: 1,
    exp: "2026年5月9日。あくび・でもんすぺーどは映像出演、夕霧レイはこの日にティザーPVが公開されました。",
    link: "index.html#history",
    linkLabel: "ミリプロの歩み（History）",
    en: {
      q: "When was MilliPro's 1st 3D live \"Million Story\" held?",
      opts: ["Aug 16, 2026", "May 9, 2026", "Jul 11, 2026"],
      exp: "May 9, 2026. Akubi Demonspade appeared via video, and Yugiri Ray's teaser PV was shown the same day.",
      linkLabel: "MilliPro History"
    }
  },
  {
    k: "q18",
    q: "「MadTownGTA」で登録者増加ランキング全VTuber中1位になったのは？",
    opts: ["虹深°ぬふ", "夕霧レイ", "小廻こま"],
    a: 2,
    exp: "2025年10月、「MadTownGTA」で話題化し当月の登録者増加ランキングで全VTuber中1位を獲得しました。",
    link: "koma.html",
    linkLabel: "小廻こま Member Guide",
    en: {
      q: "Who ranked #1 among all VTubers in subscriber growth with \"MadTownGTA\"?",
      opts: ["Nijipuka Nuhu", "Yugiri Ray", "Komawari Koma"],
      exp: "In October 2025, she went viral in \"MadTownGTA\" and ranked #1 among all VTubers in monthly subscriber growth.",
      linkLabel: "Komawari Koma Member Guide"
    }
  },
  {
    k: "q19",
    q: "音ノ乃ののは2024年5月にどこからメジャーデビューした？",
    opts: ["ソニー・ミュージック", "ビクターエンタテインメント", "ユニバーサルミュージック"],
    a: 2,
    exp: "2024年5月にユニバーサルミュージックからメジャーデビュー。ミリプロ初のメジャーアーティストです。",
    link: "nono.html",
    linkLabel: "音ノ乃のの Member Guide",
    en: {
      q: "Which label did Nono Nono make her major debut under in May 2024?",
      opts: ["Sony Music", "Victor Entertainment", "Universal Music"],
      exp: "She made her major debut under Universal Music in May 2024, becoming MilliPro's first major artist.",
      linkLabel: "Nono Nono Member Guide"
    }
  },
  {
    k: "q20",
    q: "甘狼このみの身長は耳・ヒール込みで何cm？",
    opts: ["148cm", "154cm", "150cm"],
    a: 2,
    exp: "耳・ヒール込みで150cm。年齢は2歳、全メンバーのキャラデザ・Live2Dを手がける「ママ」的存在です。",
    link: "konomi.html",
    linkLabel: "甘狼このみ Member Guide",
    en: {
      q: "How tall is Amakami Konomi including ears and heels?",
      opts: ["148 cm", "154 cm", "150 cm"],
      exp: "150 cm including ears and heels. She's 2 years old, and the \"Mama\" who handles all members' character design and Live2D.",
      linkLabel: "Amakami Konomi Member Guide"
    }
  },
  {
    k: "q21",
    q: "「Mile Stone」を歌っているのは？",
    opts: ["音ノ乃のの", "ミリプロメンバー9人全員", "ミリプロ研究生"],
    a: 1,
    exp: "9人全員での公式楽曲です。楽曲一覧の公式楽曲タブから聴けます。",
    link: "songs.html",
    linkLabel: "楽曲一覧（公式楽曲）",
    en: {
      q: "Who sings \"Mile Stone\"?",
      opts: ["Nono Nono", "All 9 MilliPro members", "MilliPro Trainee"],
      exp: "An official song sung by all 9 members. You can listen to it in the official songs tab of the song list.",
      linkLabel: "Song List (Official Songs)"
    }
  },
  {
    k: "q22",
    q: "音ノ乃のののファンネームは？",
    opts: ["ののっこ", "ノノフレンズ", "ののの隊"],
    a: 2,
    exp: "ファンネームは「ののの隊」。「ののの音々ネ！」など独特の語彙でも知られます。",
    link: "nono.html",
    linkLabel: "音ノ乃のの Member Guide",
    en: {
      q: "What is Nono Nono's fan name?",
      opts: ["Nonokko", "Nono Friends", "Nonono-tai"],
      exp: "Her fan name is \"Nonono-tai\". She's also known for unique vocabulary like \"NONONO NENE!\".",
      linkLabel: "Nono Nono Member Guide"
    }
  },
  {
    k: "q23",
    q: "あくび・でもんすぺーどの誕生日は？",
    opts: ["1月19日", "10月31日", "11月3日"],
    a: 1,
    exp: "10月31日（ハロウィン生まれの悪魔）。ちなみに1月19日は初配信の日です。",
    link: "akubi.html",
    linkLabel: "あくび・でもんすぺーど Member Guide",
    en: {
      q: "When is Akubi Demonspade's birthday?",
      opts: ["Jan 19", "Oct 31", "Nov 3"],
      exp: "October 31 (a Halloween-born demon). By the way, January 19 is the day of her first stream.",
      linkLabel: "Akubi Demonspade Member Guide"
    }
  },
  {
    k: "q24",
    q: "夕霧レイの初配信の直前、チャンネル登録者数は？",
    opts: ["7万人", "5万人", "6万人"],
    a: 2,
    exp: "初配信の直前は6万人で、当日には7万人を突破。霧のスナイパーが描く物語に注目が集まりました。",
    link: "rei.html",
    linkLabel: "夕霧レイ Member Guide",
    en: {
      q: "How many subscribers did Yugiri Ray have right before her first stream?",
      opts: ["70K", "50K", "60K"],
      exp: "60K right before her first stream, breaking 70K that day. All eyes are on the story the Sniper of the Mist is writing.",
      linkLabel: "Yugiri Ray Member Guide"
    }
  }
];

/* クレジット（情報提供・参考などのデータ提供・協力へのお礼を掲載する専用スペース）
   role: 関わり方（en.role で英語表記）、links: 掲載リンク */
const CREDITS = [
  {
    name: "しむか。 様",
    role: "情報提供・参考",
    en: {
      role: "Information & Reference"
    },
    links: [
      { label: "眠雲ツクリ 歌枠セトリ (note)", url: "https://note.com/usg_2325/n/nec071c13d76a" },
      { label: "X (@SiMc4_Mili)", url: "https://x.com/SiMc4_Mili" }
    ]
  }
];
