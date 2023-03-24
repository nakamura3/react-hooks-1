/**
 * FocusInput コンポーネント
 * 
 * useRef で input DOM 要素を参照し、ボタン押下でフォーカスさせる
 */
import { useRef } from 'react';

const FocusInput = () => {
    const inputRef = useRef(null);  // 初期値は null、マウント時に current プロパティに設定される

    const handleClick = () => inputRef.current.focus();

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>入力エリアをフォーカス</button>
        </div>
    );
};

export default FocusInput;