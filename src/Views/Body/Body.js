import './Body.scoped.css';
import About from './AboutUs/About';
import Case from './CaseStudies/Case';

function Body(){
    return (
        <div className='body-container'>
            <About></About>
            <Case></Case>
        </div>
    )
}

export default Body;