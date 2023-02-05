import React from 'react'
import BlogCard from './BlogCard'
import Header from './Header'
import Footer from './Footer'

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
    <>
      <Header />
      <section className='py-5 px-2 px-md-5 bg-dark w-100 d-flex flex-column align-items-center'>
        <h1 className='text-center fw-bold text-uppercase text-red-outline text-dark'>
          Our Blog
        </h1>
        <h4 className='text-red text-center fw-lighter w-50 py-5'>
          Learn about Photography and Videography, discover our latest products
          updates, partnership announcements, user stories, and more.
        </h4>
        <div className='row gap-2 py-5'>
          {blogPosts.map((post, index) => {
            return (
              <div key={index} className='col d-flex justify-content-center'>
                <BlogCard {...post} />
              </div>
            )
          })}
        </div>
        <nav aria-label='Page navigation'>
          <ul className='pagination'>
            <li className='page-item'>
              <a className='page-link rounded-0 link-dark' href='#'>
                Previous
              </a>
            </li>
            <li className='page-item '>
              <a className='page-link rounded-0 link-dark' href='#'>
                1
              </a>
            </li>
            <li className='page-item '>
              <a className='page-link rounded-0 link-dark' href='#'>
                2
              </a>
            </li>
            <li className='page-item '>
              <a className='page-link rounded-0 link-dark' href='#'>
                3
              </a>
            </li>
            <li className='page-item '>
              <a className='page-link rounded-0 link-dark' href='#'>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </section>

      <div className='d-flex justify-content-around w-100 py-5 bg-light text-dark'>
        <div className='py-5'>
          <h1 className='text-dark-outline text-light fw-bold text-uppercase'>
            Stay up to date !
          </h1>
          <p>Subscribe to our nesletter to get inbox notifications.</p>
        </div>
        <div className='py-5'>
          <form className='input-group mb-3 flex-column'>
            <label className='form-label fw-bold'>
              Sign up to our newsletter
            </label>
            <div className='d-flex'>
              <input
                type='text'
                className='form-control rounded-0'
                placeholder='Enter your email'
                aria-label='Enter your email'
                aria-describedby='button-addon2'
              />
              <button
                className='btn btn-outline-dark rounded-0'
                type='button'
                id='button-addon2'>
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blogs
