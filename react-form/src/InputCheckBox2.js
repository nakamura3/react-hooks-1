import { useState } from 'react';

const VALUES = [
    { id: 0, item: 'マウス'},
    { id: 1, item: 'モニター'},
    { id: 2, item: 'キーボード'}
];

const InputCheckBox2 = () => {
    const [checkedValues, setCheckedValues] = useState(     // フォーム制御用 (オブジェクトで管理)
        VALUES.reduce((accum, current) => {
            accum[current.item] = false;
            return accum
        }, {})
    );

    const handleChange = e => {                             // フォーム制御
        const key = e.target.value;
        const currentValue = e.target.checked;
        setCheckedValues({ ...checkedValues, [key]: currentValue });
    };

    return (
        <div>
            <h1>現在選択されている値：<b>{
                Object.entries(checkedValues)
                    .filter(([key, value]) => value)
                    .map(([key, value]) => key)
                    .join(', ')}</b></h1>
            {
                VALUES.map(entry => (
                    <label key={entry.id} >
                        <input type="checkbox" value={entry.item}
                            onChange={handleChange}
                            checked={checkedValues[entry.item]}
                        />
                        {entry.item}
                    </label>
                ))
            }
        </div>
    );
};

export default InputCheckBox2;