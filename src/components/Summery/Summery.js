import React from 'react'
import './Summery.css'

const Summery = () => {
  return (
    <section id="summery">
      <div className="summery-heading" data-aos="fade-right">
        <strong>My Skillset</strong>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <a href="#!" download className='btn-link'>
          Get CV <i className="fa-solid fa-download"></i>
        </a>
      </div>
      <div className="summery-details" data-aos="fade-left">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nam.
        </p>
      </div>
    </section>
  )
}

export default Summery