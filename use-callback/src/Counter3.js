// useMemo のサンプル
//
// useMemo を使うことによって、counterA のみの更新時は CounterB の square 関数は実行しない。
//
import React, { useMemo, useState } from 'react';

// square 関数 (useMemo の対象)
const square = (counter) => {
  console.log(`${counter} の二乗を計算中!`);
  return counter * counter;
}

// Counter コンポーネント
const Counter = () => {
  const [counterA, setCounterA] = useState(1);
  const [counterB, setCounterB] = useState(1);
  const squareA = useMemo(() => square(counterA), [counterA]);
  const squareB = useMemo(() => square(counterB), [counterB]);
  // const squareA = square(counterA);
  // const squareB = square(counterB);

  const incrA = () => setCounterA(counterA + 1);
  const incrB = () => setCounterB(counterB + 1);

  return (
    <div>
      <p>A ボタン {counterA} の二乗は {squareA}</p>
      <p>B ボタン {counterB} の二乗は {squareB}</p>
      <button onClick={incrA}>A ボタン</button>
      <button onClick={incrB}>B ボタン</button>
    </div>
  )
}

export default Counter;
