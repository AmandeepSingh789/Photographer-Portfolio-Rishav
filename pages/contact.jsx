import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
const contact = () => {
  return (
    <div id='form'>
       <Hero heading='Contact' message='Submit the form below for more work and quotes.' button={false} />
      <Contact />
    </div>
  )
}

export default contact