import React from 'react';
import styled from 'styled-components';

const Contact = ()=>{
    return (
        <StyledContact>
            <h2>Get In Touch</h2>
            <ul>
            <li>Send an email</li>
            <li>Send us a message</li>
            <li>Social Media</li>
            </ul>
        </StyledContact>
    )
}

const StyledContact = styled.div`
font-size:5rem;
color:#272727;
font-weight:300;
padding:10rem;
h2{
    margin-bottom:5rem;
    font-weight:400;
}
 ul{
     list-style-type:none;

     li{
         margin-bottom:3rem;
     }
     li:before{
        content:'';
        border-radius:50%;
        vertical-align:middle;
        display:inline-block;
        width:4rem;
        height:4rem;
        background-color:#272727;
        margin-right:2rem;
     }
 }
`;
export default Contact;