import React from "react";

/**
 * 問題2:
 *   下記解答エリア内の要素にid, class, data属性を付与してください。
 *   正しく付与できるとcssが適用されます。
 *
 *   - id1
 *     - 文字色を#cc0に変更します。（color: #cc0）
 *   - class1
 *     - 背景色を#000に変更します。（background: #000）
 *   - data-1
 *     - 幅を300pxに変更します。（width: 300px）
 *   - data-2="data2"
 *     - 高さを200pxに変更します。（height: 200px）
 *
 * 【ヒント】
 * classだけ注意点があります。
 */

const No2 = () => {
  return (
    <>
      <h2>問題2:</h2>
      {/* === 問題2の解答エリア  start  ===*/}
      <p id="id1" className="class1" data-1 data-2="data2">
        問題2の解答反映要素
      </p>
      {/* === 問題2の解答エリア  end  ===*/}
    </>
  );
};

export default No2;
