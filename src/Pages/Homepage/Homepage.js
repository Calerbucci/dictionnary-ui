import React from 'react'
import Header from '../../Components/Header/Header'
import Home from '../../Components/Home/Home'
import '../Homepage/Homepage.css'

function Homepage() {
  return (
        <div className='homepage'>
            <Header/>
            <Home/>
        </div>
  )
}

export default Homepage