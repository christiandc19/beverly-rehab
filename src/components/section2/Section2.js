import React from 'react'
import './Section2.css'
// import {Link} from 'react-router-dom'
// import { Link as LinkRoll } from 'react-scroll'
import { BiBed } from 'react-icons/bi';
import { GiJumpingRope} from 'react-icons/gi';
import { BsGear} from 'react-icons/bs';
import { BiSupport} from 'react-icons/bi';
import { BsFillPersonFill} from 'react-icons/bs';
import { FaUserNurse} from 'react-icons/fa';
import { GiReceiveMoney} from 'react-icons/gi';
import { GiSuitcase} from 'react-icons/gi';
import { GiHotMeal} from 'react-icons/gi';
import { AiFillCar} from 'react-icons/ai';
import { BsPeople} from 'react-icons/bs';
import { MdFamilyRestroom} from 'react-icons/md';


import Fade from 'react-reveal/Fade';



const Section2 = () => {
  return (
    <>
        <div className='section2'>
            <div className='section2-content'>

                    <h1>OUR SERVICES</h1>
                    <h2>A balanced approach to recovery through community & action.</h2>

                    <div className='section2-flex'>

                        <Fade left>
                        <div className='flexItem'>
                            <div className='flexIcon'>
                                <BiBed/>
                            </div>
                            <div>
                                <p>Private and Group Rooms</p>
                            </div>
                        </div>
                        </Fade>

                        <Fade left>
                        <div className='flexItem'>
                            <div className='flexIcon'>
                                <GiJumpingRope/>
                            </div>
                            <div>
                                <p>Daily Activities</p>
                            </div>
                        </div>
                        </Fade>

                        <Fade left>
                        <div className='flexItem'>
                            <div className='flexIcon'>
                                <BsGear/>
                            </div>
                            <div>
                                <p>Top-Notch Facilities</p>
                            </div>
                        </div>
                        </Fade>

                        <Fade left>
                        <div className='flexItem'>
                            <div className='flexIcon'>
                                <BiSupport/>
                            </div>
                            <div>
                                <p>24/7 Support</p>
                            </div>
                        </div>
                        </Fade>

                        <Fade left>
                        <div className='flexItem'>
                            <div className='flexIcon'>
                                <BsFillPersonFill/>
                            </div>
                            <div>
                                <p>One-on-One Mentoring</p>
                            </div>
                        </div>
                        </Fade>

                        <Fade left>
                        <div className='flexItem'>
                            <div className='flexIcon'>
                                <FaUserNurse/>
                            </div>
                            <div>
                                <p>Nurse Mentoring</p>
                            </div>
                        </div>
                        </Fade>

                        <Fade left>
                        <div className='flexItem'>
                            <div className='flexIcon'>
                                <GiReceiveMoney/>
                            </div>
                            <div>
                                <p>Money Management</p>
                            </div>
                        </div>
                        </Fade>

                        <Fade left>
                        <div className='flexItem'>
                            <div className='flexIcon'>
                                <GiSuitcase/>
                            </div>
                            <div>
                                <p>Jobs Program</p>
                            </div>
                        </div>
                        </Fade>

                        <Fade left>
                        <div className='flexItem'>
                            <div className='flexIcon'>
                                <GiHotMeal/>
                            </div>
                            <div>
                                <p>Group Meal.</p>
                            </div>
                        </div>
                        </Fade>

                        <Fade left>
                        <div className='flexItem'>
                            <div className='flexIcon'>
                                <AiFillCar/>
                            </div>
                            <div>
                                <p>Transportation</p>
                            </div>
                        </div>
                        </Fade>

                        <Fade left>
                        <div className='flexItem'>
                            <div className='flexIcon'>
                                <BsPeople/>
                            </div>
                            <div>
                                <p>On-Site Staff</p>
                            </div>
                        </div>
                        </Fade>


                        <Fade left>
                        <div className='flexItem'>
                            <div className='flexIcon'>
                                <MdFamilyRestroom/>
                            </div>
                            <div>
                                <p>Family Services</p>
                            </div>
                        </div>
                        </Fade>



                    </div>




                    {/* <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                    <Link to="/sober-living">
                    <button class="button">
                        <span>Learn More</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>            
                    </Link>
                  </LinkRoll> */}



                </div>

            </div>

    </>
  )
}

export default Section2