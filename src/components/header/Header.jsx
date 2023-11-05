import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from './../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Salut , je suis</h5>
        <h1>MASSINGA LOEMBE Marguerite Helène</h1>
        <h5 className="text-light">étudiante en 2ème année BUT GEII option Electronique et Systèmes Embarqués</h5>
        <h5 className="text-light">recherche contrat d’apprentissage de 2 ans </h5>
        <h5 className="text-light">rythme 1 semaine en entreprise /1 semaine en IUT</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
            <img src={ME} alt="me" />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header