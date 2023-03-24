/**
 * UnControlledInput (非制御) コンポーネント
 * 
 * input コンポーネントを useRef の参照で扱う場合、値の更新時にレンダリングされない
 * ボタン押下で useState による状態更新時にレンダリングされる
 * ボタン押下でも useRef の参照先の値を更新するときはレンダリングされない
 * レンダリングの有無は console.log で確認
 */
import { useEffect, useRef, useState } from 'react';

const UnControlledInput = () => {
    const [text, setText] = useState('');
    const inputRef = useRef(null);
    useEffect(() => console.log('レンダリング'));   // 毎回レンダリング

    const handleClick = () => setText(inputRef.current.value);  // レンダリング
    const reset = () => { inputRef.current.value = '' };        // レンダリングなし

    return (
        <div>
            <h1>テキスト：{text}</h1>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>テキスト設定</button>
            <button onClick={reset}>クリア</button>
        </div>
    );
};

export default UnControlledInput;