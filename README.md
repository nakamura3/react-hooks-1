# React Hooks 学習メモ
「基礎から学ぶ React/React Hooks 実践入門」

## react-html
Section 17, HTML ファイルで React を試してみる

## react-form
Section 24, 制御フォーム
- InputText (テキスト入力フォーム)
- InputSelectBox (セレクトボックス)
- InputRadio (ラジオボタン)
- InputCheckBox (チェックボックス; 選択値配列で管理)
- InputCheckBox2 (チェックボックス; 状態オブジェクトで管理)

## use-effect
Section 27, useEffect フック
- CountUp (依存配列の機能を確認)
- AutoCounter (クリーンアップの確認)

## use-callback
Section 28, React.memo, useCallback, useMemo
- Counter1 (React.memo のサンプル)
- Counter2 (useCallback のサンプル)
- Counter3 (useMemo のサンプル)

## use-ref
Section 29, useRef
- FocusInput (useRef で DOM 要素を参照し操作)
- UncontrolledInput (非制御インプット コンポーネント)
- ControlledInput (制御インプット コンポーネント)

## use-context
Section 30, useContext, createContext
- Context1 (シンプルなサンプル)
- Context2 (複数ファイルのサンプル)
  - MyContext2 (コンテキスト定義 / プロバイダー定義)
  - First2 (中間コンポーネント)
  - Second2 (中間コンポーネント)
  - Third2 (コンシューマーコンポーネント)
- Context3 (コンテキスト データの参照 / 操作を伴うサンプル)
  - MyContext3 (コンテキスト定義 / プロバイダー定義)
  - First3 (中間コンポーネント)
  - Second3 (中間コンポーネント)
  - Third3 (コンシューマーコンポーネント)

## use-counter (カスタム フック)
Section31, ロジックをカスタムフックに分離
- hooks (カスタムフックの定義)
- CounterA (表示コンポーネントA)
- CounterB (表示コンポーネントB)
