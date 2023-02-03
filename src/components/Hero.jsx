import React from 'react'

const Hero = () => {
  return (
    <section className='overflow-hidden'>
      <video
        muted
        loop
        autoPlay
        preload='auto'
        className='w-100 vh-100 position-absolute hero-bg'>
        <source type='video/mp4' src='../assets/hero.mp4' />
      </video>
      <div className='vh-100 d-flex align-items-center '>
        <div className='hero-overlay position-absolute w-100 vh-100'></div>
        <div className='text-light d-grid col-md-5 col-12 align-items-center p-2 p-md-5 gap-5'>
          <h1 className='h1 fw-bolder text-uppercase hero-title'>
            Hire the best talent for your events online !
          </h1>
          <ul className='h3 d-flex flex-column gap-3'>
            <li>Post a job and hire a talent</li>
            <li>Browse and apply Assignment</li>
            <li>Sale / Rent an Equipment</li>
          </ul>
          <div>
            <button className='btn btn-danger px-5 btn-lg fs-3'>
              Post your Requirement
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
