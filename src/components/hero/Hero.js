import React from 'react'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';

import './Hero.css'

const Hero = () => {
    return (

<>

        <div className='hero main-menu'>


                <div className="hero-content">
                    <div className='hero-brand'>
                    <Fade left>
                    <h1>Beverly Rehab</h1>
                    </Fade>
                    </div>

                    <Fade right>
                    <h1>LIVE SOBER. HEAL STRONGER.</h1>
                    </Fade>
                    
                    <Fade bottom>
                    <h3>Transitional sober housing focused on healing and long-term recovery.</h3>
                    </Fade>
                <div>


                <div className='cta-btn'>
                <Link to="/contact">
                    <button class="cta">
                        <span>Call us</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>            
                </Link>
                </div>
                </div>
                </div>
            </div>
</>
    )
}

export default Hero
