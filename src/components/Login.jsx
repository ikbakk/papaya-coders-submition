// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineMail, MdLock } from 'react-icons/md'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Login = () => {
  // const [isHover, setIsHover] = useState(false)

  // const hover = isHover === true ? 'w-100' : 'w-75'

  return (
    <section
      id='login'
      className='vh-100 bg-dark text-light d-flex flex-column justify-content-center align-items-center px-4 pt-5'>
      <div className='bg-light rounded-3 py-4 px-5 text-danger position-relative '>
        <Link
          to='/'
          className='position-absolute login-arrow nav-link link-danger align-items-center d-flex gap-2'>
          <AiOutlineArrowLeft size={18} />
          <h6 className='pt-2'>Back</h6>
        </Link>
        <figure className='d-flex justify-content-center'>
          <img width={72} src='../assets/logo.png' alt='log' />
        </figure>
        <div className=' text-center'>
          <h2 className='fw-bolder'>Welcome Back</h2>
          <p>Enter Your credentials to access your account</p>
        </div>
        <form className=''>
          <div>
            <label className='form-label fw-bold'>Email:</label>
            <div className='input-group mb-3'>
              <span className='input-group-text text-danger' id='basic-addon1'>
                <MdOutlineMail size={18} />
              </span>
              <input
                type='text'
                required
                className='form-control'
                placeholder='youremail@example.com'
                aria-label='youremail@example'
                aria-describedby='basic-addon1'
              />
            </div>
          </div>
          <div>
            <label className='form-label fw-bold'>Password:</label>
            <div className='input-group mb-3'>
              <span className='input-group-text text-danger' id='basic-addon1'>
                <MdLock size={18} />
              </span>
              <input
                type='email'
                required
                className='form-control'
                placeholder='Min. 8 characters'
                aria-label='Min. 8 characters'
                aria-describedby='basic-addon1'
              />
            </div>
          </div>
        </form>
        <div className='w-100 d-flex flex-column align-items-center justify-content-center gap-1'>
          <button
            type='button'
            // onMouseEnter={() => setIsHover(true)}
            // onMouseLeave={() => setIsHover(false)}
            className={`btn btn-danger w-75`}>
            Login
          </button>
          <div>
            <p className='pt-3'>Don't have an account?</p>
          </div>
          <Link
            className='w-100 d-flex justify-content-center nav-link'
            to='/register'>
            <button
              type='button'
              // onMouseEnter={() => setIsHover(true)}
              // onMouseLeave={() => setIsHover(false)}
              className={`btn btn-outline-danger w-75`}>
              Register
            </button>
          </Link>
        </div>
      </div>
      <div className='d-flex gap-2 py-2'>
        <p>Forgot your password? </p>
        <a className='nav-link link-danger'>Reset Password</a>
      </div>
    </section>
  )
}

export default Login
