import React, { Fragment } from "react";
import Aboutsection from "../components/Aboutsection";
import Servicesection from "../components/Servicesection";
import Faqsection from "../components/Faqsection";
import styled from "styled-components";
import { motion } from "framer-motion";

const Fadevariant = {
  hidden: {
    opacity: 0,
    y: "-15vh",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      type: "tween",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
};

const About = () => {
  return (
    <motion.div
      variants={Fadevariant}
      animate="show"
      initial="hidden"
      exit="exit"
      style={{ background: "#232323" }}
    >
      <Aboutsection />
      <Servicesection />
      <Faqsection />
    </motion.div>
  );
};
export default About;

const StyledWrapper = styled(motion.div)`
  background-color: #232323;
`;
