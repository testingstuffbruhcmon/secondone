import React from "react";
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
      staggerChildren: 0.2,
      delayChildren: 0.2,
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

const wtf = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: {
      delay: 0.2,
      ease: "easeOut",
      duration: 0.25,
    },
  },
};

const Contact = () => {
  return (
    <StyledContact
      variants={Fadevariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h2>Get In Touch</h2>
      <ul>
        <li style={{ overflow: "hidden" }}>
          <motion.span
            variants={wtf}
            initial="hidden"
            animate="show"
            style={{ display: "inline-block" }}
          >
            Send an email
          </motion.span>
        </li>
        <li style={{ overflow: "hidden" }}>
          <motion.span
            variants={wtf}
            initial="hidden"
            animate="show"
            style={{ display: "inline-block" }}
          >
            Send us a message
          </motion.span>
        </li>
        <li style={{ overflow: "hidden" }}>
          <motion.span
            variants={wtf}
            initial="hidden"
            animate="show"
            style={{ display: "inline-block" }}
          >
            Social Media
          </motion.span>
        </li>
      </ul>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  font-size: 5rem;
  color: #272727;
  background: white;
  height: 100vh;
  font-weight: 300;
  padding: 10rem;
  h2 {
    margin-bottom: 5rem;
    font-weight: 400;
  }
  ul {
    list-style-type: none;

    li {
      margin-bottom: 3rem;
    }
    li:before {
      content: "";
      border-radius: 50%;
      vertical-align: middle;
      display: inline-block;
      width: 4rem;
      height: 4rem;
      background-color: #272727;
      margin-right: 2rem;
    }
  }
`;
export default Contact;
