import './About.scoped.css';
import rectangle from '../../../Assets/Rectangle 1.svg';
import dev from '../../../Assets/App Dev Icon.svg';
import blockchain from '../../../Assets/blockchain.svg';
import web from '../../../Assets/Web Dev Icon.svg';
import ux from '../../../Assets/UX Icon.svg';

function About() {
    return (
        <div className='about-container'>
            <div className='about-header'>
                <img src={rectangle} alt="rectangle"></img>
                <p>What we do</p>
            </div>

            <p>
                We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces
            </p>

            <div className='about-features'>
                <div>
                    <img src={web} alt='web'></img>
                    <p>Web development</p>
                    <p>We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.</p>
                </div>

                <div>
                    <img src={ux} alt='ux'></img>

                    <p>User experience & design</p>
                    <p>Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.</p>
                </div>

                <div>
                    <img src={dev} alt='dev'></img>

                    <p>Mobile app development</p>
                    <p>Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.</p>
                </div>

                <div>
                    <img src={blockchain} alt='blockchain'></img>

                    <p>Blockchain solutions</p>
                    <p>We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.</p>
                </div>
            </div>
        </div>
    )
};

export default About;