import { useState, useEffect } from 'react'
import LatestJobCard from './LatestJobCard'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

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
  const [page, setPage] = useState(0)
  const [isNextDisabled, setIsNextDisabled] = useState(false)
  const [isPrevDisabled, setIsPrevDisabled] = useState(false)
  const maxPage = Math.ceil(jobs.length / 4)

  const nextPage = () => {
    setPage(page + 1)
  }
  const prevPage = () => {
    setPage(page - 1)
  }

  useEffect(() => {
    if (page * 4 >= jobs.length) {
      setPage(0)
    }

    if (page <= 0) {
      setIsPrevDisabled(true)
    } else {
      setIsPrevDisabled(false)
    }
  }, [page])

  return (
    <section id='latest-job' className='py-5  '>
      <div className='container d-flex position-relative flex-column'>
        <h1 className='text-center'>Latest Job</h1>
        <div className=''>
          <div className='row row-cols-md-2 row-cols-1 px-5 row-gap-3'>
            {jobs.slice(page * 4, 4 * (page + 1)).map((job, index) => (
              <LatestJobCard key={index} {...job} />
            ))}
          </div>
        </div>
      </div>
      <div className='d-flex pt-5 gap-5 justify-content-center'>
        <button
          className='btn btn-light'
          disabled={isPrevDisabled}
          onClick={prevPage}>
          <BsChevronLeft color='#3e3e3e' size={32} />
        </button>
        <button
          className='btn btn-light'
          disabled={isNextDisabled}
          onClick={nextPage}>
          <BsChevronRight color='#3e3e3e' size={32} />
        </button>
      </div>
    </section>
  )
}

export default LatestJob
