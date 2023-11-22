import './Body.scoped.css';
import About from './AboutUs/About';
import Case from './CaseStudies/Case';
import Brands from './Brands/Brands';

function Body(){
    return (
        <div className='body-container'>
            <div className='body-inner'>
                <About></About>
                <Case></Case>
                <Brands></Brands>
            </div>
        </div>
    )
}

export default Body;