import React from "react";
import { Link as LinkRoll } from "react-scroll";
import { Link } from 'react-router-dom';

// import Fade from 'react-reveal/Fade';
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div class="hero ">
        <div class="row">
          <div class="col-lg-12">


            <div id="content">


              <div className="hero-text">
                <div className="hero-btn">
                <h1>Beverly Rehab</h1>
                <h2>LIVE SOBER. HEAL STRONGER.</h2>
                <p>Transitional sober housing focused on healing and long-term recovery.</p>
                  <LinkRoll
                      activeClass="active"
                      to="top"
                      spy={true}
                      smooth={true}
                      duration={500}
                      >
                        <Link to="/contact">
                          <button> Call Us</button>
                        </Link>
                  </LinkRoll>              
                </div>
            </div>
            </div>

            <ul className="slideshow">
              <li>
                <div className="slideshow-caption ">
                </div>
              </li>

              <li>
                <div className="slideshow-caption">
                </div>
              </li>
              <li>
                <div className="slideshow-caption">
                </div>
              </li>
              <li>
                <div className="slideshow-caption">
                </div>
              </li>
              <li>
                <div className="slideshow-caption">
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
