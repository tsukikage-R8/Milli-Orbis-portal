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
          "key": "StaRt",
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
          "key": "1・2・3",
          "title": "1・2・3 / After the Rain",
          "start": 962,
          "end": 1419
        },
        {
          "key": "Booo!",
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
          "key": "強風オールバック",
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
          "key": "サラマンダー",
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
          "key": "愛言葉Ⅲ",
          "title": "愛言葉Ⅲ / DECO*27",
          "start": 1309,
          "end": 2102,
          "en": {
            "title": "Love words Ⅲ / DECO*27"
          }
        },
        {
          "key": "オドループ",
          "title": "オドループ / フレデリック",
          "start": 2103,
          "end": 2762,
          "en": {
            "title": "Odorup / Frédéric"
          }
        },
        {
          "key": "トンデモワンダーズ",
          "title": "トンデモワンダーズ / sasakure",
          "start": 2763,
          "end": 3265,
          "en": {
            "title": "Tondemo Wonders / sasakure"
          }
        },
        {
          "key": "GONG",
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
          "key": "シュガーソングとビターステップ",
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
          "key": "ロケットサイダー",
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
          "key": "サマータイムレコード",
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
          "key": "Help me, ERINNNNNN!!",
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
          "key": "レッツゴー陰陽師",
          "title": "レッツゴー陰陽師 / 矢部野彦麿&琴姫With坊主ダンサーズ",
          "start": 1394,
          "end": 1781,
          "en": {
            "title": "Let's Go Onmyoji / Yabe Nohikomaro & Kotohime With Bozu Dancers"
          }
        },
        {
          "key": "ようこそジャパリパークへ",
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
          "key": "おとせサンダー",
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
          "key": "Bling-Bang-Bang-Born",
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
          "key": "ハイドアンド・シーク",
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
          "key": "わたしのアール",
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
          "key": "チェリーポップ",
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
          "key": "ようこそジャパリパークへ",
          "title": "ようこそジャパリパークへ / どうぶつビスケッツ×PPP",
          "start": 995,
          "end": 1349,
          "en": {
            "title": "Welcome to Japari Park / Animal Biscuits x PPP"
          }
        },
        {
          "key": "パンダヒーロー",
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
          "key": "ワールズエンド・ダンスホール",
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
          "key": "ジャンキーナイトタウンオーケストラ",
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
          "key": "ポニーテールとシュシュ",
          "title": "ポニーテールとシュシュ / AKB48",
          "start": 4390,
          "end": 4656,
          "en": {
            "title": "Ponytail and scrunchie / AKB48"
          }
        },
        {
          "key": "トンデモワンダーズ",
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
          "key": "GONG",
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
          "key": "シン・タンタカタンタンタンタンメン",
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
          "key": "サインはB",
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
          "key": "1・2・3",
          "title": "1・2・3 / After the Rain",
          "start": 522,
          "end": 1149
        },
        {
          "key": "愛言葉Ⅲ",
          "title": "愛言葉Ⅲ / DECO*27",
          "start": 1150,
          "end": 1782,
          "en": {
            "title": "Love words Ⅲ / DECO*27"
          }
        },
        {
          "key": "セプテンバーさん",
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
          "key": "絶頂讃歌",
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
          "key": "IRIS OUT",
          "title": "IRIS OUT / 米津玄師",
          "start": 990,
          "end": 1506,
          "en": {
            "title": "IRIS OUT / Kenshi Yonezu"
          }
        },
        {
          "key": "MAD HEAD LOVE",
          "title": "MAD HEAD LOVE / 米津玄師",
          "start": 1507,
          "end": 2175,
          "en": {
            "title": "MAD HEAD LOVE / Kenshi Yonezu"
          }
        },
        {
          "key": "絶頂讃歌",
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
          "key": "Help me, ERINNNNNN!!",
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
          "key": "セプテンバーさん",
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
          "key": "ピースサイン",
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
          "key": "Butter-Fly",
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
          "key": "ゴーストルール",
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
          "key": "ブレーメン",
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
          "key": "ノーダウト",
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
          "key": "倍倍FIGHT!",
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
          "key": "きょういくばんぐみのテーマ",
          "title": "きょういくばんぐみのテーマ / やみのおねえさん",
          "start": 1103,
          "end": 1267,
          "en": {
            "title": "The theme of today's travel bangumi / Sister in the darkness"
          }
        },
        {
          "key": "Mrs.pumpkinの滑稽な夢",
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
          "key": "チルノのパーフェクトさんすう教室",
          "title": "チルノのパーフェクトさんすう教室 / IOSYS",
          "start": 2430,
          "end": 2705,
          "en": {
            "title": "Cirno's Perfect Math Classroom / IOSYS"
          }
        },
        {
          "key": "Help me, ERINNNNNN!!",
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
          "key": "おやすみ泣き声、さよなら歌姫",
          "title": "おやすみ泣き声、さよなら歌姫 / クリープハイプ",
          "start": 3846,
          "end": 4083,
          "en": {
            "title": "Goodnight Cry, Goodbye Diva / Creep Hype"
          }
        },
        {
          "key": "マツケンサンバⅡ",
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
          "key": "ようこそジャパリパークへ",
          "title": "ようこそジャパリパークへ / どうぶつビスケッツ×PPP",
          "start": 5127,
          "end": 5550,
          "en": {
            "title": "Welcome to Japari Park / Animal Biscuits x PPP"
          }
        },
        {
          "key": "さよーならまたいつか！",
          "title": "さよーならまたいつか！ / 米津玄師",
          "start": 5551,
          "end": 5756,
          "en": {
            "title": "Goodbye, see you someday! / Kenshi Yonezu"
          }
        },
        {
          "key": "ゴーゴー幽霊船",
          "title": "ゴーゴー幽霊船 / 米津玄師",
          "start": 5757,
          "end": 6046,
          "en": {
            "title": "Go Go Ghost Ship / Kenshi Yonezu"
          }
        },
        {
          "key": "Butter-Fly",
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
          "key": "右に曲ガール",
          "title": "右に曲ガール / Sou",
          "start": 7386,
          "end": 7622,
          "en": {
            "title": "Girl on the right / Sou"
          }
        },
        {
          "key": "ノーダウト",
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
          "key": "パンダヒーロー",
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
          "key": "絶頂讃歌",
          "title": "絶頂讃歌 / 和ぬか",
          "start": 11073,
          "end": 11391,
          "en": {
            "title": "Climax Hymn / Wanuka"
          }
        },
        {
          "key": "StaRt",
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
          "key": "Blieve",
          "title": "Blieve",
          "start": 2491,
          "end": 2736
        },
        {
          "key": "God knows…",
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
          "key": "KICK BACK",
          "title": "KICK BACK / 米津玄師",
          "start": 725,
          "end": 1009,
          "en": {
            "title": "KICK BACK / Kenshi Yonezu"
          }
        },
        {
          "key": "いけないボーダーライン",
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
          "key": "おやすみ泣き声、さよなら歌姫",
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
          "key": "KICK BACK",
          "title": "KICK BACK / 米津玄師",
          "start": 358,
          "end": 694,
          "en": {
            "title": "KICK BACK / Kenshi Yonezu"
          }
        },
        {
          "key": "IRIS OUT",
          "title": "IRIS OUT / 米津玄師",
          "start": 695,
          "end": 1096,
          "en": {
            "title": "IRIS OUT / Kenshi Yonezu"
          }
        },
        {
          "key": "いけないボーダーライン",
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
          "key": "God knows...",
          "title": "God knows... / 涼宮ハルヒ(CV：平野綾)",
          "start": 944,
          "end": 1317,
          "en": {
            "title": "God knows... / Haruhi Suzumiya (CV: Aya Hirano)"
          }
        },
        {
          "key": "Snow halation",
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
          "key": "ノーダウト",
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
          "key": "IRIS OUT",
          "title": "IRIS OUT / 米津玄師",
          "start": 2672,
          "end": 2938,
          "en": {
            "title": "IRIS OUT / Kenshi Yonezu"
          }
        },
        {
          "key": "Catch the Moment",
          "title": "Catch the Moment / LiSA",
          "start": 2939,
          "end": 3274
        },
        {
          "key": "ブラック★ロックシューター",
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
          "key": "IRIS OUT",
          "title": "IRIS OUT / 米津玄師",
          "start": 1631,
          "end": 1891,
          "en": {
            "title": "IRIS OUT / Kenshi Yonezu"
          }
        },
        {
          "key": "Bad Apple!! feat. nomico",
          "title": "Bad Apple!! feat. nomico / Alstroemeria Records",
          "start": 1892,
          "end": 2161
        },
        {
          "key": "美少女無罪♡パイレーツ",
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
          "key": "KICK BACK",
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
          "key": "God knows...",
          "title": "God knows... / 涼宮ハルヒ(CV：平野綾)",
          "start": 855,
          "end": 1187,
          "en": {
            "title": "God knows... / Haruhi Suzumiya (CV: Aya Hirano)"
          }
        },
        {
          "key": "JANE DOE",
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
          "key": "Sincerely",
          "title": "Sincerely / TRUE",
          "start": 2947,
          "end": 3435
        },
        {
          "key": "ワールドイズマイン",
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
          "key": "ヒステリックナイトガール",
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
          "key": "Bunny Girl",
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
          "key": "ブラック★ロックシューター",
          "title": "ブラック★ロックシューター / ryo(supercell) feat. 初音ミク",
          "start": 272,
          "end": 644,
          "en": {
            "title": "Black★Rock Shooter / ryo(supercell) feat. Hatsune Miku"
          }
        },
        {
          "key": "JANE DOE",
          "title": "JANE DOE / 米津玄師 × 宇多田ヒカル",
          "start": 645,
          "end": 972,
          "en": {
            "title": "JANE DOE / Kenshi Yonezu × Hikaru Utada"
          }
        },
        {
          "key": "IRIS OUT",
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
          "key": "バレリーコ",
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
          "key": "サマータイムレコード",
          "title": "サマータイムレコード / じん feat. IA",
          "start": 2540,
          "end": 2984,
          "en": {
            "title": "Summer Time Record / Jin feat. IA"
          }
        },
        {
          "key": "ドライフラワー",
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
          "key": "One Last Kiss",
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
          "key": "IRIS OUT",
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
          "key": "モザイクロール",
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
          "key": "ボルテッカー",
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
          "key": "かまってちょーだい",
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
          "key": "Booo!",
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
          "key": "ワールドイズマイン",
          "title": "ワールドイズマイン / ryo",
          "start": 6660,
          "end": 7243,
          "en": {
            "title": "world is mine / ryo"
          }
        },
        {
          "key": "キュートな彼女",
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
          "key": "Bling‐Bang-Bang-Born",
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
          "key": "絶頂讃歌",
          "title": "絶頂讃歌 / 和ぬか",
          "start": 2763,
          "end": 3187,
          "en": {
            "title": "Climax Hymn / Wanuka"
          }
        },
        {
          "key": "One day",
          "title": "One day / The ROOTLESS",
          "start": 3188,
          "end": 3512
        },
        {
          "key": "恋愛サーキュレーション",
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
          "key": "シル・ヴ・プレジデント",
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
          "key": "チューリングラブ",
          "title": "チューリングラブ / ナナヲアカリ",
          "start": 5947,
          "end": 6308,
          "en": {
            "title": "Turing Love / Nanawo Akari"
          }
        },
        {
          "key": "Queen",
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
          "key": "恋愛サーキュレーション",
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
          "key": "YELL",
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
          "key": "CH4GE",
          "title": "CH4GE / Giga",
          "start": 12078,
          "end": 12157,
          "en": {
            "title": "CH4GE (bonus) / Giga"
          }
        },
        {
          "key": "絶頂讃歌",
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
    }
  ]
};
