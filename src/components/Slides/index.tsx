import React, { PropsWithChildren, useState, useEffect } from "react";
import SlideItem from "./SlideItem";
import debounce from "lodash/debounce";
import throttle from "lodash/throttle";
import "./style.css";

const DELAY = 800;

interface Props {}

const Slides = ({ children }: PropsWithChildren<Props>) => {
  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   window.addEventListener(
  //     "wheel",
  //     throttle((e: WheelEvent) => {
  //       const y = e.deltaY;
  //       if (y > 0) {
  //         setCurrent(current + 1);
  //       } else {
  //         setCurrent(current - 1);
  //       }
  //     }, DELAY)
  //   );

  //   return () => window.removeEventListener("wheel",()=>null);
  // }, [current]);

  const onSlide = debounce((current: number) => {
    setCurrent(current);
  }, DELAY);

  return (
    <div className="slides">
      <div className="slides-content">
        {Array.isArray(children) &&
          children.map((child, index) => {
            return React.createElement(
              SlideItem,
              {
                onSlide,
                slideIndex: index,
                key: index,
              },
              child
            );
          })}
      </div>
      <div className="slides-control">
        {Array.isArray(children) &&
          children.map((_, index) => (
            <div
              className={`slides-control-item ${index === current && "active"}`}
              key={index}
            ></div>
          ))}
      </div>
    </div>
  );
};
export default Slides;
