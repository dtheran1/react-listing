import React from 'react'
import './Home.css'
import Header from '../../components/header/Header'

function Home() {
  return (
      <div className='home-page'>
          <Header />
          <p>
            it's HomePage
          </p>
      </div>
  )
}

export default Home