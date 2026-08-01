const SITE_CONFIG = {
  name: "Milli Orbis",
  tagline: "ここを開けば、今のミリプロのすべてにアクセスできる",
  disclaimer: "本サイトはファンが運営する非公式のポータルサイトです。ミリプロ公式様とは一切関係ありません。",
  sourceNote: "タレント情報の出典: ミリプロ公式サイト（https://milpr.com/）・ミリプロ非公式wiki（https://wikiwiki.jp/millipro10/）・Wikipedia。メンカラーはファン間の慣習色です。"
};

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
    fanMark: "🐺🍫",
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
    catchphrase: "あなたと好きでつながりたい。あなたと好きを共有したい。",
    introVoice: "assets/voices/konomi_intro.mp3",
    deco: {
      label: "🐾",
      shape: "paw",
      floats: [
        { ch: "💖", x: 8, y: 14, size: 74, dur: 13 },
        { ch: "🐾", x: 88, y: 10, size: 60, dur: 15 },
        { ch: "🐾", x: 12, y: 74, size: 54, dur: 17 },
        { ch: "💕", x: 86, y: 82, size: 48, dur: 12 }
      ]
    },
    featuredVideos: [],
    voice: "",
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
    fanMark: "🎧🤍",
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
    introVoice: "assets/voices/nono_intro.mp3",
    deco: {
      label: "♪",
      floats: [
        { ch: "♪", x: 10, y: 16, size: 70, dur: 13 },
        { ch: "◆", x: 86, y: 10, size: 52, dur: 16 },
        { ch: "♪", x: 13, y: 78, size: 46, dur: 14 },
        { ch: "♪", x: 72, y: 85, size: 58, dur: 12 }
      ]
    },
    featuredVideos: [],
    voice: "",
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
    fanMark: "😈♠️",
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
    catchphrase: "あくびとおまえらが楽しければそれでいい。",
    introVoice: "assets/voices/akubi_intro.mp3",
    deco: {
      label: "♠",
      floats: [
        { ch: "♠", x: 9, y: 15, size: 66, dur: 14 },
        { ch: "😈", x: 87, y: 12, size: 58, dur: 15 },
        { ch: "♠", x: 13, y: 76, size: 50, dur: 13 },
        { ch: "🔥", x: 78, y: 83, size: 44, dur: 12 }
      ]
    },
    featuredVideos: [],
    voice: "",
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
    fanMark: "⛩️🔅",
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
    introVoice: "assets/voices/koma_intro.mp3",
    deco: {
      label: "🌀",
      floats: [
        { ch: "🔶", x: 9, y: 15, size: 58, dur: 13 },
        { ch: "🔹", x: 88, y: 12, size: 54, dur: 15 },
        { ch: "🪀", x: 12, y: 78, size: 44, dur: 13 },
        { ch: "🌀", x: 82, y: 82, size: 52, dur: 12 }
      ]
    },
    featuredVideos: [],
    voice: "",
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
    fanMark: "🦦💛",
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
    introVoice: "assets/voices/raco_intro.mp3",
    deco: {
      label: "🐚",
      floats: [
        { ch: "🦦", x: 8, y: 14, size: 64, dur: 13 },
        { ch: "🐚", x: 88, y: 10, size: 56, dur: 15 },
        { ch: "🐚", x: 12, y: 76, size: 44, dur: 12 },
        { ch: "🌊", x: 80, y: 84, size: 58, dur: 12 }
      ]
    },
    featuredVideos: [],
    voice: "",
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
    fanMark: "🌙🫧",
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
    introVoice: "assets/voices/yura_intro.mp3",
    deco: {
      label: "🫧",
      shape: "bub",
      floats: [
        { ch: "🪼", x: 88, y: 12, size: 72, dur: 14 },
        { ch: "🫧", x: 8, y: 18, size: 56, dur: 13 },
        { ch: "🫧", x: 15, y: 80, size: 40, dur: 12 },
        { ch: "🫧", x: 78, y: 78, size: 48, dur: 16 }
      ]
    },
    featuredVideos: [],
    voice: "",
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
    fanMark: "🌈🖍",
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
    introVoice: "assets/voices/nuhu_intro.mp3",
    deco: {
      label: "🖊️",
      shape: "wheel",
      floats: [
        { ch: "🖊️", x: 9, y: 16, size: 58, dur: 13 },
        { ch: "🎨", x: 86, y: 14, size: 54, dur: 14 },
        { ch: "✏️", x: 14, y: 76, size: 44, dur: 13 },
        { ch: "🌈", x: 80, y: 86, size: 56, dur: 13 }
      ]
    },
    featuredVideos: [],
    voice: "",
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
    fanMark: "☁️🔧",
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
    introVoice: "assets/voices/tsukuri_intro.mp3",
    deco: {
      label: "☁️",
      shape: "zzz",
      floats: [
        { ch: "☁️", x: 88, y: 12, size: 76, dur: 14 },
        { ch: "☁️", x: 10, y: 70, size: 56, dur: 15 },
        { ch: "💤", x: 78, y: 80, size: 46, dur: 13 }
      ]
    },
    featuredVideos: [],
    voice: "",
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
    fanMark: "🌂🖤",
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
    introVoice: "assets/voices/liz_intro.mp3",
    deco: {
      label: "💧",
      shape: "rain",
      floats: [
        { ch: "💧", x: 8, y: 14, size: 54, dur: 13 },
        { ch: "🌧️", x: 86, y: 10, size: 64, dur: 15 },
        { ch: "💧", x: 14, y: 78, size: 42, dur: 13 }
      ]
    },
    featuredVideos: [],
    voice: "",
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
    fanMark: "🩵🥽",
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
    introVoice: "assets/voices/rei_intro.mp3",
    deco: {
      label: "◎",
      shape: "cross",
      floats: [
        { ch: "◎", x: 9, y: 15, size: 64, dur: 13 },
        { ch: "🎯", x: 86, y: 12, size: 56, dur: 15 },
        { ch: "◎", x: 12, y: 78, size: 44, dur: 13 }
      ]
    },
    featuredVideos: [],
    voice: "",
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
    fanMark: "🦭",
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
    links: { yt: "", x: "", tiktok: "" },
    img: "images/talents/milli%20chan.JPEG",
    icon: "images/icon/milli%20chan_profile.JPEG",
    catchphrase: "",
    introVoice: "",
    featuredVideos: [],
    voice: "",
    intro: ""
  }
];

const COUNTDOWN = [
  { id: "koma-birthday", label: "小廻こま 誕生日", date: "2026-08-01T00:00:00", note: "こまめいと、お祝いだ！", url: "koma.html" },
  { id: "nuhu-anniv", label: "虹深°ぬふ デビュー1周年", date: "2026-08-08T00:00:00", note: "ぷかぬファミリー、お祝いだ！", url: "nuhu.html" },
  { id: "resort", label: "ミリプロリゾート", date: "2026-08-29T10:00:00", note: "秋葉原UDXにて開催", url: "https://milpr.com/millipro_resort" },
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
    url: "https://milpr.com/millipro_resort"
  },
  {
    date: "2026-08-14",
    tag: "コンテスト",
    title: "ミリ創作 ゲーム・インタラクティブ部門 募集締切",
    desc: "Webサイト・ファンサイトが対象の部門です。募集は2026年8月14日まで。",
    url: "https://milpr.com/sosaku"
  },
  {
    date: "2026-07-11",
    tag: "新メンバー",
    title: "夕霧レイ デビュー",
    desc: "ミリプロUNIに「霧のスナイパー」夕霧レイが加入。初配信当日に登録者7万人を突破しました。",
    url: "rei.html"
  }
];

const LAUNCHERS = [
  { icon: "images/icon/Milli%20Unishare-icon.PNG", shape: { char: "U", grad: ["#00bec4", "#00878c"] }, name: "Milli Unishare", desc: "配信・動画の情報を共有するファンサービス", url: "https://milli-unishare.onrender.com/" },
  { icon: "images/icon/Millipro%20Chronicle-icon.jpeg", shape: { char: "C", grad: ["#f7cb0e", "#e6a700"] }, name: "Millipro Chronicle", desc: "ミリプロの歴史を記録するファン資料集", url: "https://millipro-chronicle.onrender.com/" },
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
  { type: "event", date: "2026-08-29", title: "ミリプロリゾート", desc: "秋葉原UDXにて開催", url: "https://milpr.com/millipro_resort" },
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
  "https://x.com/Mil_Pro_/status/2019606993233674580",
  "https://x.com/Mil_Pro_/status/1679398099905810432",
  "",
  "",
  ""
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
  { date: "2026/7/11", title: "夕霧レイ デビュー（ミリプロUNI）" }
];

const YOUTUBE = {
  dataUrl: "data/youtube.json",
  maxVideos: 10,
  maxStreams: 8
};
