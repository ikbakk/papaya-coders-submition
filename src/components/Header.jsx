import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'

const navItems = ['Equipment', 'Blogs', 'Plans']
const navAbout = ['About Us', 'Contact Us']

const Header = () => {
  return (
    <header className='w-100 d-flex pb-0 flex-column header-bg sticky-top'>
      <section className='flex-row px-2 px-md-5 d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center gap-4'>
          <figure className='d-flex align-items-center pt-3'>
            <img width={60} src='../assets/logo.png' alt='logo' />
          </figure>
          <nav className='d-none d-md-flex'>
            <ul className='nav'>
              <a href='/#' className='nav-link link-light'>
                <li>Home</li>
              </a>
              <a href='/#hire' className='nav-link link-light'>
                <li>Hire a Talent</li>
              </a>
              <a href='/#equipment' className='nav-link link-light'>
                <li>Sale / Rent</li>
              </a>
              <Link to='/blogs' className='nav-link link-light'>
                <li>Our Blog</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className='gap-2 d-none d-md-flex d-flex'>
          <Link to='/login'>
            <button className='btn-danger btn rounded-0 fw-bold px-5'>
              Login
            </button>
          </Link>
          <Link to='/register'>
            <button className='btn px-5 btn-outline-danger rounded-0 fw-bold'>
              Register
            </button>
          </Link>
        </div>
        <div className='d-md-none'>
          <button
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseNavbar'
            aria-controls='collapseNavbar'
            aria-expanded='false'
            className='d-flex align-items-center btn btn-outline-light'>
            <RxHamburgerMenu size={32} />
          </button>
        </div>
      </section>

      <div
        id='collapseNavbar'
        className='w-100 collapse mobile-header-extended-bg'>
        <nav>
          <ul className='nav flex-column text-center pt-3 fs-5 fw-semibold'>
            <a href='/#' className='nav-link link-light'>
              <li>Home</li>
            </a>
            <a href='/#hire' className='nav-link link-light'>
              <li>Hire a Talent</li>
            </a>
            <a href='/#equipment' className='nav-link link-light'>
              <li>Sale / Rent</li>
            </a>
          </ul>
        </nav>
        <div className='gap-2 pt-2 pb-3 flex-column d-flex align-items-center'>
          <Link className='w-100 d-flex justify-content-center' to='/login'>
            <button className='btn-danger btn fw-bold w-75 rounded-0 px-5'>
              Login
            </button>
          </Link>
          <Link className='w-100 d-flex justify-content-center' to='/register'>
            <button className='btn btn-outline-danger w-75 rounded-0 px-5 fw-bold'>
              Register
            </button>
          </Link>
        </div>
      </div>

      {/* <section className='flex-row px-2 px-md-5 d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center gap-4'>
          <figure>
            <img width={147} src='../assets/logo.png' alt='logo' />
          </figure>
          <nav className='d-none d-lg-flex'>
            <ul className='nav font fs-5 fw-semibold'>
              <li className='nav-item'>
                <a className='nav-link link-dark' href='#'>
                  How It Works
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link link-dark' href='#'>
                  Browse Jobs
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='gap-2 d-none d-md-flex d-flex'>
          <Link to='/login'>
            <button className='btn-danger btn fw-bold btn-lg px-5 rounded-4'>
              Login
            </button>
          </Link>
          <Link to='/register'>
            <button className='btn btn-lg rounded-4 px-5 text-danger fw-bold'>
              Register
            </button>
          </Link>
        </div>
        <div className='d-md-none'>
          <button
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseNavbar'
            aria-controls='collapseNavbar'
            aria-expanded='false'
            className='btn btn-lg d-flex align-items-center btn-light'>
            <RxHamburgerMenu size={32} />
          </button>
        </div>
      </section>

      <section className='d-none px-5 d-lg-flex bg-header-tab align-items-center justify-content-between'>
        <nav className='px-5'>
          <ul className='nav gap-5'>
            {navItems.map((item, index) => (
              <li key={index} className='nav-item dropdown'>
                <a
                  href='#'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                  className='nav-link btn link-light fs-5 fw-semibold dropdown-toggle'>
                  {item}
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <ul className='gap-5 nav'>
            {navAbout.map((item, index) => (
              <li key={index} className='nav-item'>
                <a href={`/#`} className='nav-link link-light fs-5 fw-bold'>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <div id='collapseNavbar' className='top-0 bg-light w-100 collapse'>
        <nav>
          <ul className='nav flex-column text-center fs-5 fw-semibold'>
            <li className='nav-item'>
              <a className='nav-link link-dark' href='#'>
                How It Works
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link link-dark' href='#'>
                Browse Jobs
              </a>
            </li>
          </ul>
        </nav>
        <div className='gap-2 pt-2 flex-column d-flex align-items-center'>
          <Link to='/login'>
            <button className='btn-danger btn fw-bold btn-lg px-5 rounded-4'>
              Login
            </button>
          </Link>
          <Link to='/register'>
            <button className='btn btn-lg rounded-4 px-5 text-danger fw-bold'>
              Register
            </button>
          </Link>
        </div>
      </div> */}
    </header>
  )
}

export default Header
