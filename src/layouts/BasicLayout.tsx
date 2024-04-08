import React from "react";
import MenuBar from "./MenuBar";
import Bookmark from "@/pages/Bookmark";

import '../global.less';

const BasicLayout: React.FC = () => {
  return (
    <div>
      <MenuBar />
      <Bookmark />
    </div>
  );
}

export default BasicLayout;