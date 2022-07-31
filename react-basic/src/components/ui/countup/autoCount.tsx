import React, { useState } from "react";

/**
 * 問題8:
 * 1秒ごとに自動でカウントアップされる機能を作ってみましょう
 * その際下記機能を入れてみましょう
 *
 * - ボタンを押したときにカウントアップを止めたり動かしたりすることができる
 *
 * 【ヒント】
 * - カウントアップの開始・停止はunmount機能を活用するとうまくできます。
 *
 * 【大まかな流れ】
 * 1. まずは単純に初期表示時にカウントアップする処理を作ります。(mount)
 * 2. statusが切り替わった時に動かしたり止めたりしたいので、useEffectにてstatusを指定します。
 * 3. ボタンが押された時にカウントアップを止める処理を作ります。(unmount)
 * 4. statusがtrueは動かす、falseの時は止めるというように条件分岐を入れます。
 */

const AutoCounter = () => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(true);

  const toggleStatus = () => {
    setStatus((prevState) => !prevState);
  };

  //  === 問題8の解答エリア  start  ===
  //  === 問題8の解答エリア  end  ===

  return (
    <div>
      <p>現在のカウント数：{count}</p>
      <p>現在の状態：{status.toString()}</p>
      <button onClick={toggleStatus}>
        {status ? "auto stop" : "auto start"}
      </button>
    </div>
  );
};

export default AutoCounter;
