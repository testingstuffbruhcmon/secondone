import React,{Fragment} from 'react';
import Aboutsection from '../components/Aboutsection';
import Servicesection from '../components/Servicesection';
import Faqsection from '../components/Faqsection';



const About = ()=>{

    return (
        <Fragment>
            <Aboutsection />
            <Servicesection />
            <Faqsection />
        </Fragment>
    );
}
export default About;