import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services__container">
          <article className='services'>
            <div className='service__head'>
              <h3>Web Development</h3>
            </div>

            <ul className='service__list'>
            <li>
                <BiCheck className='service__list-icon' />
                <p>Designing</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Development</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Enhancement</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>I integrate the developed Web with the back-end web service</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>All supported Website</p>
              </li>
            </ul>
          </article>
          {/* End of Android Development */}
          <article className='services'>
            <div className='service__head'>
              <h3>Problem Solving Skills</h3>
            </div>

            <ul className='service__list'>
           
              <li>
                <BiCheck className='service__list-icon' />
                <p>OOPs Concept</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Learning skills quickly</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Object Oriented programmings such as core Java SE,Excellent analytical problem solving communication and inter-personal skills</p>
              </li>
              
             </ul>
          </article>
          {/* End of DSA */}
          <article className='services'>
            <div className='service__head'>
              <h3>Skills</h3>
            </div>

            <ul className='service__list'>
            <li>
                <BiCheck className='service__list-icon' />
                <p>Javascript</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Core Java</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Html</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Css</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Next.Js</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Firebase</p>
              </li>
            </ul>
          </article>
          {/* End of Android Development */}
        </div>
      </section>
    </section>
  )
}

export default Services