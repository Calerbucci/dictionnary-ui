import React from 'react'
import '../Header/Header.css'

function Header() {
  return (
    <div className='header_container'>
      <a href="#definition" className="active">Definition</a>
      <a href="#quotes">Quotes</a>
      <a href="#sentence">Sentences</a>
      <a href="#synonym">Synonym</a>
      <a href="#language">English/Chinese</a>
    </div>
  )
}

export default Header
