import React from 'react'
import './about.css'
import ME from '../../assets/me (1).jpg'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import{GoProject} from 'react-icons/go'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="Image Of Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>No Work Experience</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>0 Clients</small>
            </article>
            <article className="about__card">
              <GoProject className='about__icon'/>
              <h5>Projects</h5>
              <small>5+</small>
            </article>
          </div>
          <p>
          Hello, My name is Anuj Kumar, and I'm a Engineering Student under-graduate with a strong interest in software development and problem solving. I've been recognised for my academic achievements as well as my ability to collaborate and communicate effectively with team members throughout my academic career. 
          </p>
          <p>
          In respective field, I collaborated as an FullStack Developer, building Website with technologies such as the Reactjs,NodeJs,express js,Mongodb. In addition, and I'm well-versed in data structures and algorithms. My experience has allowed me to hone my teamwork, problem-solving, and communication abilities.
          </p>
         
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About