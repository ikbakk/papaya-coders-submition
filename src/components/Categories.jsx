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
    <section className='bg-dark py-5 px-2 px-md-5 d-flex flex-column align-items-center w-100 categories'>
      <div className='col-sm-12 col-md-6'>
        <h1 className='text-center fw-bolder text-uppercase'>
          Get work done in over four categories
        </h1>
      </div>
      <div className='row row-cols-1 container row-cols-md-2'>
        {categories.map((category) => (
          <div
            key={category.title}
            className='col d-flex gap-5 py-3 align-items-center'>
            <figure>{category.icon}</figure>
            <div className='w-75'>
              <h4>{category.title}</h4>
              <p>{category.description}</p>
              <button className='btn'>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories
