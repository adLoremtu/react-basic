import React from "react";
import SampleList from "../../ui/list/";

const No5 = () => {
  const name = "ボン";
  const age = 28;
  const isMen = true;

  return (
    <>
      <h2>問題5:</h2>
      {/* === 問題5の解答  start  === */}
      <SampleList name={name} age={age} isMen={isMen} />
      {/* === 問題5の解答  end  === */}
    </>
  );
};

export default No5;
