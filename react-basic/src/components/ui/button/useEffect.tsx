import React, { useState } from "react";

/**
 * 問題7:
 * 下記ライフサイクル時をconsoleで検知してみましょう
 *
 * - 毎回実行(mount, update)
 * - 初回のみ実行(mount)
 * - 特定のStateが更新された時のみ実行(update)
 *   - 対象1： hoge
 *   - 対象2: huga, piyo(いずれかが更新されたら検知できるようにしてみましょう)
 * - DOMが画面から削除された時のみ実行(unmount)
 *
 * 【出力するコンソール】
 * 例)
 * - mount, update: console.log("mount, update");
 * - mount: console.log("mount");
 * - update(hoge): console.log("update(hoge)");
 * - update(huga, piyo): console.log("update(hoge, huga");
 * - unmount: console.log("unmount");
 *
 * 【ヒント】
 * - タイミング調整の方法
 *   - useEffectの第2引数を調整することでライフサイクルのタイミングを調整できます。
 * - updateでどうしても初回描画時にライフサイクルが反応する
 *   - 残念ながらuseEffectのみだとupdateのみの検知というのができません。(描画がトリガーとなってしまう)
 *   - useRefを使用して初回(mount)だけconsoleを出力しないとするとupdateだけを検知することができそうです。
 */

const LifeCycle = () => {
  // state設定
  const [hoge, setHoge] = useState(true);
  const [huga, setHuga] = useState(true);
  const [piyo, setPiyo] = useState(true);

  // true, false切り替え処理
  const toggleHoge = () => {
    setHoge((prevState) => !prevState);
  };

  const toggleHuga = () => {
    setHuga((prevState) => !prevState);
  };

  const togglePiyo = () => {
    setPiyo((prevState) => !prevState);
  };

  // === 問題7の解答エリア  start  ===
  // === 問題7の解答エリア  end  ===

  return (
    <>
      <div>
        <p>hogeの状態: {hoge.toString()}</p>
        <button onClick={toggleHoge}>hoge: 状態切り替え</button>
      </div>
      <div>
        <p>hugaの状態: {huga.toString()}</p>
        <button onClick={toggleHuga}>huga: 状態切り替え</button>
      </div>
      <div>
        <p>piyoの状態: {piyo.toString()}</p>
        <button onClick={togglePiyo}>piyo: 状態切り替え</button>
      </div>
    </>
  );
};

export default LifeCycle;
