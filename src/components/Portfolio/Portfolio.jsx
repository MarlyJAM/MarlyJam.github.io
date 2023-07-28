import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id:1,
    image : IMG1,
    title : 'Site web proposant deux jeux(en cours de réalisation avec react js).',
    github:'https://github.com/MarlyJAM/Dekasi.git',
    demo : 'https://github.com'
  },
  {
    id:2,
    image : IMG2,
    title : 'Jeu de survie en 2d (en cours de réalisation avec python).',
    github:'https://github.com/MarlyJAM/JEU-PYTHON.git',
    demo : 'https://github.com'
  },
  {
    id:3,
    image : IMG3,
    title : "Site composé d'un forum et d'un blog (en cours d'amélioration avec symfony).",
    github:'https://github.com/MarlyJAM/APPBTS.git',
    demo : 'https://github.com'
  },
  {
    id:4,
    image : IMG4,
    title : "Générateur de mot de passe (en cours d'amélioration avec python).",
    github:'https://github.com/MarlyJAM/motdepasse-python/blob/master/password_generating.py',
    demo : 'https://github.com'
  },
  {
    id:5,
    image : IMG5,
    title : 'Maquette pour une application de gestion de stock (réalisée avec figma).',
    github:'https://www.figma.com/file/Ss9xiCUWo6oWRV0pVZ8SIZ/APPMOBILE?type=design&node-id=0%3A1&mode=design&t=jBAV7EpOx9uc0SGs-1',
    demo : 'https://www.figma.com/proto/Ss9xiCUWo6oWRV0pVZ8SIZ/APPMOBILE?type=design&node-id=2-164&t=KX6hM4f1SrXYC0Ae-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A164&mode=design'
  },
  {
    id:6,
    image : IMG6,
    title : "Portfolio personnel (en cours d'amélioration avec react js).",
    github:'https://github.com/MarlyJAM/Portfolio.git',
    demo : 'https://github.com'
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mes récents travaux</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn">Github</a>
                  <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio