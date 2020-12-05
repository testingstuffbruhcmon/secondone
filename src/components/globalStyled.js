import styled from "styled-components";
import { motion } from "framer-motion";

export const Line = styled(motion.div)`
  width: 100%;
  background-color: ${(props) => props.color};
  padding: 0.2rem;
  margin-bottom: ${(props) => (props.mgbot ? props.mgbot : "10rem")};
  margin-top: 1rem;
`;

export default {};
