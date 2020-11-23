import React from 'react';
import styled from 'styled-components';
import SingleMovie from '../components/SingleMovie';


const Work = ({movies})=>{ 
    //TITLE AND IMAGE and then the LINKED image leads to details page imdb_id
    //details needed: title img synapsis, otherstuff
    console.log(movies)
    return (
        <StyledMovies className='movies'>
            {movies.map((movie)=>{
                return <SingleMovie mov={movie} key={movie.id} />
            })}
        
        </StyledMovies>
        );
    
}
const StyledMovies = styled.div`
padding:5rem 0;
background-color:rgba(25,25,25,.1)
`;


export default Work;