import React from "react";
import { randomNum } from "../../utils";

const Right = () => {
  const p = randomNum(1, 100);
  return (
    <div className="right battery">
      <div
        className="battery-inner"
        style={{
          backgroundColor: p >= 20 ? "#fff" : "red",
          width: `${p}%`,
          height: "100%",
        }}
      ></div>
      <div className="battery-top"></div>
    </div>
  );
};
export default Right;
