import Nav from './Nav';
import Contact from './Contact';
import Projects from './Projects';
import About from './About';
import Jumbotron from './Jumbotron';

export default (function Main () {
    return(
        <div>
            <Nav/>
            <Jumbotron/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    )
})