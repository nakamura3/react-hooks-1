import { useState } from 'react';

const VALUES = [
    { id: 0, item: 'マウス'},
    { id: 1, item: 'モニター'},
    { id: 2, item: 'キーボード'}
];

const InputCheckBox = () => {
    const [checkedValues, setCheckedValues] = useState([]); // フォーム制御用 (選択されている値で管理)

    const handleChange = e => {                             // フォーム制御
        if (checkedValues.includes(e.target.value)) {
            // 含まれているなら除外
            setCheckedValues(checkedValues.filter(value => value !== e.target.value));
        } else {
            // 含まれていないなら追加
            setCheckedValues([...checkedValues, e.target.value]);
        }
    };

    return (
        <div>
            <h1>現在選択されている値：<b>{checkedValues.join(', ')}</b></h1>
            {
                VALUES.map(entry => (
                    <label key={entry.id} >
                        <input type="checkbox" value={entry.item}
                            onChange={handleChange}
                            checked={checkedValues.includes(entry.item)}
                        />
                        {entry.item}
                    </label>
                ))
            }
        </div>
    );
};

export default InputCheckBox;