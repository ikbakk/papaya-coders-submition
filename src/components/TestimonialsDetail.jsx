import React from 'react'

const TestimonialsDetail = ({ title, name, score }) => {
  return (
    <div className='d-flex flex-column justify-content-around h-100'>
      <h3 className='fw-bold'>{title}</h3>
      <p className='fw-light fst-italic'>by - {name}</p>
      <h2>{score}/10</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  )
}

export default TestimonialsDetail
