/**
 * hooks.js - ガスタム フックの定義
 * 
 * Counter コンポーネントのロジックを分離してカスタムフックとする
 */
import { useState } from 'react';

export const useCounter = (initialCount) => {
    const [counter, setCounter] = useState(initialCount);

    const countAdd = () => setCounter(c => c + 1);
    const countSub = () => setCounter(c => c - 1);
    const countReset = () => setCounter(initialCount);

    return { count: counter, countAdd, countSub, countReset };
};
