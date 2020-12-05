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
