/** @format */

import React from "react";
import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { renderPageAtom } from "../../../atoms/renders";
import Render from "../../renders/Render";
type Props = {
  children: React.ReactNode;
  bgImage?: boolean;
  bgcolor?: boolean;
};

function MainLayout({ children, bgImage, bgcolor }: Props) {
  return (
    <motion.div
      animate="animate"
      initial="initial"
      exit={{ opacity: 0 }}
      className="hero min-h-screen "
      style={{ backgroundImage: `${bgImage ? 'url("./page1.png")' : "none"}` }}
    >
      <div
        className={`hero-overlay bg-opacity-80 ${
          !bgcolor ? "bg-blue-1" : "bg-white"
        }`}
      >
        {children}
      </div>
    </motion.div>
  );
}

export default MainLayout;
