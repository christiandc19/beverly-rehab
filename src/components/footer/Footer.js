import React from 'react'
import {Link} from 'react-router-dom'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import logo from '../../assets/nav-logo.png'
import './FooterStyles.css'

import { Link as LinkRoll } from 'react-scroll'

const Footer = () => {
    return (

<>
        <div className='footer '>
            <div className="footer-container container">
                <div className="top">
                    <div className="logo-footer">
                    <img src={logo} width="160px" height="60px" alt="Palm Springs Rehab Logo" loading="lazy"/>
                    </div>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='footer-icon' />
                    </LinkRoll>

                </div>
                <div className="col-container">

                    <div className="col">
                        <h3>Navigation</h3>
                        
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/'><p>Home</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/sober-living'><p>Sober Living</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/detox'><p>Detox</p></Link>
                        </LinkRoll>


                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/about'><p>About Us</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/contact'><p>Contact</p></Link>
                        </LinkRoll>
                    </div>


                    <div className="col">
                        <h3>LOCATIONS</h3>
                        <p>Orange County</p>
                        <p>Ventura County</p>
                        <p>San Diego County</p>
                    </div>


                    <div className="col">
                        <h3>Corporate Office</h3>
                       <p>1800 Vine Street, Los Angeles CA 90028</p>
                       <p><a href="tel:4244533866"> +1 (424) 453-3866 </a></p>


                    </div>


                </div>
                <p className='copyright'><p>&copy; 2023 BEVERLY REHAB. ALL RIGHTS RESERVED</p></p>

            </div>

        </div>
</>
    )
}

export default Footer
