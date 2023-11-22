import './Case.scoped.css';
import rectangle from '../../../Assets/Rectangle 1.svg';

function Case() {
    return (
        <div className='case-container'>
            <div className='case-header'>
                <img src={rectangle} alt="rectangle"></img>
                <p>Case Studies</p>
            </div>

            <div className='case-slider'>
                <div className='olympian'>
                    <div>
                    <img src={rectangle} alt="rectangle"></img>
                    <p>The Olympian</p>
                    <p>The only athlete in the world to do her Olympic routine in 2020.</p>
                    </div>
                </div>

                <div className='dragon'>
                    <div>
                        <img src={rectangle} alt="rectangle"></img>
                        <p>The Savings Jar</p>
                        <p>Grow your savings treasure and grow your dragon.</p>
                    </div>
                </div>

                <div className='mali'>
                    <div>
                        <img src={rectangle} alt="rectangle"></img>
                        <p>Skhokho seMali</p>
                        <p>Helping South Africans become #CashCleva with Skhokho and TymeBank.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Case;