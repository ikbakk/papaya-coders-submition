import React from 'react'

const TestimonialsCard = ({ name, occupation }) => {
  return (
    <>
      <figure>
        <img
          src='../assets/team.jpg'
          className='rounded-circle'
          width='80'
          height='80'
        />
      </figure>
      <div>
        <h3>{name}</h3>
        <p>{occupation}</p>
      </div>
    </>
  )
}

export default TestimonialsCard
