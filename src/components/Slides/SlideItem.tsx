import React, { PropsWithChildren, WheelEvent } from "react";

interface Props {
  onSlide: (index: number) => void;
  slideIndex: number;
}

const SlideItem = ({
  children,
  onSlide,
  slideIndex,
}: PropsWithChildren<Props>) => {
  const onWheel = (e: WheelEvent) => {
    const y = e.deltaY;
    if (y > 0) {
      onSlide(slideIndex + 1);
    } else {
      onSlide(slideIndex - 1);
    }
  };

  return (
    <div className="slide-item" onWheel={onWheel}>
      {children}
    </div>
  );
};
export default SlideItem;
