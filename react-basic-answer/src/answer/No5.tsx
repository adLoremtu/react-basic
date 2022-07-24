import React from "react";
import PropsTest from "../components/sample/PropsTest";

const No5 = () => {
  const name = "ボン";
  const age = 28;
  const isMen = true;

  return (
    <>
      <h2>
        問題5:components/sample/PropsTest.tsxを読み込み、パラメータを渡して要素を表示してください。
      </h2>
      {/* === 問題5の解答  start  === */}
      <PropsTest name={name} age={age} isMen={isMen} />
      {/* === 問題5の解答  end  === */}
    </>
  );
};

export default No5;
