import React from "react";

type Props = {
  count: number;
  onClick: () => void;
};

const StatusTestButton = (props: Props) => {
  return (
    <button onClick={() => props.onClick()}>{props.count.toString()}</button>
  );
};

export default StatusTestButton;
