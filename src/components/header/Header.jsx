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
        <h5 className="text-light"> Recherche contrat d'apprentissage Ingénieur Electronique Informatique</h5>
        <h5 className="text-light">de 3 ans Polytech Sorbonne</h5>
        <h5 className="text-light">1 semaine en entreprise / 1 semaine en école</h5>
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