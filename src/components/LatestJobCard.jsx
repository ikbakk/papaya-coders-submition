import { IoLocationSharp } from 'react-icons/io5'
import { BiTimeFive } from 'react-icons/bi'
import { useState } from 'react'

const LatestJobCard = ({ title, posted, location, description, link }) => {
  return (
    <div id='job-card'>
      <div className='card rounded-0 bg-dark' style={{ width: '23rem' }}>
        <div className='card-body d-flex flex-column align-items-center flex-md-row gap-3'>
          <figure className='d-none d-md-flex align-items-center'>
            <img
              className='fit-cover'
              src='../assets/latest-jobs.png'
              alt='latestjob'
            />
          </figure>
          <div className='text-light w-100'>
            <div className='d-flex justify-content-between'>
              <h5 className='card-title'>{title}</h5>
              <div className='d-flex d-md-none gap-2'>
                <div>
                  <IoLocationSharp size={22} />
                </div>
                <p>{location}</p>
              </div>
            </div>
            <div className='d-md-flex justify-content-md-between'>
              <p className='d-flex d-md-none'>{description}</p>
              <div className='d-flex gap-1'>
                <div>
                  <BiTimeFive size={22} />
                </div>
                <p>{posted}</p>
              </div>
              <div className='d-md-flex d-none'>
                <div>
                  <IoLocationSharp size={22} />
                </div>
                <p>{location}</p>
              </div>
            </div>
            <div className='d-flex justify-content-center w-100'>
              <a
                href={`/${link}`}
                className='btn btn-outline-danger w-100 rounded-0'>
                More Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestJobCard
