import React from "react";

const No2 = () => {
  return (
    <>
      <h2>問題2: 下記要素にid, class, data属性を付与してください。</h2>
      <ul>
        <li>id1 → 文字色を#cc0に変更します。</li>
        <li>class1 → 幅を300px, 高さを200pxに変更します。</li>
        <li>data-1 → 背景色を#00cに変更します。</li>
      </ul>
      {/* === 問題2の解答  start  ===*/}
      <p id="id1" className="class1" data-1>
        問題2の解答反映要素
      </p>
      {/* === 問題2の解答  end  ===*/}
    </>
  );
};

export default No2;
