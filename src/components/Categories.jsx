import { BsCamera, BsCameraVideo, BsImage } from 'react-icons/bs'
import { ImFileVideo } from 'react-icons/im'

const categories = [
  {
    icon: <BsCamera size={92} />,
    title: 'Photography',
    description:
      'lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol'
  },
  {
    icon: <BsImage size={92} />,
    title: 'Photo Editing',
    description:
      'lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol'
  },
  {
    icon: <BsCameraVideo size={92} />,
    title: 'Videography',
    description:
      'lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol'
  },
  {
    icon: <ImFileVideo size={92} />,
    title: 'Video Editing',
    description:
      'lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol'
  }
]

const Categories = () => {
  return (
    <section
      id='hire'
      className='bg-dark py-5 px-2 px-md-5 d-flex flex-column align-items-center w-100 categories'>
      <div className='col-sm-12 pt-5 col-md-6'>
        <h1 className='text-center text-red-outline text-dark fw-bolder text-uppercase'>
          Get work done in over four categories
        </h1>
      </div>
      <div className='d-flex flex-column flex-md-row py-5 justify-content-between gap-2'>
        {categories.map((category) => (
          <div
            key={category.title}
            className='d-flex gap-5 py-3 align-items-center'>
            <div className='d-flex flex-column align-items-center gap-2'>
              <figure className='d-flex text-red justify-content-center'>
                {category.icon}
              </figure>
              <h4 className='text-light fw-bold'>{category.title}</h4>
              <p className='text-center text-light px-3'>
                {category.description}
              </p>
              <button className='w-75 btn btn-danger rounded-0'>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories
