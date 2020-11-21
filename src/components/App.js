import React,{Fragment} from 'react';
import Nav from '../components/Nav';
import About from '../pages/About';
import Work from '../pages/Work';
import Contact from '../pages/Contact';
import {Switch,Route} from 'react-router-dom';

const App = () =>{
    return (
        <Fragment>
            <Nav/>
            <Switch>
                <Route exact path='/about'>
                      <About />
                </Route>
                <Route exact path='/work'>
                      <Work />
                </Route>
                <Route exact path='/contact'>
                      <Contact />
                </Route>
            </Switch>
           
        </Fragment>
    )
}


export default App;