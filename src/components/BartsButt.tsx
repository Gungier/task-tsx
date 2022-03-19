import React from "react";
import "./styles.css";
import bartButt from "../bartButt.png";

export interface BartsButtProps {
  setBartButt: () => void;
}

const BartsButt: React.FC<BartsButtProps> = (props) => {
  const { setBartButt } = props;

  return (
    <div className="singleTodo">
      <img src={bartButt} />
      <button onClick={setBartButt}>Kiss My Butt</button>
    </div>
  );
};

export default BartsButt;
