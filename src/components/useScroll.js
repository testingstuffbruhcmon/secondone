import React from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const useScroll = () => {
  let [element, viewing] = useInView(0.5);
  let AnimControls = useAnimation();
  if (viewing) {
    AnimControls.start("visible");
  } else {
    AnimControls.start("hidden");
  }

  return [element, AnimControls];
};
export default useScroll;
