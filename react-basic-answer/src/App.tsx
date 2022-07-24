import React, { useState } from "react";
import "./App.scss";
import SampleButton from "./components/sample/Button";
import SampleLink from "./components/sample/Link";
import PropsTest from "./components/sample/PropsTest";
import StatusTestButton from "./components/sample/StatesTest_props";
import StatusTestButtonNoProps from "./components/sample/StatesTest_noprops";

const App = () => {
  const name = "ボン";
  const age = 28;
  const isMen = true;

  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <main className="main">
      <h1 className="App">Reactの基礎振り返り勉強会</h1>
      <div className="pl20">
        <h2>問題1: あなたの名前を下に出力してください。</h2>
        {/* === 問題1の解答  start  ===*/}
        <p>ボン</p>
        {/* === 問題1の解答  end  ===*/}
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
        <h2>
          問題3:
          components/sample/Button.tsxを呼び出し、要素を表示してください。
        </h2>
        {/* === 問題3の解答  start  === */}
        <SampleButton />
        {/* === 問題3の解答  end  === */}
        <h2>
          問題4:
          components/sample/Link.tsxを編集して呼び出し、要素を表示してください。
        </h2>
        {/* === 問題4の解答  start  === */}
        <SampleLink />
        {/* === 問題4の解答  end  === */}
        <h2>
          問題5:components/sample/PropsTest.tsxを読み込み、パラメータを渡して要素を表示してください。
        </h2>
        {/* === 問題5の解答  start  === */}
        <PropsTest name={name} age={age} isMen={isMen} />
        {/* === 問題5の解答  end  === */}
        <h2>
          問題6:
          カウントアップのSPAをpropsのみ、statesのみで作成してみましょう。
        </h2>
        {/* === 問題6の解答  start  === */}
        <StatusTestButton count={count} onClick={addCount} />
        <StatusTestButtonNoProps />
        {/* === 問題6の解答  end  === */}
      </div>
    </main>
  );
};

export default App;
