import React from "react";
import { randomNum } from "../../utils";
import { ReactComponent as Wifi } from "./wifi.svg";

const Left = () => {
  const s = randomNum(1, 4);
  const Signal = new Array(4)
    .fill(0)
    .map((_, index) => (
      <div
        key={index}
        className={`signal-item signal-item-${index + 1} ${
          s >= index ? "signal-item-fill" : "signal-item-empty"
        }`}
      ></div>
    ));
  return (
    <>
      <div className="left">
        <div className="signal">{Signal}</div>
        <div className="wifi">
          <Wifi />
        </div>
      </div>
    </>
  );
};
export default Left;
