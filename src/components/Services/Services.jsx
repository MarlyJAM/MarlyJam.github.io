import React from 'react'
import './services.css'
import {GiCheckMark} from 'react-icons/gi'


const Services = () => {
  return (
   <section id='services'>
    <h5>Qu'est-ce-que j'offre?</h5>
    <h2>Services</h2>

    <div className='container services__container'>
      <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>
        <ul className="service__list">
          <li>
            <GiCheckMark className='service__list-icon'/>
            <p>Wireframing</p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon'/>
            <p>Maquettage</p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon'/>
            <p>Prototypage</p>
          </li>
        </ul>
      </article>
      {/* END OF UI/UX DESIGN */}
      <article className="service">
        <div className="service__head">
          <h3>Developpement Web</h3>
        </div>
        <ul className="service__list">
          <li>
            <GiCheckMark className='service__list-icon'/>
            <p>Réalisation de site avec Symfony</p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon'/>
            <p>Réalisation de site avec Boostrap</p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon'/>
            <p>Réalisation de site avec React js</p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon'/>
            <p>Gestion des données avec phpMyAdmin</p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon'/>
            <p>Création d'api rest</p>
          </li>
        </ul>
      </article>
      {/* END OF WEB DEVELOPMENT */}
      <article className="service">
        <div className="service__head">
          <h3>Dev Desktop/Mobile</h3>
        </div>
        <ul className="service__list">
          <li>
            <GiCheckMark className='service__list-icon'/>
            <p>Réalisation d'application mobile avec xamarin</p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon'/>
            <p>Réalisation d'application desktop avec python</p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon'/>
            <p>Réalisation d'application mobile avec Kotlin</p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon'/>
            <p>Réalisation d'application mobile avec Android</p>
          </li>
          <li>
            <GiCheckMark className='service__list-icon'/>
            <p>Réalisation d'application desktop avec windows forms</p>
          </li>
        </ul>
      </article>
      {/* END OF Desktop/Mobile DEVELOPMENT */}
    </div>
   </section>
  )
}

export default Services