import React from "react";
import MenuBar from "./MenuBar";
import WorkContent from "./WorkContent";

import '../global.less';

const BasicLayout: React.FC = () => {
  return (
    <div>
      <MenuBar />
      <WorkContent />
    </div>
  );
}

export default BasicLayout;