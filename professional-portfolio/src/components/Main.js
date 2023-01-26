import Nav from './Nav';
import Contact from './Contact';
import Projects from './Projects';
import About from './About';
import Jumbotron from './Jumbotron';

export default (function Main () {
    return(
        <div className='port-main'>
            <div>
                <Nav/>
            </div>
            <div>
                <Jumbotron/>
            </div>
            <div>
                <About/>
            </div>
            <div>
                <Projects/>
            </div>
            <div>
                <Contact/>
            </div>
            
        </div>
    )
})