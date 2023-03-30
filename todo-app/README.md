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

## step-4
TODO一覧を状態(完了/未完了)別に表示させる

## step-5
タイトルとTODOリストをコンポーネント化する

## step-6
モックサーバーと通信する todo.js を作成する
- todo.js

## step-7
ulid を準備する (一意のIDを生成する)
TODOを取得、追加、更新、削除するカスタムフックを作成する
- useTodo.js

## step-8
TODOをカスタムフックから取得する
- 更新 App.js (useTodoを使う)

## step-9
新規TODOの追加機能を実装する
テキストエリアは日制御コンポーネントとし useRef を使って値にアクセスする
- 更新 App.js (useRef, addTodo を使う)

## step-10
TODO追加フォームコンポーネントを作成する
- 更新 App.js (TodoAdd コンポーネントを分離)

## step-11
TODOリストのアイテムに設置したボタンの機能を実装する
- 更新 App.js (カスタムフックのロジックをボタンと紐付ける)

## step-12
コンポーネントごとに別ファイルに切り分ける
- 移動 apis/todo.js
- 移動 components/App.js
- 新規 components/TodoAdd.js
- 新規 components/TodoItem.js
- 新規 components/TodoList.js
- 新規 components/TodoTitle.js
- 移動 hooks/useTodo.js

## step-13
リファクタリング (handleAdd を TodoAdd へ移動)
- 更新 components/App.js
- 更新 components/TodoAdd.js

## step-14
Chakra UI で TODOアプリにデザインを組み込む
(Chakra v2 は React 18以降用)
Chakra UI を準備する
  @chakra-ui/react @emotion/react @emotion/styled framer-motion @chakra-ui/icons
- 新規 theme/theme.js (グローバルなテーマを設定する)
- 更新 index.js (ChakraProvider を設置)
