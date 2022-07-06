import React from 'react'
import Contact from '../components/Contact.jsx'
import Hero from '../components/Hero.jsx'
const contact = () => {
  return (
    <div>
       <Hero heading='Contact' message='Submit the form below for more work and quotes.' button={false} />
      <Contact />
    </div>
  )
}

export default contact