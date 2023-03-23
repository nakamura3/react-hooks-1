/**
 * AutoCounter コンポーネント
 * 
 * useEffect のクリーンアップ機能を確認する
 * カウンタのマウント、アンマウントで副作用がどのように呼ばれるかをみる
 */
import { useState, useEffect } from 'react';

const INITIAL_COUNT = 0;

const Timer = () => {
    const [count, setCount] = useState(INITIAL_COUNT);
    useEffect(() => {
        console.log('Timerが実行された');
        const timer = setInterval(() => setCount(count => count + 1), 1000);
        return () => {
            console.log('Timerがクリーンアップされた');
            clearInterval(timer);
        };
    }, []); // マウント時のみ実行

    return (
        <h1>カウンタ：{count}</h1>
    );
};

const AutoCounter = () => {
    const [display, setDisplay] = useState(false);

    const toggle = () => setDisplay(!display);

    return (
        <div>
            <button onClick={toggle}>{ display ? 'タイマー非表示' : 'タイマー表示' }</button>
            { display && <Timer /> }
        </div>
    );
};

export default AutoCounter;