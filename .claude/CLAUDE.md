# SoftFactory HP

## 概要

屋号「SoftFactory」のサービス一覧ポータルサイト（静的HTML）。
Netlifyにデプロイ予定。

## 技術スタック

- HTML/CSS/JS（バニラ、フレームワークなし）
- 静的サイト（ビルド不要）

## ファイル構成

- `index.html` - メインページ
- `css/style.css` - スタイル（ダークテーマ、背景画像あり）
- `js/main.js` - サービスデータ配列 & DOM レンダリング

## サービス編集方法

`js/main.js` の `services` 配列を編集する。CSVは使わない（ローカルでfetchが動かないため）。

```js
{
  name: 'サービス名',
  description: '説明',
  url: 'URL',
  status: 'live' | 'coming-soon',
  link_text: 'リンクテキスト',
  icon: 'ファイル名.png'  // ルート直下に配置
}
```

## 画像

- `main_image.png` - 背景画像（猫とロボット）
- `main_icon.png` - にゃんこGPTアイコン
- `favicon.png` - かっこいいキーボアイコン

## 現在のサービス

1. **にゃんこGPT** - LINE公式アカウント（にゃんことチャット）
2. **かっこいいキーボ** - キーボード専門の情報検索サイト
3. New Service - 準備中
4. New Service - 準備中

## デプロイ

- GitHub: https://github.com/vKx6/hp
- Netlify連携でmainブランチを自動デプロイ

## コーディング規約

- 日本語コメント可
- シンプルに保つ（過度な抽象化不要）
