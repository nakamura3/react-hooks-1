/**
 * MyProvider2 - サンプル Context2 のコンテキスト定義とプロバイダーコンポーネント定義
 */
import { createContext } from 'react';

// コンテキスト作成
export const MyContext2 = createContext();

// プロバイダー コンテキスト
const MyProvider2 = ({ children }) => {
    const message = 'コンテキストのメッセージ2';
    return (
        <MyContext2.Provider value={message}>
            { children }
        </MyContext2.Provider>
    );
};

export default MyProvider2;