import React from 'react';
import Header from './header/Header';
import About from './About/About';
import Greeting from './Greeting/Greeting';
import SoftwareSkill from './Skill/Skill';
import Top from './TopButton/TopButton';
import Footer from './footer/Footer';
import Contact from './contact/Contact';
import Projects from './Projects/Project';



class Main extends React.Component{
    render(){
        return(
            <div>
            
            <Header />
            <Greeting />
            <About />
            <SoftwareSkill />
            <Projects />
            <Contact />
            <Footer />
            <Top />
            
            </div>
            
        );
    }
}
export default Main;