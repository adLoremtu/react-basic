import React from "react";

type Props = {
  name: string;
  age: number;
  isMen: boolean;
};

/**
 * /src/components/answer/No5/index.tsxより送られたパラメータを表示させてください。
 *
 * 【ヒント】
 * パラメータを受け取る場合はpropsを引数に指定すると受け取ることができます。
 *
 * 【備考】
 * なお受け取り方は以下のようにすることも可能です。
 * - const hoge = ({name, age, isMen}) => {}
 * メリットとしては`props.name`のようにいちいち`props`を書く必要がない。
 */

const SampleList = () => {
  return (
    <>
      <p>名前：</p>
      <p>年齢：</p>
      <p>性別：</p>
    </>
  );
};

export default SampleList;
