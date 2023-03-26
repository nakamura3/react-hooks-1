/**
 * CounterText コンポーネント
 * 
 * Counter コンポーネントの表示部分
 */

const CounterText = ({ count }) => {
    return (
        <>
            <p>現在のカウント数：<b>{count}</b></p>
        </>
    );
};

export default CounterText;