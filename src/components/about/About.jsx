import React from 'react'
import './about.css'
import ME from './../../assets/photo.jpg'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import {BsFolder2Open} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Faire connaissance</h5>
      <h2> À propos de moi</h2>
      <div className=' container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt=''/>

          </div>

        </div>
        <div className='about__content'>
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Expérience</h5>
              <small>+2 ans</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Stages</h5>
              <small>+3 </small>
            </article>
            <article className="about__card">
              <BsFolder2Open className='about__icon'/>
              <h5>Projets</h5>
              <small>+20 Réalisés</small>
            </article>
          </div>
          <p> Salut, je suis Marguerite .
            Pourquoi étudier en apprentissage ?
            Tout simplement parceque c'est une opportunité d'acquérir de l'expérience professionnelle
            en apprenant.
            Pourquoi moi ?
            Je suis passionnée par ce que je fais et je m'investie toujours à 100% . 
            Je sais m'adapter et que ce soit en autonomie ou en équipe j'accomplie toujours mes tâches.
          </p>
          <a href='#contact' className='btn btn-primary'>Discutons</a>

        </div>
      </div>
    </section>
  )
}

export default About