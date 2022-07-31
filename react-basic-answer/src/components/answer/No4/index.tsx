import React from "react";
import SampleLink from "../../ui/link/";

/**
 * 問題4:
 * components/ui/link/index.tsxを編集し、要素を表示してください。
 *
 * 【ヒント】
 * 実装の流れとしては下記順番で組むとわかりやすいです。
 *
 * 1. components/ui/link/index.tsxを編集
 * 2. コンポーネントファイルを呼び出す
 * 3. 呼び出したコンポーネントを表示させる
 */

const No4 = () => {
  return (
    <>
      <h2>問題4:</h2>
      {/* === 問題4の解答  start  === */}
      <SampleLink />
      {/* === 問題4の解答  end  === */}
    </>
  );
};

export default No4;
