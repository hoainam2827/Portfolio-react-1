import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-heading" data-aos="flip-left">
          <strong>About me</strong>
          <h3>Designing with passion for Problem Solving</h3>
          <a href="tel:0935373148" className='btn-link'>
            0935-373-148 <i className="fa-solid fa-phone-flip"></i>
          </a>
        </div>

        <div className="about-details" data-aos="flip-right">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias, esse commodi fugit eveniet reiciendis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias, esse commodi fugit eveniet reiciendis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias, esse commodi fugit eveniet reiciendis.</p>
        </div>
      </div>
    </section>
  )
}

export default About