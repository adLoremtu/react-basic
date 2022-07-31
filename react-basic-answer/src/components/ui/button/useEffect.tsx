import React, { useEffect, useRef, useState } from "react";

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

  // 毎回実行(mount, update)
  useEffect(() => {
    console.log("=============== lifecycle start =================");
    console.log("mount, update");
  });

  // 初回のみ実行(mountのみ)
  useEffect(() => {
    console.log("mount");

    // DOM除却時のみ実行(unmount)
    return () => {
      console.log("unmount");
    };
  }, []);

  // update(hoge)
  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) {
      console.log("update(hoge)");
    } else {
      mounted.current = true;
    }
  }, [hoge]);

  // update(huga, piyo)
  const mounted2 = useRef(false);
  useEffect(() => {
    if (mounted2.current) {
      console.log("update(huga, piyo)");
    } else {
      mounted2.current = true;
    }
  }, [huga, piyo]);

  useEffect(() => {
    console.log("=============== lifecycle end =================");
  });

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
