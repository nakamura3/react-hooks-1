import { useState } from 'react';

const VALUES = [
    { id: 0, item: '赤'},
    { id: 1, item: '青'},
    { id: 2, item: '黄'}
];

const InputRadio = () => {
    const [checkedValue, setCheckedValue] = useState(VALUES[0].item);   // フォーム制御用

    const handleChange = e => setCheckedValue(e.target.value);         // フォーム制御

    return (
        <div>
            <h1>現在選択されている値：<b>{checkedValue}</b></h1>
            {
                VALUES.map(entry => (
                    <label key={entry.id} >
                        <input type="radio" value={entry.item}
                            onChange={handleChange}
                            checked={checkedValue === entry.item}
                        />
                        {entry.item}
                    </label>
                ))
            }
        </div>
    );
};

export default InputRadio;