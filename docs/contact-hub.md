# お問い合わせ集結ハブ仕様（MilliDex／全サービス共通）

作成日: 2026-09-06 / 実装: `scripts/contact.js`（送信基盤）＋2系統モーダル

## 1. 概要

- 本ポータルを窓口に、2系統のお問い合わせを受け付ける
  - ① 全サービスへのお問い合わせ：`Milli Orbis／Milli Unishare／Milli Games／その他`
  - ② MilliDexへのお問い合わせ：`有志マップ／過去グッズ申請`
- 投稿は共有 Firebase（millipro-shared）の `contactQueue` に `status:pending` で蓄積。
  運営がコンソールで精査し、`data/sightings.json`・グッズデータへ手動反映する（既存PRレビュー運用と接続）。
- ただし `target:map`（有志マップ目撃情報）は **承認なし即時反映**：公開ノード `sightingsLive` へ直接記録され、`goods/map.html` が購読して即表示する。連絡先・uid・UAは送らない。同時に管理用の控えを `mapInbox` へ残す（通常問い合わせの `contactQueue` とは分離）。
- 未ログイン投稿を許可（honeypot＋1分1件制限）。荒らし時はログイン必須へ切替可能な作り。

## 2. データ仕様 `contactQueue/{pushId}`

| field | 型 | 必須 | 内容 |
|---|---|---|---|
| `entry` | string | ○ | `service`（①）／`millidex`（②） |
| `target` | string | ○ | ①：`orbis`／`unishare`／`games`／`other`。②：`map`／`goods` |
| `kind` | string | △ | ①のみ種別：`request`（追加依頼）／`bug`（バグ報告）／`remove`（削除依頼）／`other`（その他）。未指定時は `other` |
| `email` | string | ①のみ○ | ①のみ必須（迷惑行為防止）。形式 `*@*.*`・5〜200字 |
| `serviceNote` | string | △ | `target:other` 時のサイト名等（最大100字） |
| `subject` | string | △ | ①のみ件名（最大100字） |
| `body` | string | ○（mapのみ任意） | 本文（最大2000字。②map/goodsでは補足・コメント欄。mapは空可） |
| `fields` | object | ○ | 種別固有項目（下表。値は文字列・最大200字/項目） |
| `contact` | string | — | 連絡先（最大200字）。①ではXアカウント、②ではX IDやメール等の任意記入 |
| `uid` | string/null | ○ | Firebase uid（未ログインは `null`。匿名表示の運用） |
| `status` | string | ○ | `pending`（運営が `approved`／`rejected` に更新） |
| `createdAt` | number | ○ | `Date.now()` |
| `ua` | string | — | UA先頭120字（任意・運用参考） |

`fields`（種別固有・すべて文字列）：

- `target:map`：`shop`（店舗名・必須）／`pref`（都道府県・必須）／`date`（目撃日・任意）／`item`（グッズ名・必須）／`member`（タレントID・任意）
- `target:goods`：`item`（グッズ名・必須）／`url`／`image`／`price`／`period`（販売時期・いずれも任意）
- `target:orbis|unishare|games|other`：`fields:{}`（本文のみ）

## 2b. データ仕様 `sightingsLive/{pushId}`（有志マップ即時反映・公開読取）

| field | 型 | 必須 | 内容 |
|---|---|---|---|
| `entry` | string | ○ | `millidex` 固定 |
| `target` | string | ○ | `map` 固定 |
| `place` | string | ○ | 店舗名（1〜200字） |
| `prefecture` | string | ○ | 都道府県（1〜10字） |
| `date` | string/null | — | 目撃日 |
| `item` | string | ○ | グッズ名（1〜200字） |
| `memberId` | string/null | — | タレントID |
| `body` | string | — | 補足（2000字以内） |
| `lat`/`lng` | number | ○ | 緯度経度（送信時にジオコーディング、失敗時は県庁所在地。運営がコンソールで修正可） |
| `createdAt` | number | ○ | `Date.now()` |

※ `contact`／`email`／`uid` の保持をルールで禁止（公開ノードのため）。

## 2c. データ仕様 `mapInbox/{pushId}`（有志マップの控え・管理者のみ閲覧）

| field | 型 | 必須 | 内容 |
|---|---|---|---|
| `entry` | string | ○ | `millidex` 固定 |
| `target` | string | ○ | `map` 固定 |
| `fields` | object | ○ | `shop`（店舗名・必須）／`pref`（都道府県・必須）／`date`（任意）／`item`（グッズ名・必須）／`member`（任意） |
| `body` | string | — | 補足（空なら省略。2000字以内） |
| `uid` | string | — | 投稿者のuidまたは連携ID（匿名運用の参考） |
| `status` | string | ○ | `pending`（対応済みは `approved`／`rejected` に更新） |
| `createdAt` | number | ○ | `Date.now()`（`sightingsLive` 側と同一値） |

※ 通常問い合わせの `contactQueue` とは別ノードにして混ざらないようにしている。

## 3. 貼付用 Realtime Database ルール（コンソール作業）

既存ルールに以下を**追記**して公開する。`contactQueue` 以外には触らないこと。

```json
"contactQueue": {
  "$id": {
    ".write": "newData.exists() && !data.exists()",
    ".read": "false",
    ".validate": "newData.hasChildren(['entry','target','body','fields','status','createdAt']) && newData.child('status').val() === 'pending' && (newData.child('entry').val() === 'service' || newData.child('entry').val() === 'millidex') && (newData.child('target').val() === 'orbis' || newData.child('target').val() === 'unishare' || newData.child('target').val() === 'games' || newData.child('target').val() === 'other' || newData.child('target').val() === 'map' || newData.child('target').val() === 'goods') && newData.child('body').isString() && newData.child('body').val().length > 0 && newData.child('body').val().length <= 2000 && (!newData.hasChild('kind') || newData.child('kind').val() === 'request' || newData.child('kind').val() === 'bug' || newData.child('kind').val() === 'remove' || newData.child('kind').val() === 'other') && (newData.child('entry').val() !== 'service' || (newData.child('email').isString() && newData.child('email').val().length >= 5 && newData.child('email').val().length <= 200 && newData.child('email').val().matches(/^[^@]+@[^@]+[.][^@]+$/)))"
  }
}
```

※ `.read:false` のため一覧閲覧・承認操作は Firebase コンソール（管理者権限）で行う。
※ 未ログイン許可のため `.write` は認証不問。荒らし発生時は `"auth != null &&"` を先頭に付与してログイン必須化する。

```json
"sightingsLive": {
  ".read": true,
  "$id": {
    ".read": true,
    ".write": "!data.exists()",
    ".validate": "newData.hasChildren(['entry','target','place','prefecture','item','lat','lng','createdAt']) && newData.child('entry').val() === 'millidex' && newData.child('target').val() === 'map' && newData.child('place').isString() && newData.child('place').val().length >= 1 && newData.child('place').val().length <= 200 && newData.child('prefecture').isString() && newData.child('prefecture').val().length >= 1 && newData.child('prefecture').val().length <= 10 && newData.child('item').isString() && newData.child('item').val().length >= 1 && newData.child('item').val().length <= 200 && newData.child('lat').isNumber() && newData.child('lat').val() >= -90 && newData.child('lat').val() <= 90 && newData.child('lng').isNumber() && newData.child('lng').val() >= -180 && newData.child('lng').val() <= 180 && newData.child('createdAt').isNumber() && (!newData.hasChild('body') || (newData.child('body').isString() && newData.child('body').val().length <= 2000)) && !newData.hasChild('contact') && !newData.hasChild('email') && !newData.hasChild('uid')"
  }
}
```

※ 親レベルの `.read: true` が必須。子（`$id`）だけに書いても一覧購読は権限エラーになる（2026-09の不具合原因）。
※ `sightingsLive` は公開読取のため `contact`／`email`／`uid` の保持を禁止している。

```json
"mapInbox": {
  "$msg": {
    ".write": "!data.exists()",
    ".validate": "newData.hasChildren(['entry','target','fields','status','createdAt']) && newData.child('entry').val() === 'millidex' && newData.child('target').val() === 'map' && newData.child('status').val() === 'pending' && newData.child('createdAt').isNumber() && newData.child('fields/shop').isString() && newData.child('fields/shop').val().length >= 1 && newData.child('fields/shop').val().length <= 200 && newData.child('fields/pref').isString() && newData.child('fields/pref').val().length >= 1 && newData.child('fields/pref').val().length <= 10 && newData.child('fields/item').isString() && newData.child('fields/item').val().length >= 1 && newData.child('fields/item').val().length <= 200 && (!newData.hasChild('body') || (newData.child('body').isString() && newData.child('body').val().length <= 2000)) && (!newData.hasChild('uid') || newData.child('uid').isString())"
  }
}
```

※ `.read` なし（一覧閲覧・承認操作は Firebase コンソールで行う）。荒らし発生時は `.write` に `"auth != null &&"` を付与してログイン必須化する。

## 4. 運用手順

1. Firebaseコンソール → Realtime Database → `contactQueue` で `status:pending` を確認（通常問い合わせ）
2. 有志マップは `mapInbox` で `status:pending` を確認（`contactQueue` には来ない）
3. 内容精査：
   - `target:map` → **即時反映済み**（`sightingsLive`）。ピンの位置ずれはコンソールで該当レコードの `lat`／`lng` を修正。不正投稿は `sightingsLive` と `mapInbox` の両方からレコードごと削除
   - `target:goods` → 妥当ならグッズデータへ追記 → PR
   - `target:orbis|unishare|games|other` → 対応（返信が必要なら `contact` 欄宛て）
3. 対応済みレコードの `status` を `approved`／`rejected` に更新
4. 迷惑投稿が続く場合は rules に `auth != null &&` を追加（本書§3参照）

## 5. 他サイト向け申送り（集結の契約）

- 各サイト（Milli Unishare／Milli Games 等）は同一PJの `contactQueue` へ `push()` するだけでよい
- 必須フィールドは本書§2の表通り。`entry` は各サイト任意の値でよいが `target` は上記 enum を使うこと（`other`＋`serviceNote` で拡張可）
- 承認・表示は本ポータル側に集約する。各サイト側に閲覧UIは作らない

## 6. 実装メモ（本リポジトリ）

- `scripts/contact.js`：`pushContact(entry, target, data)`／honeypot（`company` 欄）／1分1件制限（localStorage `milli-contact-last`）／未設定・rules未適用時の画面案内
- 下書き自動保存：入力のたびに `milli-contact-draft-{service,millidex}` へ保存。再描画・誤クローズ・リロードでも復元、送信成功で削除
- `target:map` は `sightingsLive` へ公開レコードをpush（送信時にNominatimでジオコーディング、失敗時は県庁所在地フォールバック）＋ `mapInbox` へ控えを二重保存（`sightingsLive` 優先・控え失敗は警告のみ）。連絡先欄なし。補足コメントは任意（空なら `body` を送らない）
- `goods/map.html`：`sightings.json`（既存承認分）＋`sightingsLive`（購読・即時反映）をマージ表示。全出力項目をエスケープ（XSS対策）
- モーダルは `acct-overlay`／`acct-box` 意匠を流用し `scripts/contact.js` 内で生成（各頁HTMLは触らない）
- 専用ページ `contact.html`：`ContactHub.renderPageForm()` でインライン描画（`?entry=`・`?target=` で初期選択可）。他画面からの導線は未設置
- テスト用直リンク：`?contact=service`／`millidex-map`／`millidex-goods`（`openFromUrl` が自動オープン。UI導線は出さない）
- 導線：全頁フッター＋全頁ドロワーへ2リンク注入（`script.js boot` から `ContactHub.inject()` 呼び出し）。`goods/map.html` の提供リンク・`goods/archive.html` の追加依頼ボタンは各専用フォームへ直結
