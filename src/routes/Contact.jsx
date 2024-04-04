import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Form from '../components/Form'
const Contact = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='CONTACT' text='We will reach you soon!'/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default Contact