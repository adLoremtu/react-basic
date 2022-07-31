import React, { useState } from "react";
import SampleProps from "../../ui/countup/props";
import SampleStates from "../../ui/countup/state";

/**
 * 問題6:
 * カウントアップ機能を作成してみましょう
 * 今回は試しとして、下記2パターンで作成してみましょう。
 *
 * - components/ui/countup/state.tsx
 *   - コンポーネントファイル内でstateを設定する
 *   - 本ファイルで呼び出す際は対象ファイルの要素をそのまま呼び出す
 * - components/ui/countup/props.tsx
 *   - 本ファイル内でstatesを設定する
 *   - 呼び出す際はpropsで設定したstateを渡す
 *
 * 【ヒント】
 * props: 関数の引数のように呼び出し元からパラメータを受け取る
 * states: 変数のように各コンポーネント内の状態を管理する
 */

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
