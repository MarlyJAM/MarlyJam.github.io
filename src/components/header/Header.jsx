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
        <h5 className="text-light">Developpeur web/Mobile</h5>
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