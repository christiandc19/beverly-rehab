import React from 'react'
import './Topbar.css'

import { MdLocationPin } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';


const Topbar = () => {
  return (
    <div className='topbar' name='top'>
            <div className='topbar-content container'>
                <div className='address bar-box1 top-hide'>
                    <p><span><MdLocationPin />&nbsp;</span>1800 Vine Street, Los Angeles CA 90028</p>
                </div>

                <div className='email bar-box2  top-hide'>
                    <p><span><FiMail />&nbsp;</span> info@beverlyrehab</p>
                </div>

                <div className='number bar-box3'>
                    <p><span><AiOutlinePhone />&nbsp;</span> <a href="tel:4244533866"> +1 (424) 453-3866 </a></p>
                </div>

            </div>
      
    </div>
  )
}

export default Topbar
