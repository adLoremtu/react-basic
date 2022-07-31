import React from "react";
import SampleButton from "../../ui/button/";

/**
 * 問題3:
 *   components/ui/button/index.tsxを呼び出し、要素を表示してください。
 *
 * 【ヒント】
 * コンポーネントファイルを使う際、2つの手順を踏む必要があります。
 *
 * 1. コンポーネントファイルを呼び出す
 * 2. 呼び出したコンポーネントを表示させる
 */

const No3 = () => {
  return (
    <>
      <h2>問題3:</h2>
      {/* === 問題3の解答  start  === */}
      <SampleButton />
      {/* === 問題3の解答  end  === */}
    </>
  );
};

export default No3;
