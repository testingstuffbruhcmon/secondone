import React from 'react';
import styled from 'styled-components';
import SingleMovie from '../components/SingleMovie';


const Work = ({movies})=>{ 
    //TITLE AND IMAGE and then the LINKED image leads to details page imdb_id
    //details needed: title img synapsis, otherstuff
    console.log(movies)
    return (
        <StyledMovies className='movies' style={{padding:'5rem 0'}}>
            {movies.map((movie)=>{
                return <SingleMovie mov={movie} key={movie.id} />
            })}
        
        </StyledMovies>
        );
    
}
const StyledMovies = styled.div`

    
`;


export default Work;