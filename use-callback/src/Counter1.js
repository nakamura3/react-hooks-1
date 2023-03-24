// React.memo のサンプル
//
// React.memo を使うことによって、counterA のみの更新時は CountResult の B の方は更新しない。
//
import React, { useState } from 'react';

// CountResult コンポーネント (memo化済み)
//   text: タイトル
//   countState: カウンタ状態
const CountResult = React.memo(({ text, countState}) => {
// const CountResult = ({ text, countState}) => {
    console.log(`${text}ボタンがクリックされた! (${countState})`);
  return (
    <p>
      {text}: {countState}
    </p>
  )
//};
});

// Counter コンポーネント
const Counter = () => {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const incrA = () => setCounterA(prevA => prevA + 1);
  const incrB = () => setCounterB(prevB => prevB + 1);

  return (
    <div>
      <CountResult text="Aボタン" countState={counterA} />
      <CountResult text="Bボタン" countState={counterB} />
      <button onClick={incrA}>Aボタン</button>
      <button onClick={incrB}>Bボタン</button>
    </div>
  )
}

export default Counter;
