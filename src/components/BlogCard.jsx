import React from 'react'

const BlogCard = ({ title, img, description, posted }) => {
  return (
    <div>
      <div className='card rounded-4' style={{ width: '18rem' }}>
        <img src={img} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
          <a href='#' className='btn btn-danger'>
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
