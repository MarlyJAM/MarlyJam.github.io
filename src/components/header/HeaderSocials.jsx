import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import{BsGithub} from 'react-icons/bs'
import{FaGoogleDrive} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/' target='_blank'><BsLinkedin/></a>
        <a  href='https://github.com/' target='_blank'><BsGithub/></a>
        <a  href='https://www.hellowork.com/fr-fr/' target='_blank'><FaGoogleDrive/></a>
    </div>
  )
}

export default HeaderSocials