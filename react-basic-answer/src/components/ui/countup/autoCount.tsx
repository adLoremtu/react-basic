import React, { useEffect, useState } from "react";

const AutoCounter = () => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(true);

  const toggleStatus = () => {
    setStatus((prevState) => !prevState);
  };

  //  === 問題8の解答  start  ===
  // 自動カウントアップ
  useEffect(() => {
    if (status) {
      const interval = setInterval(() => {
        setCount((prevState) => prevState + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [status]);
  //  === 問題8の解答  end  ===

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
