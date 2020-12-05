import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Line} from './globalStyled';
import {withRouter} from 'react-router-dom';
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


const MovieDetail = (props)=>{
    const [currentId] = useState(props.match.params.mov_id);
    const [current,setCurrent] = useState(null);
   
    useEffect(()=>{
        // if( props.movies.length <= 0){
        //     props.fetchMovs()
        //     .then((data)=>{
        //         setMov(
        //             data.find((movie)=>{
        //                 return +currentId===movie.id;
        //             })
        //         )
        //     })
        //     .then(()=>{
        //         console.log(mov)
        //     })
        // }
        // setMov(props.movies.find((movie)=>{
        //     return +currentId===movie.id;
        //     })
        // );
        axios.get(`https://api.themoviedb.org/3/movie/${currentId}?api_key=${process.env.REACT_APP_API_KEY}`)
        .then((res)=>{
           setCurrent(res.data);
        })
        //eslint-disable-next-line
    },[]);
        if(current == null){
           return '';
        }

    return (
        <StyledDetails className='moviedetails' variants = {Fadevariant} initial='hidden' animate='show' exit='exit'>
                <h2>{current.title}</h2>
                <img src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${current['poster_path']}`} alt='coverImg'/>
                <StyledRevs className='revs'> 
                    <div className="rev">
                        <h4>'Ery nice</h4>
                        <Line color='green' mgbot='2rem'></Line>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aspernatur.</p>
                    </div>
                    <div className="rev">
                        <h4>'Ery nice</h4>
                        <Line color='green' mgbot='2rem'></Line>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aspernatur.</p>
                    </div>
                    <div className="rev">
                        <h4>'Ery nice</h4>
                        <Line color='green' mgbot='2rem'></Line>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aspernatur.</p>
                    </div>
                </StyledRevs>
                <img src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${current['backdrop_path']}`} alt='coverImg'/>
            </StyledDetails>
    );

}
const StyledDetails = styled(motion.div)`
 background-color:rgb(30,30,30);
    h2{
        padding:4rem;
        color:#fff;
        text-align:center;
        font-weight:500;
        letter-spacing:1.5px;
        font-size:5rem;
    }
    img{
        display:block;
        width:100%;
        height:auto;
        object-fit:cover;
        object-position:center;
        transform:scaleY(.9)

    }
`;

const StyledRevs = styled.div`
        height:90vh;
        font-size:5rem;
        color:white;
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        div{
            flex-basis:20%;
            font-size:1.5rem;

            h4{
                color:white;
                font-size:2rem;
            }   
        }
`;
export default withRouter(MovieDetail);