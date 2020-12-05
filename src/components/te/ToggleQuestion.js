import React, { useState } from "react";
import { motion } from "framer-motion";
import { Line } from "../globalStyled";

const ToggleQuestion = ({ name, children }) => {
  const [ye, setYe] = useState(false);

  return (
    <motion.div layout onClick={(e) => setYe(!ye)}>
      <motion.h4
        style={{
          cursor: "pointer",
          fontSize: "2.5rem",
          color: "white",
          fontWeight: 500,
          marginBottom: "1rem",
        }}
        layout
      >
        {name}
      </motion.h4>
      {ye ? children : ""}
      <Line
        layout
        color="#fff"
        style={{ height: "5px", padding: 0, marginTop: "1rem" }}
      ></Line>
    </motion.div>
  );
};
export default ToggleQuestion;
