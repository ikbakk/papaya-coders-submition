import React from 'react'

const FAQList = ({ id, title, description }) => {
  return (
    <>
      <div className='accordion-item'>
        <h2 className='accordion-header' id={id}>
          <button
            className='accordion-button collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target={`#flush-${id}`}
            aria-expanded='false'
            aria-controls={`flush-${id}`}>
            {title}
          </button>
        </h2>
        <div
          id={`flush-${id}`}
          className='accordion-collapse collapse'
          aria-labelledby={id}
          data-bs-parent='#faq'>
          <div className='accordion-body'>{description}</div>
        </div>
      </div>
    </>
  )
}

export default FAQList
