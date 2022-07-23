import React from "react";
import "./App.scss";

const App = () => {
  return (
    <main className="main">
      <h1 className="App">Reactの基礎振り返り勉強会</h1>
      <div className="pl20">
        <h2>問題1: あなたの名前を下に出力してください。</h2>
        {/* === 問題1の解答エリア  start  ===*/}
        {/* === 問題1の解答エリア  end  ===*/}
        <h2>問題2: 下記要素にid, class, data属性を付与してください。</h2>
        <ul>
          <li>id1 → 文字色を#cc0に変更します。</li>
          <li>class1 → 幅を300px, 高さを200pxに変更します。</li>
          <li>data-1 → 背景色を#00cに変更します。</li>
        </ul>
        {/* === 問題2の解答エリア  start  ===*/}
        <p>問題2の解答反映要素</p>
        {/* === 問題2の解答エリア  end  ===*/}
        <h2>
          問題3:
          components/sample/Button.tsxを呼び出し、要素を表示してください。
        </h2>
        {/* === 問題3の解答エリア  start  === */}
        {/* === 問題3の解答エリア  end  === */}
        <h2>
          問題4:
          components/sample/Link.tsxを編集して呼び出し、要素を表示してください。
        </h2>
        {/* === 問題4の解答エリア  start  === */}
        {/* === 問題4の解答エリア  end  === */}
      </div>
    </main>
  );
};

export default App;
