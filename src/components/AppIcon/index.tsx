import React, { PropsWithChildren } from "react";

interface Props {
  width?: number;
  backgroundColor?: string;
  title?: string;
  onClick?: ()=>void;
}

const AppIcon = ({
  children,
  title,
  onClick,
  width = 48,
  backgroundColor = "#fff",
}: PropsWithChildren<Props>) => {
  return (
    <div
      className="app-icon"
      style={{
        backgroundColor,
        width: width + "px",
        height: width + "px",
      }}
      onClick={onClick}
    >
      {children}
      {title && <div className="title">{title}</div>}
    </div>
  );
};
export default AppIcon;
