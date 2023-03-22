import { useState } from 'react';

const VALUES = [
    { id: 0, item: 'HTML'},
    { id: 1, item: 'CSS'},
    { id: 2, item: 'JavaScript'}
];

const InputSelectBox = () => {
    const [selectedValue, setSelectedValue] = useState(VALUES[0].item); // フォーム制御用

    const handleChange = e => setSelectedValue(e.target.value);         // フォーム制御

    return (
        <div>
            <h1>現在選択されている値：<b>{selectedValue}</b></h1>
            <select value={selectedValue} onChange={handleChange}>
                { VALUES.map(entry => (
                    <option value={entry.item} key={entry.id}>{entry.item}</option>
                ))}
            </select>
        </div>
    );
};

export default InputSelectBox;