import React from 'react'
import ServicesSection from '../services/ServicesSection';
import ContactForm from '../contact/ContactForm';
import Gallery from '../gallery/Gallery';
// import Section2 from '../section2/Section2'
import Whoweare from '../Whoweare/Whoweare'



const home = () => {
  return (
    <>
    <Whoweare />
    <Gallery />    
    {/* <Section2 /> */}
    <ServicesSection />
    <ContactForm />
    </>
  )
}

export default home
