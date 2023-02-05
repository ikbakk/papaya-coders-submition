import { useState, useEffect } from 'react'
import LatestJobCard from './LatestJobCard'

const jobs = [
  {
    link: '#',
    title: 'Need A Photographer 1',
    posted: '5 Months ago',
    location: 'Mumbai',
    description:
      'lorem Ipsum Dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    link: '#',
    title: 'Need A Photographer 2',
    posted: '5 Months ago',
    location: 'Mumbai',
    description:
      'lorem Ipsum Dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    link: '#',
    title: 'Need A Photographer 3',
    posted: '5 Months ago',
    location: 'Mumbai',
    description:
      'lorem Ipsum Dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    link: '#',
    title: 'Need A Photographer 4',
    posted: '5 Months ago',
    location: 'Mumbai',
    description:
      'lorem Ipsum Dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    link: '#',
    title: 'Need A Photographer 5',
    posted: '5 Months ago',
    location: 'Mumbai',
    description:
      'lorem Ipsum Dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    link: '#',
    title: 'Need A Photographer 6',
    posted: '5 Months ago',
    location: 'Mumbai',
    description:
      'lorem Ipsum Dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    link: '#',
    title: 'Need A Photographer 7',
    posted: '5 Months ago',
    location: 'Mumbai',
    description:
      'lorem Ipsum Dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    link: '#',
    title: 'Need A Photographer 8',
    posted: '5 Months ago',
    location: 'Mumbai',
    description:
      'lorem Ipsum Dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  }
]

const LatestJob = () => {
  const [viewMore, setViewMore] = useState(false)
  const [cardShown, setCardShown] = useState(3)
  const [buttonText, setButtonText] = useState('View More')

  useEffect(() => {
    if (viewMore === true) {
      setCardShown(jobs.length)
      setButtonText('View Less')
    } else {
      setCardShown(3)
      setButtonText('View More')
    }
  }, [viewMore])

  return (
    <section
      id='latest-job'
      className='py-5 px-2 px-md-5 w-100 overflow-hidden'>
      <div className='d-flex flex-column align-items-center gap-5'>
        <h1 className='text-center pt-5 text-uppercase text-dark-outline text-red'>
          Latest Job
        </h1>
        <div>
          <div className='d-flex flex-wrap px-5 gap-2'>
            {jobs.slice(0, cardShown).map((job, index) => (
              <LatestJobCard key={index} {...job} />
            ))}
          </div>
        </div>
        <div className='w-100 d-flex justify-content-center'>
          <button
            onClick={() => setViewMore(!viewMore)}
            className='text-center fs-3 btn btn-outline-dark rounded-0 px-5'>
            {buttonText}
          </button>
        </div>
      </div>
      <div className='d-flex pt-5 gap-5 justify-content-center'></div>
    </section>
  )
}

export default LatestJob
