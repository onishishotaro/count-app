import React, { useState } from "react";

const CountButton = (props) => {
  const [num, setNum] = useState(0);
  const onCountUp = () => {
    setNum(num + props.num);
  };
  return (
    <>
      <p>{num}</p>
      <button onClick={onCountUp}>{props.text}</button>
    </>
  );
};

export default CountButton;
