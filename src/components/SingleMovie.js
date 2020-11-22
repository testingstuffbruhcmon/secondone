import React from 'react';
import styled from 'styled-components';
import {Line} from './globalStyled';
const SingleMovie = ({mov})=>{

    return(
        <StyledSingle className='single' style={{color:'black',fontSize:'25px'}}>
                <h2>{mov.title}</h2>
                <Line color='#23d997' mgbot='5rem'></Line>
                <img src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${mov['poster_path']}`} alt='Cover'/>
            </StyledSingle>
    )
}

const StyledSingle = styled.div`
width:80%;
margin:0 auto;
box-sizing:border-box;
margin-bottom:8rem;

    h2{
        font-size:4.5rem;
        padding-bottom:2rem;
        letter-spacing:3.5px;
        font-weight:450;
    }
    img{   
        border:4px solid rgba(27,27,27,.5);
        display:block;
        width:100%;
        height:100%;
        object-position:top;
        object-fit:cover;
    }
`;


export default SingleMovie;