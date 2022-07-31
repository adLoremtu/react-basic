import React from "react";
import SampleList from "../../ui/list/";

/**
 * 問題5:
 * components/ui/list/index.tsxを呼び出し、要素を表示してください。・
 *
 * またその際、コンポーネントファイルに下記パラメータを送付するようにしてください。
 * - name: 自分の名前 or あだ名(string)
 * - age: 自分の年齢(number)
 * - isMen: 性別(boolean)
 *   - 男性の場合はtrue
 *   - 女性の場合はfalse
 */

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
