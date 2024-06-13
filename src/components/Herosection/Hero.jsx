import React from 'react'
import './styledHero.css'

function Hero() {
  return (
    <div>
      <section id="hero" className="flex items-center">
        <div className="container ">
          <div className=' '>
            <small className='ml-[300px]   '>TOTAL HEALTH CARE SOLUTION</small>
            <h1 className='ml-[300px]'>Your Most Trusted <br />Health Partner</h1>
            <small className='ml-[300px]'>A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.</small>
          </div>
          <div className="gap-2 flex ml-[300px]">
            <a href={'/doctors'} className="btn-get-started scrollto">Get Started</a>
            <a href={'/track-appointment'} className="btn-get-started scrollto">Track Appointment</a>
          </div>
        </div >
      </section >
    </div >
  )
}

export default Hero