import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">MARLY J</a>
      <ul className="permalinks">
        <li><a href='#'>accueil</a></li>
        <li><a href='#about'  >à propos</a></li>
        <li><a href='#skills' >connaissances</a></li>
        <li><a href='#services'  >services</a></li>
        <li><a href='#portfolio' >portfolio</a></li>
        <li><a href='#contact'  >contacts</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100080205086864"><FaFacebookF/></a>
        <a href="https://github.com/MarlyJAM"><BsGithub/></a>
        <a href="https://www.youtube.com/watch?v=G-Cr00UYokU&t=5417s"><BsYoutube/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MARLY J. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer