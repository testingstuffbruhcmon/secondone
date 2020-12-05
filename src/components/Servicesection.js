import React from "react";
import serviceImg from "../img/home2.png";
import styled from "styled-components";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";
import money from "../img/money.svg";
import { motion } from "framer-motion";
import useScroll from "./useScroll";

const ServiceFrames = {
  hidden: {
    opacity: 0,
    scale: 1.05,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
};

const Servicesection = () => {
  let [element, AnimControls] = useScroll();

  return (
    <StyledService
      variants={ServiceFrames}
      animate={AnimControls}
      ref={element}
    >
      <div>
        <h2>
          High <span>Quality</span> Services
        </h2>
        <ul>
          <li>
            <div>
              <img src={clock} alt="bruh" />
              <span>Yep I guess</span>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <div>
              <img src={teamwork} alt="bruh" />
              <span>Efficient</span>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <div>
              <img src={diaphragm} alt="bruh" />
              <span>Gord</span>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <div>
              <img src={money} alt="bruh" />
              <span>NyesZ?</span>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </div>
      <div>
        <img src={serviceImg} alt="bruh" />
      </div>
    </StyledService>
  );
};

const StyledService = styled(motion.div)`
  background-color: rgb(27, 27, 27);
  padding: 5rem 15rem;
  display: flex;
  justify-content: space-around;
  color: white;

  h2 {
    font-size: 5rem;
    letter-spacing: 1.1px;
    font-weight: 400;
  }
  ul {
    list-style: none;
    display: flex;
    width: 90%;
    margin-top: 5rem;
    flex-wrap: wrap;
    padding-right: 10%;
    justify-content: space-between;
    align-content: space-around;
    align-items: center;
    height: 50vh;
    li {
      flex-basis: 40%;
      height: 150px;

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3rem;
      }
      span {
        display: inline-block;
        width: 65%;
        text-align: center;
        padding: 1.5rem 2rem;
        font-size: 1.2rem;
        color: black;
        background-color: #fff;
        text-transform: uppercase;
        font-weight: 600;
      }
      p {
        font-size: 1.45rem;
        color: gray;
      }
    }
  }

  span {
    color: #23d997;
  }

  div:first-child {
    flex: 1;
  }

  div:last-child {
    flex-basis: 40vw;
    transform: translateX(-10px);
    img {
      display: block;
      width: 100%;
      height: 70vh;
      object-fit: cover;
    }
  }
`;

export default Servicesection;
