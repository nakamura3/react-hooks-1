import { useContext } from 'react';
import { MyContext2 } from '../contexts/MyContext2';

const Third2 = () => {
    const message = useContext(MyContext2);

    return (
        <div>
            <h1>Third Component (2)</h1>
            { message }
        </div>
    );
}

export default Third2;
