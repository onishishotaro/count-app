import React, { useState } from "react";

const CountButton = (props) => {
  const [num, setNum] = useState(0);
  const onCountUp = () => {
    setNum(num + props.num);
  };
  return (
    <>
      <div className="count_box" style={{ marginRight: "20px" }}>
        <p style={{ fontSize: "20px" }}>
          Count<span style={{ fontSize: "24px" }}>{num}</span>
        </p>
        <button
          className="ui button blue"
          style={{ width: "100%" }}
          onClick={onCountUp}
        >
          {props.text}
        </button>
      </div>
    </>
  );
};

export default CountButton;
