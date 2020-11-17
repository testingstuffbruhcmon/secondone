import React from 'react';
import styled from 'styled-components';


const About = ()=>{


    return (
        <StyledAbout>
            About
        </StyledAbout>
    )
}

var StyledAbout = styled.div`
    background-color:yellow;
    color: ${props => props.main ? 'green' : 'cyan'}
`;


export default About;