import React from 'react'

const TestimonialsCardActive = () => {
  return (
    <div
      className='carousel-item active bg-danger bg-opacity-25 rounded-5'
      data-bs-interval='3000'>
      <div className='text-center py-3'>
        <blockquote className='fs-3 fw-light'>
          First Slide Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </blockquote>
        <img
          src='../assets/team.jpg'
          className='rounded-circle'
          width='160'
          height='160'
        />
        <p className='text-danger fw-bolder fs-3'>John Smith</p>
        <p className='text-danger fw-light'>CEO, Lorem Ipsum</p>
      </div>
    </div>
  )
}

export default TestimonialsCardActive
