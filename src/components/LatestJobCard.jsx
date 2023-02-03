import { IoLocationSharp } from 'react-icons/io5'
import { BiTimeFive } from 'react-icons/bi'

const LatestJobCard = ({ title, posted, location, description, link }) => {
  return (
    <div className='py-3'>
      <div className='card'>
        <div className='card-body d-flex flex-column flex-md-row gap-3'>
          <figure className='d-flex d-md-block justify-content-center'>
            <img src='../assets/latest-jobs.png' alt='latestjob' />
          </figure>
          <div>
            <h5 className='card-title'>{title}</h5>
            <div className='d-flex justify-content-between'>
              <div className='d-flex gap-2'>
                <div>
                  <BiTimeFive size={22} />
                </div>
                <p>{posted}</p>
              </div>
              <div className='d-flex gap-2'>
                <div>
                  <IoLocationSharp size={22} />
                </div>
                <p>{location}</p>
              </div>
            </div>
            <p className='card-text'>{description}</p>
            <div className='d-flex justify-content-center w-100'>
              <a href={`/${link}`} className='btn btn-danger w-75'>
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestJobCard
