# SoftFactory ホームページ

屋号「SoftFactory」のサービス一覧ポータルサイト。

## 構成

```
hp/
├── index.html        # メインページ
├── css/
│   └── style.css     # スタイル
├── js/
│   └── main.js       # サービスデータ & レンダリング
├── main_image.png    # 背景画像
├── main_icon.png     # にゃんこGPTアイコン
└── favicon.png       # かっこいいキーボアイコン
```

## サービス編集

`js/main.js` の `services` 配列を編集:

```js
const services = [
  {
    name: 'サービス名',
    description: '説明文',
    url: 'https://example.com',
    status: 'live',        // 'live' or 'coming-soon'
    link_text: 'Visit →',
    icon: 'icon.png'       // 空文字でアイコンなし
  },
  // ...
];
```

## ローカル確認

```bash
open /Users/p/workspace/p/hp/index.html
```

## デプロイ

- リポジトリ: https://github.com/vKx6/hp
- Netlifyで連携してデプロイ
- ビルドコマンド不要（静的HTML）

## 現在のサービス

| 名前 | 状態 | URL |
|------|------|-----|
| にゃんこGPT | Live | https://line.me/R/ti/p/@190ghxig |
| かっこいいキーボ | Live | https://cool-keyboards.com/ |
| New Service | Coming Soon | - |
| New Service | Coming Soon | - |

## 変更履歴

- 2026-01: 初期構築
