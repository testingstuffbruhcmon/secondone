import React, { useState } from "react";
import { Line } from "../components/globalStyled";
import { motion } from "framer-motion";
import styled from "styled-components";
const FaqToggler = ({ children, title }) => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <motion.div
      layout
      onClick={() => {
        setIsToggled(!isToggled);
      }}
    >
      <StyledHead layout>{title}</StyledHead>

      <motion.div>{isToggled ? children : ""}</motion.div>

      <Line
        color="#fff"
        style={{ height: ".5rem", padding: "0", marginTop: "20px" }}
      ></Line>
    </motion.div>
  );
};

const StyledHead = styled(motion.h3)`
  color: #fff;
  font-size: 2.5rem;
  cursor: pointer;
  letter-spacing: 1.2px;
`;
export default FaqToggler;
