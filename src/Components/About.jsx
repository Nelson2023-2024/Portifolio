import React from 'react'
import Laptop from '../assets/laptop.jpg'

function About() {
  return (
    <>
      <section className='about__section'>
        <div className="container">
          {/* image */}
          <div className='about__img'>
            <img src={Laptop} alt="" />
          </div>
          {/* text-content */}
          <div className='about__data'>
            <h2>ABOUT ME</h2>
            <h3>A dedicated Front-end Developer based in Nairobi, Kenya</h3>
            <p>As a junior Front-End Developer I posses an impressive arsenal of skills in HTMI, CSS, JavaScript, React(basic), Tailwind, Bootstrap. I excel in designing and maintaining responsive websites that offer smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean, well documented and utilize cutting edge development tools and techinques . I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About