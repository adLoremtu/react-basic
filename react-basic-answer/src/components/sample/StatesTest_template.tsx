import react, { useState } from "react";

/**
 * propsのtype指定
 */
type Props = {
  count: number;
  onClick: () => void;
};

/**
 * カウントアップ処理
 * prevState: 更新関数で使用可能な特殊変数の1つ。更新前のstate。
 *
 * [NOTE]:
 * なぜsetCount(count + 1)としないのか。
 *
 * 仮にsetCountをクリックした1秒後に実施とし、連打してみた場合の挙動が変わる
 *
 * setTimeout(() => {
 *    setCount((prevState) => prevState + 1);
 * }, 1000);
 *
 * count: 現在のstate→1秒以内に連打しても更新がかからない(1秒に1回しかカウントアップされない)
 * prevState: 更新前のstate→1秒以内に連打をすると毎回更新前の状態に+1を行う(1秒遅れでカウントアップが実施される)
 */
const [count, setCount] = useState(0);
const addCount = () => {
  setTimeout(() => {
    setCount((prevState) => prevState + 1);
  }, 1000);
};
