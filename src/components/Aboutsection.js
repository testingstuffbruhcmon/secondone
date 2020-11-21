import React from 'react';
import styled from 'styled-components';
import coverImg from '../img/home1.png';


const About = ()=>{


    return (
        <div className="about">
            <div className="greeting">
                <div className="greeting__h2">We work to make</div>
                <div className="greeting__h2">Your <span>dreams</span> come</div>
                <div className="greeting__h2">true</div>
                <div className="greeting__fuck">
                Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.
                </div>
                <StyledBTN href="#" className="contactbtn">Contact Us</StyledBTN>
            </div>
            <div className="imgTop">
            <img src={coverImg} alt="camera image"/>
            </div>
        </div>
    )
}
//we work to make your dreams come true
const StyledBTN = styled.a`
font-size:1.5rem;
text-decoration:none;
border:2px solid #23D997;
align-self:flex-start;
padding:1rem 2rem;
margin-top:25px;
color:white;
transition:all .3s ease;
 &:hover{
     background-color:#23D997;
     color:white;
 }
`;


export default About;