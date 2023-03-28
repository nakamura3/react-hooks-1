# TDOOアプリ作成
『基礎から学ぶ React/React Hooks 実践入門』

## step-1
create react app でプロジェクトを作成し、不要なファイルを削除する。
```
npx create-react-app todo-app
```
ローカル実行で確認。
```
npm start
```

## step-2
JSON Server を準備する
- db.json (サーバーデータ)

## step-3
モックサーバーと通信してTODOを取得する
node-fetch を準備する
- 更新 App.js (useEffect でデータを fetch)
