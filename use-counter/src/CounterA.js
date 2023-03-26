/**
 * CounterA コンポーネント
 * 
 * ロジックはカスタムフックに分離。
 */
import CounterText from './CounterText';
import { useCounter } from './hooks';

const CounterA = () => {
    const { count, countAdd, countSub, countReset } = useCounter(0);
    return (
        <div>
            <h1>カウンタA</h1>
            <CounterText count={count} />
            <button onClick={countAdd}>ボタン +１</button>
            <button onClick={countSub}>ボタン -１</button>
            <button onClick={countReset}>リセット</button>
        </div>
    );
};

export default CounterA;