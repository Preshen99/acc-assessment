import './Brands.scoped.css';
import rectangle from '../../../Assets/Rectangle 1.svg';

import bbc from '../../../Assets/bbc-black.svg';
import wesgrow from '../../../Assets/wesgrow-black.svg'
import visa from '../../../Assets/visa-black.svg'
import tyme from '../../../Assets/tyme-bank-black.svg'
import tfg from '../../../Assets/tfg-black.svg'
import spotify from '../../../Assets/spotify-black.svg'
import santam from '../../../Assets/santam-black.svg';
import sanlam from '../../../Assets/sanlam-black.svg';
import pnp from '../../../Assets/pnp-black.svg';
import nike from '../../../Assets/nike-black.svg';
import multi from '../../../Assets/multichoice-black.svg';
import microsoft from '../../../Assets/microsoft-black.svg'
import liquid from '../../../Assets/liquid-black.svg'
import engen from '../../../Assets/engen-black.svg'
import distell from '../../../Assets/distell-black.svg'


function Brands() {
    return (
        <div className='brands-container'>
            <div className='brands-header'>
                <img src={rectangle} alt="rectangle"></img>
                <p>You’ll be in good company</p>
            </div>

            <p>Trusted by leading brands</p>

            <div className='brands-logo'>
                <img src={visa} alt=''></img>
                <img src={tyme} alt=''></img>
                <img src={distell} alt=''></img>
                <img src={spotify} alt=''></img>
                <img src={microsoft} alt=''></img>

                <img src={engen} alt=''></img>
                <img src={nike} alt=''></img>
                <img src={wesgrow} alt=''></img>
                <img src={multi} alt=''></img>
                <img src={pnp} alt=''></img>


                <img src={liquid} alt=''></img>
                <img src={tfg} alt=''></img>
                <img src={sanlam} alt=''></img>
                <img src={santam} alt=''></img>
                <img src={bbc} alt=''></img>
            </div>
        </div>
    )
};

export default Brands;