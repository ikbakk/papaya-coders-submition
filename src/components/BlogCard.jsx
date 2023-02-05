import React from 'react'

const BlogCard = ({ title, img, description, posted }) => {
  return (
    <div>
      <div
        id='blog-card'
        className='card rounded-0 bg-dark shadow text-light'
        style={{ width: '18rem', height: '31rem' }}>
        <figure className='duration-300'>
          <img src={img} className='card-blog-img duration-300' alt='...' />
        </figure>
        <div className='card-body justify-content-between d-flex flex-column'>
          <h5 className='card-title fw-bold text-red spacing-2'>{title}</h5>
          <p className='card-text'>{description}</p>
          <a href='#' className='btn btn-danger rounded-0 bg-red'>
            Read More &gt;
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
