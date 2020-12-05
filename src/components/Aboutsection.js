import React from "react";
import styled from "styled-components";
import coverImg from "../img/home1.png";
import { motion } from "framer-motion";
import { TitleAnim, PhotoAnim } from "./Animations";
import Wave from "./Wave";
const Aboutsection = () => {
  return (
    <motion.div className="about" style={{ position: "relative" }}>
      <Wave />
      <div
        className="greeting"
        initial={false}
        // style={{ overflow: "hidden" }}
        // initial={false}
        // transition={{
        //   when: "beforeChildren",
        //   staggerChildren: 0.3,
        //   delay: 0.2,
        // }}
      >
        <motion.div
          className="greeting__h2"
          variants={TitleAnim}
          initial="hidden"
          animate="show"
        >
          We work to make
        </motion.div>
        <motion.div
          className="greeting__h2"
          variants={TitleAnim}
          initial="hidden"
          animate="show"
        >
          Your <span>dreams</span> come
        </motion.div>
        <motion.div
          className="greeting__h2"
          variants={TitleAnim}
          initial="hidden"
          animate="show"
        >
          true
        </motion.div>
        <motion.div
          className="greeting__fuck"
          variants={TitleAnim}
          initial="hidden"
          animate="show"
        >
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.div>
        <StyledBTN href="#" className="contactbtn">
          Contact Us
        </StyledBTN>
      </div>
      <div className="imgTop">
        <motion.img src={coverImg} variants={PhotoAnim} alt="camera image" />
      </div>
    </motion.div>
  );
};
//we work to make your dreams come true
const StyledBTN = styled(motion.a)`
  font-size: 1.5rem;
  text-decoration: none;
  border: 2px solid #23d997;
  align-self: flex-start;
  padding: 1rem 2rem;
  margin-top: 25px;
  color: white;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    background-color: #23d997;
    color: white;
  }
`;
export default Aboutsection;
