import Contact from './Contact';
import Projects from './Projects';
import About from './About';
import Jumbotron from './Jumbotron';

export default (function Main () {
    return(
        <div>
            <Jumbotron/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    )
})