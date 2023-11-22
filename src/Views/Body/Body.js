import './Body.scoped.css';
import About from './AboutUs/About';
import Case from './CaseStudies/Case';
import Brands from './Brands/Brands';

function Body(){
    return (
        <div className='body-container'>
            <About></About>
            <Case></Case>
            <Brands></Brands>
        </div>
    )
}

export default Body;