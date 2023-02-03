import React from 'react'

const LatestJobCard = ({ title, posted, location, description, link }) => {
  return (
    <div className='py-3'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href='#' className='btn btn-primary'>
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  )
}

export default LatestJobCard
