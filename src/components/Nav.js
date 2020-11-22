import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = ()=>{
    return (
            <StyledNav className="Nav">
                <h5 className="logo">Capture</h5>
                <ul className="links">
                    <Link to='/about' className="link">1.About us</Link>
                    <Link to='/work' className="link">2.Our work</Link>
                    <Link to='/contact' className="link">3.Contact us</Link>
                </ul>
            </StyledNav>

    );
}

const StyledNav = styled.nav`
    background: rgba(33,33,33,.95);
    padding:2rem 15rem;
    display:flex;
    justify-content:space-between;
    align-items:baseline;

    ul{
        list-style:none;
        padding:0;
        margin:0;
        display:flex;
        width:30%;
        justify-content:space-between;
        
        .link{
            color:white;
            font-size:1.5rem;       
            text-decoration:none;
            cursor:pointer;
            margin-left:2rem;
        }
    }

    h5{
        font-family:'Dancing Script',cursive;
        color:white;
        font-size:3rem;
       
    }
`;

export default Nav;