import React, { useState } from "react";
import StatusTestButton from "../components/sample/StatesTest_props";
import StatusTestButtonNoProps from "../components/sample/StatesTest_noprops";

const No6 = () => {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <>
      <h2>
        問題6: カウントアップのSPAをpropsのみ、statesのみで作成してみましょう。
      </h2>
      <p>propsのみ</p>
      {/* === 問題6の解答  start(props)  === */}
      <StatusTestButton count={count} onClick={addCount} />
      {/* === 問題6の解答  end(props)  === */}
      <p>statesのみ</p>
      {/* === 問題6の解答  start(states)  === */}
      <StatusTestButtonNoProps />
      {/* === 問題6の解答  end(states)  === */}
    </>
  );
};

export default No6;
