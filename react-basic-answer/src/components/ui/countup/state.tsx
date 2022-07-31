import React, { useState } from "react";

const SampleState = () => {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount((prevState) => prevState + 1);
  };

  return <button onClick={addCount}>{count.toString()}</button>;
};

export default SampleState;
