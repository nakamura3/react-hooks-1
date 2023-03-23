/**
 * CountUp コンポーネント
 * 
 * useEffect の依存配列の機能を確認する
 * 押されたボタンに対応する副作用のみが実行されることをコンソールで確認できる
 */
import { useState, useEffect } from 'react';

const CountUp = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    useEffect(() => {
        console.log('Effect1が実行された');
        return () => console.log('Effect1がクリーンアップされた');
    }, [count1]);
    useEffect(() => {
        console.log('Effect2が実行された');
        return () => console.log('Effect2がクリーンアップされた');
    }, [count2]);

    const countUp1 = () => setCount1(count1 + 1);
    const countUp2 = () => setCount2(count2 + 1);

    return (
        <div>
            <h1>カウンタ１：{count1}、カウンタ２：{count2}</h1>
            <button onClick={countUp1}>ボタン１</button>
            <button onClick={countUp2}>ボタン２</button>
        </div>
    );
};

export default CountUp;