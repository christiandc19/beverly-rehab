import React from 'react'
// import ServicesSection from '../services/ServicesSection';
import ContactForm from '../contact/ContactForm';
import Gallery from '../gallery/Gallery';
import Section1 from '../section1/Section1'
import Section2 from '../section2/Section2'



const home = () => {
  return (
    <>
    <Section1 />
    <Gallery />    
    <Section2 />
    {/* <ServicesSection /> */}
    <ContactForm />
    </>
  )
}

export default home
