import React, { useState } from "react";
import LifeCycle from "../../ui/button/useEffect";

/**
 * 問題7:
 * 下記ライフサイクル時をconsoleで検知してみましょう
 *
 * 【やること】
 * <LifeCycle />コンポーネントの表示フラグとなっている`display`を紐づける
 *   →現在だと表示フラグのdisplayがと紐づいていないので切り替えボタンを押しても表示非表示が切り替わりません。
 *   →これをボタン押下で表示非表示が切り替わるようにしてみましょう。
 *
 * 【ヒント】
 * stateとコンポーネントを紐づけて表示出し分けをしたい場合は下記のようにすると紐づけることができます。
 * {対象state && 対象コンポーネント}
 */

const No7 = () => {
  const [display, setDisplay] = useState(true);
  const toggleDisplayCounter = () => {
    setDisplay((prevState) => !prevState);
  };

  return (
    <>
      <h2>問題7:</h2>
      <button onClick={toggleDisplayCounter}>ボタン要素表示切り替え</button>
      {/* === 問題7の解答エリア  start  === */}
      <LifeCycle />
      {/* === 問題7の解答エリア  end  === */}
    </>
  );
};

export default No7;
