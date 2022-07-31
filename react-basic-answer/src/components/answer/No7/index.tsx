import React, { useState } from "react";
import LifeCycle from "../../ui/button/useEffect";

const No7 = () => {
  const [display, setDisplay] = useState(true);
  const toggleDisplayCounter = () => {
    setDisplay((prevState) => !prevState);
  };

  return (
    <>
      <h2>問題7:</h2>
      <button onClick={toggleDisplayCounter}>ボタン要素表示切り替え</button>
      {/* === 問題7の解答  start  === */}
      {display && <LifeCycle />}
      {/* === 問題7の解答  end  === */}
    </>
  );
};

export default No7;
