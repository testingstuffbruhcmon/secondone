import React from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const ScrollWatcher = () => {
  const [element, yepview] = useInView();
  const anim = useAnimation();
  if (yepview) {
    anim.start("visible");
  } else {
    anim.start("hidden");
  }

  return [element, anim];
};

export default ScrollWatcher;
