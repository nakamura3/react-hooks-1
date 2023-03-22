import { useState } from 'react';

const InputText = () => {
    const [inputTextValue, setInputTextValue] = useState('');   // フォーム制御用
    const [text, setText] = useState('JavaScript');             // コンポーネント状態

    const handleChange = e => setInputTextValue(e.target.value);    // フォーム制御
    const handleClick = () => {                                     // コンポーネント状態更新
        setText(inputTextValue);
        setInputTextValue('');
    };

    return (
        <div>
            <h1>I love {text}!!</h1>
            <input type="text" value={inputTextValue} onChange={handleChange} />
            <input type="button" value="入力" onClick={handleClick} />
        </div>
    );
};

export default InputText;