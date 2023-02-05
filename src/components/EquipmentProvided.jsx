import React, { useState } from 'react'

const products = {
  lens: [
    {
      title: 'EOS 1DX Lens',
      img: '../assets/product-3.png'
    },
    {
      title: 'EOS 1DX Lens',
      img: '../assets/product-1.png'
    },
    {
      title: 'EOS 1DX Lens',
      img: '../assets/product-2.png'
    }
  ],
  drone: [
    {
      title: 'EOS 1DX Drone',
      img: '../assets/product-3.png'
    },
    {
      title: 'EOS 1DX Drone',
      img: '../assets/product-1.png'
    },
    {
      title: 'EOS 1DX Drone',
      img: '../assets/product-2.png'
    }
  ],
  monopad: [
    {
      title: 'EOS 1DX Monopad',
      img: '../assets/product-3.png'
    },
    {
      title: 'EOS 1DX Monopad',
      img: '../assets/product-1.png'
    },
    {
      title: 'EOS 1DX Monopad',
      img: '../assets/product-2.png'
    },
    {
      title: 'EOS 1DX Monopad',
      img: '../assets/product-3.png'
    },
    {
      title: 'EOS 1DX Monopad',
      img: '../assets/product-1.png'
    },
    {
      title: 'EOS 1DX Monopad',
      img: '../assets/product-2.png'
    },
    {
      title: 'EOS 1DX Monopad',
      img: '../assets/product-3.png'
    },
    {
      title: 'EOS 1DX Monopad',
      img: '../assets/product-1.png'
    },
    {
      title: 'EOS 1DX Monopad',
      img: '../assets/product-2.png'
    }
  ],
  DSLR: [
    {
      title: 'EOS 1DX DSLR',
      img: '../assets/product-3.png'
    },
    {
      title: 'EOS 1DX DSLR',
      img: '../assets/product-1.png'
    },
    {
      title: 'EOS 1DX DSLR',
      img: '../assets/product-2.png'
    }
  ]
}

const categories = [
  {
    title: 'Monopad',
    arr: products.monopad
  },
  {
    title: 'Lens',
    arr: products.lens
  },
  {
    title: 'Drone',
    arr: products.drone
  },
  {
    title: 'DSLR',
    arr: products.DSLR
  }
]

const EquipmentProvided = () => {
  const [tabActive, setTabActive] = useState(products.monopad)
  const [isActive, setIsActive] = useState('Monopad')

  return (
    <section
      id='equipment'
      className='py-5 d-flex flex-column align-items-center gap-5 px-2 px-md-5'>
      <h1 className='text-center fw-bold text-red text-dark-outline'>
        Equipment Provided
      </h1>
      <div className='bg-dark py-5 px-2 px-md-5 w-100 d-flex flex-column justify-content-center align-items-center gap-5'>
        <ul className='nav nav-tabs gap-1 gap-md-5'>
          {categories.map((category, index) => {
            const active =
              isActive === category.title ? 'active text-dark fw-bold' : ''
            return (
              <li
                key={index}
                onClick={() => (
                  setTabActive(category.arr), setIsActive(category.title)
                )}
                className='nav-item flex-md-row flex-column'>
                <a className={`nav-link ${active} text-danger`}>
                  {category.title}
                </a>
              </li>
            )
          })}
        </ul>
        <div>
          <div className='gap-2 d-flex flex-column flex-md-row flex-wrap'>
            {tabActive.map((tab, index) => (
              <div key={index} className='nav-item'>
                <div
                  className='card rounded-0 bg-dark border border-danger text-light'
                  style={{ width: '14rem' }}>
                  <figure className='d-flex justify-content-center'>
                    <img
                      src={`${tab.img}`}
                      width={150}
                      height={150}
                      alt='...'
                    />
                  </figure>
                  <div className='card-body'>
                    <h2 className='card-title fs-5'>{tab.title}</h2>
                    <p className='text-truncate card-text'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <h2 className='card-text text-danger'>
                      $300<small className='fs-6'> / day</small>
                    </h2>
                  </div>
                  <div className='p-2'>
                    <button className='btn btn-danger w-100 card-btn rounded-0'>
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EquipmentProvided
