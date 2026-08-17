/* ============================================
   songs-extra.js — 手動メンテナンス用の楽曲補助データ
   data/songs.js（自動生成・変更しないでください）に加えて、
   曲マスター（原曲情報）と歌枠配信（1動画に複数曲）を管理する。
   songs.html で data/songs.js の後に読み込まれ、実行時にマージされる。

   meta:    カバー曲の「key」（data/songs.js の covers[].key）に対応する原曲情報。
            artist を入れると曲カードに「原曲アーティスト」として表示される。
            （曲数が多いので、分かる範囲から少しずつ登録でOK）
   karaoke: 歌枠配信アーカイブ。1本の配信内で歌われた曲をタイムスタンプ（秒）付きで列挙。
            曲の key が既存カバーと一致すれば同一曲に統合、一致しなければ新規曲として表示される。
   ============================================ */
window.SONGS_EXTRA = {
  "meta": {
    "ヒバナ-deco*27shortby": {
      "title": "ヒバナ -Reloaded-",
      "artist": "DECO*27",
      "album": "アンドロイドガール",
      "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ed/ce/7a/edce7af7-1bf6-5ac2-9ea6-2ac853af7053/5021732654168.jpg/600x600bb.jpg"
    },
    "モニタリング-deco*27shortby": {
      "title": "モニタリング (Best Friend Remix)",
      "artist": "DECO*27",
      "album": "モニタリング (Best Friend Remix) - Single",
      "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/af/0c/c1/af0cc1d0-56a8-1f38-2be8-898e0c7fe40a/4511820-61088.jpg/600x600bb.jpg"
    },
    "嫌々-halvesshortby": {
      "title": "嫌々",
      "artist": "HALVES",
      "album": "嫌々 - Single",
      "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/48/b8/f4/48b8f4c8-726b-b8c7-e5a1-8c53a057d38c/4547366665369.jpg/600x600bb.jpg"
    },
    "プレイ-gigashortby": {
      "title": "プレイ",
      "artist": "Giga",
      "album": "プレイ - Single",
      "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/52/7f/c0/527fc024-af02-12cd-6f12-df4031485abe/199350480300.jpg/600x600bb.jpg"
    }
  },
  "karaoke": [
    {
      "id": "iq8oPWGGE58",
      "memberId": "koma",
      "publishedAt": "2026-03-25",
      "title": "【 初配信 】みんなの一コマ、こまにちょーだい！【小廻こま/ミリプロ】",
      "duration": 4771,
      "songs": [
        {
          "key": "ひとりごつ",
          "title": "ひとりごつ / ハチワレ",
          "start": 419,
          "end": 3587,
          "en": {
            "title": "Hitorigotsu / Hachiware"
          }
        },
        {
          "key": "みむかｩわナイストライ",
          "title": "みむかｩわナイストライ / ぬぬぬぬぬぬぬ…….",
          "start": 3588,
          "end": 3903,
          "en": {
            "title": "Mimu Kawa Nice Try / Nununununununu……."
          }
        },
        {
          "key": "フォニイ",
          "title": "フォニイ / ツミキ",
          "start": 3904,
          "end": 4408,
          "en": {
            "title": "Phonii / Tsumiki"
          }
        },
        {
          "key": "神のまにまに",
          "title": "神のまにまに / れるりり",
          "start": 4409,
          "end": 4771,
          "en": {
            "title": "God's time / Reruri"
          }
        }
      ]
    },
    {
      "id": "FwrdC8aGcDo",
      "memberId": "koma",
      "publishedAt": "2026-03-25",
      "title": "【 歌枠 】こまが元気に歌っちゃうんです【小廻こま/ミリプロ】#ミリプロ24時間配信リレー",
      "duration": 2443,
      "songs": [
        {
          "key": "start",
          "title": "StaRt / Mrs.GREEN APPLE",
          "start": 247,
          "end": 606
        },
        {
          "key": "め組のひと",
          "title": "め組のひと / ラッツ&スター",
          "start": 607,
          "end": 961,
          "en": {
            "title": "Megumi no Hito / Rats & Stars"
          }
        },
        {
          "key": "123",
          "title": "1・2・3 / After the Rain",
          "start": 962,
          "end": 1419
        },
        {
          "key": "booo!",
          "title": "Booo! / TOKOTOKO",
          "start": 1420,
          "end": 1766
        },
        {
          "key": "夜もすがら君想ふ",
          "title": "夜もすがら君想ふ / TOKOTOKO",
          "start": 1767,
          "end": 2170,
          "en": {
            "title": "I think about you at night / TOKOTOKO"
          }
        },
        {
          "key": "怪獣の花唄",
          "title": "怪獣の花唄 / Vaundy",
          "start": 2171,
          "end": 2443,
          "en": {
            "title": "Kaiju no Hanauta / Vaundy"
          }
        }
      ]
    },
    {
      "id": "XS8DgTFDq4M",
      "memberId": "koma",
      "publishedAt": "2026-03-25",
      "title": "【 歌枠 】5万人耐久！！こま！！歌います！！【小廻こま/ミリプロ】",
      "duration": 6776,
      "songs": [
        {
          "key": "小さな恋のうた",
          "title": "小さな恋のうた / MONGOL800",
          "start": 338,
          "end": 800,
          "en": {
            "title": "Little love song / MONGOL800"
          }
        },
        {
          "key": "強風オルバック",
          "title": "強風オールバック / ゆこぴ",
          "start": 801,
          "end": 1214,
          "en": {
            "title": "Strong Wind All Back / Yukopi"
          }
        },
        {
          "key": "可愛くなりたい",
          "title": "可愛くなりたい / HoneyWorks",
          "start": 1215,
          "end": 1503,
          "en": {
            "title": "I want to be cute / HoneyWorks"
          }
        },
        {
          "key": "欲望に落ちた青年団",
          "title": "欲望に落ちた青年団 / ONEOKROCK",
          "start": 1504,
          "end": 2050,
          "en": {
            "title": "Youth group that fell into desire / ONEOKROCK"
          }
        },
        {
          "key": "かいしんのいちげき！",
          "title": "かいしんのいちげき！ / 天月‐あまつき",
          "start": 2051,
          "end": 2503,
          "en": {
            "title": "Kaishin no Ichigeki! / Amatsuki"
          }
        },
        {
          "key": "夜もすがら君想ふ",
          "title": "夜もすがら君想ふ / TOKOTOKO",
          "start": 2504,
          "end": 3240,
          "en": {
            "title": "I think about you at night / TOKOTOKO"
          }
        },
        {
          "key": "テレパシ",
          "title": "テレパシ / DECO*27",
          "start": 3241,
          "end": 3461,
          "en": {
            "title": "Telepathy / DECO*27"
          }
        },
        {
          "key": "恋人ごっこ",
          "title": "恋人ごっこ / マカロニえんぴつ",
          "start": 3462,
          "end": 3670,
          "en": {
            "title": "Lover Pretend / Macaroni Pencil"
          }
        },
        {
          "key": "言って。",
          "title": "言って。 / ヨルシカ",
          "start": 3671,
          "end": 4095,
          "en": {
            "title": "Say it. / Yorushika"
          }
        },
        {
          "key": "シャルル",
          "title": "シャルル / バルーン",
          "start": 4096,
          "end": 4440,
          "en": {
            "title": "Charles / Balloon"
          }
        },
        {
          "key": "ダンスロボットダンス",
          "title": "ダンスロボットダンス / ナユタン星人",
          "start": 4441,
          "end": 4765,
          "en": {
            "title": "Dance Robot Dance / Nayutan Alien"
          }
        },
        {
          "key": "ダダダダ天使",
          "title": "ダダダダ天使 / ナナヲアカリ",
          "start": 4766,
          "end": 5375,
          "en": {
            "title": "Dada Dada Angel / Nanawo Akari"
          }
        },
        {
          "key": "おじゃま虫",
          "title": "おじゃま虫 / DECO*27",
          "start": 5376,
          "end": 5776,
          "en": {
            "title": "Ojama Mushi / DECO*27"
          }
        },
        {
          "key": "サラマンダ",
          "title": "サラマンダー / DECO*27",
          "start": 5777,
          "end": 6776,
          "en": {
            "title": "Salamander / DECO*27"
          }
        }
      ]
    },
    {
      "id": "NU3KwLttdEs",
      "memberId": "koma",
      "publishedAt": "2026-03-25",
      "title": "【 歌枠 】デビューして100日！皆いつもありがと歌枠！【小廻こま/ミリプロ】",
      "duration": 9015,
      "songs": [
        {
          "key": "君じゃなきゃダメみたい",
          "title": "君じゃなきゃダメみたい / オーイシマサヨシ",
          "start": 566,
          "end": 1308,
          "en": {
            "title": "I feel like I can't do it without you / Masayoshi Oishi"
          }
        },
        {
          "key": "愛言葉ⅲ",
          "title": "愛言葉Ⅲ / DECO*27",
          "start": 1309,
          "end": 2102,
          "en": {
            "title": "Love words Ⅲ / DECO*27"
          }
        },
        {
          "key": "オドルプ",
          "title": "オドループ / フレデリック",
          "start": 2103,
          "end": 2762,
          "en": {
            "title": "Odorup / Frédéric"
          }
        },
        {
          "key": "トンデモワンダズ",
          "title": "トンデモワンダーズ / sasakure",
          "start": 2763,
          "end": 3265,
          "en": {
            "title": "Tondemo Wonders / sasakure"
          }
        },
        {
          "key": "gong",
          "title": "GONG / WANIMA",
          "start": 3266,
          "end": 3889
        },
        {
          "key": "ray",
          "title": "ray / BUMP OF CHICKEN",
          "start": 3890,
          "end": 4190
        },
        {
          "key": "ソワレ",
          "title": "ソワレ / 星街すいせい",
          "start": 4191,
          "end": 4815,
          "en": {
            "title": "Soiree / Hoshimachi Suisei"
          }
        },
        {
          "key": "シュガソングとビタステップ",
          "title": "シュガーソングとビターステップ / UNISON SQUARE GARDEN",
          "start": 4816,
          "end": 5878,
          "en": {
            "title": "Sugar Song and Bitter Step / UNISON SQUARE GARDEN"
          }
        },
        {
          "key": "千本桜",
          "title": "千本桜 / 黒うさP",
          "start": 5879,
          "end": 6141,
          "en": {
            "title": "Senbonzakura/KurousaP"
          }
        },
        {
          "key": "栞",
          "title": "栞 / クリープハイプ",
          "start": 6142,
          "end": 6829,
          "en": {
            "title": "Shiori / Creep Hype"
          }
        },
        {
          "key": "夜明けと蛍",
          "title": "夜明けと蛍 / N-buna",
          "start": 6830,
          "end": 7637,
          "en": {
            "title": "Dawn and fireflies / N-buna"
          }
        },
        {
          "key": "夜もすがら君想ふ",
          "title": "夜もすがら君想ふ / TOKOTOKO",
          "start": 7638,
          "end": 9015,
          "en": {
            "title": "I think about you at night / TOKOTOKO"
          }
        }
      ]
    },
    {
      "id": "iInmaEcf6EE",
      "memberId": "koma",
      "publishedAt": "2026-03-25",
      "title": "【 歌枠 】夏を感じる今日この頃【小廻こま/ミリプロ】",
      "duration": 6514,
      "songs": [
        {
          "key": "少女レイ",
          "title": "少女レイ / みきとP",
          "start": 596,
          "end": 1180,
          "en": {
            "title": "Girl Rei / Mikito P"
          }
        },
        {
          "key": "青と夏",
          "title": "青と夏 / Mrs. GREEN APPLE",
          "start": 1181,
          "end": 1900,
          "en": {
            "title": "Blue and Summer / Mrs. GREEN APPLE"
          }
        },
        {
          "key": "イケナイ太陽",
          "title": "イケナイ太陽 / ORANGE RANGE",
          "start": 1901,
          "end": 2548,
          "en": {
            "title": "Naughty Taiyo / ORANGE RANGE"
          }
        },
        {
          "key": "いかないで",
          "title": "いかないで / 歌愛ユキ",
          "start": 2549,
          "end": 3194,
          "en": {
            "title": "Don't go / Utaai Yuki"
          }
        },
        {
          "key": "青空のラプソディ",
          "title": "青空のラプソディ / fhána",
          "start": 3195,
          "end": 3708,
          "en": {
            "title": "Rhapsody of the Blue Sky / fhana"
          }
        },
        {
          "key": "ただ君に晴れ",
          "title": "ただ君に晴れ / ヨルシカ",
          "start": 3709,
          "end": 4075,
          "en": {
            "title": "It's just sunny for you / Yorushika"
          }
        },
        {
          "key": "夜明けと蛍",
          "title": "夜明けと蛍 / N-buna",
          "start": 4076,
          "end": 4532,
          "en": {
            "title": "Dawn and fireflies / N-buna"
          }
        },
        {
          "key": "高音厨音域テスト",
          "title": "高音厨音域テスト / 木村わいP",
          "start": 4533,
          "end": 5425,
          "en": {
            "title": "Treble range test / Kimura WaiP"
          }
        },
        {
          "key": "イケナイ太陽",
          "title": "イケナイ太陽 / ORANGE RANGE",
          "start": 5426,
          "end": 6514,
          "en": {
            "title": "Naughty Taiyo / ORANGE RANGE"
          }
        }
      ]
    },
    {
      "id": "o0VxkMtD_Fo",
      "memberId": "koma",
      "publishedAt": "2026-03-25",
      "title": "【 歌枠 】ミリプロサマー盛り上げ隊！【小廻こま/ミリプロ】#ミリプロサマー2025",
      "duration": 2628,
      "songs": [
        {
          "key": "ロケットサイダ",
          "title": "ロケットサイダー / ナユタン星人",
          "start": 92,
          "end": 323,
          "en": {
            "title": "Rocket Cider / Nayutan Alien"
          }
        },
        {
          "key": "夏祭り",
          "title": "夏祭り / Whiteberry",
          "start": 324,
          "end": 629,
          "en": {
            "title": "Summer Festival / Whiteberry"
          }
        },
        {
          "key": "君と夏フェス",
          "title": "君と夏フェス / SHISHAMO",
          "start": 630,
          "end": 944,
          "en": {
            "title": "You and Summer Festival / SHISHAMO"
          }
        },
        {
          "key": "いかないで",
          "title": "いかないで / 歌愛ユキ",
          "start": 945,
          "end": 1136,
          "en": {
            "title": "Don't go / Utaai Yuki"
          }
        },
        {
          "key": "サマタイムレコド",
          "title": "サマータイムレコード / じん",
          "start": 1137,
          "end": 1480,
          "en": {
            "title": "Summer Time Record / Jin"
          }
        },
        {
          "key": "青空のラプソディ",
          "title": "青空のラプソディ / fhána",
          "start": 1481,
          "end": 1828,
          "en": {
            "title": "Rhapsody of the Blue Sky / fhana"
          }
        },
        {
          "key": "イケナイ太陽",
          "title": "イケナイ太陽 / ORANGE RANGE",
          "start": 1829,
          "end": 2067,
          "en": {
            "title": "Naughty Taiyo / ORANGE RANGE"
          }
        },
        {
          "key": "お気に召すまま",
          "title": "お気に召すまま / Eve",
          "start": 2068,
          "end": 2335,
          "en": {
            "title": "As You Like It / Eve"
          }
        },
        {
          "key": "夜もすがら君想ふ",
          "title": "夜もすがら君想ふ / TOKOTOKO",
          "start": 2336,
          "end": 2628,
          "en": {
            "title": "I think about you at night / TOKOTOKO"
          }
        }
      ]
    },
    {
      "id": "NveFlnBWbHs",
      "memberId": "koma",
      "publishedAt": "2026-03-25",
      "title": "【 歌枠 】声出しさせてください【小廻こま/ミリプロ】",
      "duration": 4994,
      "songs": [
        {
          "key": "helpme,erinnnnnn!!",
          "title": "Help me, ERINNNNNN!! / ビートまりお",
          "start": 328,
          "end": 772,
          "en": {
            "title": "Help me, ERINNNNNN!! / Beat Mario"
          }
        },
        {
          "key": "バラライカ",
          "title": "バラライカ / 月島きらり",
          "start": 773,
          "end": 1094,
          "en": {
            "title": "Balalaika / Kirari Tsukishima"
          }
        },
        {
          "key": "ひゅるりらぱっぱ",
          "title": "ひゅるりらぱっぱ / tuki.",
          "start": 1095,
          "end": 1393,
          "en": {
            "title": "Hyururirapappa / tuki."
          }
        },
        {
          "key": "レッツゴ陰陽師",
          "title": "レッツゴー陰陽師 / 矢部野彦麿&琴姫With坊主ダンサーズ",
          "start": 1394,
          "end": 1781,
          "en": {
            "title": "Let's Go Onmyoji / Yabe Nohikomaro & Kotohime With Bozu Dancers"
          }
        },
        {
          "key": "ようこそジャパリパクへ",
          "title": "ようこそジャパリパークへ / どうぶつビスケッツ×PPP",
          "start": 1782,
          "end": 2111,
          "en": {
            "title": "Welcome to Japari Park / Animal Biscuits x PPP"
          }
        },
        {
          "key": "少女レイ",
          "title": "少女レイ / みきとＰ",
          "start": 2112,
          "end": 2392,
          "en": {
            "title": "Girl Rei / Mikito P"
          }
        },
        {
          "key": "さくらんぼ",
          "title": "さくらんぼ / 大塚愛",
          "start": 2393,
          "end": 2834,
          "en": {
            "title": "Cherry / Ai Otsuka"
          }
        },
        {
          "key": "め組のひと",
          "title": "め組のひと / ラッツ&スター",
          "start": 2835,
          "end": 3144,
          "en": {
            "title": "Megumi no Hito / Rats & Stars"
          }
        },
        {
          "key": "おとせサンダ",
          "title": "おとせサンダー / ぼっちぼろまる",
          "start": 3145,
          "end": 3727,
          "en": {
            "title": "Otose Thunder / Bocchiboromaru"
          }
        },
        {
          "key": "恋愛裁判",
          "title": "恋愛裁判 / 40mP",
          "start": 3728,
          "end": 4010,
          "en": {
            "title": "Love Trial / 40mP"
          }
        },
        {
          "key": "高音厨音域テスト",
          "title": "高音厨音域テスト / 木村わいP",
          "start": 4011,
          "end": 4206,
          "en": {
            "title": "Treble range test / Kimura WaiP"
          }
        },
        {
          "key": "bling-bang-bang-born",
          "title": "Bling-Bang-Bang-Born / Creepy Nuts",
          "start": 4207,
          "end": 4994
        }
      ]
    },
    {
      "id": "DPmJUiGIGd4",
      "memberId": "koma",
      "publishedAt": "2026-03-25",
      "title": "【 歌枠 】ピアノ ゆったり歌う【小廻こま/ミリプロ】",
      "duration": 5762,
      "songs": [
        {
          "key": "金木犀",
          "title": "金木犀 / くじら",
          "start": 314,
          "end": 409,
          "en": {
            "title": "Osmanthus / Whale"
          }
        },
        {
          "key": "花の塔",
          "title": "花の塔 / さユり",
          "start": 410,
          "end": 618,
          "en": {
            "title": "Flower Tower / Sayuri"
          }
        },
        {
          "key": "ハイドアンドシク",
          "title": "ハイドアンド・シーク / NOMELON NOLEMON",
          "start": 619,
          "end": 1008,
          "en": {
            "title": "Hide and Seek / NOMELON NOLEMON"
          }
        },
        {
          "key": "オツキミリサイタル",
          "title": "オツキミリサイタル / じん",
          "start": 1009,
          "end": 1356,
          "en": {
            "title": "Otsuki Recital / Jin"
          }
        },
        {
          "key": "ひゅるりらぱっぱ",
          "title": "ひゅるりらぱっぱ / tuki.",
          "start": 1357,
          "end": 1720,
          "en": {
            "title": "Hyururirapappa / tuki."
          }
        },
        {
          "key": "ソワレ",
          "title": "ソワレ / 星街すいせい",
          "start": 1721,
          "end": 1948,
          "en": {
            "title": "Soiree / Hoshimachi Suisei"
          }
        },
        {
          "key": "アスノヨゾラ哨戒班",
          "title": "アスノヨゾラ哨戒班 / Orangestar",
          "start": 1949,
          "end": 2188,
          "en": {
            "title": "Asunoyozora Patrol Team / Orangestar"
          }
        },
        {
          "key": "わたしのアル",
          "title": "わたしのアール / 和田たけあき",
          "start": 2189,
          "end": 2538,
          "en": {
            "title": "My Earl / Takeaki Wada"
          }
        },
        {
          "key": "おちゃめ機能",
          "title": "おちゃめ機能 / ゴジマジP",
          "start": 2539,
          "end": 2689,
          "en": {
            "title": "Ochame Function / Gojimaji P"
          }
        },
        {
          "key": "夕景イエスタデイ",
          "title": "夕景イエスタデイ / じん",
          "start": 2690,
          "end": 3193,
          "en": {
            "title": "Evening View Yesterday / Jin"
          }
        },
        {
          "key": "ギラギラ",
          "title": "ギラギラ / Ado",
          "start": 3194,
          "end": 3465,
          "en": {
            "title": "Glare / Ado"
          }
        },
        {
          "key": "うっせぇわ",
          "title": "うっせぇわ / Ado",
          "start": 3466,
          "end": 3694,
          "en": {
            "title": "Ussewa / Ado"
          }
        },
        {
          "key": "パプリカ",
          "title": "パプリカ / 米津玄師",
          "start": 3695,
          "end": 4083,
          "en": {
            "title": "Paprika / Kenshi Yonezu"
          }
        },
        {
          "key": "神のまにまに",
          "title": "神のまにまに / れるりり",
          "start": 4084,
          "end": 4584,
          "en": {
            "title": "God's time / Reruri"
          }
        },
        {
          "key": "千本桜",
          "title": "千本桜 / 黒うさP",
          "start": 4585,
          "end": 5762,
          "en": {
            "title": "Senbonzakura/KurousaP"
          }
        }
      ]
    },
    {
      "id": "2d_hNkySnJw",
      "memberId": "koma",
      "publishedAt": "2026-03-25",
      "title": "【 歌枠 】12万人耐久！ぷち告知あり！【小廻こま/ミリプロ】",
      "duration": 11081,
      "songs": [
        {
          "key": "チェリポップ",
          "title": "チェリーポップ / DECO*27",
          "start": 572,
          "end": 802,
          "en": {
            "title": "Cherry Pop / DECO*27"
          }
        },
        {
          "key": "ひとりごつ",
          "title": "ひとりごつ / ハチワレ",
          "start": 803,
          "end": 994,
          "en": {
            "title": "Hitorigotsu / Hachiware"
          }
        },
        {
          "key": "ようこそジャパリパクへ",
          "title": "ようこそジャパリパークへ / どうぶつビスケッツ×PPP",
          "start": 995,
          "end": 1349,
          "en": {
            "title": "Welcome to Japari Park / Animal Biscuits x PPP"
          }
        },
        {
          "key": "パンダヒロ",
          "title": "パンダヒーロー / ハチ",
          "start": 1350,
          "end": 1665,
          "en": {
            "title": "Panda Hero / Hachi"
          }
        },
        {
          "key": "脱法ロック",
          "title": "脱法ロック / Neru",
          "start": 1666,
          "end": 1998,
          "en": {
            "title": "Breaking the law / Neru"
          }
        },
        {
          "key": "㋰責任集合体",
          "title": "㋰責任集合体 / マサラダ",
          "start": 1999,
          "end": 2590,
          "en": {
            "title": "㋰Responsibility collective/Masalada"
          }
        },
        {
          "key": "ワルズエンドダンスホル",
          "title": "ワールズエンド・ダンスホール / ヒトリエ",
          "start": 2591,
          "end": 2803,
          "en": {
            "title": "World's End Dance Hall / Hitrie"
          }
        },
        {
          "key": "妄想税",
          "title": "妄想税 / ARAKI",
          "start": 2804,
          "end": 3313,
          "en": {
            "title": "Delusion tax / ARAKI"
          }
        },
        {
          "key": "ジャンキナイトタウンオケストラ",
          "title": "ジャンキーナイトタウンオーケストラ / すりぃ",
          "start": 3314,
          "end": 3600,
          "en": {
            "title": "Junkie Night Town Orchestra / Suri"
          }
        },
        {
          "key": "かくしん的☆めたまるふぉ～ぜっ！",
          "title": "かくしん的☆めたまるふぉ～ぜっ！ / 土間うまる",
          "start": 3601,
          "end": 3872,
          "en": {
            "title": "Hidden☆Metamarufo~ze! / Umaru Doma"
          }
        },
        {
          "key": "夏祭り",
          "title": "夏祭り / Whiteberry",
          "start": 3873,
          "end": 4100,
          "en": {
            "title": "Summer Festival / Whiteberry"
          }
        },
        {
          "key": "め組のひと",
          "title": "め組のひと / ラッツ&スター",
          "start": 4101,
          "end": 4389,
          "en": {
            "title": "Megumi no Hito / Rats & Stars"
          }
        },
        {
          "key": "ポニテルとシュシュ",
          "title": "ポニーテールとシュシュ / AKB48",
          "start": 4390,
          "end": 4656,
          "en": {
            "title": "Ponytail and scrunchie / AKB48"
          }
        },
        {
          "key": "トンデモワンダズ",
          "title": "トンデモワンダーズ / sasakure",
          "start": 4657,
          "end": 4851,
          "en": {
            "title": "Tondemo Wonders / sasakure"
          }
        },
        {
          "key": "わたしの一番かわいいところ",
          "title": "わたしの一番かわいいところ / KAWAII LAB.",
          "start": 4852,
          "end": 5437,
          "en": {
            "title": "The cutest part of me / KAWAII LAB."
          }
        },
        {
          "key": "フォニイ",
          "title": "フォニイ / ツミキ",
          "start": 5438,
          "end": 5697,
          "en": {
            "title": "Phonii / Tsumiki"
          }
        },
        {
          "key": "ひとりごつ",
          "title": "ひとりごつ / ハチワレ",
          "start": 5698,
          "end": 5836,
          "en": {
            "title": "Hitorigotsu / Hachiware"
          }
        },
        {
          "key": "拝啓、少年よ",
          "title": "拝啓、少年よ / Hump Back",
          "start": 5837,
          "end": 6265,
          "en": {
            "title": "Dear Boy / Hump Back"
          }
        },
        {
          "key": "gong",
          "title": "GONG / WANIMA",
          "start": 6266,
          "end": 7012
        },
        {
          "key": "君じゃなきゃダメみたい",
          "title": "君じゃなきゃダメみたい / オーイシマサヨシ",
          "start": 7013,
          "end": 7503,
          "en": {
            "title": "I feel like I can't do it without you / Masayoshi Oishi"
          }
        },
        {
          "key": "シンタンタカタンタンタンタンメン",
          "title": "シン・タンタカタンタンタンタンメン / ぼっちぼろまる",
          "start": 7504,
          "end": 7960,
          "en": {
            "title": "Shin Tantakatantantantanmen / Bocchiboromaru"
          }
        },
        {
          "key": "いつか",
          "title": "いつか / Saucy Dog",
          "start": 7961,
          "end": 8235,
          "en": {
            "title": "Itsuka / Saucy Dog"
          }
        },
        {
          "key": "お気に召すまま",
          "title": "お気に召すまま / Eve",
          "start": 8236,
          "end": 8560,
          "en": {
            "title": "As You Like It / Eve"
          }
        },
        {
          "key": "ひゅるりらぱっぱ",
          "title": "ひゅるりらぱっぱ / tuki.",
          "start": 8561,
          "end": 8933,
          "en": {
            "title": "Hyururirapappa / tuki."
          }
        },
        {
          "key": "千本桜",
          "title": "千本桜 / 黒うさP",
          "start": 8934,
          "end": 9281,
          "en": {
            "title": "Senbonzakura/KurousaP"
          }
        },
        {
          "key": "神のまにまに",
          "title": "神のまにまに / れるりり",
          "start": 9282,
          "end": 9674,
          "en": {
            "title": "God's time / Reruri"
          }
        },
        {
          "key": "サインはb",
          "title": "サインはB / B",
          "start": 9675,
          "end": 11081,
          "en": {
            "title": "Sign is B/B"
          }
        }
      ]
    },
    {
      "id": "TiJ20dso9UA",
      "memberId": "koma",
      "publishedAt": "2026-03-25",
      "title": "【 歌枠 】デビュー半年！？お披露目あり！？🧡【小廻こま/ミリプロ】",
      "duration": 6000,
      "songs": [
        {
          "key": "123",
          "title": "1・2・3 / After the Rain",
          "start": 522,
          "end": 1149
        },
        {
          "key": "愛言葉ⅲ",
          "title": "愛言葉Ⅲ / DECO*27",
          "start": 1150,
          "end": 1782,
          "en": {
            "title": "Love words Ⅲ / DECO*27"
          }
        },
        {
          "key": "セプテンバさん",
          "title": "セプテンバーさん / RADWIMPS",
          "start": 1783,
          "end": 2221,
          "en": {
            "title": "September-san / RADWIMPS"
          }
        },
        {
          "key": "ただ声一つ",
          "title": "ただ声一つ / ロクデナシ",
          "start": 2222,
          "end": 4417,
          "en": {
            "title": "Just one voice / Rokudenashi"
          }
        },
        {
          "key": "鈴々",
          "title": "鈴々 / PEOPLE 1",
          "start": 4418,
          "end": 4775,
          "en": {
            "title": "Suzu / PEOPLE 1"
          }
        },
        {
          "key": "絶頂讃",
          "title": "絶頂讃歌 / 和ぬか",
          "start": 4776,
          "end": 5162,
          "en": {
            "title": "Climax Hymn / Wanuka"
          }
        },
        {
          "key": "神のまにまに",
          "title": "神のまにまに / れるりり",
          "start": 5163,
          "end": 5431,
          "en": {
            "title": "God's time / Reruri"
          }
        },
        {
          "key": "夜もすがら君想ふ",
          "title": "夜もすがら君想ふ / TOKOTOKO",
          "start": 5432,
          "end": 6000,
          "en": {
            "title": "I think about you at night / TOKOTOKO"
          }
        }
      ]
    },
    {
      "id": "DEuUyvaGGcU",
      "memberId": "koma",
      "publishedAt": "2026-03-25",
      "title": "【 歌枠 】はじめての高評価耐久！ついにアレが公開...！？【小廻こま/ミリプロ】",
      "duration": 8925,
      "songs": [
        {
          "key": "夜明けと蛍",
          "title": "夜明けと蛍 / N-buna",
          "start": 490,
          "end": 989,
          "en": {
            "title": "Dawn and fireflies / N-buna"
          }
        },
        {
          "key": "irisout",
          "title": "IRIS OUT / 米津玄師",
          "start": 990,
          "end": 1506,
          "en": {
            "title": "IRIS OUT / Kenshi Yonezu"
          }
        },
        {
          "key": "madheadlove",
          "title": "MAD HEAD LOVE / 米津玄師",
          "start": 1507,
          "end": 2175,
          "en": {
            "title": "MAD HEAD LOVE / Kenshi Yonezu"
          }
        },
        {
          "key": "絶頂讃",
          "title": "絶頂讃歌 / 和ぬか",
          "start": 2176,
          "end": 2425,
          "en": {
            "title": "Climax Hymn / Wanuka"
          }
        },
        {
          "key": "ただ声一つ",
          "title": "ただ声一つ / ロクデナシ",
          "start": 2426,
          "end": 3010,
          "en": {
            "title": "Just one voice / Rokudenashi"
          }
        },
        {
          "key": "ひゅるりらぱっぱ",
          "title": "ひゅるりらぱっぱ / tuki.",
          "start": 3011,
          "end": 3319,
          "en": {
            "title": "Hyururirapappa / tuki."
          }
        },
        {
          "key": "helpme,erinnnnnn!!",
          "title": "Help me, ERINNNNNN!! / ビートまりお",
          "start": 3320,
          "end": 4145,
          "en": {
            "title": "Help me, ERINNNNNN!! / Beat Mario"
          }
        },
        {
          "key": "夜もすがら君想ふ",
          "title": "夜もすがら君想ふ / TOKOTOKO",
          "start": 4146,
          "end": 4408,
          "en": {
            "title": "I think about you at night / TOKOTOKO"
          }
        },
        {
          "key": "セプテンバさん",
          "title": "セプテンバーさん / RADWIMPS",
          "start": 4409,
          "end": 5099,
          "en": {
            "title": "September-san / RADWIMPS"
          }
        },
        {
          "key": "千本桜",
          "title": "千本桜 / 黒うさP",
          "start": 5100,
          "end": 8925,
          "en": {
            "title": "Senbonzakura/KurousaP"
          }
        }
      ]
    },
    {
      "id": "UXM3g3IU_Oo",
      "memberId": "koma",
      "publishedAt": "2026-03-25",
      "title": "【 歌枠 】のんびりうたう【小廻こま/ミリプロ】",
      "duration": 9299,
      "songs": [
        {
          "key": "ピスサイン",
          "title": "ピースサイン / 米津玄師",
          "start": 573,
          "end": 857,
          "en": {
            "title": "Peace Sign / Kenshi Yonezu"
          }
        },
        {
          "key": "イケナイ太陽",
          "title": "イケナイ太陽 / ORANGE RANGE",
          "start": 858,
          "end": 1177,
          "en": {
            "title": "Naughty Taiyo / ORANGE RANGE"
          }
        },
        {
          "key": "シルエット",
          "title": "シルエット / KANA-BOON",
          "start": 1178,
          "end": 1458,
          "en": {
            "title": "Silhouette / KANA-BOON"
          }
        },
        {
          "key": "butter-fly",
          "title": "Butter-Fly / 和田光司",
          "start": 1459,
          "end": 1741,
          "en": {
            "title": "Butter-Fly / Koji Wada"
          }
        },
        {
          "key": "気まぐれロマンティック",
          "title": "気まぐれロマンティック / いきものがかり",
          "start": 1742,
          "end": 2208,
          "en": {
            "title": "Whimsical Romantic / Ikimonogakari"
          }
        },
        {
          "key": "そばかす",
          "title": "そばかす / JUDY AND MARY",
          "start": 2209,
          "end": 2354,
          "en": {
            "title": "Freckles / JUDY AND MARY"
          }
        },
        {
          "key": "新時代",
          "title": "新時代 / Ado",
          "start": 2355,
          "end": 2663,
          "en": {
            "title": "New era / Ado"
          }
        },
        {
          "key": "ウタカタララバイ",
          "title": "ウタカタララバイ / Ado",
          "start": 2664,
          "end": 2958,
          "en": {
            "title": "Utakatararabai / Ado"
          }
        },
        {
          "key": "ビンクスの酒",
          "title": "ビンクスの酒 / 麦わらの一味",
          "start": 2959,
          "end": 3458,
          "en": {
            "title": "Binks Sake/Straw Hat Pirates"
          }
        },
        {
          "key": "ピカチュウのうた",
          "title": "ピカチュウのうた / ピカチュウ",
          "start": 3459,
          "end": 3620,
          "en": {
            "title": "Pikachu's song / Pikachu"
          }
        },
        {
          "key": "ゴストルル",
          "title": "ゴーストルール / DECO*27",
          "start": 3621,
          "end": 4101,
          "en": {
            "title": "Ghost Rule / DECO*27"
          }
        },
        {
          "key": "ロストワンの号哭",
          "title": "ロストワンの号哭 / Neru",
          "start": 4102,
          "end": 4989,
          "en": {
            "title": "Crying of the Lost One / Neru"
          }
        },
        {
          "key": "チュルリラチュルリラダッダッダ!",
          "title": "チュルリラ・チュルリラ・ダッダッダ! / 和田たけあき",
          "start": 4990,
          "end": 6440,
          "en": {
            "title": "Churrilla, Churrilla, Da Da Da Da! / Takeaki Wada"
          }
        },
        {
          "key": "風になる",
          "title": "風になる / つじあやの",
          "start": 6441,
          "end": 9299,
          "en": {
            "title": "Becoming the wind / Ayano Tsuji"
          }
        }
      ]
    },
    {
      "id": "IZQFk5a61kA",
      "memberId": "koma",
      "publishedAt": "2026-03-25",
      "title": "【 歌枠 】デビューから300日🧡【小廻こま/ミリプロ】",
      "duration": 7421,
      "songs": [
        {
          "key": "欲望に満ちた青年団",
          "title": "欲望に満ちた青年団 / ONEOKROCK",
          "start": 428,
          "end": 630,
          "en": {
            "title": "Youth group full of desire / ONEOKROCK"
          }
        },
        {
          "key": "東京フラッシュ",
          "title": "東京フラッシュ / Vaundy",
          "start": 631,
          "end": 1309,
          "en": {
            "title": "Tokyo Flash / Vaundy"
          }
        },
        {
          "key": "ブレメン",
          "title": "ブレーメン / N-buna",
          "start": 1310,
          "end": 1746,
          "en": {
            "title": "Bremen / N-buna"
          }
        },
        {
          "key": "チャイナアドバイス",
          "title": "チャイナアドバイス / 相対性理論",
          "start": 1747,
          "end": 2232,
          "en": {
            "title": "China Advice / Theory of Relativity"
          }
        },
        {
          "key": "ノダウト",
          "title": "ノーダウト / Official髭男dism",
          "start": 2233,
          "end": 3074,
          "en": {
            "title": "No Doubt / Official Hige Dandism"
          }
        },
        {
          "key": "ソワレ",
          "title": "ソワレ / 星街すいせい",
          "start": 3075,
          "end": 3304,
          "en": {
            "title": "Soiree / Hoshimachi Suisei"
          }
        },
        {
          "key": "夜もすがら君想ふ",
          "title": "夜もすがら君想ふ / TOKOTOKO",
          "start": 3305,
          "end": 3599,
          "en": {
            "title": "I think about you at night / TOKOTOKO"
          }
        },
        {
          "key": "夜明けと蛍",
          "title": "夜明けと蛍 / N-buna",
          "start": 3600,
          "end": 4037,
          "en": {
            "title": "Dawn and fireflies / N-buna"
          }
        },
        {
          "key": "倍倍fight!",
          "title": "倍倍FIGHT! / CANDY TUNE",
          "start": 4038,
          "end": 7421,
          "en": {
            "title": "Doubou FIGHT! / CANDY TUNE"
          }
        }
      ]
    },
    {
      "id": "rVSFgsxG3Zk",
      "memberId": "koma",
      "publishedAt": "2026-03-25",
      "title": "【 告知あり！ 】30万人ありがとう！歌いきるまで終われまテン【小廻こま/ミリプロ】",
      "duration": 12879,
      "songs": [
        {
          "key": "みむかｩわナイストライ",
          "title": "みむかｩわナイストライ / ぬぬぬぬぬぬぬ…….",
          "start": 423,
          "end": 716,
          "en": {
            "title": "Mimu Kawa Nice Try / Nununununununu……."
          }
        },
        {
          "key": "トンツカタンタン",
          "title": "トンツカタンタン / クレイジーウォウウォ!!",
          "start": 717,
          "end": 1102,
          "en": {
            "title": "Tontsukatantan / Crazy Wowow!!"
          }
        },
        {
          "key": "きょういくばんぐみのテマ",
          "title": "きょういくばんぐみのテーマ / やみのおねえさん",
          "start": 1103,
          "end": 1267,
          "en": {
            "title": "The theme of today's travel bangumi / Sister in the darkness"
          }
        },
        {
          "key": "mrs.pumpkinの滑稽な夢",
          "title": "Mrs.pumpkinの滑稽な夢 / ハチ",
          "start": 1268,
          "end": 1535,
          "en": {
            "title": "Mrs.pumpkin's humorous dream / Hachi"
          }
        },
        {
          "key": "太陽系デスコ",
          "title": "太陽系デスコ / ナユタン星人",
          "start": 1536,
          "end": 1837,
          "en": {
            "title": "Solar System Desco / Nayutan Alien"
          }
        },
        {
          "key": "恋愛裁判",
          "title": "恋愛裁判 / 40mP",
          "start": 1838,
          "end": 2066,
          "en": {
            "title": "Love Trial / 40mP"
          }
        },
        {
          "key": "こちら幸福安心委員会です",
          "title": "こちら幸福安心委員会です / うたたP",
          "start": 2067,
          "end": 2429,
          "en": {
            "title": "This is the Happiness and Security Committee / UtataP"
          }
        },
        {
          "key": "チルノのパフェクトさんすう教室",
          "title": "チルノのパーフェクトさんすう教室 / IOSYS",
          "start": 2430,
          "end": 2705,
          "en": {
            "title": "Cirno's Perfect Math Classroom / IOSYS"
          }
        },
        {
          "key": "helpme,erinnnnnn!!",
          "title": "Help me, ERINNNNNN!! / ビートまりお",
          "start": 2706,
          "end": 3133,
          "en": {
            "title": "Help me, ERINNNNNN!! / Beat Mario"
          }
        },
        {
          "key": "男女",
          "title": "男女 / 太郎",
          "start": 3134,
          "end": 3336,
          "en": {
            "title": "Man and woman / Taro"
          }
        },
        {
          "key": "だから僕は音楽をやめた",
          "title": "だから僕は音楽をやめた / ヨルシカ",
          "start": 3337,
          "end": 3582,
          "en": {
            "title": "That's why I quit music / Yorushika"
          }
        },
        {
          "key": "栞",
          "title": "栞 / クリープハイプ",
          "start": 3583,
          "end": 3845,
          "en": {
            "title": "Shiori / Creep Hype"
          }
        },
        {
          "key": "おやすみ泣き声、さよなら姫",
          "title": "おやすみ泣き声、さよなら歌姫 / クリープハイプ",
          "start": 3846,
          "end": 4083,
          "en": {
            "title": "Goodnight Cry, Goodbye Diva / Creep Hype"
          }
        },
        {
          "key": "マツケンサンバⅱ",
          "title": "マツケンサンバⅡ / 松平健",
          "start": 4084,
          "end": 4383,
          "en": {
            "title": "Matsuken Samba II / Ken Matsudaira"
          }
        },
        {
          "key": "俺さ東京さ行ぐだ",
          "title": "俺さ東京さ行ぐだ / 吉幾三",
          "start": 4384,
          "end": 4886,
          "en": {
            "title": "I'm going to Tokyo / Ikuzo Yoshi"
          }
        },
        {
          "key": "イケナイ太陽",
          "title": "イケナイ太陽 / ORANGE RANGE",
          "start": 4887,
          "end": 5126,
          "en": {
            "title": "Naughty Taiyo / ORANGE RANGE"
          }
        },
        {
          "key": "ようこそジャパリパクへ",
          "title": "ようこそジャパリパークへ / どうぶつビスケッツ×PPP",
          "start": 5127,
          "end": 5550,
          "en": {
            "title": "Welcome to Japari Park / Animal Biscuits x PPP"
          }
        },
        {
          "key": "さよならまたいつか！",
          "title": "さよーならまたいつか！ / 米津玄師",
          "start": 5551,
          "end": 5756,
          "en": {
            "title": "Goodbye, see you someday! / Kenshi Yonezu"
          }
        },
        {
          "key": "ゴゴ幽霊船",
          "title": "ゴーゴー幽霊船 / 米津玄師",
          "start": 5757,
          "end": 6046,
          "en": {
            "title": "Go Go Ghost Ship / Kenshi Yonezu"
          }
        },
        {
          "key": "butter-fly",
          "title": "Butter-Fly / 和田光司",
          "start": 6047,
          "end": 6301,
          "en": {
            "title": "Butter-Fly / Koji Wada"
          }
        },
        {
          "key": "生きてこそ",
          "title": "生きてこそ / Kiroro",
          "start": 6302,
          "end": 6538,
          "en": {
            "title": "Only to be alive / Kiroro"
          }
        },
        {
          "key": "風になる",
          "title": "風になる / つじあやの",
          "start": 6539,
          "end": 7026,
          "en": {
            "title": "Becoming the wind / Ayano Tsuji"
          }
        },
        {
          "key": "ひとりごつ",
          "title": "ひとりごつ / ハチワレ",
          "start": 7027,
          "end": 7120,
          "en": {
            "title": "Hitorigotsu / Hachiware"
          }
        },
        {
          "key": "難聴系男子が倒せない",
          "title": "難聴系男子が倒せない / LamazeP",
          "start": 7121,
          "end": 7385,
          "en": {
            "title": "Hearing-impaired boys can't be defeated / LamazeP"
          }
        },
        {
          "key": "右に曲ガル",
          "title": "右に曲ガール / Sou",
          "start": 7386,
          "end": 7622,
          "en": {
            "title": "Girl on the right / Sou"
          }
        },
        {
          "key": "ノダウト",
          "title": "ノーダウト / Official髭男dism",
          "start": 7623,
          "end": 8218,
          "en": {
            "title": "No Doubt / Official Hige Dandism"
          }
        },
        {
          "key": "小さな恋のうた",
          "title": "小さな恋のうた / MONGOL800",
          "start": 8219,
          "end": 8456,
          "en": {
            "title": "Little love song / MONGOL800"
          }
        },
        {
          "key": "欲望に満ちた青年団",
          "title": "欲望に満ちた青年団 / ONEOKROCK",
          "start": 8457,
          "end": 8669,
          "en": {
            "title": "Youth group full of desire / ONEOKROCK"
          }
        },
        {
          "key": "十面相",
          "title": "十面相 / YM",
          "start": 8670,
          "end": 8889,
          "en": {
            "title": "Ten Faces / YM"
          }
        },
        {
          "key": "パンダヒロ",
          "title": "パンダヒーロー / ハチ",
          "start": 8890,
          "end": 9433,
          "en": {
            "title": "Panda Hero / Hachi"
          }
        },
        {
          "key": "食虫植物",
          "title": "食虫植物 / 理芽",
          "start": 9434,
          "end": 9594,
          "en": {
            "title": "Carnivorous plants/Rime"
          }
        },
        {
          "key": "貴方の恋人になりたい",
          "title": "貴方の恋人になりたい / チョーキューメイ",
          "start": 9595,
          "end": 9834,
          "en": {
            "title": "I want to be your lover / Cho Kyumei"
          }
        },
        {
          "key": "napori",
          "title": "napori / Vaundy",
          "start": 9835,
          "end": 10344
        },
        {
          "key": "かいしんのいちげき！",
          "title": "かいしんのいちげき！ / 天月‐あまつき",
          "start": 10345,
          "end": 10586,
          "en": {
            "title": "Kaishin no Ichigeki! / Amatsuki"
          }
        },
        {
          "key": "ソワレ",
          "title": "ソワレ / 星街すいせい",
          "start": 10587,
          "end": 10816,
          "en": {
            "title": "Soiree / Hoshimachi Suisei"
          }
        },
        {
          "key": "神のまにまに",
          "title": "神のまにまに / れるりり",
          "start": 10817,
          "end": 11072,
          "en": {
            "title": "God's time / Reruri"
          }
        },
        {
          "key": "絶頂讃",
          "title": "絶頂讃歌 / 和ぬか",
          "start": 11073,
          "end": 11391,
          "en": {
            "title": "Climax Hymn / Wanuka"
          }
        },
        {
          "key": "start",
          "title": "StaRt / Mrs. GREEN APPLE",
          "start": 11392,
          "end": 11611
        },
        {
          "key": "夜もすがら君想ふ",
          "title": "夜もすがら君想ふ / TOKOTOKO",
          "start": 11612,
          "end": 11866,
          "en": {
            "title": "I think about you at night / TOKOTOKO"
          }
        },
        {
          "key": "夜明けと蛍",
          "title": "夜明けと蛍 / N-buna",
          "start": 11867,
          "end": 12879,
          "en": {
            "title": "Dawn and fireflies / N-buna"
          }
        }
      ]
    },
    {
      "id": "bla1OtwsAes",
      "memberId": "koma",
      "publishedAt": "2026-05-31",
      "title": "【 歌枠 】こまわりいけます【小廻こま/ミリプロ】",
      "duration": 4122,
      "songs": [
        {
          "key": "風になる",
          "title": "風になる / つじあやの",
          "start": 331,
          "end": 892,
          "en": {
            "title": "Becoming the wind / Ayano Tsuji"
          }
        },
        {
          "key": "ray",
          "title": "ray / BUMP OF CHICKEN",
          "start": 893,
          "end": 1266
        },
        {
          "key": "ジングルベル",
          "title": "ジングルベル",
          "start": 1267,
          "end": 1607,
          "en": {
            "title": "jingle bells"
          }
        },
        {
          "key": "イケナイ太陽",
          "title": "イケナイ太陽 / ORANGE RANGE",
          "start": 1608,
          "end": 2080,
          "en": {
            "title": "Naughty Taiyo / ORANGE RANGE"
          }
        },
        {
          "key": "たばこ",
          "title": "たばこ / コレサワ",
          "start": 2081,
          "end": 2490,
          "en": {
            "title": "Tobacco / Koresawa"
          }
        },
        {
          "key": "blieve",
          "title": "Blieve",
          "start": 2491,
          "end": 2736
        },
        {
          "key": "godknows…",
          "title": "God knows… / ハルヒ",
          "start": 2737,
          "end": 2895,
          "en": {
            "title": "God knows… / Haruhi"
          }
        },
        {
          "key": "気まぐれロマンティック",
          "title": "気まぐれロマンティック / いきものがかり",
          "start": 2896,
          "end": 4122,
          "en": {
            "title": "Whimsical Romantic / Ikimonogakari"
          }
        }
      ]
    },
    {
      "id": "IcuJZaDj_SI",
      "memberId": "liz",
      "publishedAt": "2025-07-27",
      "title": "【雨夜リズ】雨夜のリズムに乗っていこう【 #ミリプロ20万人耐久歌枠リレー 】",
      "duration": 3406,
      "songs": [
        {
          "key": "踊",
          "title": "踊 / Ado",
          "start": 135,
          "end": 413,
          "en": {
            "title": "Dance / Ado"
          }
        },
        {
          "key": "本能",
          "title": "本能 / 椎名林檎",
          "start": 414,
          "end": 724,
          "en": {
            "title": "Instinct / Ringo Shiina"
          }
        },
        {
          "key": "kickback",
          "title": "KICK BACK / 米津玄師",
          "start": 725,
          "end": 1009,
          "en": {
            "title": "KICK BACK / Kenshi Yonezu"
          }
        },
        {
          "key": "いけないボダライン",
          "title": "いけないボーダーライン / ワルキューレ",
          "start": 1010,
          "end": 1412,
          "en": {
            "title": "Inani Borderline / Valkyrie"
          }
        },
        {
          "key": "unravel",
          "title": "unravel / TK from 凛として時雨",
          "start": 1413,
          "end": 1888,
          "en": {
            "title": "unravel / TK from Ling Toshi Sigure"
          }
        },
        {
          "key": "デリヘル呼んだら君が来た",
          "title": "デリヘル呼んだら君が来た / ナナホシ管弦楽団 feat. 初音ミク × IA",
          "start": 1889,
          "end": 2210,
          "en": {
            "title": "When I called a delivery health, you came / Nanahoshi Orchestra feat. Hatsune Miku × IA"
          }
        },
        {
          "key": "あなたのことおしえて",
          "title": "あなたのことおしえて / キタニタツヤ",
          "start": 2211,
          "end": 2448,
          "en": {
            "title": "Tell me about you / Tatsuya Kitani"
          }
        },
        {
          "key": "欲望に満ちた青年団",
          "title": "欲望に満ちた青年団 / ONE OK ROCK",
          "start": 2449,
          "end": 2817,
          "en": {
            "title": "Desireful Youth Group / ONE OK ROCK"
          }
        },
        {
          "key": "金木犀",
          "title": "金木犀 / くじら feat. Ado",
          "start": 2818,
          "end": 3080,
          "en": {
            "title": "Osmanthus / Whale feat. Ado"
          }
        },
        {
          "key": "おやすみ泣き声、さよなら姫",
          "title": "おやすみ泣き声、さよなら歌姫 / クリープハイプ",
          "start": 3081,
          "end": 3406,
          "en": {
            "title": "Goodnight Cry, Goodbye Diva / Creep Hype"
          }
        }
      ]
    },
    {
      "id": "oWUG8pwxfwI",
      "memberId": "liz",
      "publishedAt": "2025-11-30",
      "title": "【10万人耐久歌枠】とっっても緊張します【雨夜リズ/ミリプロ】",
      "duration": 6646,
      "songs": [
        {
          "key": "kickback",
          "title": "KICK BACK / 米津玄師",
          "start": 358,
          "end": 694,
          "en": {
            "title": "KICK BACK / Kenshi Yonezu"
          }
        },
        {
          "key": "irisout",
          "title": "IRIS OUT / 米津玄師",
          "start": 695,
          "end": 1096,
          "en": {
            "title": "IRIS OUT / Kenshi Yonezu"
          }
        },
        {
          "key": "いけないボダライン",
          "title": "いけないボーダーライン / ワルキューレ",
          "start": 1097,
          "end": 1526,
          "en": {
            "title": "Inani Borderline / Valkyrie"
          }
        },
        {
          "key": "踊",
          "title": "踊 / Ado",
          "start": 1527,
          "end": 1893,
          "en": {
            "title": "Dance / Ado"
          }
        },
        {
          "key": "カワキヲアメク",
          "title": "カワキヲアメク / 美波",
          "start": 1894,
          "end": 6646,
          "en": {
            "title": "Kawakiwoameku/Minami"
          }
        }
      ]
    },
    {
      "id": "KF6zBgrLAt8",
      "memberId": "liz",
      "publishedAt": "2025-11-17",
      "title": "【 #雨夜リズお披露目】ハーフアニバ感謝の歌枠♩【雨夜リズ/ミリプロ】",
      "duration": 3663,
      "songs": [
        {
          "key": "ファンサ",
          "title": "ファンサ / mona(CV：夏川椎菜)",
          "start": 533,
          "end": 943,
          "en": {
            "title": "Funsa / mona (CV: Shiina Natsukawa)"
          }
        },
        {
          "key": "godknows...",
          "title": "God knows... / 涼宮ハルヒ(CV：平野綾)",
          "start": 944,
          "end": 1317,
          "en": {
            "title": "God knows... / Haruhi Suzumiya (CV: Aya Hirano)"
          }
        },
        {
          "key": "snowhalation",
          "title": "Snow halation / μ's",
          "start": 1318,
          "end": 1675
        },
        {
          "key": "一度だけの恋なら",
          "title": "一度だけの恋なら / ワルキューレ",
          "start": 1676,
          "end": 2053,
          "en": {
            "title": "If it's only love once / Valkyrie"
          }
        },
        {
          "key": "ノダウト",
          "title": "ノーダウト / Official髭男dism",
          "start": 2054,
          "end": 2361,
          "en": {
            "title": "No Doubt / Official Hige Dandism"
          }
        },
        {
          "key": "うっせぇわ",
          "title": "うっせぇわ / Ado",
          "start": 2362,
          "end": 2671,
          "en": {
            "title": "Ussewa / Ado"
          }
        },
        {
          "key": "irisout",
          "title": "IRIS OUT / 米津玄師",
          "start": 2672,
          "end": 2938,
          "en": {
            "title": "IRIS OUT / Kenshi Yonezu"
          }
        },
        {
          "key": "catchthemoment",
          "title": "Catch the Moment / LiSA",
          "start": 2939,
          "end": 3274
        },
        {
          "key": "ブラック★ロックシュタ",
          "title": "ブラック★ロックシューター / ryo(supercell) feat. 初音ミク",
          "start": 3275,
          "end": 3663,
          "en": {
            "title": "Black★Rock Shooter / ryo(supercell) feat. Hatsune Miku"
          }
        }
      ]
    },
    {
      "id": "lCF5a7rLr-8",
      "memberId": "liz",
      "publishedAt": "2025-11-28",
      "title": "【歌枠】金曜日だ！歌うぞ〜！＋ハーフアニバのスパちゃ読む【雨夜リズ/ミリプロ】",
      "duration": 6298,
      "songs": [
        {
          "key": "レディメイド",
          "title": "レディメイド / Ado",
          "start": 321,
          "end": 705,
          "en": {
            "title": "Readymade / Ado"
          }
        },
        {
          "key": "唱",
          "title": "唱 / Ado",
          "start": 706,
          "end": 1064,
          "en": {
            "title": "Shou / Ado"
          }
        },
        {
          "key": "ひゅるりらぱっぱ",
          "title": "ひゅるりらぱっぱ / tuki.",
          "start": 1065,
          "end": 1401,
          "en": {
            "title": "Hyururirapappa / tuki."
          }
        },
        {
          "key": "酔いどれ知らず",
          "title": "酔いどれ知らず / Kanaria feat. GUMI",
          "start": 1402,
          "end": 1630,
          "en": {
            "title": "Drunken Shiraishi / Kanaria feat. GUMI"
          }
        },
        {
          "key": "irisout",
          "title": "IRIS OUT / 米津玄師",
          "start": 1631,
          "end": 1891,
          "en": {
            "title": "IRIS OUT / Kenshi Yonezu"
          }
        },
        {
          "key": "badapple!!feat.nomico",
          "title": "Bad Apple!! feat. nomico / Alstroemeria Records",
          "start": 1892,
          "end": 2161
        },
        {
          "key": "美少女無罪♡パイレツ",
          "title": "美少女無罪♡パイレーツ / 宝鐘マリン",
          "start": 2162,
          "end": 2517,
          "en": {
            "title": "Beautiful girl innocent ♡ Pirates / Hosho Marine"
          }
        },
        {
          "key": "ソワレ",
          "title": "ソワレ / 星街すいせい",
          "start": 2518,
          "end": 2973,
          "en": {
            "title": "Soiree / Hoshimachi Suisei"
          }
        },
        {
          "key": "右肩の蝶",
          "title": "右肩の蝶 / のりぴー feat. 鏡音レン",
          "start": 2974,
          "end": 3347,
          "en": {
            "title": "Butterfly on the Right Shoulder / Noripy feat. Kagamine Len"
          }
        },
        {
          "key": "チュルリラチュルリラダッダッダ!",
          "title": "チュルリラ・チュルリラ・ダッダッダ! / 和田たけあき(くらげP) feat. 結月ゆかり",
          "start": 3348,
          "end": 3672,
          "en": {
            "title": "Churrilla Churrilla Daddada! / Takeaki Wada (Kurage P) feat. Yuzuki Yukari"
          }
        },
        {
          "key": "浴槽とネオンテトラ",
          "title": "浴槽とネオンテトラ / REISAI feat. v flower",
          "start": 3673,
          "end": 4126,
          "en": {
            "title": "Bathtub and Neon Tetra / REISAI feat. v flower"
          }
        },
        {
          "key": "雨とペトラ",
          "title": "雨とペトラ / バルーン feat. v flower",
          "start": 4127,
          "end": 4416,
          "en": {
            "title": "Rain and Petra / Balloon feat. v flower"
          }
        },
        {
          "key": "高嶺の花子さん",
          "title": "高嶺の花子さん / back number",
          "start": 4417,
          "end": 6298,
          "en": {
            "title": "Takamine Hanako-san / back number"
          }
        }
      ]
    },
    {
      "id": "IDtx37ObxCs",
      "memberId": "liz",
      "publishedAt": "2025-12-31",
      "title": "【歌枠】2025年歌枠で終るぞ〜！【雨夜リズ/ミリプロ】",
      "duration": 4823,
      "songs": [
        {
          "key": "kickback",
          "title": "KICK BACK / 米津玄師",
          "start": 189,
          "end": 484,
          "en": {
            "title": "KICK BACK / Kenshi Yonezu"
          }
        },
        {
          "key": "右肩の蝶",
          "title": "右肩の蝶 / のりぴー feat. 鏡音レン",
          "start": 485,
          "end": 854,
          "en": {
            "title": "Butterfly on the Right Shoulder / Noripy feat. Kagamine Len"
          }
        },
        {
          "key": "godknows...",
          "title": "God knows... / 涼宮ハルヒ(CV：平野綾)",
          "start": 855,
          "end": 1187,
          "en": {
            "title": "God knows... / Haruhi Suzumiya (CV: Aya Hirano)"
          }
        },
        {
          "key": "janedoe",
          "title": "JANE DOE / 米津玄師 × 宇多田ヒカル",
          "start": 1188,
          "end": 1521,
          "en": {
            "title": "JANE DOE / Kenshi Yonezu × Hikaru Utada"
          }
        },
        {
          "key": "心做し",
          "title": "心做し / 蝶々P feat. GUMI",
          "start": 1522,
          "end": 1944,
          "en": {
            "title": "Shinkaushi / ChochoP feat. GUMI"
          }
        },
        {
          "key": "本能",
          "title": "本能 / 椎名林檎",
          "start": 1945,
          "end": 2343,
          "en": {
            "title": "Instinct / Ringo Shiina"
          }
        },
        {
          "key": "asphyxia",
          "title": "asphyxia / Cö shu Nie",
          "start": 2344,
          "end": 2583
        },
        {
          "key": "unravel",
          "title": "unravel / TK from 凛として時雨",
          "start": 2584,
          "end": 2946,
          "en": {
            "title": "unravel / TK from Ling Toshi Sigure"
          }
        },
        {
          "key": "sincerely",
          "title": "Sincerely / TRUE",
          "start": 2947,
          "end": 3435
        },
        {
          "key": "ワルドイズマイン",
          "title": "ワールドイズマイン / ryo(supercell) feat. 初音ミク",
          "start": 3436,
          "end": 4823,
          "en": {
            "title": "World is Mine / ryo(supercell) feat. Hatsune Miku"
          }
        }
      ]
    },
    {
      "id": "rRneg-tRatU",
      "memberId": "liz",
      "publishedAt": "2026-01-16",
      "title": "【歌枠】金曜日だし夜更かししよう 【雨夜リズ/ミリプロ】",
      "duration": 4825,
      "songs": [
        {
          "key": "不可幸力",
          "title": "不可幸力 / Vaundy",
          "start": 270,
          "end": 525,
          "en": {
            "title": "Vaundy"
          }
        },
        {
          "key": "ヒステリックナイトガル",
          "title": "ヒステリックナイトガール / PSYQUI feat. Such",
          "start": 526,
          "end": 944,
          "en": {
            "title": "Hysteric Night Girl / PSYQUI feat. Such"
          }
        },
        {
          "key": "死神",
          "title": "死神 / 米津玄師",
          "start": 945,
          "end": 1293,
          "en": {
            "title": "Grim Reaper / Kenshi Yonezu"
          }
        },
        {
          "key": "恋愛裁判",
          "title": "恋愛裁判 / 40mP feat. 初音ミク",
          "start": 1294,
          "end": 1642,
          "en": {
            "title": "Love Trial / 40mP feat. Hatsune Miku"
          }
        },
        {
          "key": "bunnygirl",
          "title": "Bunny Girl / AKASAKI",
          "start": 1643,
          "end": 1981
        },
        {
          "key": "ヴィラン",
          "title": "ヴィラン / てにをは feat. v flower",
          "start": 1982,
          "end": 2307,
          "en": {
            "title": "Villain / Teniwoha feat. v flower"
          }
        },
        {
          "key": "ベノム",
          "title": "ベノム / かいりきベア feat. v flower",
          "start": 2308,
          "end": 2622,
          "en": {
            "title": "Venom/Kairiki Bear feat. v flower"
          }
        },
        {
          "key": "怪獣",
          "title": "怪獣 / サカナクション",
          "start": 2623,
          "end": 3054,
          "en": {
            "title": "Monster / Sakanaction"
          }
        },
        {
          "key": "ヒバナ",
          "title": "ヒバナ / DECO*27 feat. 初音ミク",
          "start": 3055,
          "end": 4825,
          "en": {
            "title": "Hibana / DECO*27 feat. Hatsune Miku"
          }
        }
      ]
    },
    {
      "id": "S1dpbc9ERdA",
      "memberId": "liz",
      "publishedAt": "2026-03-13",
      "title": "【歌枠】急に歌枠をしてみんなを怖がらせましょう【雨夜リズ/ミリプロ】",
      "duration": 5156,
      "songs": [
        {
          "key": "ブラック★ロックシュタ",
          "title": "ブラック★ロックシューター / ryo(supercell) feat. 初音ミク",
          "start": 272,
          "end": 644,
          "en": {
            "title": "Black★Rock Shooter / ryo(supercell) feat. Hatsune Miku"
          }
        },
        {
          "key": "janedoe",
          "title": "JANE DOE / 米津玄師 × 宇多田ヒカル",
          "start": 645,
          "end": 972,
          "en": {
            "title": "JANE DOE / Kenshi Yonezu × Hikaru Utada"
          }
        },
        {
          "key": "irisout",
          "title": "IRIS OUT / 米津玄師",
          "start": 973,
          "end": 1239,
          "en": {
            "title": "IRIS OUT / Kenshi Yonezu"
          }
        },
        {
          "key": "死神",
          "title": "死神 / 米津玄師",
          "start": 1240,
          "end": 1509,
          "en": {
            "title": "Grim Reaper / Kenshi Yonezu"
          }
        },
        {
          "key": "バレリコ",
          "title": "バレリーコ / みきとP feat. GUMI",
          "start": 1510,
          "end": 1815,
          "en": {
            "title": "Valerico / Mikito P feat. GUMI"
          }
        },
        {
          "key": "丸の内サディスティック",
          "title": "丸の内サディスティック / 椎名林檎",
          "start": 1816,
          "end": 2193,
          "en": {
            "title": "Marunouchi Sadistic / Ringo Shiina"
          }
        },
        {
          "key": "愛を伝えたいだとか",
          "title": "愛を伝えたいだとか / あいみょん",
          "start": 2194,
          "end": 2539,
          "en": {
            "title": "I want to convey my love / Aimyon"
          }
        },
        {
          "key": "サマタイムレコド",
          "title": "サマータイムレコード / じん feat. IA",
          "start": 2540,
          "end": 2984,
          "en": {
            "title": "Summer Time Record / Jin feat. IA"
          }
        },
        {
          "key": "ドライフラワ",
          "title": "ドライフラワー / 優里",
          "start": 2985,
          "end": 3437,
          "en": {
            "title": "Dried flower / Yuri"
          }
        },
        {
          "key": "フォニイ",
          "title": "フォニイ / ツミキ feat. 可不",
          "start": 3438,
          "end": 3713,
          "en": {
            "title": "Phonii / Tsumiki feat."
          }
        },
        {
          "key": "シャルル",
          "title": "シャルル / バルーン feat. v flower",
          "start": 3714,
          "end": 4045,
          "en": {
            "title": "Charles / Balloon feat. v flower"
          }
        },
        {
          "key": "夜に駆ける",
          "title": "夜に駆ける / YOASOBI",
          "start": 4046,
          "end": 4416,
          "en": {
            "title": "Running at night / YOASOBI"
          }
        },
        {
          "key": "onelastkiss",
          "title": "One Last Kiss / 宇多田ヒカル",
          "start": 4417,
          "end": 5156,
          "en": {
            "title": "One Last Kiss / Hikaru Utada"
          }
        }
      ]
    },
    {
      "id": "A7UNNVNCbjQ",
      "memberId": "liz",
      "publishedAt": "2026-03-19",
      "title": "【#雨夜さんはぴば2026】かえるの歌50回耐久🐸【雨夜リズ/ミリプロ】",
      "duration": 6240,
      "songs": [
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 262,
          "end": 411,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 412,
          "end": 541,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 542,
          "end": 678,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 679,
          "end": 787,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 788,
          "end": 882,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 883,
          "end": 1015,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 1016,
          "end": 1203,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 1204,
          "end": 1374,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 1375,
          "end": 1504,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 1505,
          "end": 1674,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "シャルル",
          "title": "シャルル / バルーン feat. v flower(ワンコーラス)",
          "start": 1675,
          "end": 1804,
          "en": {
            "title": "Charles / Balloon feat. v flower (one chorus)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 1805,
          "end": 1908,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 1909,
          "end": 2027,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 2028,
          "end": 2166,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 2167,
          "end": 2325,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 2326,
          "end": 2448,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 2449,
          "end": 2578,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 2579,
          "end": 2731,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 2732,
          "end": 2871,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 2872,
          "end": 2948,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 2949,
          "end": 3055,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "irisout",
          "title": "IRIS OUT / 米津玄師(ワンコーラス)",
          "start": 3056,
          "end": 3150,
          "en": {
            "title": "IRIS OUT / Kenshi Yonezu (one chorus)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 3151,
          "end": 3187,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 3188,
          "end": 3220,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 3221,
          "end": 3290,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 3291,
          "end": 3325,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 3326,
          "end": 3384,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 3385,
          "end": 3415,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 3416,
          "end": 3476,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 3477,
          "end": 3509,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 3510,
          "end": 3609,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 3610,
          "end": 3652,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 3653,
          "end": 3709,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 3710,
          "end": 3820,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 3821,
          "end": 3928,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 3929,
          "end": 3956,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 3957,
          "end": 4000,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 4001,
          "end": 4039,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 4040,
          "end": 4078,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 4079,
          "end": 4132,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 4133,
          "end": 4190,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 4191,
          "end": 4212,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 4213,
          "end": 4355,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 4356,
          "end": 4398,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 4399,
          "end": 4518,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 4519,
          "end": 4654,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 4655,
          "end": 4689,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 4690,
          "end": 4731,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 4732,
          "end": 4809,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 4810,
          "end": 4892,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 4893,
          "end": 4945,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        },
        {
          "key": "かえるのうた",
          "title": "かえるのうた",
          "start": 4946,
          "end": 6240,
          "en": {
            "title": "Kaeru no Uta (Frog Song)"
          }
        }
      ]
    },
    {
      "id": "YNe2YuSqncc",
      "memberId": "akubi",
      "publishedAt": "2024-01-09",
      "title": "【 #あくび初配信 】跪け！あくび・でもんすぺーど様だ！【あくび・でもんすぺーど / ミリプロ】",
      "duration": 6337,
      "songs": [
        {
          "key": "唱",
          "title": "唱 / Ado",
          "start": 320,
          "end": 5906,
          "en": {
            "title": "Shou / Ado"
          }
        },
        {
          "key": "おじゃま虫",
          "title": "おじゃま虫 / DECO*27",
          "start": 5907,
          "end": 6337,
          "en": {
            "title": "Ojama Mushi / DECO*27"
          }
        }
      ]
    },
    {
      "id": "2omY8cYhWpU",
      "memberId": "akubi",
      "publishedAt": "2024-02-01",
      "title": "【歌枠】メンバーシップ解禁記念！いっぱい歌う！【あくび・でもんすぺーど】",
      "duration": 6284,
      "songs": [
        {
          "key": "チュルリラチュルリラダッダッダ!",
          "title": "チュルリラ・チュルリラ・ダッダッダ! / 和田たけあき（くらげP）",
          "start": 361,
          "end": 831,
          "en": {
            "title": "Churu-ri-la-churu-ri-la-da-da-da-da! / Takeaki Wada (Jellyfish P)"
          }
        },
        {
          "key": "モザイクロル",
          "title": "モザイクロール / DECO*27",
          "start": 832,
          "end": 1208,
          "en": {
            "title": "Mosaic roll / DECO*27"
          }
        },
        {
          "key": "ベテルギウス",
          "title": "ベテルギウス / 優里",
          "start": 1209,
          "end": 1661,
          "en": {
            "title": "Betelgeuse/Yuri"
          }
        },
        {
          "key": "ロメオ",
          "title": "ロメオ / HoneyWorks",
          "start": 1662,
          "end": 2028,
          "en": {
            "title": "Romeo / HoneyWorks"
          }
        },
        {
          "key": "心という名の不回避",
          "title": "心という名の不回避 / Ado",
          "start": 2029,
          "end": 2652,
          "en": {
            "title": "Inevitability called heart / Ado"
          }
        },
        {
          "key": "怪獣の花唄",
          "title": "怪獣の花唄 / Vaundy",
          "start": 2653,
          "end": 3051,
          "en": {
            "title": "Kaiju no Hanauta / Vaundy"
          }
        },
        {
          "key": "ボルテッカ",
          "title": "ボルテッカー / DECO*27（オマケアカペラ）",
          "start": 3052,
          "end": 3087,
          "en": {
            "title": "Voltecker / DECO*27 (Omakea Capella)"
          }
        },
        {
          "key": "地球最後の告白を",
          "title": "地球最後の告白を / 堀江晶太",
          "start": 3088,
          "end": 3521,
          "en": {
            "title": "Earth's last confession / Shota Horie"
          }
        },
        {
          "key": "unravel",
          "title": "Unravel / 凛として時雨（オマケアカペラ）",
          "start": 3522,
          "end": 3570,
          "en": {
            "title": "Unravel / Ling Toshi Sigure (Omakea Capella)"
          }
        },
        {
          "key": "女の子になりたい",
          "title": "女の子になりたい / まふまふ",
          "start": 3571,
          "end": 4101,
          "en": {
            "title": "I want to be a girl / Mafumafu"
          }
        },
        {
          "key": "サリシノハラ",
          "title": "サリシノハラ / みきとP",
          "start": 4102,
          "end": 4502,
          "en": {
            "title": "Salishinohara / Mikito P"
          }
        },
        {
          "key": "踊",
          "title": "踊 / Ado",
          "start": 4503,
          "end": 5123,
          "en": {
            "title": "Dance / Ado"
          }
        },
        {
          "key": "ファンサ",
          "title": "ファンサ / HoneyWorks",
          "start": 5124,
          "end": 5794,
          "en": {
            "title": "Funsa / HoneyWorks"
          }
        },
        {
          "key": "アスノヨゾラ哨戒班",
          "title": "アスノヨゾラ哨戒班 / Orangestar（アカペラ）",
          "start": 5795,
          "end": 6284,
          "en": {
            "title": "Asuno Yozora Patrol Team / Orangestar (Acapella)"
          }
        }
      ]
    },
    {
      "id": "W27sddrqkoE",
      "memberId": "akubi",
      "publishedAt": "2024-02-14",
      "title": "【バレンタイン歌枠】高評価ごとにリスナーへの好感度が______！？【あくび・でもんすぺーど 】",
      "duration": 9761,
      "songs": [
        {
          "key": "うっせぇわ",
          "title": "うっせぇわ / Ado（最初ちょっとアカペラ）",
          "start": 489,
          "end": 1087,
          "en": {
            "title": "Ussewawa / Ado (slightly a cappella at first)"
          }
        },
        {
          "key": "粛聖!!ロリ神レクイエム☆",
          "title": "粛聖!! ロリ神レクイエム☆ / しぐれうい（9歳）",
          "start": 1088,
          "end": 1835,
          "en": {
            "title": "Seishei!! Loli God Requiem ☆ / Shigureui (9 years old)"
          }
        },
        {
          "key": "逆光",
          "title": "逆光 / Ado",
          "start": 1836,
          "end": 2650,
          "en": {
            "title": "Backlight / Ado"
          }
        },
        {
          "key": "かまってちょだい",
          "title": "かまってちょーだい / Mono palette.",
          "start": 2651,
          "end": 3489,
          "en": {
            "title": "Please take care of me / Mono palette."
          }
        },
        {
          "key": "金曜日のおはよう",
          "title": "金曜日のおはよう / HoneyWorks",
          "start": 3490,
          "end": 4007,
          "en": {
            "title": "Friday Good Morning / HoneyWorks"
          }
        },
        {
          "key": "booo!",
          "title": "Booo! / TOKOTOKO（西沢さんP）",
          "start": 4008,
          "end": 4668,
          "en": {
            "title": "Boooo! / TOKOTOKO (Nishizawa-san P)"
          }
        },
        {
          "key": "かいしんのいちげき！",
          "title": "かいしんのいちげき！ / 天月",
          "start": 4669,
          "end": 5376,
          "en": {
            "title": "Kaishin no Ichigeki! / Amatsuki"
          }
        },
        {
          "key": "小悪魔だって構わない！",
          "title": "小悪魔だって構わない！ / めいちゃん",
          "start": 5377,
          "end": 6068,
          "en": {
            "title": "I don't care if it's a little devil! / Mei-chan"
          }
        },
        {
          "key": "きゅうくらりん",
          "title": "きゅうくらりん / いよわ",
          "start": 6069,
          "end": 6659,
          "en": {
            "title": "Kyukurarin / Iyowa"
          }
        },
        {
          "key": "ワルドイズマイン",
          "title": "ワールドイズマイン / ryo",
          "start": 6660,
          "end": 7243,
          "en": {
            "title": "world is mine / ryo"
          }
        },
        {
          "key": "キュトな彼女",
          "title": "キュートな彼女 / Syudou",
          "start": 7244,
          "end": 7681,
          "en": {
            "title": "Cute Girlfriend / Syudou"
          }
        },
        {
          "key": "キャットラビング",
          "title": "キャットラビング / 香椎モミイ",
          "start": 7682,
          "end": 8953,
          "en": {
            "title": "Cat Loving / Momii Kashii"
          }
        },
        {
          "key": "あくあ色パレット",
          "title": "あくあ色パレット / 湊あくあ",
          "start": 8954,
          "end": 9761,
          "en": {
            "title": "Dark color palette / Minato Aqua"
          }
        }
      ]
    },
    {
      "id": "IEhbKmjpGgg",
      "memberId": "akubi",
      "publishedAt": "2024-03-03",
      "title": "【歌雑】酔っちゃったかも、、/// #shorts 【あくび・でもんすぺーど】",
      "duration": 6684,
      "songs": [
        {
          "key": "鬼の宴",
          "title": "鬼の宴 / 友成空",
          "start": 1800,
          "end": 2151,
          "en": {
            "title": "Demon's Banquet / Sora Tomonari"
          }
        },
        {
          "key": "混沌ブキ",
          "title": "混沌ブキ / Jon-YAKITORY",
          "start": 2152,
          "end": 2329,
          "en": {
            "title": "Chaos Buki / Jon-YAKITORY"
          }
        },
        {
          "key": "bling‐bang-bang-born",
          "title": "Bling‐Bang-Bang-Born / Creepy Nuts（1番のみ）",
          "start": 2330,
          "end": 2517,
          "en": {
            "title": "Bling-Bang-Bang-Born / Creepy Nuts (No. 1 only)"
          }
        },
        {
          "key": "心予報",
          "title": "心予報 / Eve",
          "start": 2518,
          "end": 2762,
          "en": {
            "title": "Heart Forecast / Eve"
          }
        },
        {
          "key": "絶頂讃",
          "title": "絶頂讃歌 / 和ぬか",
          "start": 2763,
          "end": 3187,
          "en": {
            "title": "Climax Hymn / Wanuka"
          }
        },
        {
          "key": "oneday",
          "title": "One day / The ROOTLESS",
          "start": 3188,
          "end": 3512
        },
        {
          "key": "恋愛サキュレション",
          "title": "恋愛サーキュレーション / 花澤香菜",
          "start": 3513,
          "end": 4223,
          "en": {
            "title": "Love Circulation / Kana Hanazawa"
          }
        },
        {
          "key": "六兆年と一夜物語",
          "title": "六兆年と一夜物語 / 堀江晶太",
          "start": 4224,
          "end": 4988,
          "en": {
            "title": "Six Trillion Years and One Night / Shota Horie"
          }
        },
        {
          "key": "恋愛裁判",
          "title": "恋愛裁判 / 40mP",
          "start": 4989,
          "end": 5324,
          "en": {
            "title": "Love Trial / 40mP"
          }
        },
        {
          "key": "シルヴプレジデント",
          "title": "シル・ヴ・プレジデント / P丸様",
          "start": 5325,
          "end": 5613,
          "en": {
            "title": "Sil V President / Mr. Pmaru"
          }
        },
        {
          "key": "命に嫌われている",
          "title": "命に嫌われている / カンザキイオリ",
          "start": 5614,
          "end": 6263,
          "en": {
            "title": "Hated by life / Iori Kanzaki"
          }
        },
        {
          "key": "お気に召すまま",
          "title": "お気に召すまま / Eve",
          "start": 6264,
          "end": 6684,
          "en": {
            "title": "As You Like It / Eve"
          }
        }
      ]
    },
    {
      "id": "l8eL0wxXchI",
      "memberId": "akubi",
      "publishedAt": "2024-03-07",
      "title": "【２０万人耐久】眠い？起きて。👿【あくび・でもんすぺーど / ミリプロ】",
      "duration": 15179,
      "songs": [
        {
          "key": "恋愛裁判",
          "title": "恋愛裁判 / 40mP",
          "start": 780,
          "end": 1334,
          "en": {
            "title": "Love Trial / 40mP"
          }
        },
        {
          "key": "鬼の宴",
          "title": "鬼の宴 / 友成空",
          "start": 1335,
          "end": 2004,
          "en": {
            "title": "Demon's Banquet / Sora Tomonari"
          }
        },
        {
          "key": "夜明けと蛍",
          "title": "夜明けと蛍 / n-buna",
          "start": 2005,
          "end": 2529,
          "en": {
            "title": "Dawn and fireflies / n-buna"
          }
        },
        {
          "key": "アイロニ",
          "title": "アイロニ / すこっぷ",
          "start": 2530,
          "end": 2678,
          "en": {
            "title": "Ironi (bonus) / scoop"
          }
        },
        {
          "key": "サリシノハラ",
          "title": "サリシノハラ / みきとP",
          "start": 2679,
          "end": 3196,
          "en": {
            "title": "Salishinohara / Mikito P"
          }
        },
        {
          "key": "アイロニ",
          "title": "アイロニ / すこっぷ",
          "start": 3197,
          "end": 3696,
          "en": {
            "title": "Ironi / Scoop"
          }
        },
        {
          "key": "唱",
          "title": "唱 / Ado",
          "start": 3697,
          "end": 4654,
          "en": {
            "title": "Shou / Ado"
          }
        },
        {
          "key": "千本桜",
          "title": "千本桜 / WhiteFlame",
          "start": 4655,
          "end": 5229,
          "en": {
            "title": "Senbonzakura / WhiteFlame"
          }
        },
        {
          "key": "混沌ブキ",
          "title": "混沌ブキ / Jon-YAKITORY",
          "start": 5230,
          "end": 5453,
          "en": {
            "title": "Chaos Buki / Jon-YAKITORY"
          }
        },
        {
          "key": "チュルリラチュルリラダッダッダ!",
          "title": "チュルリラ・チュルリラ・ダッダッダ! / 和田たけあき",
          "start": 5454,
          "end": 5946,
          "en": {
            "title": "Churu-ri-la-churu-ri-la-da-da-da-da! / Takeaki Wada"
          }
        },
        {
          "key": "チュリングラブ",
          "title": "チューリングラブ / ナナヲアカリ",
          "start": 5947,
          "end": 6308,
          "en": {
            "title": "Turing Love / Nanawo Akari"
          }
        },
        {
          "key": "queen",
          "title": "Queen / Kanaria",
          "start": 6309,
          "end": 6739
        },
        {
          "key": "レクリエム",
          "title": "レクリエム / 星街すいせい",
          "start": 6740,
          "end": 7172,
          "en": {
            "title": "Recriem / Hoshimachi Suisei"
          }
        },
        {
          "key": "フォニイ",
          "title": "フォニイ / ツミキ",
          "start": 7173,
          "end": 7507,
          "en": {
            "title": "Phonii / Tsumiki"
          }
        },
        {
          "key": "アスノヨゾラ哨戒班",
          "title": "アスノヨゾラ哨戒班 / Orangestar",
          "start": 7508,
          "end": 7961,
          "en": {
            "title": "Asunoyozora Patrol Team / Orangestar"
          }
        },
        {
          "key": "メランコリック",
          "title": "メランコリック / Junky",
          "start": 7962,
          "end": 8356,
          "en": {
            "title": "Melancholic / Junky"
          }
        },
        {
          "key": "神っぽいな",
          "title": "神っぽいな / ピノキオピー",
          "start": 8357,
          "end": 8823,
          "en": {
            "title": "God-like / Pinocchio Pea"
          }
        },
        {
          "key": "恋愛サキュレション",
          "title": "恋愛サーキュレーション / 花澤香菜",
          "start": 8824,
          "end": 9322,
          "en": {
            "title": "Love Circulation / Kana Hanazawa"
          }
        },
        {
          "key": "だから僕は音楽をやめた",
          "title": "だから僕は音楽をやめた / ヨルシカ",
          "start": 9323,
          "end": 9648,
          "en": {
            "title": "That's why I quit music / Yorushika"
          }
        },
        {
          "key": "ラグトレイン",
          "title": "ラグトレイン / 稲葉曇",
          "start": 9649,
          "end": 9848,
          "en": {
            "title": "Rag Train (bonus) / Inaba Cloud"
          }
        },
        {
          "key": "すずめ",
          "title": "すずめ / RADWIMPS",
          "start": 9849,
          "end": 10139,
          "en": {
            "title": "Sparrow / RADWIMPS"
          }
        },
        {
          "key": "アスノヨゾラ哨戒班",
          "title": "アスノヨゾラ哨戒班 / Orangestar",
          "start": 10140,
          "end": 10535,
          "en": {
            "title": "Asunoyozora Patrol Team / Orangestar"
          }
        },
        {
          "key": "yell",
          "title": "YELL / いきものがかり",
          "start": 10536,
          "end": 11042,
          "en": {
            "title": "YELL / Ikimonogakari"
          }
        },
        {
          "key": "桜ノ雨",
          "title": "桜ノ雨 / halyosy",
          "start": 11043,
          "end": 11537,
          "en": {
            "title": "Sakura no Ame / halyosy"
          }
        },
        {
          "key": "第六感",
          "title": "第六感 / れをる",
          "start": 11538,
          "end": 11692,
          "en": {
            "title": "Sixth sense / Reworu"
          }
        },
        {
          "key": "怪獣の花唄",
          "title": "怪獣の花唄 / Vaundy",
          "start": 11693,
          "end": 12077,
          "en": {
            "title": "Kaiju no Hanauta / Vaundy"
          }
        },
        {
          "key": "ch4ge",
          "title": "CH4GE / Giga",
          "start": 12078,
          "end": 12157,
          "en": {
            "title": "CH4GE (bonus) / Giga"
          }
        },
        {
          "key": "絶頂讃",
          "title": "絶頂讃歌 / 和ぬか",
          "start": 12158,
          "end": 12539,
          "en": {
            "title": "Climax Hymn / Wanuka"
          }
        },
        {
          "key": "ウタカララバイ",
          "title": "ウタカララバイ / Ado",
          "start": 12540,
          "end": 12914,
          "en": {
            "title": "Utakara Rabai / Ado"
          }
        },
        {
          "key": "粛聖!!ロリ神レクイエム☆",
          "title": "粛聖!! ロリ神レクイエム☆ / しぐれうい",
          "start": 12915,
          "end": 13477,
          "en": {
            "title": "Seishei!! Loli God Requiem☆ / Shigureui"
          }
        },
        {
          "key": "千本桜",
          "title": "千本桜 / WhiteFlame",
          "start": 13478,
          "end": 13808,
          "en": {
            "title": "Senbonzakura / WhiteFlame"
          }
        },
        {
          "key": "逆光",
          "title": "逆光 / Ado",
          "start": 13809,
          "end": 14255,
          "en": {
            "title": "Backlight / Ado"
          }
        },
        {
          "key": "私は最強",
          "title": "私は最強 / Ado",
          "start": 14256,
          "end": 14539,
          "en": {
            "title": "I am the strongest / Ado"
          }
        },
        {
          "key": "ファンサ",
          "title": "ファンサ / HoneyWorks",
          "start": 14540,
          "end": 15179,
          "en": {
            "title": "Funsa / HoneyWorks"
          }
        }
      ]
    },
    {
      "id": "2UHLDOqb194",
      "memberId": "tsukuri",
      "publishedAt": "2025-05-17",
      "title": "【 #眠雲ツクリ初配信 】君との思い出、作ってあげる",
      "songs": [
        {
          "key": "これから",
          "title": "これから / 眠雲ツクリ",
          "start": 300,
          "end": 4112
        },
        {
          "key": "名前のない怪物",
          "title": "名前のない怪物 / EGOIST",
          "start": 4113,
          "end": 4472
        },
        {
          "key": "ミカヅキ",
          "title": "ミカヅキ / さユり",
          "start": 4473,
          "end": 4874
        },
        {
          "key": "ブラック★ロックシュタ",
          "title": "ブラック★ロックシューター / ryo(supercell)",
          "start": 4875,
          "end": null
        }
      ],
      "fromNote": "【 #眠雲ツクリ初配信 】君との思い出、作ってあげる"
    },
    {
      "id": "ceAlqDW8CwE",
      "memberId": "tsukuri",
      "publishedAt": "2025-05-19",
      "title": "〖 歌枠 〗あたしのことが知りたいなら歌を聴け 〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "ヒバナ",
          "title": "ヒバナ / DECO*27",
          "start": 153,
          "end": 367
        },
        {
          "key": "ロミオとシンデレラ",
          "title": "ロミオとシンデレラ / doriko",
          "start": 368,
          "end": 858
        },
        {
          "key": "again",
          "title": "again / YUI",
          "start": 859,
          "end": 1341
        },
        {
          "key": "炉心融解",
          "title": "炉心融解 / iroha",
          "start": 1342,
          "end": 2056
        },
        {
          "key": "幽霊東京",
          "title": "幽霊東京 / Ayase",
          "start": 2057,
          "end": 2573
        },
        {
          "key": "ルマ",
          "title": "ルーマー / ポリスピカデリー",
          "start": 2574,
          "end": 3008
        },
        {
          "key": "フラレガイガル",
          "title": "フラレガイガール / さユり",
          "start": 3009,
          "end": 3615
        },
        {
          "key": "能動的三分間",
          "title": "能動的三分間 / 東京事変",
          "start": 3616,
          "end": 4274
        },
        {
          "key": "メランコリキッチン",
          "title": "メランコリーキッチン / 米津玄師",
          "start": 4275,
          "end": 4644
        },
        {
          "key": "モニタリング",
          "title": "モニタリング / DECO*27",
          "start": 4645,
          "end": 4979
        },
        {
          "key": "ずうっといっしょ！",
          "title": "ずうっといっしょ！ / キタニタツヤ",
          "start": 4980,
          "end": 5343
        },
        {
          "key": "素敵なしゅうまつを！",
          "title": "素敵なしゅうまつを！ / キタニタツヤ",
          "start": 5344,
          "end": null
        }
      ],
      "duration": 5619
    },
    {
      "id": "AJzuJ1BQGFk",
      "memberId": "tsukuri",
      "publishedAt": "2025-05-30",
      "title": "〖 縦型歌枠 〗この歌枠は縦型なんだ 〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "青春コンプレックス",
          "title": "青春コンプレックス / 結束バンド",
          "start": 220,
          "end": 584
        },
        {
          "key": "ギラギラ",
          "title": "ギラギラ / Ado",
          "start": 585,
          "end": 1198
        },
        {
          "key": "だから僕は音楽を辞めた",
          "title": "だから僕は音楽を辞めた / ヨルシカ",
          "start": 1199,
          "end": 1580
        },
        {
          "key": "シンデレラボイ",
          "title": "シンデレラボーイ / Saucy Dog",
          "start": 1581,
          "end": 1882
        },
        {
          "key": "stellarstellar",
          "title": "Stellar Stellar / 星街すいせい",
          "start": 1883,
          "end": 2380
        },
        {
          "key": "マシャルマキシマイザ",
          "title": "マーシャル・マキシマイザー / 柊マグネタイト",
          "start": 2381,
          "end": 2688
        },
        {
          "key": "恋愛裁判",
          "title": "恋愛裁判 / 40mP",
          "start": 2689,
          "end": 3174
        },
        {
          "key": "フォニイ",
          "title": "フォニイ / ツミキ",
          "start": 3175,
          "end": 3491
        },
        {
          "key": "badapple!!",
          "title": "Bad Apple!! / Alstroemeria Records",
          "start": 3492,
          "end": 3953
        },
        {
          "key": "残機",
          "title": "残機 / ずっと真夜中でいいのに。",
          "start": 3954,
          "end": 4334
        },
        {
          "key": "アンノウンマザグス",
          "title": "アンノウン・マザーグース / wowaka",
          "start": 4335,
          "end": 4822
        },
        {
          "key": "わたしのアル",
          "title": "わたしのアール / 和田たけあき(くらげP)",
          "start": 4823,
          "end": 5156
        },
        {
          "key": "長く短い祭",
          "title": "長く短い祭 / 椎名林檎",
          "start": 5157,
          "end": 5486
        },
        {
          "key": "逆光",
          "title": "逆光 / Ado",
          "start": 5487,
          "end": 5803
        },
        {
          "key": "魂のルフラン",
          "title": "魂のルフラン / 高橋洋子",
          "start": 5804,
          "end": 6137
        },
        {
          "key": "紅蓮華",
          "title": "紅蓮華 / LiSA",
          "start": 6138,
          "end": 6514
        },
        {
          "key": "oversoul",
          "title": "Over soul / 林原めぐみ",
          "start": 6515,
          "end": 7169
        },
        {
          "key": "少女レイ",
          "title": "少女レイ / みきとP",
          "start": 7170,
          "end": 7624
        },
        {
          "key": "mela!",
          "title": "Mela! / 緑黄色社会",
          "start": 7625,
          "end": null
        }
      ],
      "duration": 7963
    },
    {
      "id": "AjiIhR7vnvs",
      "memberId": "tsukuri",
      "publishedAt": "2025-06-03",
      "title": "〖 歌枠 〗高評価800いくまで終われま8→2222いってもうた 〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "水流のロック",
          "title": "水流のロック / 日食なつこ",
          "start": 235,
          "end": 525
        },
        {
          "key": "残響散",
          "title": "残響散歌 / Aimer",
          "start": 526,
          "end": 828
        },
        {
          "key": "ロウワ",
          "title": "ロウワー / ぬゆり",
          "start": 829,
          "end": 955
        },
        {
          "key": "バレリコ",
          "title": "バレリーコ / みきとP",
          "start": 956,
          "end": 1282
        },
        {
          "key": "ロミオとシンデレラ",
          "title": "ロミオとシンデレラ / doriko",
          "start": 1283,
          "end": 1687
        },
        {
          "key": "雨とカプチノ",
          "title": "雨とカプチーノ / ヨルシカ",
          "start": 1688,
          "end": 2074
        },
        {
          "key": "神っぽいな",
          "title": "神っぽいな / ピノキオピー",
          "start": 2075,
          "end": 2414
        },
        {
          "key": "天ノ弱",
          "title": "天ノ弱 / 164",
          "start": 2415,
          "end": 2707
        },
        {
          "key": "人間みたいね",
          "title": "人間みたいね / キタニタツヤ",
          "start": 2708,
          "end": 2956
        },
        {
          "key": "二息歩行",
          "title": "二息歩行 / DECO*27",
          "start": 2957,
          "end": 3295
        },
        {
          "key": "ハレンチ",
          "title": "ハレンチ / ちゃんみな",
          "start": 3296,
          "end": 3594
        },
        {
          "key": "蜜月アンドゥトロワ",
          "title": "蜜月アン・ドゥ・トロワ / DATEKEN",
          "start": 3595,
          "end": 4288
        },
        {
          "key": "いかないで",
          "title": "いかないで / 想太",
          "start": 4289,
          "end": 4571
        },
        {
          "key": "ガデン",
          "title": "ガーデン / 藤井風",
          "start": 4572,
          "end": 4956
        },
        {
          "key": "onlymyrailgun",
          "title": "only my railgun / fripSide",
          "start": 4957,
          "end": null
        }
      ],
      "duration": 5372
    },
    {
      "id": "u4xILjkPxsk",
      "memberId": "tsukuri",
      "publishedAt": "2025-06-06",
      "title": "〖 歌枠 〗登録者５万人行くまで終われま5 〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "ダリン",
          "title": "ダーリン / 須田景凪",
          "start": 98,
          "end": 384
        },
        {
          "key": "ヤミタイガル",
          "title": "ヤミタイガール / れるりり",
          "start": 385,
          "end": 808
        },
        {
          "key": "loveit?",
          "title": "Loveit? / biz×ZERA",
          "start": 809,
          "end": 1041
        },
        {
          "key": "魂のルフラン",
          "title": "魂のルフラン / 高橋洋子",
          "start": 1042,
          "end": 1465
        },
        {
          "key": "右肩の蝶",
          "title": "右肩の蝶 / のりP",
          "start": 1466,
          "end": 1889
        },
        {
          "key": "言って。",
          "title": "言って。 / ヨルシカ",
          "start": 1890,
          "end": 2169
        },
        {
          "key": "フォニイ",
          "title": "フォニイ / ツミキ",
          "start": 2170,
          "end": 2476
        },
        {
          "key": "からくりピエロ",
          "title": "からくりピエロ / 40mP",
          "start": 2477,
          "end": 2921
        },
        {
          "key": "aboutme",
          "title": "About me / 蝶々P",
          "start": 2922,
          "end": 3180
        },
        {
          "key": "ロウワ",
          "title": "ロウワー / ぬゆり",
          "start": 3181,
          "end": 3489
        },
        {
          "key": "ヒバナ",
          "title": "ヒバナ（アカペラ） / DECO*27",
          "start": 3490,
          "end": 3533
        },
        {
          "key": "ヒバナ",
          "title": "ヒバナ / DECO*27",
          "start": 3534,
          "end": 3771
        },
        {
          "key": "mela!",
          "title": "Mela! / 緑黄色社会",
          "start": 3772,
          "end": 4347
        },
        {
          "key": "ブリキノダンス",
          "title": "ブリキノダンス / 日向電工",
          "start": 4348,
          "end": null
        }
      ],
      "duration": 4683
    },
    {
      "id": "VU-9c7e7F1Y",
      "memberId": "tsukuri",
      "publishedAt": "2025-06-02",
      "title": "〖 歌枠 〗収益化ありがとうFOREVER 〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "阿修羅ちゃん",
          "title": "阿修羅ちゃん / Ado",
          "start": 254,
          "end": 707
        },
        {
          "key": "ラヴィ",
          "title": "ラヴィ / すりぃ",
          "start": 708,
          "end": 914
        },
        {
          "key": "ファタル",
          "title": "ファタール / GEMN",
          "start": 915,
          "end": 1841
        },
        {
          "key": "人魚",
          "title": "人魚 / ポルカドットスティングレイ",
          "start": 1842,
          "end": 2110
        },
        {
          "key": "beautifulworld",
          "title": "Beautiful World / 宇多田ヒカル",
          "start": 2111,
          "end": 2636
        },
        {
          "key": "ドラマツルギ",
          "title": "ドラマツルギー / Eve",
          "start": 2637,
          "end": 3299
        },
        {
          "key": "ラブ＆デストロイ",
          "title": "ラブ＆デストロイ / MI8k",
          "start": 3300,
          "end": 3820
        },
        {
          "key": "聖槍爆裂ボイ",
          "title": "聖槍爆裂ボーイ / れるりり, もじゃ",
          "start": 3821,
          "end": 4314
        },
        {
          "key": "ワルドランプシェド",
          "title": "ワールド・ランプシェード / buzzG",
          "start": 4315,
          "end": null
        }
      ],
      "duration": 6443
    },
    {
      "id": "A7j3NpJ0vzI",
      "memberId": "tsukuri",
      "publishedAt": "2025-06-19",
      "title": "〖 歌枠 〗ちょこっとだけ歌うなどしたりだとか 〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "怪獣の花唄",
          "title": "怪獣の花唄 / Vaundy",
          "start": 452,
          "end": 872
        },
        {
          "key": "テレキャスタビボイ",
          "title": "テレキャスタービーボーイ / すりぃ",
          "start": 873,
          "end": 1145
        },
        {
          "key": "レディレ",
          "title": "レディーレ / 須田景凪",
          "start": 1146,
          "end": 1377
        },
        {
          "key": "キュトなカノジョ",
          "title": "キュートなカノジョ / Syudou",
          "start": 1378,
          "end": 1729
        },
        {
          "key": "ずうっといっしょ！",
          "title": "ずうっといっしょ！ / キタニタツヤ",
          "start": 1730,
          "end": 2079
        },
        {
          "key": "リドコントロル",
          "title": "リードコントロール / なるみや",
          "start": 2080,
          "end": 2610
        },
        {
          "key": "プラネテス",
          "title": "プラネテス / seiza",
          "start": 2611,
          "end": 2824
        },
        {
          "key": "1000年生きてる",
          "title": "1000年生きてる / いよわ",
          "start": 2825,
          "end": 3131
        },
        {
          "key": "プロポズ",
          "title": "プロポーズ / 内緒のピアス",
          "start": 3132,
          "end": 3495
        },
        {
          "key": "ハイドアンドシク",
          "title": "ハイド・アンド・シーク / NOMELON NOLEMON",
          "start": 3496,
          "end": 4023
        },
        {
          "key": "echo",
          "title": "ECHO / Crusher-P",
          "start": 4024,
          "end": 4461
        },
        {
          "key": "いらないもの",
          "title": "いらないもの / キタニタツヤ×なとり",
          "start": 4462,
          "end": 4588
        },
        {
          "key": "カワキヲアメク",
          "title": "カワキヲアメク / 美波",
          "start": 4589,
          "end": 4864
        },
        {
          "key": "ミュジックミュジック",
          "title": "ミュージックミュージック / とあ",
          "start": 4865,
          "end": 5094
        },
        {
          "key": "ただ君に晴れ",
          "title": "ただ君に晴れ / ヨルシカ",
          "start": 5095,
          "end": 5391
        },
        {
          "key": "本能",
          "title": "本能 / 椎名林檎",
          "start": 5392,
          "end": 6112
        },
        {
          "key": "夜撫でるメノウ",
          "title": "夜撫でるメノウ / Ayase",
          "start": 6113,
          "end": null
        }
      ],
      "duration": 6453
    },
    {
      "id": "yz_8qLw4Z7A",
      "memberId": "tsukuri",
      "publishedAt": "2025-06-28",
      "title": "〖 歌枠 〗げりら・げりら・げりら 〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "変わらないもの",
          "title": "変わらないもの / 奥華子",
          "start": 229,
          "end": 689
        },
        {
          "key": "深海少女",
          "title": "深海少女 / ゆうゆ",
          "start": 690,
          "end": 1000
        },
        {
          "key": "カタオモイ",
          "title": "カタオモイ / Aimer",
          "start": 1001,
          "end": 1331
        },
        {
          "key": "スキスキ絶頂症",
          "title": "スキスキ絶頂症 / 電ポルP",
          "start": 1332,
          "end": 1566
        },
        {
          "key": "エンゼルフィッシュ",
          "title": "エンゼルフィッシュ / パトリチェフ",
          "start": 1567,
          "end": 1969
        },
        {
          "key": "きゅうくらりん",
          "title": "きゅうくらりん / いよわ",
          "start": 1970,
          "end": 2352
        },
        {
          "key": "刹那プラス",
          "title": "刹那プラス / みきとP",
          "start": 2353,
          "end": 3011
        },
        {
          "key": "フラジル",
          "title": "フラジール / ぬゆり",
          "start": 3012,
          "end": 3592
        },
        {
          "key": "ノンブレスオブリジュ",
          "title": "ノンブレス・オブリージュ / ピノキオピー",
          "start": 3593,
          "end": 4294
        },
        {
          "key": "ノマド",
          "title": "ノマド / 須田景凪",
          "start": 4295,
          "end": 4682
        },
        {
          "key": "少女レイ",
          "title": "少女レイ / みきとP",
          "start": 4683,
          "end": 5060
        },
        {
          "key": "夜明けと蛍",
          "title": "夜明けと蛍 / n-buna",
          "start": 5061,
          "end": 5447
        },
        {
          "key": "メリュ",
          "title": "メリュー / n-buna",
          "start": 5448,
          "end": 5809
        },
        {
          "key": "quietroom",
          "title": "quiet room / 有機酸",
          "start": 5810,
          "end": 6034
        },
        {
          "key": "乙女解剖",
          "title": "乙女解剖 / DECO*27",
          "start": 6035,
          "end": 6604
        },
        {
          "key": "さようなら、花泥棒さん",
          "title": "さようなら、花泥棒さん / メル",
          "start": 6605,
          "end": null
        }
      ],
      "duration": 6978
    },
    {
      "id": "OsAowO2rwX8",
      "memberId": "tsukuri",
      "publishedAt": "2025-06-30",
      "title": "〖 歌枠 〗とても素敵な 〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "モザイクロル",
          "title": "モザイクロール / DECO*27",
          "start": 241,
          "end": 777
        },
        {
          "key": "ロミオとシンデレラ",
          "title": "ロミオとシンデレラ / doriko",
          "start": 778,
          "end": 1160
        },
        {
          "key": "航海の唄",
          "title": "航海の唄 / さユり",
          "start": 1161,
          "end": 1644
        },
        {
          "key": "一度だけの恋なら",
          "title": "一度だけの恋なら / ワルキューレ",
          "start": 1645,
          "end": 2158
        },
        {
          "key": "名前のない怪物",
          "title": "名前のない怪物 / EGOIST",
          "start": 2159,
          "end": 2615
        },
        {
          "key": "ロキ",
          "title": "ロキ / みきとP",
          "start": 2616,
          "end": 3082
        },
        {
          "key": "踊",
          "title": "踊 / Ado",
          "start": 3083,
          "end": 3603
        },
        {
          "key": "ロリンガル",
          "title": "ローリンガール / wowaka",
          "start": 3604,
          "end": 3993
        },
        {
          "key": "セツナトリップ",
          "title": "セツナトリップ / Last Note.",
          "start": 3994,
          "end": 4430
        },
        {
          "key": "スロウダウナ",
          "title": "スロウダウナー / ろくろ",
          "start": 4431,
          "end": 4849
        },
        {
          "key": "unravel",
          "title": "unravel / TK from 凛として時雨",
          "start": 4850,
          "end": 6217
        },
        {
          "key": "とても素敵な六月でした",
          "title": "とても素敵な六月でした / Eight",
          "start": 6218,
          "end": null
        }
      ],
      "duration": 6669
    },
    {
      "id": "sZrGuETYpWY",
      "memberId": "tsukuri",
      "publishedAt": "2025-07-12",
      "title": "〖 歌枠 〗乗れる波は乗れってばっちゃんが言ってた 〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "生きてこそ",
          "title": "生きてこそ / Kiroro",
          "start": 408,
          "end": 958
        },
        {
          "key": "水流のロック",
          "title": "水流のロック / 日食なつこ",
          "start": 959,
          "end": 1359
        },
        {
          "key": "ワルズエンドダンスホル",
          "title": "ワールズエンド・ダンスホール / wowaka",
          "start": 1360,
          "end": 1813
        },
        {
          "key": "ダリンダンス",
          "title": "ダーリンダンス / かいりきベア",
          "start": 1814,
          "end": 2150
        },
        {
          "key": "プロポズ",
          "title": "プロポーズ / 内緒のピアス",
          "start": 2151,
          "end": 2586
        },
        {
          "key": "エゴロック",
          "title": "エゴロック / すりぃ",
          "start": 2587,
          "end": 2921
        },
        {
          "key": "badapple!!",
          "title": "Bad Apple!! /Alstroemeria Records",
          "start": 2922,
          "end": 3275
        },
        {
          "key": "godknows...",
          "title": "God knows... / 平野綾",
          "start": 3276,
          "end": 3708
        },
        {
          "key": "あなたのことをおしえて",
          "title": "あなたのことをおしえて / キタニタツヤ",
          "start": 3709,
          "end": 4037
        },
        {
          "key": "サマタイムレコド",
          "title": "サマータイムレコード / じん",
          "start": 4038,
          "end": 4422
        },
        {
          "key": "妄想感傷代償連盟",
          "title": "妄想感傷代償連盟 / DECO*27",
          "start": 4423,
          "end": 5399
        },
        {
          "key": "六兆年と一夜物語",
          "title": "六兆年と一夜物語 / kemu",
          "start": 5400,
          "end": null
        }
      ],
      "duration": 5720
    },
    {
      "id": "7qIRHYVAG84",
      "memberId": "tsukuri",
      "publishedAt": "2025-07-16",
      "title": "〖 歌枠 〗 週の真ん中なので歌う〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "残響散",
          "title": "残響散歌 / Aimer",
          "start": 424,
          "end": 744
        },
        {
          "key": "ピスサイン",
          "title": "ピースサイン / 米津玄師",
          "start": 745,
          "end": 1166
        },
        {
          "key": "ダリン",
          "title": "ダーリン / 須田景凪",
          "start": 1167,
          "end": 1727
        },
        {
          "key": "ロウワ",
          "title": "ロウワー / ぬゆり",
          "start": 1728,
          "end": 2199
        },
        {
          "key": "ロミオとシンデレラ",
          "title": "ロミオとシンデレラ / doriko",
          "start": 2200,
          "end": 2704
        },
        {
          "key": "季節は次々死んでいく",
          "title": "季節は次々死んでいく / amazarashi",
          "start": 2705,
          "end": 3416
        },
        {
          "key": "モニタリング",
          "title": "モニタリング / DECO*27",
          "start": 3417,
          "end": 3637
        },
        {
          "key": "リドコントロル",
          "title": "リードコントロール / なるみや",
          "start": 3638,
          "end": 3967
        },
        {
          "key": "t氏の話を信じるな",
          "title": "T氏の話を信じるな / ピノキオピー",
          "start": 3968,
          "end": 4254
        },
        {
          "key": "dec.",
          "title": "Dec. / Kanaria",
          "start": 4255,
          "end": 4547
        },
        {
          "key": "king",
          "title": "KING / Kanaria",
          "start": 4548,
          "end": 4735
        },
        {
          "key": "デモンロド",
          "title": "デーモンロード / Kanaria",
          "start": 4736,
          "end": 5067
        },
        {
          "key": "ライオン",
          "title": "ライオン / May'n,中島愛",
          "start": 5068,
          "end": 5503
        },
        {
          "key": "星間飛行",
          "title": "星間飛行 / 中島愛",
          "start": 5504,
          "end": 5947
        },
        {
          "key": "beautifulworld",
          "title": "Beautiful World / 宇多田ヒカル",
          "start": 5948,
          "end": 6453
        },
        {
          "key": "夜咄ディセイブ",
          "title": "夜咄ディセイブ / じん",
          "start": 6454,
          "end": 6658
        },
        {
          "key": "ロスタイムメモリ",
          "title": "ロスタイムメモリー / じん",
          "start": 6659,
          "end": 7337
        },
        {
          "key": "daze",
          "title": "daze / じん",
          "start": 7338,
          "end": null
        }
      ],
      "duration": 7849
    },
    {
      "id": "y24GlFS9zz0",
      "memberId": "tsukuri",
      "publishedAt": "2025-07-21",
      "title": "〖 歌枠 〗 ラッキー７万人耐久〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "逆光",
          "title": "逆光 / Ado",
          "start": 210,
          "end": 685
        },
        {
          "key": "雨とカプチノ",
          "title": "雨とカプチーノ / ヨルシカ",
          "start": 686,
          "end": 1073
        },
        {
          "key": "とても素敵な六月でした",
          "title": "とても素敵な六月でした / Eight",
          "start": 1074,
          "end": 1509
        },
        {
          "key": "ギブス",
          "title": "ギブス / 椎名林檎",
          "start": 1510,
          "end": 2092
        },
        {
          "key": "ずうっといっしょ！",
          "title": "ずうっといっしょ！ / キタニタツヤ",
          "start": 2093,
          "end": 2441
        },
        {
          "key": "神っぽいな",
          "title": "神っぽいな / ピノキオピー",
          "start": 2442,
          "end": 3001
        },
        {
          "key": "ゴストルル",
          "title": "ゴーストルール / DECO*27",
          "start": 3002,
          "end": 3410
        },
        {
          "key": "ロキ",
          "title": "ロキ / みきとP",
          "start": 3411,
          "end": 3810
        },
        {
          "key": "マシャルマキシマイザ",
          "title": "マーシャル・マキシマイザー / 柊マグネタイト",
          "start": 3811,
          "end": 4146
        },
        {
          "key": "悪魔の踊り方",
          "title": "悪魔の踊り方 / キタニタツヤ",
          "start": 4147,
          "end": 4638
        },
        {
          "key": "cult",
          "title": "CULT / DUSTCELL",
          "start": 4639,
          "end": 5076
        },
        {
          "key": "ロストワンの号哭",
          "title": "ロストワンの号哭 / Neru",
          "start": 5077,
          "end": 5481
        },
        {
          "key": "再教育",
          "title": "再教育 / Neru",
          "start": 5482,
          "end": 5839
        },
        {
          "key": "ウミユリ海底譚",
          "title": "ウミユリ海底譚 / n-buna",
          "start": 5840,
          "end": 6289
        },
        {
          "key": "サムライハト",
          "title": "サムライハート / SPYAIR",
          "start": 6290,
          "end": 6651
        },
        {
          "key": "ジレンマ",
          "title": "ジレンマ / ecosystem",
          "start": 6652,
          "end": 7026
        },
        {
          "key": "パンダヒロ",
          "title": "パンダヒーロー / ハチ",
          "start": 7027,
          "end": 7461
        },
        {
          "key": "炉心融解",
          "title": "炉心融解 / iroha",
          "start": 7462,
          "end": 7892
        },
        {
          "key": "少女レイ",
          "title": "少女レイ / みきとP",
          "start": 7893,
          "end": 8248
        },
        {
          "key": "ロミオとシンデレラ",
          "title": "ロミオとシンデレラ / doriko",
          "start": 8249,
          "end": 8667
        },
        {
          "key": "フォニイ",
          "title": "フォニイ / ツミキ",
          "start": 8668,
          "end": 8948
        },
        {
          "key": "アンノウンマザグス",
          "title": "アンノウン・マザーグース / wowaka",
          "start": 8949,
          "end": 9246
        },
        {
          "key": "サマタイムレコド",
          "title": "サマータイムレコード / じん",
          "start": 9247,
          "end": null
        }
      ],
      "duration": 10704
    },
    {
      "id": "NgFZN0VrJDQ",
      "memberId": "tsukuri",
      "publishedAt": "2025-07-27",
      "title": "【眠雲ツクリ】最高のバトンを受け取りました。ラストかますぞ",
      "songs": [
        {
          "key": "ヒバナ",
          "title": "ヒバナ（アカペラ） / DECO*27",
          "start": 61,
          "end": 163
        },
        {
          "key": "ヒバナ",
          "title": "ヒバナ / DECO*27",
          "start": 164,
          "end": 374
        },
        {
          "key": "天ノ弱",
          "title": "天ノ弱 / 164",
          "start": 375,
          "end": 759
        },
        {
          "key": "幽霊東京",
          "title": "幽霊東京 / Ayase",
          "start": 760,
          "end": 1075
        },
        {
          "key": "フォニイ",
          "title": "フォニイ / ツミキ",
          "start": 1076,
          "end": 1359
        },
        {
          "key": "badapple!!",
          "title": "Bad Apple!! / Alstroemeria Records",
          "start": 1360,
          "end": 1860
        },
        {
          "key": "echo",
          "title": "ECHO / Crusher-P",
          "start": 1861,
          "end": 2157
        },
        {
          "key": "ずうっといっしょ！",
          "title": "ずうっといっしょ！ / キタニタツヤ",
          "start": 2158,
          "end": 2343
        },
        {
          "key": "リドコントロル",
          "title": "リードコントロール / なるみや",
          "start": 2344,
          "end": 2684
        },
        {
          "key": "onlymyrailgun",
          "title": "only my railgun / fripSide",
          "start": 2685,
          "end": null
        }
      ],
      "fromNote": "【眠雲ツクリ】最高のバトンを受け取りました。ラストかますぞ"
    },
    {
      "id": "-04_M7QpSvA",
      "memberId": "tsukuri",
      "publishedAt": "2025-08-03",
      "title": "〖 歌枠 〗 八月一発目はこうじゃろ〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "サウダジ",
          "title": "サウダージ / ポルノグラフィティ",
          "start": 1081,
          "end": 1520
        },
        {
          "key": "少女レイ",
          "title": "少女レイ / みきとP",
          "start": 1521,
          "end": 1937
        },
        {
          "key": "アイラ",
          "title": "アイラ / n-buna",
          "start": 1938,
          "end": 2552
        },
        {
          "key": "砂の惑星",
          "title": "砂の惑星 / ハチ",
          "start": 2553,
          "end": 2948
        },
        {
          "key": "八月の夜",
          "title": "八月の夜 / SILENT SIREN",
          "start": 2949,
          "end": 3224
        },
        {
          "key": "紅蓮華",
          "title": "紅蓮華 / LiSA",
          "start": 3225,
          "end": 3756
        },
        {
          "key": "炎",
          "title": "炎 / LiSA",
          "start": 3757,
          "end": 4248
        },
        {
          "key": "深海のリトルクライ",
          "title": "深海のリトルクライ / sasakure.UK",
          "start": 4249,
          "end": 4926
        },
        {
          "key": "独りんぼエンヴィ",
          "title": "独りんぼエンヴィー / 電ポルP",
          "start": 4927,
          "end": 5231
        },
        {
          "key": "ポニテルとシュシュ",
          "title": "ポニーテールとシュシュ / AKB48",
          "start": 5232,
          "end": 5852
        },
        {
          "key": "帰り道は遠回りしたくなる",
          "title": "帰り道は遠回りしたくなる / 乃木坂46",
          "start": 5853,
          "end": 6462
        },
        {
          "key": "孤独月",
          "title": "孤独月 / 幽閉サテライト",
          "start": 6463,
          "end": 6922
        },
        {
          "key": "snooze",
          "title": "snooze / wotaku",
          "start": 6923,
          "end": 7280
        },
        {
          "key": "imawanokiwa",
          "title": "IMAWANOKIWA / いよわ",
          "start": 7281,
          "end": 8521
        },
        {
          "key": "おやすみ泣き声、さよなら姫",
          "title": "おやすみ泣き声、さよなら歌姫 / クリープハイプ",
          "start": 8522,
          "end": null
        }
      ],
      "duration": 8826
    },
    {
      "id": "Fmi__XJC4j8",
      "memberId": "tsukuri",
      "publishedAt": "2025-08-09",
      "title": "〖 歌枠 〗お昼なにたべよ〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "アスノヨゾラ哨戒班",
          "title": "アスノヨゾラ哨戒班 / Orangestar",
          "start": 416,
          "end": 833
        },
        {
          "key": "気まぐれロマンティック",
          "title": "気まぐれロマンティック / いきものがかり",
          "start": 834,
          "end": 1288
        },
        {
          "key": "リドコントロル",
          "title": "リードコントロール / なるみや",
          "start": 1289,
          "end": 1606
        },
        {
          "key": "少女レイ",
          "title": "少女レイ / みきとP",
          "start": 1607,
          "end": 2234
        },
        {
          "key": "打上花火",
          "title": "打上花火 / DAOKO×米津玄師",
          "start": 2235,
          "end": 2654
        },
        {
          "key": "春を告げる",
          "title": "春を告げる / yama",
          "start": 2655,
          "end": 3015
        },
        {
          "key": "いのちの名前",
          "title": "いのちの名前 / 木村弓",
          "start": 3016,
          "end": 3365
        },
        {
          "key": "フォニイ",
          "title": "フォニイ / ツミキ",
          "start": 3366,
          "end": 3614
        },
        {
          "key": "紅蓮華",
          "title": "紅蓮華 / LiSA",
          "start": 3615,
          "end": 4159
        },
        {
          "key": "ラヴィ",
          "title": "ラヴィ / すりぃ",
          "start": 4160,
          "end": 4490
        },
        {
          "key": "8.32",
          "title": "8.32 / *Luna",
          "start": 4491,
          "end": 4744
        },
        {
          "key": "アンノウンマザグス",
          "title": "アンノウン・マザーグース / wowaka",
          "start": 4745,
          "end": 5239
        },
        {
          "key": "ハレンチ",
          "title": "ハレンチ / ちゃんみな",
          "start": 5240,
          "end": 5682
        },
        {
          "key": "だから僕は音楽を辞めた",
          "title": "だから僕は音楽を辞めた / ヨルシカ",
          "start": 5683,
          "end": null
        }
      ],
      "duration": 4
    },
    {
      "id": "dlk8PPJfRj0",
      "memberId": "tsukuri",
      "publishedAt": "2025-08-16",
      "title": "〖 カゲプロ歌枠 〗メカクシ完了（一日遅れ）〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "カゲロウデイズ",
          "title": "カゲロウデイズ / じん",
          "start": 288,
          "end": 717
        },
        {
          "key": "チルドレンレコド",
          "title": "チルドレンレコード / じん",
          "start": 718,
          "end": 1084
        },
        {
          "key": "空想フォレスト",
          "title": "空想フォレスト / じん",
          "start": 1085,
          "end": 1649
        },
        {
          "key": "夕景イエスタデイ",
          "title": "夕景イエスタデイ / じん",
          "start": 1650,
          "end": 2060
        },
        {
          "key": "ヘッドフォンアクタ",
          "title": "ヘッドフォンアクター / じん",
          "start": 2061,
          "end": 2399
        },
        {
          "key": "コノハの世界事情",
          "title": "コノハの世界事情 / じん",
          "start": 2400,
          "end": 2725
        },
        {
          "key": "夜咄ディセイブ",
          "title": "夜咄ディセイブ / じん",
          "start": 2726,
          "end": 3056
        },
        {
          "key": "アウタサイエンス",
          "title": "アウターサイエンス / じん",
          "start": 3057,
          "end": 3428
        },
        {
          "key": "ロスタイムメモリ",
          "title": "ロスタイムメモリー / じん",
          "start": 3429,
          "end": 3814
        },
        {
          "key": "アヤノの幸福理論",
          "title": "アヤノの幸福理論 / じん",
          "start": 3815,
          "end": 4645
        },
        {
          "key": "daze",
          "title": "daze / じん",
          "start": 4646,
          "end": 4889
        },
        {
          "key": "サマタイムレコド",
          "title": "サマータイムレコード / じん",
          "start": 4890,
          "end": null
        }
      ],
      "duration": 5682
    },
    {
      "id": "HkGkcPLOAPU",
      "memberId": "tsukuri",
      "publishedAt": "2025-08-18",
      "title": "〖 告知アリ！ 〗高評価3000耐久歌枠〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "カタオモイ",
          "title": "カタオモイ / Aimer",
          "start": 429,
          "end": 856
        },
        {
          "key": "打上花火",
          "title": "打上花火 / DAOKO×米津玄師",
          "start": 857,
          "end": 1271
        },
        {
          "key": "残響散",
          "title": "残響散歌 / Aimer",
          "start": 1272,
          "end": 1473
        },
        {
          "key": "ひゅるりらぱっぱ",
          "title": "ひゅるりらぱっぱ / tuki.",
          "start": 1474,
          "end": 1731
        },
        {
          "key": "少女レイ",
          "title": "少女レイ / みきとP",
          "start": 1732,
          "end": 2101
        },
        {
          "key": "ロミオとシンデレラ",
          "title": "ロミオとシンデレラ / doriko",
          "start": 2102,
          "end": 2504
        },
        {
          "key": "プロポズ",
          "title": "プロポーズ / 内緒のピアス",
          "start": 2505,
          "end": 2862
        },
        {
          "key": "チェリポップ",
          "title": "チェリーポップ / DECO*27",
          "start": 2863,
          "end": 3235
        },
        {
          "key": "六兆年と一夜物語",
          "title": "六兆年と一夜物語 / kemu",
          "start": 3236,
          "end": 3494
        },
        {
          "key": "daybreakfrontline",
          "title": "DAYBREAK FRONTLINE / Orangestar",
          "start": 3495,
          "end": 3642
        },
        {
          "key": "mela!",
          "title": "Mela! / 緑黄色社会",
          "start": 3643,
          "end": 4079
        },
        {
          "key": "エゴロック",
          "title": "エゴロック / すりぃ",
          "start": 4080,
          "end": 4170
        },
        {
          "key": "千本桜",
          "title": "千本桜 / 黒うさP",
          "start": 4171,
          "end": 4586
        },
        {
          "key": "ひゅるりらぱっぱ",
          "title": "ひゅるりらぱっぱ / tuki.",
          "start": 4587,
          "end": 4876
        },
        {
          "key": "ひゅるりらぱっぱ",
          "title": "ひゅるりらぱっぱ / tuki.",
          "start": 4877,
          "end": 6089
        },
        {
          "key": "ヒバナ",
          "title": "ヒバナ / DECO*27",
          "start": 6090,
          "end": null
        }
      ],
      "duration": 7959
    },
    {
      "id": "K-_AeM8Yt0k",
      "memberId": "tsukuri",
      "publishedAt": "2025-08-21",
      "title": "〖 歌枠 〗好きなアニソンを聴け〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "ムンライト伝説",
          "title": "ムーンライト伝説 / DALI",
          "start": 353,
          "end": 674
        },
        {
          "key": "together",
          "title": "Together / あきよしふみえ",
          "start": 675,
          "end": 1005
        },
        {
          "key": "バトルフロンティア",
          "title": "バトルフロンティア / 高屋亜希那",
          "start": 1006,
          "end": 1391
        },
        {
          "key": "ピスサイン",
          "title": "ピースサイン / 米津玄師",
          "start": 1392,
          "end": 1808
        },
        {
          "key": "航海の唄",
          "title": "航海の唄 / さユり",
          "start": 1809,
          "end": 2267
        },
        {
          "key": "don'tsaylazy",
          "title": "Don't say \"lazy\" / 桜高軽音部",
          "start": 2268,
          "end": 2682
        },
        {
          "key": "青春コンプレックス",
          "title": "青春コンプレックス / 結束バンド",
          "start": 2683,
          "end": 3038
        },
        {
          "key": "oversoul",
          "title": "Over soul / 林原めぐみ",
          "start": 3039,
          "end": 3351
        },
        {
          "key": "northernlights",
          "title": "Northern lights（アカペラ） / 林原めぐみ",
          "start": 3352,
          "end": 3702
        },
        {
          "key": "pray",
          "title": "Pray / Tommy heavenly6",
          "start": 3703,
          "end": 4227
        },
        {
          "key": "月華-tsukihana",
          "title": "月華-tsukihana- / 北出菜奈",
          "start": 4228,
          "end": 4908
        },
        {
          "key": "残響散",
          "title": "残響散歌 / Aimer",
          "start": 4909,
          "end": 5132
        },
        {
          "key": "アイドル",
          "title": "アイドル / YOASOBI",
          "start": 5133,
          "end": 5448
        },
        {
          "key": "君の知らない物語",
          "title": "君の知らない物語 / supercell",
          "start": 5449,
          "end": 5715
        },
        {
          "key": "創聖のアクエリオン",
          "title": "創聖のアクエリオン / AKINO",
          "start": 5716,
          "end": 6065
        },
        {
          "key": "シュガソングとビタステップ",
          "title": "シュガーソングとビターステップ / UNISON SQUARE GARDEN",
          "start": 6066,
          "end": 6491
        },
        {
          "key": "snowhalation",
          "title": "Snow halation / μ's",
          "start": 6492,
          "end": 6679
        },
        {
          "key": "ライオン",
          "title": "ライオン / May'n,中島 愛",
          "start": 6680,
          "end": 6986
        },
        {
          "key": "onlymyrailgun",
          "title": "only my railgun / fripside",
          "start": 6987,
          "end": 7445
        },
        {
          "key": "level5-judgelight",
          "title": "LEVEL5-judgelight- / fripside",
          "start": 7446,
          "end": 8337
        },
        {
          "key": "ラピスラズリ",
          "title": "ラピスラズリ / 藍井エイル",
          "start": 8338,
          "end": 8976
        },
        {
          "key": "一度だけの恋なら",
          "title": "一度だけの恋なら / ワルキューレ",
          "start": 8977,
          "end": null
        }
      ],
      "duration": 10885
    },
    {
      "id": "QtEdfJl7ln8",
      "memberId": "tsukuri",
      "publishedAt": "2025-08-01",
      "title": "〖 #ミリプロサマー2025 〗夏の思い出作ってあげる。〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "群青日和",
          "title": "群青日和 / 東京事変",
          "start": 154,
          "end": 378
        },
        {
          "key": "裸足でsummer",
          "title": "裸足でSummer / 乃木坂46",
          "start": 379,
          "end": 709
        },
        {
          "key": "daze",
          "title": "daze / じん",
          "start": 710,
          "end": 948
        },
        {
          "key": "8.32",
          "title": "8.32 / *Luna",
          "start": 949,
          "end": 1272
        },
        {
          "key": "daybreakfrontline",
          "title": "DAYBREAK FRONTLINE / Orangestar",
          "start": 1273,
          "end": 1620
        },
        {
          "key": "雪",
          "title": "雪（アカペラ） / 不詳",
          "start": 1621,
          "end": 1690
        },
        {
          "key": "夏",
          "title": "夏 / さユり",
          "start": 1691,
          "end": 1909
        },
        {
          "key": "いかないで",
          "title": "いかないで / 想太",
          "start": 1910,
          "end": 2132
        },
        {
          "key": "ロスタイムメモリ",
          "title": "ロスタイムメモリー / じん",
          "start": 2133,
          "end": 2433
        },
        {
          "key": "八月のレイニ",
          "title": "八月のレイニー / はるまきごはん",
          "start": 2434,
          "end": null
        }
      ],
      "duration": 2711
    },
    {
      "id": "H1EUSvzseMg",
      "memberId": "tsukuri",
      "publishedAt": "2025-08-25",
      "title": "〖 歌枠 〗10万人耐久！いくぞ〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "パンダヒロ",
          "title": "パンダヒーロー / ハチ",
          "start": 296,
          "end": 647
        },
        {
          "key": "残響散",
          "title": "残響散歌 / Aimer",
          "start": 648,
          "end": 1009
        },
        {
          "key": "残酷な天使のテゼ",
          "title": "残酷な天使のテーゼ / 高橋洋子",
          "start": 1010,
          "end": 1379
        },
        {
          "key": "魂のルフラン",
          "title": "魂のルフラン / 高橋洋子",
          "start": 1380,
          "end": 1777
        },
        {
          "key": "少女レイ",
          "title": "少女レイ / みきとP",
          "start": 1778,
          "end": 2214
        },
        {
          "key": "surges",
          "title": "Surges / Orangestar",
          "start": 2215,
          "end": 2423
        },
        {
          "key": "ただ君に晴れ",
          "title": "ただ君に晴れ / ヨルシカ",
          "start": 2424,
          "end": 2672
        },
        {
          "key": "言って",
          "title": "言って / ヨルシカ",
          "start": 2673,
          "end": 2934
        },
        {
          "key": "だから僕は音楽を辞めた",
          "title": "だから僕は音楽を辞めた / ヨルシカ",
          "start": 2935,
          "end": 3361
        },
        {
          "key": "あの夏が飽和する。",
          "title": "あの夏が飽和する。 / カンザキイオリ",
          "start": 3362,
          "end": 3565
        },
        {
          "key": "サリシノハラ",
          "title": "サリシノハラ / みきとP",
          "start": 3566,
          "end": 3918
        },
        {
          "key": "小夜子",
          "title": "小夜子 / みきとP",
          "start": 3919,
          "end": 4101
        },
        {
          "key": "ハッピラッキチャッピ",
          "title": "ハッピーラッキーチャッピー / ano",
          "start": 4102,
          "end": 4501
        },
        {
          "key": "ロリンガル",
          "title": "ローリンガール / wowaka",
          "start": 4502,
          "end": 4845
        },
        {
          "key": "残酷な夜に輝け",
          "title": "残酷な夜に輝け / LiSA",
          "start": 4846,
          "end": 5444
        },
        {
          "key": "気まぐれロマンティック",
          "title": "気まぐれロマンティック/ いきものがかり",
          "start": 5445,
          "end": 5772
        },
        {
          "key": "フォニイ",
          "title": "フォニイ / ツミキ",
          "start": 5773,
          "end": 6138
        },
        {
          "key": "スロウダウナ",
          "title": "スロウダウナー / ろくろ",
          "start": 6139,
          "end": 6463
        },
        {
          "key": "深海少女",
          "title": "深海少女 / ゆうゆ",
          "start": 6464,
          "end": 6760
        },
        {
          "key": "8.32",
          "title": "8.32 / *Luna",
          "start": 6761,
          "end": 7089
        },
        {
          "key": "ヴァンパイア",
          "title": "ヴァンパイア / DECO*27",
          "start": 7090,
          "end": 7518
        },
        {
          "key": "ボルテッカ",
          "title": "ボルテッカー / DECO*27",
          "start": 7519,
          "end": 7813
        },
        {
          "key": "ヤミタイガル",
          "title": "ヤミタイガール / れるりり",
          "start": 7814,
          "end": 8243
        },
        {
          "key": "色は匂へど散りぬるを",
          "title": "色は匂へど 散りぬるを / 幽閉サテライト",
          "start": 8244,
          "end": 8623
        },
        {
          "key": "孤独月",
          "title": "孤独月 / 幽閉サテライト",
          "start": 8624,
          "end": 9030
        },
        {
          "key": "ウミユリ海底譚",
          "title": "ウミユリ海底譚（-4） / n-buna",
          "start": 9031,
          "end": 9331
        },
        {
          "key": "ドラマツルギ",
          "title": "ドラマツルギー / Eve",
          "start": 9332,
          "end": 9692
        },
        {
          "key": "妄想感傷代償連盟",
          "title": "妄想感傷代償連盟 / DECO*27",
          "start": 9693,
          "end": 10052
        },
        {
          "key": "人生は夢だらけ",
          "title": "人生は夢だらけ / 椎名林檎",
          "start": 10053,
          "end": 10382
        },
        {
          "key": "春雷",
          "title": "春雷 / 米津玄師",
          "start": 10383,
          "end": 10800
        },
        {
          "key": "おやすみ泣き声、さよなら姫",
          "title": "おやすみ泣き声、さよなら歌姫 / クリープハイプ",
          "start": 10801,
          "end": 11053
        },
        {
          "key": "ひゅるりらぱっぱ",
          "title": "ひゅるりらぱっぱ / tuki.",
          "start": 11054,
          "end": 11292
        },
        {
          "key": "ヒバナ",
          "title": "ヒバナ / DECO*27",
          "start": 11293,
          "end": 11495
        },
        {
          "key": "これから",
          "title": "これから / 眠雲ツクリ",
          "start": 11496,
          "end": 12547
        },
        {
          "key": "アンノウンマザグス",
          "title": "アンノウン・マザーグース / wowaka",
          "start": 12548,
          "end": null
        }
      ],
      "duration": 13127
    },
    {
      "id": "1Shx1LxZXHA",
      "memberId": "tsukuri",
      "publishedAt": "2025-09-02",
      "title": "〖 歌枠 〗お披露目＆告知＆なんでもアリな誕生日歌枠〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "狂乱heykids!!",
          "title": "狂乱 Hey Kids!! / THE ORAL CIGARETTES",
          "start": 190,
          "end": 471
        },
        {
          "key": "ヒバナ",
          "title": "ヒバナ / DECO*27",
          "start": 472,
          "end": 994
        },
        {
          "key": "エンヴィキャットウォク",
          "title": "エンヴィキャットウォーク / トーマ",
          "start": 995,
          "end": 1384
        },
        {
          "key": "northernlights",
          "title": "Northern Lights / 林原めぐみ",
          "start": 1385,
          "end": 1801
        },
        {
          "key": "テレキャスタストライプ",
          "title": "テレキャスター・ストライプ / ポルカドットスティングレイ",
          "start": 1802,
          "end": 2274
        },
        {
          "key": "長く短い祭",
          "title": "長く短い祭 / 椎名林檎",
          "start": 2275,
          "end": 2703
        },
        {
          "key": "ひゅるりらぱっぱ",
          "title": "ひゅるりらぱっぱ / tuki.",
          "start": 2704,
          "end": 3089
        },
        {
          "key": "聖槍爆裂ボイ",
          "title": "聖槍爆裂ボーイ / れるりり",
          "start": 3090,
          "end": 3411
        },
        {
          "key": "birthdaysong",
          "title": "birthday song / 酸欠少女さユり",
          "start": 3412,
          "end": 3834
        },
        {
          "key": "寝言は寝て言え",
          "title": "寝言は寝て言え / いよわ feat.月ノ美兎",
          "start": 3835,
          "end": 6019
        },
        {
          "key": "私が明日死ぬなら",
          "title": "私が明日死ぬなら / キタニタツヤ",
          "start": 6020,
          "end": null
        }
      ],
      "duration": 6316
    },
    {
      "id": "VdO7lXg730Y",
      "memberId": "tsukuri",
      "publishedAt": "2025-09-07",
      "title": "〖 歌枠 〗チルい感じで〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "八月のレイニ",
          "title": "八月のレイニー / はるまきごはん",
          "start": 374,
          "end": 803
        },
        {
          "key": "若者のすべて",
          "title": "若者のすべて / フジファブリック",
          "start": 804,
          "end": 1269
        },
        {
          "key": "ミュジックミュジック",
          "title": "ミュージックミュージック / とあ",
          "start": 1270,
          "end": 1674
        },
        {
          "key": "からくりピエロ",
          "title": "からくりピエロ / 40㍍P",
          "start": 1675,
          "end": 1964
        },
        {
          "key": "深海少女",
          "title": "深海少女 / ゆうゆ",
          "start": 1965,
          "end": 2361
        },
        {
          "key": "乙女解剖",
          "title": "乙女解剖 / DECO*27",
          "start": 2362,
          "end": 2826
        },
        {
          "key": "justbefriends",
          "title": "Just Be Friends / Dixie Flatline",
          "start": 2827,
          "end": 3252
        },
        {
          "key": "心做し",
          "title": "心做し / 蝶々P",
          "start": 3253,
          "end": 3624
        },
        {
          "key": "少女レイ",
          "title": "少女レイ / みきとP",
          "start": 3625,
          "end": 4092
        },
        {
          "key": "いかないで",
          "title": "いかないで / 想太",
          "start": 4093,
          "end": 4468
        },
        {
          "key": "ツギハギスタッカト",
          "title": "ツギハギスタッカート / とあ",
          "start": 4469,
          "end": 4831
        },
        {
          "key": "忘れじの言の葉",
          "title": "忘れじの言の葉 / 安次嶺希和子",
          "start": 4832,
          "end": 5263
        },
        {
          "key": "いきのこり●ぼくら",
          "title": "いきのこり●ぼくら / 青葉市子",
          "start": 5264,
          "end": 6025
        },
        {
          "key": "onelastkiss",
          "title": "One Last Kiss / 宇多田ヒカル",
          "start": 6026,
          "end": 6383
        },
        {
          "key": "アイネクライネ",
          "title": "アイネクライネ / 米津玄師",
          "start": 6384,
          "end": 6902
        },
        {
          "key": "ラグトレイン",
          "title": "ラグトレイン / 稲葉曇",
          "start": 6903,
          "end": null
        }
      ],
      "duration": 7292
    },
    {
      "id": "Atk1veH5oKU",
      "memberId": "tsukuri",
      "publishedAt": "2025-09-13",
      "title": "〖 歌枠 〗残暑を吹き飛ばすやつ〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "ブリキノダンス",
          "title": "ブリキノダンス / 日向電工",
          "start": 210,
          "end": 652
        },
        {
          "key": "六兆年と一夜物語",
          "title": "六兆年と一夜物語 / kemu",
          "start": 653,
          "end": 1002
        },
        {
          "key": "レディメイド",
          "title": "レディメイド / Ado",
          "start": 1003,
          "end": 1406
        },
        {
          "key": "唱",
          "title": "唱 / Ado",
          "start": 1407,
          "end": 1717
        },
        {
          "key": "名前のない怪物",
          "title": "名前のない怪物 / EGOIST",
          "start": 1718,
          "end": 2173
        },
        {
          "key": "残機",
          "title": "残機 / ずっと真夜中でいいのに。",
          "start": 2174,
          "end": 2516
        },
        {
          "key": "ヒビカセ",
          "title": "ヒビカセ / ギガP",
          "start": 2517,
          "end": 2989
        },
        {
          "key": "脱法ロック",
          "title": "脱法ロック / Neru",
          "start": 2990,
          "end": 3284
        },
        {
          "key": "繰り返し一粒",
          "title": "繰り返し一粒 / 猫虫P",
          "start": 3285,
          "end": 3614
        },
        {
          "key": "少女レイ",
          "title": "少女レイ / みきとP",
          "start": 3615,
          "end": 4088
        },
        {
          "key": "吉原ラメント",
          "title": "吉原ラメント / 亜沙",
          "start": 4089,
          "end": 4421
        },
        {
          "key": "右に曲ガル",
          "title": "右に曲ガール / はるふり",
          "start": 4422,
          "end": 4809
        },
        {
          "key": "妄想税",
          "title": "妄想税 / DECO*27",
          "start": 4810,
          "end": 5257
        },
        {
          "key": "ルマ",
          "title": "ルーマー / ポリスピカデリー",
          "start": 5258,
          "end": 5581
        },
        {
          "key": "モニタリング",
          "title": "モニタリング (Best Friend Remix) / DECO*27",
          "start": 5582,
          "end": null
        }
      ],
      "duration": 5907
    },
    {
      "id": "8A9VZTP7irs",
      "memberId": "tsukuri",
      "publishedAt": "2025-09-17",
      "title": "【#CMYKProject】君には何色にみえる？",
      "songs": [
        {
          "key": "二息歩行",
          "title": "二息歩行 / DECO*27",
          "start": 148,
          "end": 336
        },
        {
          "key": "ラブ＆デストロイ",
          "title": "ラブ＆デストロイ / MI8k",
          "start": 337,
          "end": 743
        },
        {
          "key": "人間みたいね",
          "title": "人間みたいね / キタニタツヤ",
          "start": 744,
          "end": 1000
        },
        {
          "key": "ミカヅキ",
          "title": "ミカヅキ / さユり",
          "start": 1001,
          "end": 1421
        },
        {
          "key": "アンノウンマザグス",
          "title": "アンノウン・マザーグース / wowaka",
          "start": 1422,
          "end": null
        }
      ],
      "fromNote": "【#CMYKProject】君には何色にみえる？"
    },
    {
      "id": "cH3FKwGpaUo",
      "memberId": "tsukuri",
      "publishedAt": "2025-10-02",
      "title": "〖 歌枠 〗告知は突然訪れる〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "バレリコ",
          "title": "バレリーコ / みきとP",
          "start": 321,
          "end": 808
        },
        {
          "key": "千本桜",
          "title": "千本桜 / 黒うさP",
          "start": 809,
          "end": 1060
        },
        {
          "key": "ロキ",
          "title": "ロキ / みきとP",
          "start": 1061,
          "end": 1559
        },
        {
          "key": "六兆年と一夜物語",
          "title": "六兆年と一夜物語 / kemu",
          "start": 1560,
          "end": 1951
        },
        {
          "key": "irisout",
          "title": "IRIS OUT / 米津玄師",
          "start": 1952,
          "end": 2247
        },
        {
          "key": "ひゅるりらぱっぱ",
          "title": "ひゅるりらぱっぱ / tuki.",
          "start": 2248,
          "end": 2909
        },
        {
          "key": "素敵なしゅうまつを！",
          "title": "素敵なしゅうまつを！ / キタニタツヤ",
          "start": 2910,
          "end": 3254
        },
        {
          "key": "stellarstellar",
          "title": "Stellar Stellar / 星街すいせい",
          "start": 3255,
          "end": 3745
        },
        {
          "key": "ハロ",
          "title": "ハロ／ハワユ / ナノウ",
          "start": 3746,
          "end": 4087
        },
        {
          "key": "q",
          "title": "Q / 椎名もた",
          "start": 4088,
          "end": 4574
        },
        {
          "key": "ナヴインパルス",
          "title": "ナーヴ・インパルス / ポリスピカデリー",
          "start": 4575,
          "end": 5104
        },
        {
          "key": "トリノコシティ",
          "title": "トリノコシティ / 40㍍P",
          "start": 5105,
          "end": 5383
        },
        {
          "key": "残酷な夜に輝け",
          "title": "残酷な夜に輝け / LiSA",
          "start": 5384,
          "end": 6007
        },
        {
          "key": "レディレ",
          "title": "レディーレ / 須田景凪",
          "start": 6008,
          "end": 6348
        },
        {
          "key": "刹那プラス",
          "title": "刹那プラス / みきとP",
          "start": 6349,
          "end": 7044
        },
        {
          "key": "モニタリング",
          "title": "モニタリング / DECO*27",
          "start": 7045,
          "end": null
        }
      ],
      "duration": 7315
    },
    {
      "id": "gT5mX4i2n4c",
      "memberId": "tsukuri",
      "publishedAt": "2025-10-10",
      "title": "【 #りいちゅ家歌枠リレー 】ありったけの感謝を【 眠雲ツクリ / ミリプロ 】",
      "songs": [
        {
          "key": "孤独月",
          "title": "孤独月 / 幽閉サテライト",
          "start": 87,
          "end": 440
        },
        {
          "key": "眠れないfeat.楠木ともり",
          "title": "眠れない feat.楠木ともり / MIMiNARI",
          "start": 441,
          "end": 769
        },
        {
          "key": "恐山ルヴォワル",
          "title": "恐山ル・ヴォワール / 林原めぐみ",
          "start": 770,
          "end": 1169
        },
        {
          "key": "silentweapon",
          "title": "SILENT WEAPON / 麻倉葉(佐藤ゆうこ)",
          "start": 1170,
          "end": 1475
        },
        {
          "key": "流露",
          "title": "流露 / 道蓮(朴路美)",
          "start": 1476,
          "end": null
        }
      ],
      "duration": 1795
    },
    {
      "id": "Lx2NYBcDkrI",
      "memberId": "tsukuri",
      "publishedAt": "2025-10-18",
      "title": "寒くなってきましたね。では歌います。【 #ミリプロ25万人耐久歌枠リレー 】",
      "songs": [
        {
          "key": "ひゅるりらぱっぱ",
          "title": "ひゅるりらぱっぱ / tuki.",
          "start": 118,
          "end": 485
        },
        {
          "key": "irisout",
          "title": "IRIS OUT / 米津玄師",
          "start": 486,
          "end": 741
        },
        {
          "key": "残酷な夜に輝け",
          "title": "残酷な夜に輝け / LiSA",
          "start": 742,
          "end": 1213
        },
        {
          "key": "ロミオとシンデレラ",
          "title": "ロミオとシンデレラ / doriko",
          "start": 1214,
          "end": 1617
        },
        {
          "key": "いあるふぁんくらぶ",
          "title": "いーあるふぁんくらぶ（小廻こま分） / みきとP",
          "start": 1618,
          "end": 1905
        },
        {
          "key": "悪魔の踊り方",
          "title": "悪魔の踊り方（あくび・でもんすぺーど分） / キタニタツヤ",
          "start": 1906,
          "end": 2226
        },
        {
          "key": "ののの音々ネ！",
          "title": "ののの音々ネ！（音ノ乃のの分） / 音ノ乃のの",
          "start": 2227,
          "end": 2596
        },
        {
          "key": "モニタリング",
          "title": "モニタリング (Best Friend Remix) / DECO*27",
          "start": 2597,
          "end": 2858
        },
        {
          "key": "千本桜",
          "title": "千本桜 / 黒うさP",
          "start": 2859,
          "end": 3185
        },
        {
          "key": "エゴロック",
          "title": "エゴロック / すりぃ",
          "start": 3186,
          "end": 3299
        },
        {
          "key": "サマタイムレコド",
          "title": "サマータイムレコード / じん",
          "start": 3300,
          "end": null
        }
      ],
      "fromNote": "寒くなってきましたね。では歌います。【 #ミリプロ25万人耐久歌枠リレー 】"
    },
    {
      "id": "TAAdnIIuSuI",
      "memberId": "tsukuri",
      "publishedAt": "2025-11-10",
      "title": "〖 15万人耐久 〗ひざびさに歌うのでリハビリのんびり耐久〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "アンハッピリフレイン",
          "title": "アンハッピーリフレイン / wowaka",
          "start": 237,
          "end": 616
        },
        {
          "key": "愛に奇術師",
          "title": "愛に奇術師 / 電ポルP",
          "start": 617,
          "end": 918
        },
        {
          "key": "スキスキ絶頂症",
          "title": "スキスキ絶頂症 / 電ポルP",
          "start": 919,
          "end": 1319
        },
        {
          "key": "水流のロック",
          "title": "水流のロック / 日食なつこ",
          "start": 1320,
          "end": 1610
        },
        {
          "key": "雨とカプチノ",
          "title": "雨とカプチーノ / ヨルシカ",
          "start": 1611,
          "end": 2021
        },
        {
          "key": "花火",
          "title": "花火 / aiko",
          "start": 2022,
          "end": 2459
        },
        {
          "key": "絶頂賛",
          "title": "絶頂賛歌 / 和ぬか",
          "start": 2460,
          "end": 3037
        },
        {
          "key": "janedoe",
          "title": "JANE DOE / 米津玄師,宇多田ヒカル",
          "start": 3038,
          "end": 3287
        },
        {
          "key": "irisout",
          "title": "IRIS OUT / 米津玄師",
          "start": 3288,
          "end": 3559
        },
        {
          "key": "スロウダウナ",
          "title": "スロウダウナー / ろくろ",
          "start": 3560,
          "end": 3901
        },
        {
          "key": "dec.",
          "title": "Dec. / Kanaria",
          "start": 3902,
          "end": 4153
        },
        {
          "key": "レジギガス",
          "title": "レジギガス / 眠雲ツクリ",
          "start": 4154,
          "end": 4276
        },
        {
          "key": "残機",
          "title": "残機 / ずっと真夜中でいいのに。",
          "start": 4277,
          "end": 4604
        },
        {
          "key": "onelastkiss",
          "title": "One Last Kiss / 宇多田ヒカル",
          "start": 4605,
          "end": 4868
        },
        {
          "key": "本能",
          "title": "本能 / 椎名林檎",
          "start": 4869,
          "end": 5459
        },
        {
          "key": "それがあなたの幸せとしても",
          "title": "それがあなたの幸せとしても / Heavenz",
          "start": 5460,
          "end": 5699
        },
        {
          "key": "ネオンを消して",
          "title": "ネオンを消して / chilldspot",
          "start": 5700,
          "end": 5837
        },
        {
          "key": "水星",
          "title": "水星 / ラブリーサマーちゃん",
          "start": 5838,
          "end": 6056
        },
        {
          "key": "あなたは煙草私はシャボン",
          "title": "あなたは煙草 私はシャボン / ラブリーサマーちゃん",
          "start": 6057,
          "end": 6266
        },
        {
          "key": "翡翠のまち",
          "title": "翡翠のまち/ メル",
          "start": 6267,
          "end": 6718
        },
        {
          "key": "さようなら、花泥棒さん",
          "title": "さようなら、花泥棒さん / メル",
          "start": 6719,
          "end": 7168
        },
        {
          "key": "ハイドアンドシク",
          "title": "ハイド・アンド・シーク / NOMELON NOLEMON",
          "start": 7169,
          "end": 7445
        },
        {
          "key": "だから僕は音楽を辞めた",
          "title": "だから僕は音楽を辞めた / ヨルシカ",
          "start": 7446,
          "end": 7790
        },
        {
          "key": "藍二乗",
          "title": "藍二乗 / ヨルシカ",
          "start": 7791,
          "end": 8206
        },
        {
          "key": "東京テディベア",
          "title": "東京テディベア / Neru",
          "start": 8207,
          "end": 8521
        },
        {
          "key": "再教育",
          "title": "再教育 / Neru",
          "start": 8522,
          "end": 8883
        },
        {
          "key": "orion",
          "title": "orion / 米津玄師",
          "start": 8884,
          "end": 9290
        },
        {
          "key": "citrus",
          "title": "CITRUS / Da-iCE",
          "start": 9291,
          "end": 9507
        },
        {
          "key": "晩餐",
          "title": "晩餐歌 / tuki.",
          "start": 9508,
          "end": 9772
        },
        {
          "key": "シャルル",
          "title": "シャルル / 須田景凪",
          "start": 9773,
          "end": 10086
        },
        {
          "key": "ピスサイン",
          "title": "ピースサイン / 米津玄師",
          "start": 10087,
          "end": 10382
        },
        {
          "key": "ヒバナ",
          "title": "ヒバナ / DECO*27",
          "start": 10383,
          "end": 10614
        },
        {
          "key": "ロミオとシンデレラ",
          "title": "ロミオとシンデレラ / doriko",
          "start": 10615,
          "end": 11537
        },
        {
          "key": "again",
          "title": "again / YUI",
          "start": 11538,
          "end": 12260
        },
        {
          "key": "メランコリック",
          "title": "メランコリック / Junky",
          "start": 12261,
          "end": null
        }
      ],
      "duration": 13800
    },
    {
      "id": "7sIlClbwnls",
      "memberId": "tsukuri",
      "publishedAt": "2025-11-11",
      "title": "〖 生バンド 〗告知アリ！ハーフアニバーサリー歌枠〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "公然の秘密",
          "title": "公然の秘密 / 椎名林檎",
          "start": 194,
          "end": 581
        },
        {
          "key": "右肩の蝶",
          "title": "右肩の蝶 / のりぴー",
          "start": 582,
          "end": 850
        },
        {
          "key": "気まぐれロマンティック",
          "title": "気まぐれロマンティック / いきものがかり",
          "start": 851,
          "end": 1641
        },
        {
          "key": "mela!",
          "title": "Mela! / 緑黄色社会",
          "start": 1642,
          "end": 2260
        },
        {
          "key": "フラレガイガル",
          "title": "フラレガイガール / さユり",
          "start": 2261,
          "end": 4453
        },
        {
          "key": "departures～あなたにおくるアイの～",
          "title": "Departures ～あなたにおくるアイの歌～ / EGOIST",
          "start": 4454,
          "end": 4830
        },
        {
          "key": "でぇすきだよ",
          "title": "でぇすきだよ / 眠雲ツクリ",
          "start": 4831,
          "end": null
        }
      ],
      "duration": 5199
    },
    {
      "id": "r9kZX3XOk5E",
      "memberId": "tsukuri",
      "publishedAt": "2025-11-28",
      "title": "〖 歌枠 〗歌うらしい～～～いえ～～い〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "かえるのがっしょう",
          "title": "かえるのがっしょう / ドイツ民謡",
          "start": 110,
          "end": 259
        },
        {
          "key": "ヘビスモク",
          "title": "ヘビースモーク / にしな",
          "start": 260,
          "end": 856
        },
        {
          "key": "夜に駆ける",
          "title": "夜に駆ける / YOASOBI",
          "start": 857,
          "end": 1225
        },
        {
          "key": "晩餐",
          "title": "晩餐歌 / tuki.",
          "start": 1226,
          "end": 1306
        },
        {
          "key": "晩餐",
          "title": "晩餐歌（リベンジ） / tuki.",
          "start": 1307,
          "end": 1485
        },
        {
          "key": "小悪魔だってかまわない！",
          "title": "小悪魔だってかまわない！ / HoneyWorks",
          "start": 1486,
          "end": 1933
        },
        {
          "key": "金木犀",
          "title": "金木犀 / くじら",
          "start": 1934,
          "end": 2291
        },
        {
          "key": "badapple!!",
          "title": "Bad Apple!! / Alstroemeria Records",
          "start": 2292,
          "end": 2600
        },
        {
          "key": "irisout",
          "title": "IRIS OUT / 米津玄師",
          "start": 2601,
          "end": 2814
        },
        {
          "key": "janedoe",
          "title": "JANE DOE / 米津玄師,宇多田ヒカル",
          "start": 2815,
          "end": 3154
        },
        {
          "key": "brain",
          "title": "BRAIN / Kanaria",
          "start": 3155,
          "end": 3423
        },
        {
          "key": "幽霊東京",
          "title": "幽霊東京 / Ayase",
          "start": 3424,
          "end": 3766
        },
        {
          "key": "ハングリニコル",
          "title": "ハングリーニコル / 煮ル果実",
          "start": 3767,
          "end": 4316
        },
        {
          "key": "ドナツホル",
          "title": "ドーナツホール / ハチ",
          "start": 4317,
          "end": 4584
        },
        {
          "key": "おじゃま虫",
          "title": "おじゃま虫 / DECO*27",
          "start": 4585,
          "end": 4778
        },
        {
          "key": "天ノ弱",
          "title": "天ノ弱 / 164",
          "start": 4779,
          "end": 5096
        },
        {
          "key": "砂の惑星",
          "title": "砂の惑星 / ハチ",
          "start": 5097,
          "end": 5440
        },
        {
          "key": "ノンブレスオブリジュ",
          "title": "ノンブレス・オブリージュ / ピノキオピー",
          "start": 5441,
          "end": 5789
        },
        {
          "key": "アスノヨゾラ哨戒班",
          "title": "アスノヨゾラ哨戒班 / Orangestar",
          "start": 5790,
          "end": 6070
        },
        {
          "key": "初音ミクの消失",
          "title": "初音ミクの消失 / cosMo@暴走P",
          "start": 6071,
          "end": 6351
        },
        {
          "key": "頓珍漢の宴",
          "title": "頓珍漢の宴 / ピノキオピー",
          "start": 6352,
          "end": 6542
        },
        {
          "key": "バビロン",
          "title": "バビロン / トーマ",
          "start": 6543,
          "end": 6685
        },
        {
          "key": "ラットが死んだ",
          "title": "ラットが死んだ / P.I.N.A.",
          "start": 6686,
          "end": 7349
        },
        {
          "key": "魂のルフラン",
          "title": "魂のルフラン / 高橋洋子",
          "start": 7350,
          "end": 7880
        },
        {
          "key": "loser",
          "title": "LOSER / 米津玄師",
          "start": 7881,
          "end": 8311
        },
        {
          "key": "ドライフラワ",
          "title": "ドライフラワー / 優里",
          "start": 8312,
          "end": 8843
        },
        {
          "key": "いらないもの",
          "title": "いらないもの / キタニタツヤ×なとり",
          "start": 8844,
          "end": 9569
        },
        {
          "key": "きゅうくらりん",
          "title": "きゅうくらりん / いよわ",
          "start": 9570,
          "end": 9960
        },
        {
          "key": "素敵なしゅうまつを！",
          "title": "素敵なしゅうまつを！ / キタニタツヤ",
          "start": 9961,
          "end": null
        }
      ],
      "duration": 10428
    },
    {
      "id": "QDWydPJqdSI",
      "memberId": "tsukuri",
      "publishedAt": "2025-12-07",
      "title": "〖 歌枠 〗さみいので布団入りながら聴きなさい〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "マシャルマキシマイザ",
          "title": "マーシャル・マキシマイザー / 柊マグネタイト",
          "start": 310,
          "end": 731
        },
        {
          "key": "janedoe",
          "title": "JANE DOE / 米津玄師,宇多田ヒカル",
          "start": 732,
          "end": 1069
        },
        {
          "key": "からくりピエロ",
          "title": "からくりピエロ / 40mP",
          "start": 1070,
          "end": 1409
        },
        {
          "key": "丸の内サディスティック",
          "title": "丸の内サディスティック / 椎名林檎",
          "start": 1410,
          "end": 1759
        },
        {
          "key": "絶頂賛",
          "title": "絶頂賛歌 / 和ぬか",
          "start": 1760,
          "end": 2048
        },
        {
          "key": "プロポズ",
          "title": "プロポーズ / なとり",
          "start": 2049,
          "end": 2305
        },
        {
          "key": "カタオモイ",
          "title": "カタオモイ / Aimer",
          "start": 2306,
          "end": 2660
        },
        {
          "key": "蜜月アンドゥトロワ",
          "title": "蜜月アン・ドゥ・トロワ / DATEKEN",
          "start": 2661,
          "end": 3068
        },
        {
          "key": "深海のリトルクライ",
          "title": "深海のリトルクライ / sasakure.UK",
          "start": 3069,
          "end": 3447
        },
        {
          "key": "アンチグラビティズ",
          "title": "アンチグラビティーズ / sasakure.UK",
          "start": 3448,
          "end": 3675
        },
        {
          "key": "プラネテス",
          "title": "プラネテス / seiza",
          "start": 3676,
          "end": 3923
        },
        {
          "key": "自傷無色",
          "title": "自傷無色 / ねこぼーろ",
          "start": 3924,
          "end": 4266
        },
        {
          "key": "ハロ",
          "title": "ハロ／ハワユ / ナノウ",
          "start": 4267,
          "end": 4737
        },
        {
          "key": "ガデン",
          "title": "ガーデン / 藤井風",
          "start": 4738,
          "end": 5059
        },
        {
          "key": "何なんw",
          "title": "何なんw / 藤井風",
          "start": 5060,
          "end": 5563
        },
        {
          "key": "アヤノの幸福理論",
          "title": "アヤノの幸福理論 / じん",
          "start": 5564,
          "end": 6035
        },
        {
          "key": "キセキ",
          "title": "キセキ（アカペラ） / GReeeeN",
          "start": 6036,
          "end": 6207
        },
        {
          "key": "ノマド",
          "title": "ノマド /須田景凪",
          "start": 6208,
          "end": 6807
        },
        {
          "key": "夜撫でるメノウ",
          "title": "夜撫でるメノウ / Ayase",
          "start": 6808,
          "end": 7311
        },
        {
          "key": "夜明けと蛍",
          "title": "夜明けと蛍 / n-buna",
          "start": 7312,
          "end": 7715
        },
        {
          "key": "departures～あなたにおくるアイの～",
          "title": "Departures ～あなたにおくるアイの歌～ / EGOIST",
          "start": 7716,
          "end": 8511
        },
        {
          "key": "レディレ",
          "title": "レディーレ / 須田景凪",
          "start": 8512,
          "end": null
        }
      ],
      "duration": 9780
    },
    {
      "id": "S7cplauhKDw",
      "memberId": "tsukuri",
      "publishedAt": "2025-12-13",
      "title": "〖 歌枠 〗ほんのちょっと声出し〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "怪獣の花唄",
          "title": "怪獣の花唄 / Vaundy",
          "start": 644,
          "end": 1024
        },
        {
          "key": "勘冴えて悔しいわ",
          "title": "勘冴えて悔しいわ / ずっと真夜中でいいのに。",
          "start": 1025,
          "end": 1391
        },
        {
          "key": "乙女解剖",
          "title": "乙女解剖 / DECO*27",
          "start": 1392,
          "end": 1744
        },
        {
          "key": "レディメイド",
          "title": "レディメイド/ Ado",
          "start": 1745,
          "end": 2129
        },
        {
          "key": "ド屑",
          "title": "ド屑 / なきそ",
          "start": 2130,
          "end": 2567
        },
        {
          "key": "d",
          "title": "D/N/A / Azari",
          "start": 2568,
          "end": 2833
        },
        {
          "key": "懺悔参り",
          "title": "懺悔参り / 羽生まゐご",
          "start": 2834,
          "end": 3169
        },
        {
          "key": "キャットラビング",
          "title": "キャットラビング / 香椎モイミ",
          "start": 3170,
          "end": 3428
        },
        {
          "key": "ヒバナ",
          "title": "ヒバナ（ぶりぶりかわいいVer.） / DECO*27",
          "start": 3429,
          "end": null
        }
      ],
      "duration": 4634
    },
    {
      "id": "4NTPGuPTx5E",
      "memberId": "tsukuri",
      "publishedAt": "2025-12-18",
      "title": "〖 #巫てんり主催歌枠リレーResonance DAY2 〗初めてのデュエット歌枠、いざ",
      "songs": [
        {
          "key": "紅蓮華",
          "title": "紅蓮華 / LiSA",
          "start": 177,
          "end": 682
        },
        {
          "key": "ギラギラ",
          "title": "ギラギラ / Ado",
          "start": 683,
          "end": 964
        },
        {
          "key": "妄想感傷代償連盟",
          "title": "妄想感傷代償連盟 / DECO*27",
          "start": 965,
          "end": 1574
        },
        {
          "key": "再会",
          "title": "再会 / LiSA×Uru",
          "start": 1575,
          "end": 1911
        },
        {
          "key": "janedoe",
          "title": "JANE DOE / 米津玄師,宇多田ヒカル",
          "start": 1912,
          "end": 2465
        },
        {
          "key": "ライオン",
          "title": "ライオン / May'n,中島愛",
          "start": 2466,
          "end": 2829
        },
        {
          "key": "ロキ",
          "title": "ロキ / みきとP",
          "start": 2830,
          "end": null
        }
      ],
      "fromNote": "〖 #巫てんり主催歌枠リレーResonance DAY2 〗初めてのデュエット歌枠、いざ"
    },
    {
      "id": "ac0eP_wojwI",
      "memberId": "tsukuri",
      "publishedAt": "2025-12-19",
      "title": "〖 #RMBafter歌枠リレー 〗 あの感動をもう一度！",
      "songs": [
        {
          "key": "アンノウンマザグス",
          "title": "アンノウン・マザーグース / wowaka",
          "start": 104,
          "end": 500
        },
        {
          "key": "水流のロック",
          "title": "水流のロック / 日食なつこ",
          "start": 501,
          "end": 684
        },
        {
          "key": "irisout",
          "title": "IRIS OUT / 米津玄師",
          "start": 685,
          "end": 983
        },
        {
          "key": "フォニイ",
          "title": "フォニイ / ツミキ",
          "start": 984,
          "end": 1204
        },
        {
          "key": "幽霊東京",
          "title": "幽霊東京 / Ayase",
          "start": 1205,
          "end": 1494
        },
        {
          "key": "だから僕は音楽を辞めた",
          "title": "だから僕は音楽を辞めた / ヨルシカ",
          "start": 1495,
          "end": null
        }
      ],
      "fromNote": "〖 #RMBafter歌枠リレー 〗 あの感動をもう一度！"
    },
    {
      "id": "B7cWsT8lOyM",
      "memberId": "tsukuri",
      "publishedAt": "2025-12-22",
      "title": "〖 歌枠 〗縦横同時ってどゆことなの〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "ゲレンデがとけるほど恋したい",
          "title": "ゲレンデがとけるほど恋したい / 広瀬香美",
          "start": 804,
          "end": null
        }
      ],
      "duration": 1467
    },
    {
      "id": "k-mmSWd_Ltw",
      "memberId": "tsukuri",
      "publishedAt": "2025-12-26",
      "title": "〖 歌枠 〗縦横リベンジマッチ〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "青春コンプレックス",
          "title": "青春コンプレックス / 結束バンド",
          "start": 438,
          "end": 865
        },
        {
          "key": "サウダジ",
          "title": "サウダージ / ポルノグラフィティ",
          "start": 866,
          "end": 1197
        },
        {
          "key": "絶頂賛",
          "title": "絶頂賛歌 / 和ぬか",
          "start": 1198,
          "end": 1454
        },
        {
          "key": "プロポズ",
          "title": "プロポーズ / なとり",
          "start": 1455,
          "end": 1877
        },
        {
          "key": "ずうっといっしょ！",
          "title": "ずうっといっしょ！ / キタニタツヤ",
          "start": 1878,
          "end": 2283
        },
        {
          "key": "二息歩行",
          "title": "二息歩行（Piano Ver.） / DECO*27",
          "start": 2284,
          "end": 2604
        },
        {
          "key": "あなたのことをおしえて",
          "title": "あなたのことをおしえて / キタニタツヤ",
          "start": 2605,
          "end": 2886
        },
        {
          "key": "madheadlove",
          "title": "MAD HEAD LOVE / 米津玄師",
          "start": 2887,
          "end": 3438
        },
        {
          "key": "ブリキノダンス",
          "title": "ブリキノダンス / 日向電工",
          "start": 3439,
          "end": 4107
        },
        {
          "key": "透明人間",
          "title": "透明人間 / 東京事変",
          "start": 4108,
          "end": 4431
        },
        {
          "key": "愛を伝えたいだとか",
          "title": "愛を伝えたいだとか / あいみょん",
          "start": 4432,
          "end": 5226
        },
        {
          "key": "magnet",
          "title": "magnet / minato（流星P）",
          "start": 5227,
          "end": 5674
        },
        {
          "key": "夜咄ディセイブ",
          "title": "夜咄ディセイブ / じん",
          "start": 5675,
          "end": 6022
        },
        {
          "key": "ヤンキボイヤンキガル",
          "title": "ヤンキーボーイ・ヤンキーガール / トーマ",
          "start": 6023,
          "end": 6643
        },
        {
          "key": "セツナトリップ",
          "title": "セツナトリップ / Last Note.",
          "start": 6644,
          "end": null
        }
      ],
      "duration": 7762
    },
    {
      "id": "2IG00xiZlIA",
      "memberId": "tsukuri",
      "publishedAt": "2025-12-30",
      "title": "〖 歌枠 〗歌い納めてしまおうぞ〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "together",
          "title": "Together / あきよしふみえ",
          "start": 450,
          "end": 978
        },
        {
          "key": "残響散",
          "title": "残響散歌 / Aimer",
          "start": 979,
          "end": 1269
        },
        {
          "key": "アスノヨゾラ哨戒班",
          "title": "アスノヨゾラ哨戒班 / Orangestar",
          "start": 1270,
          "end": 1636
        },
        {
          "key": "天ノ弱",
          "title": "天ノ弱 / 164",
          "start": 1637,
          "end": 1941
        },
        {
          "key": "ただ君に晴れ",
          "title": "ただ君に晴れ / ヨルシカ",
          "start": 1942,
          "end": 2249
        },
        {
          "key": "花に亡霊",
          "title": "花に亡霊 / ヨルシカ",
          "start": 2250,
          "end": 2673
        },
        {
          "key": "神っぽいな",
          "title": "神っぽいな / ピノキオピー",
          "start": 2674,
          "end": 3091
        },
        {
          "key": "irisout",
          "title": "IRIS OUT / 米津玄師",
          "start": 3092,
          "end": 3329
        },
        {
          "key": "janedoe",
          "title": "JANE DOE / 米津玄師,宇多田ヒカル",
          "start": 3330,
          "end": 3704
        },
        {
          "key": "シャルル",
          "title": "シャルル / 須田景凪",
          "start": 3705,
          "end": 4032
        },
        {
          "key": "snowhalation",
          "title": "Snow halation / μ's",
          "start": 4033,
          "end": 4617
        },
        {
          "key": "ミカヅキ",
          "title": "ミカヅキ / さユり",
          "start": 4618,
          "end": 4999
        },
        {
          "key": "千本桜",
          "title": "千本桜 / 黒うさP",
          "start": 5000,
          "end": 5381
        },
        {
          "key": "pppp",
          "title": "PPPP / TAK",
          "start": 5382,
          "end": 5571
        },
        {
          "key": "少女レイ",
          "title": "少女レイ / みきとP",
          "start": 5572,
          "end": 6145
        },
        {
          "key": "モニタリング",
          "title": "モニタリング (Best Friend Remix) / DECO*27",
          "start": 6146,
          "end": 6433
        },
        {
          "key": "ロミオとシンデレラ",
          "title": "ロミオとシンデレラ / doriko",
          "start": 6434,
          "end": 7015
        },
        {
          "key": "オトノケ",
          "title": "オトノケ / Creepy Nuts",
          "start": 7016,
          "end": 7232
        },
        {
          "key": "おやすみ泣き声、さよなら姫",
          "title": "おやすみ泣き声、さよなら歌姫 / クリープハイプ",
          "start": 7233,
          "end": 7664
        },
        {
          "key": "脱法ロック",
          "title": "脱法ロック / Neru",
          "start": 7665,
          "end": 7954
        },
        {
          "key": "godknows...",
          "title": "God knows... / 平野綾",
          "start": 7955,
          "end": 8357
        },
        {
          "key": "ピスサイン",
          "title": "ピースサイン（+3） / 米津玄師",
          "start": 8358,
          "end": 8682
        },
        {
          "key": "mela!",
          "title": "Mela! / 緑黄色社会",
          "start": 8683,
          "end": 9101
        },
        {
          "key": "ブルバド",
          "title": "ブルーバード / いきものがかり",
          "start": 9102,
          "end": 9228
        },
        {
          "key": "onlymyrailgun",
          "title": "only my railgun / fripSide",
          "start": 9229,
          "end": 9797
        },
        {
          "key": "ヒバナ",
          "title": "ヒバナ / DECO*27",
          "start": 9798,
          "end": null
        }
      ],
      "duration": 11396
    },
    {
      "id": "gVl-ah-4gsg",
      "memberId": "tsukuri",
      "publishedAt": "2026-01-04",
      "title": "〖 歌枠 〗あけおめ歌　月曜日がんばるぞ〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "群青日和",
          "title": "群青日和 / 東京事変",
          "start": 510,
          "end": 882
        },
        {
          "key": "雨とカプチノ",
          "title": "雨とカプチーノ / ヨルシカ",
          "start": 883,
          "end": 1356
        },
        {
          "key": "からくりピエロ",
          "title": "からくりピエロ / 40mP",
          "start": 1357,
          "end": 1718
        },
        {
          "key": "深海少女",
          "title": "深海少女 / ゆうゆ",
          "start": 1719,
          "end": 2103
        },
        {
          "key": "トリノコシティ",
          "title": "トリノコシティ / 40mP",
          "start": 2104,
          "end": 2426
        },
        {
          "key": "ひゅるりらぱっぱ",
          "title": "ひゅるりらぱっぱ / tuki.",
          "start": 2427,
          "end": 2741
        },
        {
          "key": "リドコントロル",
          "title": "リードコントロール / なるみや",
          "start": 2742,
          "end": 3154
        },
        {
          "key": "irisout",
          "title": "IRIS OUT / 米津玄師",
          "start": 3155,
          "end": 3445
        },
        {
          "key": "革命道中",
          "title": "革命道中 / アイナ・ジ・エンド",
          "start": 3446,
          "end": 3809
        },
        {
          "key": "ルカルカ★ナイトフィバ",
          "title": "ルカルカ★ナイトフィーバー / samfree",
          "start": 3810,
          "end": 4246
        },
        {
          "key": "メグメグ☆ファイアエンドレスナイト",
          "title": "メグメグ☆ファイアーエンドレスナイト / samfree",
          "start": 4247,
          "end": 4535
        },
        {
          "key": "badapple!!",
          "title": "Bad Apple!! / Alstroemeria Records",
          "start": 4536,
          "end": 5257
        },
        {
          "key": "晴る",
          "title": "晴る / ヨルシカ",
          "start": 5258,
          "end": 5676
        },
        {
          "key": "勇者",
          "title": "勇者 / YOASOBI",
          "start": 5677,
          "end": 5948
        },
        {
          "key": "魔笛",
          "title": "魔笛 / モーツァルト",
          "start": 5949,
          "end": 6108
        },
        {
          "key": "熱異常",
          "title": "熱異常 / いよわ",
          "start": 6109,
          "end": 6404
        },
        {
          "key": "神のまにまに",
          "title": "神のまにまに / れるりり",
          "start": 6405,
          "end": 6715
        },
        {
          "key": "ハッピシンセサイザ",
          "title": "ハッピーシンセサイザ / EasyPop",
          "start": 6716,
          "end": null
        }
      ],
      "duration": 8151
    },
    {
      "id": "lQ3bJ4cjGt4",
      "memberId": "tsukuri",
      "publishedAt": "2026-01-14",
      "title": "〖 歌枠 〗18万人れちご〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "ハレンチ",
          "title": "ハレンチ / ちゃんみな",
          "start": 492,
          "end": 821
        },
        {
          "key": "怪獣の花唄",
          "title": "怪獣の花唄 / Vaundy",
          "start": 822,
          "end": 1219
        },
        {
          "key": "irisout",
          "title": "IRIS OUT / 米津玄師",
          "start": 1220,
          "end": 1429
        },
        {
          "key": "革命道中",
          "title": "革命道中 / アイナ・ジ・エンド",
          "start": 1430,
          "end": 1718
        },
        {
          "key": "ルカルカ★ナイトフィバ",
          "title": "ルカルカ★ナイトフィーバー / samfree",
          "start": 1719,
          "end": 2374
        },
        {
          "key": "イガク",
          "title": "イガク / 原口沙輔",
          "start": 2375,
          "end": 2797
        },
        {
          "key": "フラジル",
          "title": "フラジール / ぬゆり",
          "start": 2798,
          "end": 3143
        },
        {
          "key": "ゴストルル",
          "title": "ゴーストルール / DECO*27",
          "start": 3144,
          "end": 3512
        },
        {
          "key": "ダリンダンス",
          "title": "ダーリンダンス / かいりきベア",
          "start": 3513,
          "end": 3909
        },
        {
          "key": "とても素敵な六月でした",
          "title": "とても素敵な六月でした / Eight",
          "start": 3910,
          "end": 4268
        },
        {
          "key": "愛に奇術師",
          "title": "愛に奇術師 / 電ポルP",
          "start": 4269,
          "end": 4571
        },
        {
          "key": "翡翠のまち",
          "title": "翡翠のまち / メル (こんにちは谷田さんremix)",
          "start": 4572,
          "end": 5339
        },
        {
          "key": "私が明日死ぬなら",
          "title": "私が明日死ぬなら / キタニタツヤ",
          "start": 5340,
          "end": null
        }
      ],
      "duration": 7126
    },
    {
      "id": "pZRUCqxs7yc",
      "memberId": "tsukuri",
      "publishedAt": "2026-01-18",
      "title": "【眠雲ツクリ】30万人ありがとうウイニングラン",
      "songs": [
        {
          "key": "残酷な天使のテゼ",
          "title": "残酷な天使のテーゼ / 高橋洋子",
          "start": 178,
          "end": 551
        },
        {
          "key": "逆光",
          "title": "逆光 / Ado",
          "start": 552,
          "end": 843
        },
        {
          "key": "革命道中",
          "title": "革命道中 / アイナ・ジ・エンド",
          "start": 844,
          "end": 1130
        },
        {
          "key": "プロポズ",
          "title": "プロポーズ / なとり",
          "start": 1131,
          "end": 1429
        },
        {
          "key": "晴る",
          "title": "晴る / ヨルシカ",
          "start": 1430,
          "end": 1782
        },
        {
          "key": "パンダヒロ",
          "title": "パンダヒーロー/ ハチ",
          "start": 1783,
          "end": 2495
        },
        {
          "key": "モニタリング",
          "title": "モニタリング (Best Friend Remix) / DECO*27",
          "start": 2496,
          "end": 2768
        },
        {
          "key": "六兆年と一夜物語",
          "title": "六兆年と一夜物語 / kemu",
          "start": 2769,
          "end": 3064
        },
        {
          "key": "ブラック★ロックシュタ",
          "title": "ブラック★ロックシューター / ryo(supercell)",
          "start": 3065,
          "end": null
        }
      ],
      "fromNote": "【眠雲ツクリ】30万人ありがとうウイニングラン"
    },
    {
      "id": "fNhV7pRKnjA",
      "memberId": "tsukuri",
      "publishedAt": "2026-01-23",
      "title": "〖 歌枠 〗ボカロ老人会の巻〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "マトリョシカ",
          "title": "マトリョシカ / ハチ",
          "start": 1004,
          "end": 1410
        },
        {
          "key": "二息歩行",
          "title": "二息歩行 / DECO*27",
          "start": 1411,
          "end": 1894
        },
        {
          "key": "モザイクロル",
          "title": "モザイクロール / DECO*27",
          "start": 1895,
          "end": 2215
        },
        {
          "key": "妄想税",
          "title": "妄想税 / DECO*27",
          "start": 2216,
          "end": 2667
        },
        {
          "key": "脳漿炸裂ガル",
          "title": "脳漿炸裂ガール / れるりり",
          "start": 2668,
          "end": 2962
        },
        {
          "key": "裏表ラバズ",
          "title": "裏表ラバーズ / wowaka",
          "start": 2963,
          "end": 3256
        },
        {
          "key": "二次元ドリムフィバ",
          "title": "二次元ドリームフィーバー / PolyphonicBranch",
          "start": 3257,
          "end": 3434
        },
        {
          "key": "人生リセットボタン",
          "title": "人生リセットボタン / kemu",
          "start": 3435,
          "end": 3746
        },
        {
          "key": "インビジブル",
          "title": "インビジブル / kemu",
          "start": 3747,
          "end": 4124
        },
        {
          "key": "十面相",
          "title": "十面相 / YM",
          "start": 4125,
          "end": 4467
        },
        {
          "key": "失敗作少女",
          "title": "失敗作少女 / かいりきベア",
          "start": 4468,
          "end": 4652
        },
        {
          "key": "パケットヒロ",
          "title": "パケットヒーロー/ MARETU",
          "start": 4653,
          "end": 5042
        },
        {
          "key": "メアの教育",
          "title": "メアの教育 / 清水コウ",
          "start": 5043,
          "end": 5329
        },
        {
          "key": "ミルククラウンオンソネチカ",
          "title": "ミルククラウン・オン・ソーネチカ / ユジー",
          "start": 5330,
          "end": 5560
        },
        {
          "key": "ハイドアンドシク",
          "title": "ハイドアンド・シーク / 19's Sound Factory",
          "start": 5561,
          "end": 5950
        },
        {
          "key": "ストロボライト",
          "title": "ストロボライト / 椎名もた（ぽわぽわP）",
          "start": 5951,
          "end": 6148
        },
        {
          "key": "ストロボラスト",
          "title": "ストロボラスト / 椎名もた（ぽわぽわP）",
          "start": 6149,
          "end": 6591
        },
        {
          "key": "心臓デモクラシ",
          "title": "心臓デモクラシー / みきとP",
          "start": 6592,
          "end": 6907
        },
        {
          "key": "刹那プラス",
          "title": "刹那プラス / みきとP",
          "start": 6908,
          "end": 7283
        },
        {
          "key": "テロル",
          "title": "テロル / Neru",
          "start": 7284,
          "end": 7646
        },
        {
          "key": "ハウトゥ世界征服",
          "title": "ハウトゥー世界征服 / Neru",
          "start": 7647,
          "end": 7957
        },
        {
          "key": "イドラのサカス",
          "title": "イドラのサーカス / Neru",
          "start": 7958,
          "end": 8148
        },
        {
          "key": "東京テディベア",
          "title": "東京テディベア / Neru",
          "start": 8149,
          "end": 8636
        },
        {
          "key": "リンネ",
          "title": "リンネ / ハチ",
          "start": 8637,
          "end": 9305
        },
        {
          "key": "ストリミングハト",
          "title": "ストリーミングハート / DECO*27",
          "start": 9306,
          "end": null
        }
      ],
      "duration": 10609
    },
    {
      "id": "62QEUlt_ddI",
      "memberId": "tsukuri",
      "publishedAt": "2026-01-31",
      "title": "【コラボ】音楽で広げる繋がりの輪！#izumeet 特別篇！",
      "songs": [
        {
          "key": "二時間だけのバカンス",
          "title": "二時間だけのバカンス / 宇多田ヒカル featuring 椎名林檎",
          "start": 3619,
          "end": null
        }
      ],
      "fromNote": "【コラボ】音楽で広げる繋がりの輪！#izumeet 特別篇！"
    },
    {
      "id": "v3DHLfRea6k",
      "memberId": "tsukuri",
      "publishedAt": "2026-02-02",
      "title": "〖 歌枠 〗２月ってまじ？〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "ギラギラ",
          "title": "ギラギラ / Ado",
          "start": 342,
          "end": 720
        },
        {
          "key": "からくりピエロ",
          "title": "からくりピエロ / 40mP",
          "start": 721,
          "end": 1073
        },
        {
          "key": "lemon",
          "title": "Lemon (+5) / 米津玄師",
          "start": 1074,
          "end": 1501
        },
        {
          "key": "ワルドイズマイン",
          "title": "ワールドイズマイン / ryo",
          "start": 1502,
          "end": 1945
        },
        {
          "key": "ラブ＆デストロイ",
          "title": "ラブ＆デストロイ / MI8k",
          "start": 1946,
          "end": 2225
        },
        {
          "key": "名前のない怪物",
          "title": "名前のない怪物 / EGOIST",
          "start": 2226,
          "end": 2652
        },
        {
          "key": "irisout",
          "title": "IRIS OUT / 米津玄師",
          "start": 2653,
          "end": 3000
        },
        {
          "key": "ひゅるりらぱっぱ",
          "title": "ひゅるりらぱっぱ / tuki.",
          "start": 3001,
          "end": 3377
        },
        {
          "key": "ロミオとシンデレラ",
          "title": "ロミオとシンデレラ / doriko",
          "start": 3378,
          "end": 3777
        },
        {
          "key": "少女レイ",
          "title": "少女レイ / みきとP",
          "start": 3778,
          "end": 4151
        },
        {
          "key": "ヒバナ",
          "title": "ヒバナ / DECO*27",
          "start": 4152,
          "end": 4661
        },
        {
          "key": "マシュマロ",
          "title": "マシュマロ / DECO*27",
          "start": 4662,
          "end": 5062
        },
        {
          "key": "ファタル",
          "title": "ファタール / GEMN",
          "start": 5063,
          "end": 5520
        },
        {
          "key": "二時間だけのバカンス",
          "title": "二時間だけのバカンス / 宇多田ヒカル featuring 椎名林檎",
          "start": 5521,
          "end": 6150
        },
        {
          "key": "ノマド",
          "title": "ノマド / 須田景凪",
          "start": 6151,
          "end": 6551
        },
        {
          "key": "ルマ",
          "title": "ルーマー / ポリスピカデリー",
          "start": 6552,
          "end": null
        }
      ],
      "duration": 7515
    },
    {
      "id": "TixE-nX8LWs",
      "memberId": "tsukuri",
      "publishedAt": "2026-02-10",
      "title": "〖 歌枠 〗アニソン多め油からめ野菜マシ〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "星間飛行",
          "title": "星間飛行 / 中島愛",
          "start": 455,
          "end": 796
        },
        {
          "key": "能動的三分間",
          "title": "能動的三分間 / 東京事変",
          "start": 797,
          "end": 1074
        },
        {
          "key": "kickback",
          "title": "KICK BACK / 米津玄師",
          "start": 1075,
          "end": 1425
        },
        {
          "key": "godknows...",
          "title": "God knows... / 平野綾",
          "start": 1426,
          "end": 1898
        },
        {
          "key": "ハレ晴レユカイ",
          "title": "ハレ晴レユカイ / 平野 綾,茅原実里,後藤邑子",
          "start": 1899,
          "end": 2088
        },
        {
          "key": "創聖のアクエリオン",
          "title": "創聖のアクエリオン / AKINO",
          "start": 2089,
          "end": 2511
        },
        {
          "key": "紅蓮華",
          "title": "紅蓮華 / LiSA",
          "start": 2512,
          "end": 3006
        },
        {
          "key": "残酷な夜に輝け",
          "title": "残酷な夜に輝け / LiSA",
          "start": 3007,
          "end": 3474
        },
        {
          "key": "晴る",
          "title": "晴る / ヨルシカ",
          "start": 3475,
          "end": 4036
        },
        {
          "key": "トウキョウシャンディランデヴ",
          "title": "トウキョウ・シャンディ・ランデヴ / MAISONdes",
          "start": 4037,
          "end": 4333
        },
        {
          "key": "janedoe",
          "title": "JANE DOE / 米津玄師,宇多田ヒカル",
          "start": 4334,
          "end": 4845
        },
        {
          "key": "革命道中",
          "title": "革命道中 / アイナ・ジ・エンド",
          "start": 4846,
          "end": 5167
        },
        {
          "key": "ギタと孤独と蒼い惑星",
          "title": "ギターと孤独と蒼い惑星 / 結束バンド",
          "start": 5168,
          "end": 6213
        },
        {
          "key": "青春コンプレックス",
          "title": "青春コンプレックス / 結束バンド",
          "start": 6214,
          "end": null
        }
      ],
      "duration": 7852
    },
    {
      "id": "roK1C5S3y-g",
      "memberId": "tsukuri",
      "publishedAt": "2026-02-14",
      "title": "〖 歌枠 〗♡年に一度だけのぶりっ子可愛い曲縛り♡〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "booo!",
          "title": "Booo! / TOKOTOKO(西沢さんP)",
          "start": 192,
          "end": 651
        },
        {
          "key": "スイトマジック",
          "title": "スイートマジック / Junky",
          "start": 652,
          "end": 1104
        },
        {
          "key": "ダダダダ天使",
          "title": "ダダダダ天使 / ナナヲアカリ",
          "start": 1105,
          "end": 1541
        },
        {
          "key": "わたしの一番かわいいところ",
          "title": "わたしの一番かわいいところ / FRUITS ZIPPER",
          "start": 1542,
          "end": 1957
        },
        {
          "key": "お願いダリン",
          "title": "お願いダーリン / ナナホシ管弦楽団",
          "start": 1958,
          "end": 2378
        },
        {
          "key": "貴方の恋人になりたい",
          "title": "貴方の恋人になりたい / チョーキューメイ",
          "start": 2379,
          "end": 2814
        },
        {
          "key": "だいしきゅだいしゅき",
          "title": "だいしきゅーだいしゅき / femme fatale",
          "start": 2815,
          "end": 3291
        },
        {
          "key": "sos",
          "title": "SOS / 黛冬優子(幸村恵理)",
          "start": 3292,
          "end": 3703
        },
        {
          "key": "とくべチュ、して？",
          "title": "とくべチュ、して？ / ＝LOVE",
          "start": 3704,
          "end": 4208
        },
        {
          "key": "小悪魔だってかまわない︕",
          "title": "小悪魔だってかまわない︕ / HoneyWorks",
          "start": 4209,
          "end": 4869
        },
        {
          "key": "おじゃま虫",
          "title": "おじゃま虫 / DECO*27",
          "start": 4870,
          "end": null
        }
      ],
      "duration": 7155
    },
    {
      "id": "i1oESnrbxQQ",
      "memberId": "tsukuri",
      "publishedAt": "2026-02-19",
      "title": "〖 歌枠 〗告知アリ！高評価4000耐久！れちご！〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "いかないで",
          "title": "いかないで / 想太",
          "start": 460,
          "end": 807
        },
        {
          "key": "丸ノ内サディスティック",
          "title": "丸ノ内サディスティック / 椎名林檎",
          "start": 808,
          "end": 1153
        },
        {
          "key": "恋愛裁判",
          "title": "恋愛裁判 / 40mP",
          "start": 1154,
          "end": 1459
        },
        {
          "key": "革命道中",
          "title": "革命道中 / アイナ・ジ・エンド",
          "start": 1460,
          "end": 1830
        },
        {
          "key": "ドナツホル",
          "title": "ドーナツホール (+5) / ハチ",
          "start": 1831,
          "end": 2166
        },
        {
          "key": "トリノコシティ",
          "title": "トリノコシティ / 40mP",
          "start": 2167,
          "end": 2511
        },
        {
          "key": "ひゅるりらぱっぱ",
          "title": "ひゅるりらぱっぱ / tuki.",
          "start": 2512,
          "end": 2791
        },
        {
          "key": "秒針を噛む",
          "title": "秒針を噛む / ずっと真夜中でいいのに。",
          "start": 2792,
          "end": 3018
        },
        {
          "key": "ずうっといっしょ！",
          "title": "ずうっといっしょ！ / キタニタツヤ",
          "start": 3019,
          "end": 3398
        },
        {
          "key": "ドラマツルギ",
          "title": "ドラマツルギー / Eve",
          "start": 3399,
          "end": 3812
        },
        {
          "key": "春を告げる",
          "title": "春を告げる / Yama",
          "start": 3813,
          "end": 4027
        },
        {
          "key": "レディレ",
          "title": "レディーレ / 須田景凪",
          "start": 4028,
          "end": 4373
        },
        {
          "key": "水流のロック",
          "title": "水流のロック / 日食なつこ",
          "start": 4374,
          "end": 4684
        },
        {
          "key": "ロキ",
          "title": "ロキ / みきとP",
          "start": 4685,
          "end": 5028
        },
        {
          "key": "幽霊東京",
          "title": "幽霊東京 (-3) / Ayase",
          "start": 5029,
          "end": 5372
        },
        {
          "key": "8.32",
          "title": "8.32 (-2) / *Luna",
          "start": 5373,
          "end": 5785
        },
        {
          "key": "いますぐ輪廻",
          "title": "いますぐ輪廻 / なきそ",
          "start": 5786,
          "end": 6021
        },
        {
          "key": "ラブカ？",
          "title": "ラブカ？ / 柊キライ",
          "start": 6022,
          "end": 6348
        },
        {
          "key": "ボッカデラベリタ",
          "title": "ボッカデラベリタ / 柊キライ",
          "start": 6349,
          "end": 6669
        },
        {
          "key": "メビウス",
          "title": "メビウス / 柊キライ",
          "start": 6670,
          "end": 7094
        },
        {
          "key": "バゥムクゥヘンエンドロゥル",
          "title": "バゥムクゥヘン・エンドロゥル / 雨良",
          "start": 7095,
          "end": 7421
        },
        {
          "key": "とくべチュ、して？",
          "title": "とくべチュ、して？ / ＝LOVE",
          "start": 7422,
          "end": 7752
        },
        {
          "key": "生きてこそ",
          "title": "生きてこそ / Kiroro",
          "start": 7753,
          "end": 8193
        },
        {
          "key": "愛をこめて花束を",
          "title": "愛をこめて花束を / Superfly",
          "start": 8194,
          "end": 8700
        },
        {
          "key": "紅蓮華",
          "title": "紅蓮華 / LiSA",
          "start": 8701,
          "end": 9304
        },
        {
          "key": "quietroom",
          "title": "quiet room / 有機酸",
          "start": 9305,
          "end": 9629
        },
        {
          "key": "雨とカプチノ",
          "title": "雨とカプチーノ / ヨルシカ",
          "start": 9630,
          "end": 9979
        },
        {
          "key": "janedoe",
          "title": "JANE DOE / 米津玄師,宇多田ヒカル",
          "start": 9980,
          "end": 10360
        },
        {
          "key": "蜜月アンドゥトロワ",
          "title": "蜜月アン・ドゥ・トロワ / DATEKEN",
          "start": 10361,
          "end": 10775
        },
        {
          "key": "jupiter",
          "title": "Jupiter / 平原綾香",
          "start": 10776,
          "end": 11853
        },
        {
          "key": "逢いたくていま",
          "title": "逢いたくていま / MISIA",
          "start": 11854,
          "end": 12622
        },
        {
          "key": "ルカルカ★ナイトフィバ",
          "title": "ルカルカ★ナイトフィーバー / samfree",
          "start": 12623,
          "end": null
        }
      ],
      "duration": 15757
    },
    {
      "id": "TjekeqecNwo",
      "memberId": "tsukuri",
      "publishedAt": "2026-03-01",
      "title": "〖 歌枠 〗いつもと違うマイクで歌うてみる〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "スロウダウナ",
          "title": "スロウダウナー / ろくろ",
          "start": 489,
          "end": 913
        },
        {
          "key": "絶頂賛",
          "title": "絶頂賛歌 / 和ぬか",
          "start": 914,
          "end": 1254
        },
        {
          "key": "青春コンプレックス",
          "title": "青春コンプレックス / 結束バンド",
          "start": 1255,
          "end": 1676
        },
        {
          "key": "花火",
          "title": "花火 / aiko",
          "start": 1677,
          "end": 2109
        },
        {
          "key": "ロミオとシンデレラ",
          "title": "ロミオとシンデレラ / doriko",
          "start": 2110,
          "end": 2557
        },
        {
          "key": "夜明けと蛍",
          "title": "夜明けと蛍 / n-buna",
          "start": 2558,
          "end": 3001
        },
        {
          "key": "だから僕は音楽を辞めた",
          "title": "だから僕は音楽を辞めた / ヨルシカ",
          "start": 3002,
          "end": 3335
        },
        {
          "key": "革命道中",
          "title": "革命道中 / アイナ・ジ・エンド",
          "start": 3336,
          "end": 3662
        },
        {
          "key": "コルボイ",
          "title": "コールボーイ / Syudou",
          "start": 3663,
          "end": 3983
        },
        {
          "key": "悪魔の踊り方",
          "title": "悪魔の踊り方 / キタニタツヤ",
          "start": 3984,
          "end": 4292
        },
        {
          "key": "恋愛裁判",
          "title": "恋愛裁判 / 40mP",
          "start": 4293,
          "end": 4654
        },
        {
          "key": "マシャルマキシマイザ",
          "title": "マーシャル・マキシマイザー / 柊マグネタイト",
          "start": 4655,
          "end": 4915
        },
        {
          "key": "ルカルカ★ナイトフィバ",
          "title": "ルカルカ★ナイトフィーバー / samfree",
          "start": 4916,
          "end": 5355
        },
        {
          "key": "狂乱heykids!!",
          "title": "狂乱 Hey Kids!! / THE ORAL CIGARETTES",
          "start": 5356,
          "end": 5735
        },
        {
          "key": "ハイドアンドシク",
          "title": "ハイド・アンド・シーク / NOMELON NOLEMON",
          "start": 5736,
          "end": 6108
        },
        {
          "key": "irisout",
          "title": "IRIS OUT / 米津玄師",
          "start": 6109,
          "end": 6399
        },
        {
          "key": "天ノ弱",
          "title": "天ノ弱（アカペラ） / 164",
          "start": 6400,
          "end": 6442
        },
        {
          "key": "天ノ弱",
          "title": "天ノ弱 / 164",
          "start": 6443,
          "end": 6816
        },
        {
          "key": "stellarstellar",
          "title": "Stellar Stellar / 星街すいせい",
          "start": 6817,
          "end": 7258
        },
        {
          "key": "ルマ",
          "title": "ルーマー / ポリスピカデリー",
          "start": 7259,
          "end": 7633
        },
        {
          "key": "ワルドランプシェド",
          "title": "ワールド・ランプシェード / buzzG",
          "start": 7634,
          "end": 8430
        },
        {
          "key": "アンノウンマザグス",
          "title": "アンノウン・マザーグース / wowaka",
          "start": 8431,
          "end": null
        }
      ],
      "duration": 9810
    },
    {
      "id": "HY-7YJHjFnw",
      "memberId": "tsukuri",
      "publishedAt": "2026-03-12",
      "title": "〖 歌枠 〗寝起きのやーつ〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "独りんぼエンヴィ",
          "title": "独りんぼエンヴィー / 電ポルP",
          "start": 394,
          "end": 752
        },
        {
          "key": "aboutme",
          "title": "About Me / 蝶々P",
          "start": 753,
          "end": 1284
        },
        {
          "key": "ハレンチ",
          "title": "ハレンチ / ちゃんみな",
          "start": 1285,
          "end": 1616
        },
        {
          "key": "セレナデ",
          "title": "セレナーデ / なとり",
          "start": 1617,
          "end": 1800
        },
        {
          "key": "セレナデ",
          "title": "セレナーデ（+3） / なとり",
          "start": 1801,
          "end": 2154
        },
        {
          "key": "プロポズ",
          "title": "プロポーズ / なとり",
          "start": 2155,
          "end": 2502
        },
        {
          "key": "g4l",
          "title": "G4L / Giga",
          "start": 2503,
          "end": 2699
        },
        {
          "key": "聖槍爆裂ボイ",
          "title": "聖槍爆裂ボーイ / れるりり,もじゃ",
          "start": 2700,
          "end": 3035
        },
        {
          "key": "ノマド",
          "title": "ノマド / 須田景凪",
          "start": 3036,
          "end": 3405
        },
        {
          "key": "雨とカプチノ",
          "title": "雨とカプチーノ / ヨルシカ",
          "start": 3406,
          "end": 3814
        },
        {
          "key": "カタオモイ",
          "title": "カタオモイ / Aimer",
          "start": 3815,
          "end": 4099
        },
        {
          "key": "プロログ",
          "title": "プロローグ / Uru",
          "start": 4100,
          "end": 4693
        },
        {
          "key": "orion",
          "title": "orion / 米津玄師",
          "start": 4694,
          "end": null
        }
      ],
      "duration": 6365
    },
    {
      "id": "XPe6wC0UAQU",
      "memberId": "tsukuri",
      "publishedAt": "2026-03-24",
      "title": "【 歌枠 / SINGING 】眠雲ツクリ降臨歌枠【涼海ネモ / ななしいんく】",
      "songs": [
        {
          "key": "ブリキノダンス",
          "title": "ブリキノダンス / 日向電工",
          "start": 221,
          "end": 916
        },
        {
          "key": "レディメイド",
          "title": "レディメイド / Ado",
          "start": 917,
          "end": 1317
        },
        {
          "key": "気まぐれロマンティック",
          "title": "気まぐれロマンティック / いきものがかり",
          "start": 1318,
          "end": 2134
        },
        {
          "key": "少女レイ",
          "title": "少女レイ / みきとP",
          "start": 2135,
          "end": 2422
        },
        {
          "key": "からくりピエロ",
          "title": "からくりピエロ / 40mP",
          "start": 2423,
          "end": 3852
        },
        {
          "key": "カタオモイ",
          "title": "カタオモイ / Aimer",
          "start": 3853,
          "end": 4062
        },
        {
          "key": "雨とカプチノ",
          "title": "雨とカプチーノ / ヨルシカ",
          "start": 4063,
          "end": 5084
        },
        {
          "key": "ブルアンビエンス",
          "title": "ブルーアンビエンス / Mrs. GREEN APPLE",
          "start": 5085,
          "end": null
        }
      ],
      "fromNote": "【 歌枠 / SINGING 】眠雲ツクリ降臨歌枠【涼海ネモ / ななしいんく】"
    },
    {
      "id": "N4AU_XkjL1M",
      "memberId": "tsukuri",
      "publishedAt": "2026-03-24",
      "title": "〖 20万人耐久歌枠 〗いざ〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "春を告げる",
          "title": "春を告げる / yama",
          "start": 469,
          "end": 951
        },
        {
          "key": "晴る",
          "title": "晴る / ヨルシカ",
          "start": 952,
          "end": 1298
        },
        {
          "key": "ロキ",
          "title": "ロキ / みきとP",
          "start": 1299,
          "end": 1633
        },
        {
          "key": "花火",
          "title": "花火 / aiko",
          "start": 1634,
          "end": 1988
        },
        {
          "key": "セレナデ",
          "title": "セレナーデ（+3） / なとり",
          "start": 1989,
          "end": 2400
        },
        {
          "key": "irisout",
          "title": "IRIS OUT / 米津玄師",
          "start": 2401,
          "end": 2559
        },
        {
          "key": "janedoe",
          "title": "JANE DOE / 米津玄師,宇多田ヒカル",
          "start": 2560,
          "end": 2869
        },
        {
          "key": "栞",
          "title": "栞 / クリープハイプ",
          "start": 2870,
          "end": 3235
        },
        {
          "key": "ひゅるりらぱっぱ",
          "title": "ひゅるりらぱっぱ / tuki.",
          "start": 3236,
          "end": 3506
        },
        {
          "key": "ロミオとシンデレラ",
          "title": "ロミオとシンデレラ / doriko",
          "start": 3507,
          "end": 3810
        },
        {
          "key": "ヒバナ",
          "title": "ヒバナ / DECO*27",
          "start": 3811,
          "end": 4463
        },
        {
          "key": "アンノウンマザグス",
          "title": "アンノウン・マザーグース / wowaka",
          "start": 4464,
          "end": 4964
        },
        {
          "key": "ルカルカ★ナイトフィバ",
          "title": "ルカルカ★ナイトフィーバー / samfree",
          "start": 4965,
          "end": 5413
        },
        {
          "key": "阿修羅ちゃん",
          "title": "阿修羅ちゃん / Ado",
          "start": 5414,
          "end": 5709
        },
        {
          "key": "とくべチュ、して？",
          "title": "とくべチュ、して？ / ＝LOVE",
          "start": 5710,
          "end": 6130
        },
        {
          "key": "departures～あなたにおくるアイの～",
          "title": "Departures ～あなたにおくるアイの歌～ / EGOIST",
          "start": 6131,
          "end": 6534
        },
        {
          "key": "スピカ",
          "title": "スピカ（アカペラ） / ロクデナシ",
          "start": 6535,
          "end": 6676
        },
        {
          "key": "人間みたいね",
          "title": "人間みたいね / キタニタツヤ",
          "start": 6677,
          "end": 7115
        },
        {
          "key": "ギタと孤独と蒼い惑星",
          "title": "ギターと孤独と蒼い惑星 / 結束バンド",
          "start": 7116,
          "end": null
        }
      ],
      "duration": 9821
    },
    {
      "id": "q31SVa4lcJg",
      "memberId": "tsukuri",
      "publishedAt": "2026-04-01",
      "title": "〖 歌枠 〗🌹最高の夜にしよう🍾🍸〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "好きすぎて滅！",
          "title": "好きすぎて滅！ / M!LK",
          "start": 240,
          "end": 719
        },
        {
          "key": "エンヴィキャットウォク",
          "title": "エンヴィキャットウォーク / トーマ",
          "start": 720,
          "end": 1309
        },
        {
          "key": "ずうっといっしょ！",
          "title": "ずうっといっしょ！ / キタニタツヤ",
          "start": 1310,
          "end": 1914
        },
        {
          "key": "プロポズ",
          "title": "プロポーズ / なとり",
          "start": 1915,
          "end": 2236
        },
        {
          "key": "聖槍爆裂ボイ",
          "title": "聖槍爆裂ボーイ / れるりり,もじゃ",
          "start": 2237,
          "end": 2815
        },
        {
          "key": "ロミオとシンデレラ",
          "title": "ロミオとシンデレラ（-5） / doriko",
          "start": 2816,
          "end": 3371
        },
        {
          "key": "女々しくて",
          "title": "女々しくて / ゴールデンボンバー",
          "start": 3372,
          "end": null
        }
      ],
      "duration": 5219
    },
    {
      "id": "Z3ddngJBRG8",
      "memberId": "tsukuri",
      "publishedAt": "2026-04-04",
      "title": "〖 歌枠 〗バンドサウンド縛りでぶち上げてく✊",
      "songs": [
        {
          "key": "ワルズエンドダンスホル",
          "title": "ワールズエンド・ダンスホール / wowaka",
          "start": 103,
          "end": 373
        },
        {
          "key": "青春コンプレックス",
          "title": "青春コンプレックス / 結束バンド",
          "start": 374,
          "end": 654
        },
        {
          "key": "ゴゴ幽霊船",
          "title": "ゴーゴー幽霊船 / 米津玄師",
          "start": 655,
          "end": 931
        },
        {
          "key": "右に曲ガル",
          "title": "右に曲ガール / はるふり",
          "start": 932,
          "end": 1180
        },
        {
          "key": "ギタと孤独と蒼い惑星",
          "title": "ギターと孤独と蒼い惑星 / 結束バンド",
          "start": 1181,
          "end": 1507
        },
        {
          "key": "daze",
          "title": "daze / じん",
          "start": 1508,
          "end": 1776
        },
        {
          "key": "セレナデ",
          "title": "セレナーデ / なとり",
          "start": 1777,
          "end": 2017
        },
        {
          "key": "バッドダンスホル",
          "title": "バッド・ダンス・ホール / カラスヤサボウ",
          "start": 2018,
          "end": null
        }
      ],
      "fromNote": "〖 歌枠 〗バンドサウンド縛りでぶち上げてく✊"
    },
    {
      "id": "0j0wguUobr0",
      "memberId": "tsukuri",
      "publishedAt": "2026-04-05",
      "title": "〖 コラボ歌枠 〗UNIゾンならお任せあれ☁🌂〖 #ミリプロ24時間配信リレー 〗",
      "songs": [
        {
          "key": "華奢なリップ",
          "title": "華奢なリップ / ジェニーハイ",
          "start": 117,
          "end": 528
        },
        {
          "key": "踊",
          "title": "踊 / Ado",
          "start": 529,
          "end": 876
        },
        {
          "key": "愛のけだもの",
          "title": "愛のけだもの / 神はサイコロを振らない×キタニタツヤ",
          "start": 877,
          "end": 1431
        },
        {
          "key": "janedoe",
          "title": "JANE DOE / 米津玄師,宇多田ヒカル",
          "start": 1432,
          "end": 1911
        },
        {
          "key": "w●rk",
          "title": "W●RK / millennium parade×椎名林檎",
          "start": 1912,
          "end": 2993
        },
        {
          "key": "二時間だけのバカンス",
          "title": "二時間だけのバカンス / 宇多田ヒカル featuring 椎名林檎",
          "start": 2994,
          "end": 3589
        },
        {
          "key": "月陽-ツキアカリ",
          "title": "月陽 -ツキアカリ- / みきとP",
          "start": 3590,
          "end": 3999
        },
        {
          "key": "スロウダウナ",
          "title": "スロウダウナー / ろくろ",
          "start": 4000,
          "end": 4415
        },
        {
          "key": "怪物さん",
          "title": "怪物さん / 平井堅 feat.あいみょん",
          "start": 4416,
          "end": null
        }
      ],
      "fromNote": "〖 コラボ歌枠 〗UNIゾンならお任せあれ☁🌂〖 #ミリプロ24時間配信リレー 〗"
    },
    {
      "id": "JyMNfY3q7HA",
      "memberId": "tsukuri",
      "publishedAt": "2026-04-07",
      "title": "〖 歌枠 〗新生活応援🌸春曲縛りでまったりしよ〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "start",
          "title": "StaRt / Mrs. GREEN APPLE",
          "start": 368,
          "end": 840
        },
        {
          "key": "春雷",
          "title": "春雷（+5） / 米津玄師",
          "start": 841,
          "end": 1491
        },
        {
          "key": "晴る",
          "title": "晴る / ヨルシカ",
          "start": 1492,
          "end": 1991
        },
        {
          "key": "真生活",
          "title": "真生活 / 案山子",
          "start": 1992,
          "end": 2337
        },
        {
          "key": "春を告げる",
          "title": "春を告げる / yama",
          "start": 2338,
          "end": 2599
        },
        {
          "key": "春泥棒",
          "title": "春泥棒（アカペラ） / ヨルシカ",
          "start": 2600,
          "end": 2885
        },
        {
          "key": "che.r.ry",
          "title": "CHE.R.RY / YUI",
          "start": 2886,
          "end": 3135
        },
        {
          "key": "夏祭り",
          "title": "夏祭り / Whiteberry",
          "start": 3136,
          "end": 3281
        },
        {
          "key": "金木犀",
          "title": "金木犀 / くじら",
          "start": 3282,
          "end": 3449
        },
        {
          "key": "ゲレンデがとけるほど恋したい",
          "title": "ゲレンデがとけるほど恋したい / 広瀬 香美",
          "start": 3450,
          "end": 3710
        },
        {
          "key": "栞",
          "title": "栞 / クリープハイプ",
          "start": 3711,
          "end": 4647
        },
        {
          "key": "春よ、来い",
          "title": "春よ、 来い / 松任谷由実",
          "start": 4648,
          "end": 5091
        },
        {
          "key": "春を待つ",
          "title": "春を待つ / Islet",
          "start": 5092,
          "end": 5448
        },
        {
          "key": "拝啓、少年よ",
          "title": "拝啓、少年よ / Hump Back",
          "start": 5449,
          "end": 5913
        },
        {
          "key": "千本桜",
          "title": "千本桜 / 黒うさP",
          "start": 5914,
          "end": null
        }
      ],
      "duration": 7235
    },
    {
      "id": "h-UJR9OAA5E",
      "memberId": "tsukuri",
      "publishedAt": "2026-04-12",
      "title": "〖 歌枠 〗レッツ CHILL",
      "songs": [
        {
          "key": "春を待つ",
          "title": "春を待つ / Islet feat.倚水",
          "start": 475,
          "end": 849
        },
        {
          "key": "長く短い祭り",
          "title": "長く短い祭り / 椎名林檎",
          "start": 850,
          "end": 1237
        },
        {
          "key": "翡翠のまち",
          "title": "翡翠のまち / メル (こんにちは谷田さんremix)",
          "start": 1238,
          "end": 1615
        },
        {
          "key": "いかないで",
          "title": "いかないで / 想太",
          "start": 1616,
          "end": 1892
        },
        {
          "key": "アイロニ",
          "title": "アイロニ / すこっぷ",
          "start": 1893,
          "end": 2259
        },
        {
          "key": "ハロ",
          "title": "ハロ／ハワユ / ナノウ",
          "start": 2260,
          "end": 2621
        },
        {
          "key": "忘れじの言の葉",
          "title": "忘れじの言の葉 / 安次嶺希和子",
          "start": 2622,
          "end": 2998
        },
        {
          "key": "変わらないもの",
          "title": "変わらないもの / 奥華子",
          "start": 2999,
          "end": 3396
        },
        {
          "key": "サカスナイト",
          "title": "サーカスナイト / 七尾旅人",
          "start": 3397,
          "end": 4101
        },
        {
          "key": "二時間だけのバカンス",
          "title": "二時間だけのバカンス / 宇多田ヒカル featuring 椎名林檎",
          "start": 4102,
          "end": 4484
        },
        {
          "key": "泡沫の夜",
          "title": "泡沫の夜 / nqrse",
          "start": 4485,
          "end": 5983
        },
        {
          "key": "sleepwalk",
          "title": "Sleepwalk / なとり",
          "start": 5984,
          "end": null
        }
      ],
      "fromNote": "〖 歌枠 〗レッツ CHILL"
    },
    {
      "id": "5w6runtvLKw",
      "memberId": "tsukuri",
      "publishedAt": "2026-04-25",
      "title": "〖 #ノーチラス歌枠リレー〗最高の思い出、つくってあげる！",
      "songs": [
        {
          "key": "oversoul",
          "title": "Over soul / 林原めぐみ",
          "start": 103,
          "end": 482
        },
        {
          "key": "名前のない怪物",
          "title": "名前のない怪物 / EGOIST",
          "start": 483,
          "end": 961
        },
        {
          "key": "フラレガイガル",
          "title": "フラレガイガール / さユり",
          "start": 962,
          "end": 1384
        },
        {
          "key": "青春コンプレックス",
          "title": "青春コンプレックス / 結束バンド",
          "start": 1385,
          "end": 1608
        },
        {
          "key": "ヒバナ",
          "title": "ヒバナ / DECO*27",
          "start": 1609,
          "end": null
        }
      ],
      "fromNote": "〖 #ノーチラス歌枠リレー〗最高の思い出、つくってあげる！"
    },
    {
      "id": "6glMnbufOgE",
      "memberId": "tsukuri",
      "publishedAt": "2026-05-03",
      "title": "〖 歌枠 〗GWってみんな何してんの歌枠〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "からくりピエロ",
          "title": "からくりピエロ / 40mP",
          "start": 211,
          "end": 623
        },
        {
          "key": "言って。",
          "title": "言って。 / ヨルシカ",
          "start": 624,
          "end": 947
        },
        {
          "key": "雨とカプチノ",
          "title": "雨とカプチーノ / ヨルシカ",
          "start": 948,
          "end": 1301
        },
        {
          "key": "とても素敵な六月でした",
          "title": "とても素敵な六月でした / Eight",
          "start": 1302,
          "end": 1864
        },
        {
          "key": "ラグトレイン",
          "title": "ラグトレイン / 稲葉曇",
          "start": 1865,
          "end": 2390
        },
        {
          "key": "二息歩行",
          "title": "二息歩行 / DECO*27",
          "start": 2391,
          "end": 2636
        },
        {
          "key": "セレナデ",
          "title": "セレナーデ（+3） / なとり",
          "start": 2637,
          "end": 3064
        },
        {
          "key": "セツナトリップ",
          "title": "セツナトリップ / Last Note.",
          "start": 3065,
          "end": 3645
        },
        {
          "key": "天ノ弱",
          "title": "天ノ弱（-2） / 164",
          "start": 3646,
          "end": 3923
        },
        {
          "key": "東京テディベア",
          "title": "東京テディベア（-2） / Neru",
          "start": 3924,
          "end": 4278
        },
        {
          "key": "残響散",
          "title": "残響散歌 / Aimer",
          "start": 4279,
          "end": 4725
        },
        {
          "key": "イガク",
          "title": "イガク / 原口沙輔",
          "start": 4726,
          "end": 5034
        },
        {
          "key": "ハイドアンドシク",
          "title": "ハイド・アンド・シーク / NOMELON NOLEMON",
          "start": 5035,
          "end": 5305
        },
        {
          "key": "エンゼルフィッシュ",
          "title": "エンゼルフィッシュ / パトリチェフ",
          "start": 5306,
          "end": 5849
        },
        {
          "key": "水流のロック",
          "title": "水流のロック / 日食なつこ",
          "start": 5850,
          "end": null
        }
      ],
      "duration": 7210
    },
    {
      "id": "n9HHsYOyTR0",
      "memberId": "tsukuri",
      "publishedAt": "2026-05-13",
      "title": "〖 新衣装お披露目 〗告知アリ！１周年記念のお洋服、見てって👀〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "",
          "title": "/ x0o0x",
          "start": 169,
          "end": 327
        },
        {
          "key": "航海の唄",
          "title": "航海の唄 / さユり",
          "start": 328,
          "end": 3060
        },
        {
          "key": "これから",
          "title": "これから / 眠雲ツクリ",
          "start": 3061,
          "end": null
        }
      ],
      "duration": 3228
    },
    {
      "id": "nm-qn78miwU",
      "memberId": "tsukuri",
      "publishedAt": "2026-05-13",
      "title": "〖 歌凸待ち 〗豪華ゲストと一緒にお歌が歌いたい！！！〖 眠雲ツクリ/ミリプロ 〗",
      "songs": [
        {
          "key": "少女レイ",
          "title": "少女レイ（しほさんコラボ） / みきとP",
          "start": 316,
          "end": 1164
        },
        {
          "key": "メランコリキッチン",
          "title": "メランコリーキッチン（ファム・ファタルさんコラボ） / 米津玄師",
          "start": 1165,
          "end": 2065
        },
        {
          "key": "革命デュアリズム",
          "title": "革命デュアリズム（巫てんりさんコラボ） / 水樹奈々×T.M.Revolution",
          "start": 2066,
          "end": 3045
        },
        {
          "key": "アンハッピリフレイン",
          "title": "アンハッピーリフレイン（CULUAさんコラボ） / wowaka",
          "start": 3046,
          "end": 4812
        },
        {
          "key": "革命道中",
          "title": "革命道中（春雨麗女さんコラボ） / アイナ・ジ・エンド",
          "start": 4813,
          "end": 4812
        },
        {
          "key": "花の塔",
          "title": "花の塔（Hanonさんコラボ） / さユり",
          "start": 4813,
          "end": 5663
        },
        {
          "key": "阿修羅ちゃん",
          "title": "阿修羅ちゃん（柘榴シロさんコラボ） / Ado",
          "start": 5664,
          "end": 6474
        },
        {
          "key": "再教育",
          "title": "再教育（松永依織さんコラボ） / Neru",
          "start": 6475,
          "end": 7356
        },
        {
          "key": "華奢なリップ",
          "title": "華奢なリップ（響咲リオナさんコラボ） / ジェニーハイ",
          "start": 7357,
          "end": null
        }
      ],
      "duration": 8571
    },
    {
      "id": "9YZSvHqdB-8",
      "memberId": "tsukuri",
      "publishedAt": "2026-05-31",
      "title": "〖 歌枠 〗喉復活したねん〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "忘れられないの",
          "title": "忘れられないの / サカナクション",
          "start": 343,
          "end": 805
        },
        {
          "key": "いかないで",
          "title": "いかないで / 想太",
          "start": 806,
          "end": 1215
        },
        {
          "key": "ナンセンス文学",
          "title": "ナンセンス文学 / Eve",
          "start": 1216,
          "end": 1545
        },
        {
          "key": "echo",
          "title": "ECHO / Crusher-P",
          "start": 1546,
          "end": 1863
        },
        {
          "key": "aboutme",
          "title": "About Me / 蝶々P",
          "start": 1864,
          "end": 2216
        },
        {
          "key": "炉心融解",
          "title": "炉心融解 / iroha",
          "start": 2217,
          "end": 2758
        },
        {
          "key": "janedoe",
          "title": "JANE DOE / 米津玄師,宇多田ヒカル",
          "start": 2759,
          "end": 3044
        },
        {
          "key": "セレナデ",
          "title": "セレナーデ / なとり",
          "start": 3045,
          "end": 3388
        },
        {
          "key": "ハレンチ",
          "title": "ハレンチ / ちゃんみな",
          "start": 3389,
          "end": 3827
        },
        {
          "key": "点.mp4",
          "title": "点.mp4 / 安見すや",
          "start": 3828,
          "end": 3978
        },
        {
          "key": "砂の惑星",
          "title": "砂の惑星 / ハチ",
          "start": 3979,
          "end": 4337
        },
        {
          "key": "春雷",
          "title": "春雷 / 米津玄師",
          "start": 4338,
          "end": 4783
        },
        {
          "key": "愛に奇術師",
          "title": "愛に奇術師 / 電ポルP",
          "start": 4784,
          "end": 5055
        },
        {
          "key": "刹那プラス",
          "title": "刹那プラス / みきとP",
          "start": 5056,
          "end": 5481
        },
        {
          "key": "れびてしょん",
          "title": "れびてーしょん / キタニタツヤ",
          "start": 5482,
          "end": null
        }
      ],
      "duration": 7063
    },
    {
      "id": "z98ZKGJGP3A",
      "memberId": "tsukuri",
      "publishedAt": "2026-06-13",
      "title": "〖 歌枠 〗きょうは一体何を歌うってんだい〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "愛を伝えたいだとか",
          "title": "愛を伝えたいだとか / あいみょん",
          "start": 384,
          "end": 765
        },
        {
          "key": "残響散",
          "title": "残響散歌 / Aimer",
          "start": 766,
          "end": 1137
        },
        {
          "key": "together",
          "title": "Together / あきよしふみえ",
          "start": 1138,
          "end": 1540
        },
        {
          "key": "ロストワンの号哭",
          "title": "ロストワンの号哭 / Neru",
          "start": 1541,
          "end": 1851
        },
        {
          "key": "ブリキノダンス",
          "title": "ブリキノダンス / 日向電工",
          "start": 1852,
          "end": 2479
        },
        {
          "key": "ロミオとシンデレラ",
          "title": "ロミオとシンデレラ / doriko",
          "start": 2480,
          "end": 2857
        },
        {
          "key": "レディメイド",
          "title": "レディメイド / Ado",
          "start": 2858,
          "end": 3276
        },
        {
          "key": "ラヴィ",
          "title": "ラヴィ / すりぃ",
          "start": 3277,
          "end": 3652
        },
        {
          "key": "秒針を噛む",
          "title": "秒針を噛む / ずっと真夜中でいいのに。",
          "start": 3653,
          "end": 3812
        },
        {
          "key": "ワルドイズマイン",
          "title": "ワールドイズマイン / ryo",
          "start": 3813,
          "end": 4234
        },
        {
          "key": "ロキ",
          "title": "ロキ / みきとP",
          "start": 4235,
          "end": 4651
        },
        {
          "key": "アイネクライネ",
          "title": "アイネクライネ / 米津玄師",
          "start": 4652,
          "end": 5386
        },
        {
          "key": "泡沫の夜",
          "title": "泡沫の夜 / nqrse",
          "start": 5387,
          "end": 5673
        },
        {
          "key": "レモネド",
          "title": "レモネード / nqrse",
          "start": 5674,
          "end": 6217
        },
        {
          "key": "quietroom",
          "title": "quiet room / 有機酸",
          "start": 6218,
          "end": null
        }
      ],
      "duration": 7311
    },
    {
      "id": "TY_tDee12ro",
      "memberId": "tsukuri",
      "publishedAt": "2026-06-19",
      "title": "〖 歌枠 〗告知でも聴いていかないかい〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "青春コンプレックス",
          "title": "青春コンプレックス / 結束バンド",
          "start": 565,
          "end": 1030
        },
        {
          "key": "夜咄ディセイブ",
          "title": "夜咄ディセイブ / じん",
          "start": 1031,
          "end": 1606
        },
        {
          "key": "ここでキスして。",
          "title": "ここでキスして。 / 椎名林檎",
          "start": 1607,
          "end": 1942
        },
        {
          "key": "本能",
          "title": "本能 / 椎名林檎",
          "start": 1943,
          "end": 2311
        },
        {
          "key": "メランコリキッチン",
          "title": "メランコリーキッチン / 米津玄師",
          "start": 2312,
          "end": 2651
        },
        {
          "key": "beautifulworld",
          "title": "Beautiful World / 宇多田ヒカル",
          "start": 2652,
          "end": 3117
        },
        {
          "key": "逆光",
          "title": "逆光 / Ado",
          "start": 3118,
          "end": 3464
        },
        {
          "key": "紅蓮華",
          "title": "紅蓮華 / LiSA",
          "start": 3465,
          "end": 3848
        },
        {
          "key": "モザイクロル",
          "title": "モザイクロール / DECO*27",
          "start": 3849,
          "end": 4224
        },
        {
          "key": "ピスサイン",
          "title": "ピースサイン / 米津玄師",
          "start": 4225,
          "end": 4634
        },
        {
          "key": "onlymyrailgun",
          "title": "only my railgun / fripSide",
          "start": 4635,
          "end": 5599
        },
        {
          "key": "セレナデ",
          "title": "セレナーデ / なとり",
          "start": 5600,
          "end": 6000
        },
        {
          "key": "モニタリング",
          "title": "モニタリング (Best Friend Remix) / DECO*27",
          "start": 6001,
          "end": 6363
        },
        {
          "key": "晴る",
          "title": "晴る / ヨルシカ",
          "start": 6364,
          "end": null
        }
      ],
      "duration": 7632
    },
    {
      "id": "0-enLp-IzGc",
      "memberId": "tsukuri",
      "publishedAt": "2026-06-27",
      "title": "〖 歌枠 〗秒で終わる声出し歌枠〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "雨とカプチノ",
          "title": "雨とカプチーノ / ヨルシカ",
          "start": 501,
          "end": 940
        },
        {
          "key": "ガデン",
          "title": "ガーデン / 藤井風",
          "start": 941,
          "end": 1259
        },
        {
          "key": "レディレ",
          "title": "レディーレ / 須田景凪",
          "start": 1260,
          "end": 1703
        },
        {
          "key": "青春コンプレックス",
          "title": "青春コンプレックス / 結束バンド",
          "start": 1704,
          "end": 2163
        },
        {
          "key": "プロポズ",
          "title": "プロポーズ / なとり",
          "start": 2164,
          "end": 2462
        },
        {
          "key": "あなたのことをおしえて",
          "title": "あなたのことをおしえて / キタニタツヤ",
          "start": 2463,
          "end": 2699
        },
        {
          "key": "limbo",
          "title": "Limbo / 春野",
          "start": 2700,
          "end": 3023
        },
        {
          "key": "automatic",
          "title": "Automatic / 宇多田ヒカル",
          "start": 3024,
          "end": 3472
        },
        {
          "key": "シャルル",
          "title": "シャルル / 須田景凪",
          "start": 3473,
          "end": null
        }
      ],
      "duration": 4560
    },
    {
      "id": "I76157BdfSE",
      "memberId": "tsukuri",
      "publishedAt": "2026-06-28",
      "title": "〖 歌枠 〗24万人ありがとう（素振り）〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "二息歩行",
          "title": "二息歩行 / DECO*27",
          "start": 321,
          "end": 646
        },
        {
          "key": "スロウダウナ",
          "title": "スロウダウナー / ろくろ",
          "start": 647,
          "end": 1134
        },
        {
          "key": "パンダヒロ",
          "title": "（存在しない記憶）パンダヒーロー / ハチ",
          "start": 1135,
          "end": 1509
        },
        {
          "key": "アンハッピリフレイン",
          "title": "アンハッピーリフレイン / wowaka",
          "start": 1510,
          "end": 1894
        },
        {
          "key": "長く短い祭",
          "title": "長く短い祭 / 椎名林檎",
          "start": 1895,
          "end": 2239
        },
        {
          "key": "セレナデ",
          "title": "セレナーデ / なとり",
          "start": 2240,
          "end": 2604
        },
        {
          "key": "mela!",
          "title": "Mela! / 緑黄色社会",
          "start": 2605,
          "end": 3000
        },
        {
          "key": "ブラック★ロックシュタ",
          "title": "ブラック★ロックシューター / ryo(supercell)",
          "start": 3001,
          "end": 3415
        },
        {
          "key": "beyondtheway",
          "title": "Beyond the way / Vivid BAD SQUAD",
          "start": 3416,
          "end": 4513
        },
        {
          "key": "とくべチュ、して？",
          "title": "とくべチュ、して？ / ＝LOVE",
          "start": 4514,
          "end": 5218
        },
        {
          "key": "とても素敵な六月でした",
          "title": "とても素敵な六月でした / Eight",
          "start": 5219,
          "end": null
        }
      ],
      "duration": 7216
    },
    {
      "id": "E3i7WM4pe_s",
      "memberId": "tsukuri",
      "publishedAt": "2026-07-04",
      "title": "〖 歌枠 〗ボカロ老人会は突如訪れる〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "千本桜",
          "title": "千本桜 / 黒うさP",
          "start": 397,
          "end": 819
        },
        {
          "key": "echo",
          "title": "ECHO / Crusher-P",
          "start": 820,
          "end": 1273
        },
        {
          "key": "天ノ弱",
          "title": "天ノ弱(-2) / 164",
          "start": 1274,
          "end": 1648
        },
        {
          "key": "calc.",
          "title": "Calc. / ジミーサムP",
          "start": 1649,
          "end": 2212
        },
        {
          "key": "ウミユリ海底譚",
          "title": "ウミユリ海底譚（-4） / n-buna",
          "start": 2213,
          "end": 2609
        },
        {
          "key": "地球最後の告白を",
          "title": "地球最後の告白を / kemu",
          "start": 2610,
          "end": 3023
        },
        {
          "key": "繰り返し一粒",
          "title": "繰り返し一粒 / 猫虫P",
          "start": 3024,
          "end": 3486
        },
        {
          "key": "世界寿命と最後の一日",
          "title": "世界寿命と最後の一日(-5) / スズム",
          "start": 3487,
          "end": 3871
        },
        {
          "key": "メリュ",
          "title": "メリュー / n-buna",
          "start": 3872,
          "end": 4275
        },
        {
          "key": "少年少女カメレオンシンプトム",
          "title": "少年少女カメレオンシンプトム / Neru",
          "start": 4276,
          "end": 4579
        },
        {
          "key": "シザハンズ",
          "title": "シザーハンズ / Nem",
          "start": 4580,
          "end": 4809
        },
        {
          "key": "バイビベイビサヨウナラ",
          "title": "バイビーベイビーサヨウナラ / saiB",
          "start": 4810,
          "end": 5044
        },
        {
          "key": "劇場愛",
          "title": "劇場愛歌 / n-buna",
          "start": 5045,
          "end": 5402
        },
        {
          "key": "1925",
          "title": "1925 / とみー",
          "start": 5403,
          "end": 5852
        },
        {
          "key": "ネコミミアカイブ",
          "title": "ネコミミアーカイブ / 糞田舎P",
          "start": 5853,
          "end": 6044
        },
        {
          "key": "嗚呼、素晴らしきニャン生",
          "title": "嗚呼、素晴らしきニャン生 / Nem",
          "start": 6045,
          "end": 6434
        },
        {
          "key": "林檎売りの泡沫少女",
          "title": "林檎売りの泡沫少女 / yukkedoluce",
          "start": 6435,
          "end": 6748
        },
        {
          "key": "如月アテンション",
          "title": "如月アテンション / じん",
          "start": 6749,
          "end": 7115
        },
        {
          "key": "セツナトリップ",
          "title": "セツナトリップ / Last Note.",
          "start": 7116,
          "end": 7509
        },
        {
          "key": "blessing",
          "title": "Blessing / halyosy",
          "start": 7510,
          "end": null
        }
      ],
      "duration": 9803
    },
    {
      "id": "Iy_Eh0FIlwU",
      "memberId": "tsukuri",
      "publishedAt": "2026-07-22",
      "title": "〖 歌枠 〗帰ってこい20℃代〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "遺書",
          "title": "遺書 / キタニタツヤ",
          "start": 488,
          "end": 795
        },
        {
          "key": "ただ君に晴れ",
          "title": "ただ君に晴れ / ヨルシカ",
          "start": 796,
          "end": 1119
        },
        {
          "key": "花火",
          "title": "花火 / aiko",
          "start": 1120,
          "end": 1581
        },
        {
          "key": "深海少女",
          "title": "深海少女 / ゆうゆ",
          "start": 1582,
          "end": 1889
        },
        {
          "key": "青と夏",
          "title": "青と夏 / Mrs. GREEN APPLE",
          "start": 1890,
          "end": 2057
        },
        {
          "key": "hotlimit",
          "title": "HOT LIMIT / T.M.Revolution",
          "start": 2058,
          "end": 2385
        },
        {
          "key": "少女レイ",
          "title": "少女レイ / みきとP",
          "start": 2386,
          "end": 3051
        },
        {
          "key": "打上花火",
          "title": "打上花火 / DAOKO×米津玄師",
          "start": 3052,
          "end": 3708
        },
        {
          "key": "言って。",
          "title": "言って。 / ヨルシカ",
          "start": 3709,
          "end": 3956
        },
        {
          "key": "だから僕は音楽を辞めた",
          "title": "だから僕は音楽を辞めた / ヨルシカ",
          "start": 3957,
          "end": 4299
        },
        {
          "key": "ヒッチコック",
          "title": "ヒッチコック / ヨルシカ",
          "start": 4300,
          "end": 5098
        },
        {
          "key": "ウミユリ海底譚",
          "title": "ウミユリ海底譚（-4） / n-buna",
          "start": 5099,
          "end": 5663
        },
        {
          "key": "長く短い祭",
          "title": "長く短い祭 / 椎名林檎",
          "start": 5664,
          "end": null
        }
      ],
      "duration": 7806
    },
    {
      "id": "tgutNmpSxac",
      "memberId": "tsukuri",
      "publishedAt": "2026-07-27",
      "title": "〖 歌枠 〗25万人お迎えします〖 眠雲ツクリ / ミリプロ 〗",
      "songs": [
        {
          "key": "からくりピエロ",
          "title": "からくりピエロ / 40mP",
          "start": 362,
          "end": 633
        },
        {
          "key": "残響散",
          "title": "残響散歌 / Aimer",
          "start": 634,
          "end": 947
        },
        {
          "key": "セレナデ",
          "title": "セレナーデ / なとり",
          "start": 948,
          "end": 1245
        },
        {
          "key": "少女レイ",
          "title": "少女レイ / みきとP",
          "start": 1246,
          "end": 1554
        },
        {
          "key": "ヒバナ",
          "title": "ヒバナ / DECO*27",
          "start": 1555,
          "end": 1777
        },
        {
          "key": "ブラック★ロックシュタ",
          "title": "ブラック★ロックシューター / ryo(supercell)",
          "start": 1778,
          "end": 2289
        },
        {
          "key": "ずうっといっしょ！",
          "title": "ずうっといっしょ！ / キタニタツヤ",
          "start": 2290,
          "end": 2577
        },
        {
          "key": "janedoe",
          "title": "JANE DOE / 米津玄師,宇多田ヒカル",
          "start": 2578,
          "end": 3101
        },
        {
          "key": "ルカルカ★ナイトフィバ",
          "title": "ルカルカ★ナイトフィーバー / samfree",
          "start": 3102,
          "end": 3603
        },
        {
          "key": "トリノコシティ",
          "title": "トリノコシティ / 40mP",
          "start": 3604,
          "end": 3857
        },
        {
          "key": "天ノ弱",
          "title": "天ノ弱 / 164",
          "start": 3858,
          "end": 4314
        },
        {
          "key": "daze",
          "title": "daze / じん",
          "start": 4315,
          "end": 5241
        },
        {
          "key": "ブリキノダンス",
          "title": "ブリキノダンス / 日向電工",
          "start": 5242,
          "end": 5780
        },
        {
          "key": "milestone",
          "title": "Mile Stone / Million Production",
          "start": 5781,
          "end": null
        }
      ],
      "duration": 8488
    },
    {
      "id": "B8AB81G-UOQ",
      "memberId": "tsukuri",
      "publishedAt": "2026-08-11",
      "title": "〖 歌枠 〗夏ってのはこうやってやんねん！",
      "songs": [
        {
          "key": "遺書",
          "title": "遺書 / キタニタツヤ",
          "start": 91,
          "end": 288
        },
        {
          "key": "ウミユリ海底譚",
          "title": "ウミユリ海底譚 / n-buna",
          "start": 289,
          "end": 567
        },
        {
          "key": "色水",
          "title": "色水 / おいしくるメロンパン",
          "start": 568,
          "end": 788
        },
        {
          "key": "靴の花火",
          "title": "靴の花火 / ヨルシカ",
          "start": 789,
          "end": 1144
        },
        {
          "key": "hotlimit",
          "title": "HOT LIMIT / T.M.Revolution",
          "start": 1145,
          "end": 1391
        },
        {
          "key": "sayonaramaybe",
          "title": "SAYONARA MAYBE / NOMELON NOLEMON",
          "start": 1392,
          "end": null
        }
      ],
      "fromNote": "〖 歌枠 〗夏ってのはこうやってやんねん！"
    }
  ]
};
