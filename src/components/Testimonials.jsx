import React, { useState } from 'react'
import TestimonialsCard from './TestimonialsCard'
import TestimonialsDetail from './TestimonialsDetail'

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    score: 9,
    title: 'This is really good',
    occupation: 'Photographer'
  },
  {
    id: 2,
    name: 'John Doe',
    score: 9.8,
    title: 'They have everything',
    occupation: 'Film Maker'
  },
  {
    id: 3,
    name: 'Jane Doe',
    score: 9,
    title: 'Never got service like this place before',
    occupation: 'Wedding videographer'
  }
]

const Testimonials = () => {
  const [selected, setSelected] = useState(1)

  return (
    <section
      id='testimonials'
      className='py-5 px-2 px-md-5 w-100 bg-light d-flex flex-column justify-content-center align-items-center'>
      <h1 className='text-start w-100 fw-bold text-dark-outline text-light text-uppercase'>
        Testimonials
      </h1>
      <h3 className='text-start text-dark w-100 py-3 fw-light'>
        What other people said about us
      </h3>

      <div className='d-flex py-5 d-md-flex flex-column flex-md-row w-100 justify-content-evenly gap-5'>
        <div className='w-100 d-flex flex-column gap-2 px-4'>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              onClick={() => setSelected(testimonial.id)}
              className='d-flex gap-3 pointer px-4 pb-1 pt-4 align-items-center bg-dark text-light testi-card duration-300'>
              <TestimonialsCard {...testimonial} />
            </div>
          ))}
        </div>
        <div className='w-100 px-4 py-2 text-dark'>
          {testimonials
            .filter((e) => e.id === selected)
            .map((testimonial) => (
              <TestimonialsDetail key={testimonial.id} {...testimonial} />
            ))}
        </div>

        <div></div>
      </div>
    </section>
  )
}

export default Testimonials
