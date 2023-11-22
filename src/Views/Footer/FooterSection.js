import './FooterSection.scoped.css';
import rectangle from '../../Assets/Rectangle 1.svg'

function FooterSection(){
    return (
        <div className='footerContainer'>
            <div className='footerInner'>
                <div className='footerHeader'>
                    <img src={rectangle} alt='Rectangle'></img>
                    <p>Contact Us</p>
                </div>

                <div className='footerBody'>
                    <div>
                        Have a project in mind?
                        <br></br>
                        Let's make it happen
                    </div>

                    <div>
                        22 Street Name, Suburb, 8000
                        <br></br>
                        Cape Town, South Africa
                        <br></br>
                        +27 21 431 001
                        <br></br>
                        <a href='mailto:enquire@website.co.za'>enquire@website.co.za</a> 
                    </div>
                </div>

                <div className='footerLinks'>
                    <a href=''>Terms of service</a>
                    <a href=''>Facebook</a>
                    <a href=''>Github</a>
                    <a href=''>Youtube</a>
                    <a href=''>Explore open jobs</a>

                    <a href=''>Privacy policy</a>
                    <a href=''>Instagram</a>
                    <a href=''>Linkedin</a>
                    <a href=''>Behance</a>
                    <div></div>
                    
                    <a href=''>Impressum</a>
                    <a href=''>Twitter</a>
                    <a href=''>Teams</a>
                    <a href=''>Dribbble</a>
                    <div>©2000—2023 Company Name</div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection;