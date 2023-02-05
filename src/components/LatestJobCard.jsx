import { IoLocationSharp } from 'react-icons/io5'
import { BiTimeFive } from 'react-icons/bi'

const LatestJobCard = ({ title, posted, location, description, link }) => {
  return (
    <div id='job-card' className='py-1 col'>
      <div className='card rounded-0 bg-dark'>
        <div className='card-body d-flex flex-column align-items-center flex-md-row gap-3'>
          <figure className='d-fle align-items-center'>
            <img
              className='fit-cover'
              src='../assets/latest-jobs.jpg'
              alt='latestjob'
            />
          </figure>
          <div className='text-light w-100'>
            <div className='d-flex justify-content-between'>
              <h5 className='card-title'>{title}</h5>
              <div className='d-flex gap-2'>
                <div>
                  <IoLocationSharp size={22} />
                </div>
                <p>{location}</p>
              </div>
            </div>
            <div className='d-flex justify-content-between'>
              <div className='d-flex gap-2'>
                <div>
                  <BiTimeFive size={22} />
                </div>
                <p>{posted}</p>
              </div>
            </div>
            <div className='d-flex justify-content-center w-100'>
              <a
                href={`/${link}`}
                className='btn btn-outline-danger w-75 rounded-0'>
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
