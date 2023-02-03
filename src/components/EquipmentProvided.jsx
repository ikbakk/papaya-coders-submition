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

  return (
    <section
      id='equipment'
      className='py-5 d-flex flex-column align-items-center gap-5'>
      <h1 className='text-center fw-bold'>Equipment Provided</h1>
      <ul className='nav nav-tabs gap-5'>
        {categories.map((category, index) => {
          const active = tabActive === category ? 'active' : ''
          return (
            <li
              key={index}
              onClick={() => setTabActive(category.arr)}
              className='nav-item'>
              <a className={`nav-link ${active} link-danger`}>
                {category.title}
              </a>
            </li>
          )
        })}
      </ul>
      <div>
        <div className='gap-2 d-flex'>
          {tabActive.map((tab, index) => (
            <div key={index} className='nav-item'>
              <div className='card'>
                <figure className='card-img-top px-3'>
                  <img src={`${tab.img}`} width={150} height={150} alt='...' />
                </figure>
                <div className='card-body'>
                  <p className='card-text'>{tab.title}</p>
                </div>
                <div className='p-2'>
                  <button className='btn btn-danger w-100 card-btn'>
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EquipmentProvided
