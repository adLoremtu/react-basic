import React, { useState } from "react";
import SampleProps from "../../ui/countup/props";
import SampleStates from "../../ui/countup/state";

const No6 = () => {
  // props.tsxに送付するstate, 更新処理を宣言
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <>
      <h2>問題6:</h2>
      {/* === 問題6の解答  start(state.tsx)  === */}
      <SampleStates />
      {/* === 問題6の解答  end(state.tsx)  === */}
      {/* === 問題6の解答  start(props.tsx)  === */}
      <SampleProps count={count} onClick={addCount} />
      {/* === 問題6の解答  end(props.tsx)  === */}
    </>
  );
};

export default No6;
