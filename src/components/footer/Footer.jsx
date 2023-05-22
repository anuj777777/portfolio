import React from 'react'
import './footer.css'
import{BsLinkedin} from 'react-icons/bs'
import{GrFacebook} from 'react-icons/gr'
import{AiFillInstagram} from 'react-icons/ai'
import{FaTwitterSquare} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <h1>CODENEMY</h1>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Project</a></li>

        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/anuj-kumar-218b741b8/"><BsLinkedin/></a>
        <a href="https://www.facebook.com/profile.php?id=100062541995545"><GrFacebook/></a>
        <a href="https://instagram.com/anuj7.900"><AiFillInstagram/></a>
        <a href="https://twitter.com/@ayushman45679"><FaTwitterSquare/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Code Enemy. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer