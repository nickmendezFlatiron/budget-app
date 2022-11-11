import React from 'react'

import textLogo from "./assets/text-logo.png";


const Footer = () => {
  return (
    <div
      className='d-flex justify-content-center text-light py-4 bg-dark'
    >
      <img src={textLogo} alt="Spend Better Text Logo" className='nav-text-logo'/>
      <div>©2022</div>
    </div>
  )
}

export default Footer