export const TitleAnim = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
  },
};

export const PhotoAnim = {
  hidden: {
    scale: 1.2,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const StaticParent = {
  hidden: {
    opacity: 0.99,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.3,
      duration: 3,
    },
  },
};

export const FrameChildren = {
  hidden: {
    x: "-130%",
    skew: "45deg",
  },
  visible: {
    x: "300%",
    skew: "45deg",
    scale: 2,
    transition: {
      duration: 2.5,
      ease: "easeOut",
    },
  },
};
