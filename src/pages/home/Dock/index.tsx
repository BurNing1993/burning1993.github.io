import React from "react";
import AppIcon from "../../../components/AppIcon";
import { ReactComponent as WeChat } from "../../../icons/WeChat.svg";
import { ReactComponent as Alipay } from "../../../icons/alipay.svg";
import { ReactComponent as Album } from "../../../icons/album.svg";
import { ReactComponent as Github } from "../../../icons/github.svg";

const Dock = () => {
  return (
    <div id="dock">
      <AppIcon backgroundColor="#2ed573">
        <WeChat />
      </AppIcon>
      <AppIcon backgroundColor="#1e90ff">
        <Alipay />
      </AppIcon>
      <AppIcon backgroundColor="#3742fa">
        <Album />
      </AppIcon>
      <AppIcon>
        <Github />
      </AppIcon>
    </div>
  );
};
export default Dock;
