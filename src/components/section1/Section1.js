import React from 'react'
import './Section1.css'
import {Link} from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'
import { BsCheck2Circle } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';

import Section1Img from '../../assets/section1-image.jpg'


const Section1 = () => {
  return (
    <>
        <div className='section1'>
            <div className='section1-flex'>

                <div className='section1-left'>
                    <h1>WHY CHOOSE BEVERLY REHAB</h1>
                    <h2>Safety. Structure. Support. Healing</h2>
                    <p>Build a new life at one of our sober living homes across Los Angeles, providing support and a community of healing behind you, every step of the way.<br /><br />
                    Transitioning back into society is difficult in many situations that's why we offer an opportunity of a new beginning to the world of sobriety.
                    </p> <br />

                    <ul>
                    <Fade left>
                    <li>
                    <p><span><BsCheck2Circle/></span> Custom-fit treatment to every individual.</p>
                    </li>
                    </Fade>
                    <Fade right>
                    <li>
                    <p><span><BsCheck2Circle/></span> Experienced Staff.</p>
                    </li>
                    </Fade>
                    <Fade left>
                    <li>
                    <p><span><BsCheck2Circle/></span> Excellent Amenities.
                    </p>
                    </li>
                    </Fade>
                    <Fade right>
                    <li>
                    <p><span><BsCheck2Circle/></span> 24/Support.
                    </p>
                    </li>
                    </Fade>
                </ul>

                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                    <Link to="/sober-living">
                    <button class="button">
                        <span>Learn More</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>            
                    </Link>
                  </LinkRoll>



                </div>

                <div className='section1-right'>
                    <img src={ Section1Img } alt="Clinic Staff" loading="lazy"/>
                </div>

            </div>
        </div>

    </>
  )
}

export default Section1