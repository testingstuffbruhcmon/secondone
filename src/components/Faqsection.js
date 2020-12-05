import React from "react";
import styled from "styled-components";
import { AnimateSharedLayout, motion } from "framer-motion";
import FaqToggler from "./FaqToggler";
import ScrollWatcher from "../components/te/ScrollWatcher";
import ToggleQuestion from "./te/ToggleQuestion";

const FaqVariants = {
  hidden: {
    opacity: 0,
    y: "1rem",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
};

const Facseqtion = () => {
  const [elemRef, animtoUse] = ScrollWatcher();
  // const ref1 = useRef(null);
  // const ref2 = useRef(null);
  // const ref3 = useRef(null);
  // useEffect(()=>{
  //     let refarray = [ref1,ref2,ref3];
  //     refarray.forEach((ref)=>{
  //         ref.current.style.height = '0px';
  //     })
  // },
  // //eslint-disable-next-line;
  // [])

  // const toggleAnswer = (e,ref)=>{
  //     e.preventDefault();
  //     let height = ref.current.style.height;
  //     console.log(height);
  //     height === '0px' ? ref.current.style.height='8rem' : ref.current.style.height='0px';

  // }

  return (
    <StyledFaq
      className="faq"
      ref={elemRef}
      variants={FaqVariants}
      animate={animtoUse}
    >
      <h2>Any Questions?</h2>
      <span>FAQ</span>

      <AnimateSharedLayout>
        <StyledList>
          <StyledQuestion layout>
            <ToggleQuestion name="How Can I Get Started">
              <MotionedP layout>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus molestias voluptatem maiores porro! Saepe,
                consectetur.{" "}
              </MotionedP>
            </ToggleQuestion>
          </StyledQuestion>
          <StyledQuestion layout>
            <ToggleQuestion name="Daily Schedules">
              <MotionedP layout>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, exercitationem.{" "}
              </MotionedP>
            </ToggleQuestion>
          </StyledQuestion>
          <StyledQuestion layout>
            <ToggleQuestion name="Different Payment Methods">
              <MotionedP layout>
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
              </MotionedP>
            </ToggleQuestion>
          </StyledQuestion>
        </StyledList>
      </AnimateSharedLayout>
    </StyledFaq>
  );
};

const MotionedP = styled(motion.p)`
  margin: 1.5rem 0;

  font-size: 1.9rem;
  color: white;
`;
const StyledQuestion = styled(motion.div)`
  font-size: 3rem;
  color: white;
  margin-bottom: 0;
  overflow: hidden;

  div {
    padding-top: 2rem;
    font-size: 1.5rem;
    color: #fffdd0;
  }
`;

const StyledList = styled.div`
  margin: 0 auto;
  font-size: 2rem;
  color: #fff;
`;

const StyledFaq = styled(motion.div)`
  padding: 15rem;
  background-color: rgb(27, 27, 27);

  h2 {
    font-size: 5rem;
    color: white;
    font-weight: lighter;
  }
  span {
    display: inline-block;
    margin: 1rem 0 5rem;
    font-size: 4rem;
    color: #23d997;
  }
`;

export default Facseqtion;
