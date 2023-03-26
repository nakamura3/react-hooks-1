/**
 * Context1 - useContext を使うシンプルなサンプル
 */
import { createContext, useContext } from 'react';

// コンテキスト作成
const MyContext = createContext();

// コンシューマ コンポーネント作成
const MyConsumer = () => {
    const message = useContext(MyContext);
    return (<p>{message}</p>);
}

// プロバイダーでラップ
const Context1 = () => {
    const message = 'コンテキストのメッセージ';
    return (
        <MyContext.Provider value={message}>
            <MyConsumer />
        </MyContext.Provider>
    );
};

export default Context1;