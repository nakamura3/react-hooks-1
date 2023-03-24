// useCallback のサンプル
//
// useCallback を使うことによって、counterA のみの更新時は Button の B の方は更新しない。
//
import React, { useCallback, useState } from 'react';

// Button コンポーネント (memo化済み)
//   text: タイトル
//   onClick: コールバック関数
const Button = React.memo(({ text, onClick}) => {
    console.log(`${text}がクリックされた!`);
  return <button onClick={onClick}>{text}</button>
//};
});

// Counter コンポーネント
const Counter = () => {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const incrA = useCallback(() => setCounterA(counterA + 1), [counterA]);
  const incrB = useCallback(() => setCounterB(counterB + 1), [counterB]);
//   const incrA = () => setCounterA(counterA + 1);
//   const incrB = () => setCounterB(counterB + 1);

  return (
    <div>
      <p>A ボタン {counterA}</p>
      <p>B ボタン {counterB}</p>
      <Button text="A ボタン" onClick={incrA} />
      <Button text="B ボタン" onClick={incrB} />
    </div>
  )
}

export default Counter;

