import React from 'react';
import styled from 'styled-components';
import SingleMovie from '../components/SingleMovie';
import {motion} from 'framer-motion';
const Fadevariant = {
    hidden:{
        opacity:0,
        y:'-15vh',
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            duration:0.2,
            type:'tween',
          
        }
    },
    exit:{
        opacity:0,
        y:200,
        transition:{
            duration:.5,
            type:'spring',
        }
    }
}

const Work = ({movies})=>{ 
    //TITLE AND IMAGE and then the LINKED image leads to details page imdb_id
    //details needed: title img synapsis, otherstuff
    console.log(movies)
    return (
        <StyledMovies className='movies' variants={Fadevariant} initial='hidden' animate='show' exit='exit'>
            {movies.map((movie)=>{
                return <SingleMovie mov={movie} key={movie.id} />
            })}
        
        </StyledMovies>
        );
    
}
const StyledMovies = styled(motion.div)`
padding:5rem 0;
background-color:rgba(250,250,250,.8);
`;


export default Work;