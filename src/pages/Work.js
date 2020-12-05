import React from "react";
import styled from "styled-components";
import SingleMovie from "../components/SingleMovie";
import { motion } from "framer-motion";
import { StaticParent, FrameChildren } from "../components/Animations";
const Fadevariant = {
  hidden: {
    opacity: 0,
    y: "-15vh",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      when: "afterChildren",
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

const Work = ({ movies }) => {
  //TITLE AND IMAGE and then the LINKED image leads to details page imdb_id
  //details needed: title img synapsis, otherstuff
  console.log(movies);
  return (
    <StyledMovies
      className="movies"
      variants={Fadevariant}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ position: "relative" }}
    >
      <motion.div variants={StaticParent} animate="visible" initial="hidden">
        <Frame variants={FrameChildren} style={{ zIndex: 20 }}></Frame>
        <Frame2 variants={FrameChildren} style={{ zIndex: 20 }}></Frame2>
        <Frame3 variants={FrameChildren} style={{ zIndex: 20 }}></Frame3>
        <Frame4 variants={FrameChildren} style={{ zIndex: 20 }}></Frame4>
      </motion.div>

      {movies.map((movie) => {
        return <SingleMovie mov={movie} key={movie.id} />;
      })}
    </StyledMovies>
  );
};
const StyledMovies = styled(motion.div)`
  padding: 5rem 0;
  background-color: rgba(250, 250, 250, 0.8);
`;

const Frame = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: lightpink;
  width: 100%;
`;
const Frame2 = styled(Frame)`
  background: lime;
`;

const Frame3 = styled(Frame)`
  background: cyan;
`;
const Frame4 = styled(Frame)`
  background: lightgreen;
`;

export default Work;
