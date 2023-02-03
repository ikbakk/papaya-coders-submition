import React from 'react'

const Subscribe = () => {
  return (
    <section className='py-5 position-relative d-flex justify-content-center'>
      <div
        id='subscribe'
        className='bg-danger position-absolute p-2 px-4 py-md-3 px-md-5 rounded-4 d-flex flex-column align-items-center'>
        <h1 className='text-light fw-light text-center fs-2'>
          Subscribe to Our News Letter
        </h1>
        <form className='input-group w-75'>
          <span
            className='input-group-text bg-dark text-light'
            id='basic-addon1'>
            Email
          </span>
          <input
            type='text'
            className='form-control bg-dark text-light'
            placeholder='Youremail@example.com'
            aria-label='Youremail@example.com'
            aria-describedby='basic-addon1'
          />
        </form>
      </div>
    </section>
  )
}

export default Subscribe
