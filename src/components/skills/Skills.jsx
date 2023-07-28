import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>Quelles compétences j'ai?</h5>
      <h2>Mon expérience</h2>
      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Developpemnt Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon" />
              <div>
                <h4>BOOSTRAP</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon" />
              <div>
                <h4>REACT JS</h4>
                <small className='text-light'>Débutant</small>
              </div>
            </article>
          </div>
        </div>
        {/* END FRONTEND */}
        <div className="experience__backend">
          <h3>Developpemnt backend</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon" />
              <div>
                <h4>MYSQL</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon" />
              <div>
                <h4>PYTHON</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon" />
              <div>
                <h4>C#</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill  className="experience__details-icon" />
              <div>
                <h4>JAVA</h4>
                <small className='text-light'>Débutant</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills