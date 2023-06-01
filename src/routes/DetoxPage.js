import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Detox from '../components/detox/Detox'
import DetoxSection from '../components/detox/DetoxSection'

const ContactPage = () => {
    return (
        <>
            <Navbar/>
            <Detox />
            <DetoxSection />
            <Footer />   
        </>
    )
}

export default ContactPage