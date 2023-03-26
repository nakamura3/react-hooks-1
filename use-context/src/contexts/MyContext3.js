/**
 * MyProvider3 - サンプル Context3 のコンテキスト定義とプロバイダーコンポーネント定義
 */
import { createContext, useState } from 'react';

// コンテキスト作成
export const MyContext3 = createContext();

// プロバイダー コンテキスト
const MyProvider3 = ({ children }) => {
    const [counter, setCounter] = useState(0);
    
    const api = {
        counter,
        increment: () => setCounter(c => c + 1),
    };

    return (
        <MyContext3.Provider value={api}>
            { children }
        </MyContext3.Provider>
    );
};

export default MyProvider3;