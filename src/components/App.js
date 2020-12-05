import React,{Fragment,useEffect,useState} from 'react';
import Nav from '../components/Nav';
import About from '../pages/About';
import Work from '../pages/Work';
import Contact from '../pages/Contact';
import MovieDetail from './MovieDetail';
import fetchMovies from '../fetchMovies';
import {Switch,Route,useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';




const App = () =>{
    //the fetched movies state
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        fetchMovies()
        .then((data)=>{
            setMovies(data);
        });

    },[])
    const location = useLocation();
    console.log(location)
    return (
        <Fragment>
            <Nav/>
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} location={location} key={location.key}>
                    <Route exact path='/about'>
                        <About/>
                    </Route>
                    <Route exact path='/work' >
                        <Work movies={movies}/>
                    </Route>
                    <Route exact path='/contact'>
                        <Contact />
                    </Route>
                    <Route path={`/movies/:mov_id`}>
                        <MovieDetail/>
                    </Route>
                </Switch>
            </AnimatePresence>
        </Fragment>
    )
}


export default App;