import { motion } from "framer-motion";

const Idk = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    pathOffset: -1.5,
  },
  show: {
    opacity: 0.8,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};

const Wave = () => {
  return (
    <motion.svg
      viewBox="0 0 903 172"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        top: "30%",
        left: "-.5% ",
        zIndex: 1,
      }}
    >
      <motion.path
        d="M2 3C356 225 444 188 501 103C546.6 35 787.333 8 902 3"
        stroke="#F140CA"
        opacity=".5"
        strokeWidth="5"
        strokeLinejoin="bevel"
        variants={Idk}
        animate="show"
        initial="hidden"
      />
    </motion.svg>
  );
};
export default Wave;
