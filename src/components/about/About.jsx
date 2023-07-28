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
              <small>+2 </small>
            </article>
            <article className="about__card">
              <BsFolder2Open className='about__icon'/>
              <h5>Projets</h5>
              <small>+20 Réalisés</small>
            </article>
          </div>
          <p> Salut, je suis Marguerite, j'aime bien lire et aussi imaginer .
             Actuellement, je suis à la recherche d'une alternance donc ne pas hésiter
             à me contacter, vous trouverez plus bas mes compétences et coordonnées. 
             Sur ce je vous souhaite une bonne journée . Bon appétit !
          </p>
          <a href='#contact' className='btn btn-primary'>Discutons</a>

        </div>
      </div>
    </section>
  )
}

export default About