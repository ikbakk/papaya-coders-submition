import React from 'react'
import { Link } from 'react-router-dom'
import {
  MdOutlineMail,
  MdLock,
  MdOutlineDriveFileRenameOutline
} from 'react-icons/md'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const form = [
  {
    label: 'Name',
    placeholder: 'John Doe',
    type: 'text',
    icon: <MdOutlineDriveFileRenameOutline size={18} />
  },
  {
    label: 'Email',
    placeholder: 'youremail@example.com',
    type: 'email',
    icon: <MdOutlineMail size={18} />
  },
  {
    label: 'Password',
    placeholder: 'Min. 8 characters',
    type: 'password',
    icon: <MdLock size={18} />
  },
  {
    label: 'Confirm Password',
    placeholder: 'Min. 8 characters',
    type: 'password',
    icon: <MdLock size={18} />
  }
]

const Register = () => {
  return (
    <section
      id='register'
      className='vh-100 bg-dark text-light d-flex flex-column justify-content-center align-items-center px-4 pt-5'>
      <div className='bg-light rounded-3 py-3 px-5 text-danger position-relative'>
        <Link
          to='/'
          className='position-absolute login-arrow nav-link link-danger align-items-center d-flex'>
          <AiOutlineArrowLeft size={18} />
          <h6 className='pt-2'>Back</h6>
        </Link>
        <figure className='d-flex justify-content-center'>
          <img width={72} src='../assets/logo.png' alt='log' />
        </figure>
        <div className=' text-center'>
          <h2 className='fw-bolder'>Sign Up</h2>
        </div>
        <form className=''>
          {form.map((form, index) => (
            <div key={index}>
              <label className='form-label fw-bold'>{form.label}:</label>
              <div className='input-group mb-3'>
                <span
                  className='input-group-text text-danger'
                  id='basic-addon1'>
                  {form.icon}
                </span>
                <input
                  type={form.type}
                  className='form-control'
                  placeholder={form.placeholder}
                  aria-label={form.placeholder}
                  aria-describedby='basic-addon1'
                />
              </div>
            </div>
          ))}
        </form>
        <div className='w-100 d-flex flex-column align-items-center justify-content-center gap-1'>
          <button type='button' className={`btn btn-danger w-75`}>
            Register
          </button>
        </div>
      </div>
      <div className='d-flex gap-2 py-2'>
        <p>Have an account? </p>
        <Link to='/login' className='nav-link link-danger'>
          Login
        </Link>
      </div>
    </section>
  )
}

export default Register
