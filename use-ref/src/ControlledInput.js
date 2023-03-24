/**
 * ControlledInput (制御) コンポーネント
 * 
 * input コンポーネントの状態を useState で扱う場合、値の更新時にレンダリングされる
 * ボタン押下で useState による状態更新時にレンダリングされる
 * ボタン押下で inputValue を更新しても input の value に指定していないと表示には反映されない
 * レンダリングの有無は console.log で確認
 */
import { useEffect, useState } from 'react';

const UnControlledInput = () => {
    const [text, setText] = useState('');
    const [inputValue, setInputValue] = useState('');
    useEffect(() => console.log('レンダリング'));   // 毎回レンダリング

    const handleChange = e => setInputValue(e.target.value);    // レンダリング
    const handleClick = () => setText(inputValue);              // レンダリング
    const reset = () => setInputValue('');                      // レンダリング

    return (
        <div>
            <h1>テキスト：{text}</h1>
            <input onChange={handleChange} type="text" />
            { /* <input onChange={handleChange} value={inputValue} type="text" /> */ }
            <button onClick={handleClick}>テキスト設定</button>
            <button onClick={reset}>クリア</button>
        </div>
    );
};

export default UnControlledInput;