import React from 'react'
import { MdOutlineEmojiPeople, MdOutlineTravelExplore } from 'react-icons/md'
import { FiTool } from 'react-icons/fi'

const Hero = () => {
  return (
    <section>
      <video
        muted
        loop
        autoPlay
        preload='auto'
        className='w-100 position-absolute top-0 hero-bg'>
        <source type='video/mp4' src='../assets/hero.mp4' />
      </video>
      <div className='hero-overlay position-absolute w-100 vh-100'></div>
      <div className='vh-100'>
        <div className='hero-content d-flex flex-column align-items-center py-5 px-2 px-md-5 text-center justify-content-between'>
          <h1 className='fw-bolder text-uppercase text-light hero-title pt-5'>
            Hire best talent for your events online !
          </h1>
          <div>
            <button className='btn btn-danger px-4 py-3 rounded-0 btn-lg fs-3'>
              Post your Requirement
            </button>
          </div>
          <div className='fs-6 pb-5 d-flex justify-content-between justify-content-md-around w-100'>
            <div className='nav-link link-light'>
              <div className='d-flex justify-content-center'>
                <MdOutlineEmojiPeople size={72} />
              </div>
              <p className='pt-2 pt-md-3 px-2 px-md-0'>
                Post a job and hire a talent
              </p>
            </div>
            <div className='nav-link link-light'>
              <div className='d-flex justify-content-center'>
                <MdOutlineTravelExplore size={72} />
              </div>
              <p className='pt-2 pt-md-3 px-2 px-md-0'>
                Browse and apply Assignment
              </p>
            </div>
            <div className='nav-link link-light'>
              <div className='d-flex justify-content-center'>
                <FiTool size={72} />
              </div>
              <p className='pt-2 pt-md-3 px-2 px-md-0'>
                Sale/ Rent an Equiqment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
