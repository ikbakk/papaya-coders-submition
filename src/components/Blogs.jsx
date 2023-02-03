import React from 'react'
import BlogCard from './BlogCard'

const blogPosts = [
  {
    title: 'Wildlife Photography',
    posted: '25 Jan 2023',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore mag',
    img: '../assets/blogs-1.png'
  },
  {
    title: 'Night Life',
    posted: '25 Jan 2023',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore mag',
    img: '../assets/blogs-2.png'
  },
  {
    title: 'Macro',
    posted: '25 Jan 2023',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore mag',
    img: '../assets/blogs-3.png'
  },
  {
    title: 'Architecture',
    posted: '25 Jan 2023',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore mag',
    img: '../assets/blogs-4.png'
  }
]

const Blogs = () => {
  return (
    <section className='pt-5 px-2 px-md-5'>
      <h1 className='text-center text-danger fw-bold'>Blogs</h1>
      <div className='row gap-2 py-5'>
        {blogPosts.map((post, index) => {
          return (
            <div key={index} className='col d-flex justify-content-center'>
              <BlogCard {...post} />
            </div>
          )
        })}
      </div>
      <h3 className='text-danger text-center text-decoration-underline'>
        <a>View More</a>
      </h3>
    </section>
  )
}

export default Blogs
