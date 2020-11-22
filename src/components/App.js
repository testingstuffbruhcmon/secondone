import React,{Fragment,useEffect,useState} from 'react';
import Nav from '../components/Nav';
import About from '../pages/About';
import Work from '../pages/Work';
import Contact from '../pages/Contact';
import fetchMovies from '../fetchMovies';
import {Switch,Route} from 'react-router-dom';

const App = () =>{
    //the fetched movies state
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        fetchMovies()
        .then((data)=>{
            setMovies(data);
        });

    },[])
    
    return (
        <Fragment>
            <Nav/>
            <Switch>
                <Route exact path='/about'>
                      <About />
                </Route>
                <Route exact path='/work'>
                      <Work movies={movies} />
                </Route>
                <Route exact path='/contact'>
                      <Contact />
                </Route>
            </Switch>
           
        </Fragment>
    )
}


export default App;