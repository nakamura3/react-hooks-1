import { useContext } from 'react';
import { MyContext3 } from '../contexts/MyContext3';

const Third3 = () => {
    const { counter, increment} = useContext(MyContext3);

    return (
        <div>
            <h1>Third Component (3)</h1>
            <p>カウンターの値：{ counter}</p>
            <button onClick={increment}>＋１</button>
        </div>
    );
};

export default Third3;
