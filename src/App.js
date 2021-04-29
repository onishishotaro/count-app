import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const onCountUp = () => {
    setNum(num + 1);
  };
  const onCountDown = () => {
    setNum(num - 1);
  };

  return (
    <>
      <h1>カウントアプリ</h1>
      <p>{num}</p>
      <button onClick={onCountUp}>+1</button>
      <button onClick={onCountDown}>-1</button>
    </>
  );
};

export default App;
