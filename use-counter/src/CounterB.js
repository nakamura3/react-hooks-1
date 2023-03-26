/**
 * CounterB コンポーネント
 * 
 * ロジックはカスタムフックに分離。
 */
import CounterText from './CounterText';
import { useCounter } from './hooks';

const CounterB = () => {
    const { count, countAdd, countSub, countReset } = useCounter(0);
    return (
        <div>
            <h1>カウンタB</h1>
            <CounterText count={count} />
            <button onClick={countAdd}>+１</button>
            <button onClick={countSub}>-１</button>
            <button onClick={countReset}>０</button>
        </div>
    );
};

export default CounterB;