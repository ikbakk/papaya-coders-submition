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
  },
  {
    link: '#',
    title: 'Need A Photographer 9',
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
      setIsNextDisabled(true)
    }

    if (page <= 0) {
      setIsPrevDisabled(true)
    } else {
      setIsPrevDisabled(false)
    }
  }, [page])

  return (
    <section id='latest-job' className='py-5'>
      <div className='container'>
        <h1 className='text-center'>Latest Job</h1>
        <div className='row row-cols-md-2 row-cols-1 px-5 row-gap-3'>
          {jobs.slice(page * 4, 4 * (page + 1)).map((job, index) => (
            <LatestJobCard key={index} {...job} />
          ))}
        </div>
        <button disabled={isNextDisabled} onClick={nextPage}>
          next
        </button>
        <button disabled={isPrevDisabled} onClick={prevPage}>
          prev
        </button>
      </div>
    </section>
  )
}

export default LatestJob
