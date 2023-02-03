import React from 'react'
import TestimonialsCard from './TestimonialsCard'
import TestimonialsCardActive from './TestimonialsCardActive'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'

const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className='py-5 w-100 d-flex flex-column justify-content-center align-items-center'>
      <h1 className='text-center text-danger fw-bold'>Testimonials</h1>

      <div className='container'>
        <div
          id='testi'
          className='carousel slide'
          data-bs-touch='true'
          data-bs-ride='carousel'
          data-pause='hover'
          data-interval='5000'
          data-duration='2000'>
          <div className='carousel-inner py-4'>
            <TestimonialsCardActive />
            <TestimonialsCard />
          </div>
          <div className='w-100 d-flex justify-content-center gap-5'>
            <button
              className='btn btn-danger'
              data-bs-slide='prev'
              type='button'
              data-bs-target='#testi'>
              <span className='carousel-control-prev-icon'></span>
              <span class='visually-hidden'>Previous</span>
            </button>
            <button
              className='btn btn-danger'
              data-bs-slide='next'
              type='button'
              data-bs-target='#testi'>
              <span className='carousel-control-next-icon'></span>
              <span class='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
