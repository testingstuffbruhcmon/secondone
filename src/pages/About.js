import React from 'react';
import styled from 'styled-components';
import coverImg from '../img/home1.png';

const About = ()=>{


    return (
        <StyledAbout>
            <h1>About section</h1>
            <div className="imgTop">
            <img src={coverImg} alt="camera image"/>
            </div>
        </StyledAbout>
    )
}

var StyledAbout = styled.div`
    background-color:rgb(70,70,70);
    font-size:5rem;
    display:flex;
    justify-content:space-between;
    height:90vh;

    & > *{
        flex:1
        
    }

    & .imgTop{ 
        border:1px solid blue;
        padding:15vh 0;
    
     & img{
        display:block;
        width:auto;
        height:70vh;
        object-fit:contain;

      }
    }
`;


export default About;