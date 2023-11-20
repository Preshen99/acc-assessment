import './Navbar.css';
import logo from '../../Assets/logo.svg';

function Navbar(){
    return (
        <div className='navbar-container'>
            <div className='logo'>
                <img src={logo} alt='Logo'></img>
            </div>

            <div className='links'>
                <a href=''>Service</a>
                <a href=''>Industries</a>
                <a href=''>Cases</a>
                <a href=''>Contact</a>
            </div>

            <div className='talk'>
                <button>Lets Talk</button>
            </div>
        </div>
    )
}

export default Navbar;