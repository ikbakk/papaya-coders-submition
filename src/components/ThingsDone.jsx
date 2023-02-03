import React from 'react'
import { FiMonitor } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BsCashStack } from 'react-icons/bs'
import { FaRegHandshake } from 'react-icons/fa'

const steps = [
  {
    id: 'post-requirements',
    icon: <FiMonitor color='#3c3c3c' size={92} />,
    title: 'Post Requirements',
    description:
      "Easily for free post a job.Just provide a title, description,and budegt, and you'll receive Quotation in a regarding the job"
  },
  {
    id: 'select-service',
    icon: <HiOutlineShoppingBag color='#3c3c3c' size={92} />,
    title: 'Select Service',
    description:
      'Nothing is too large or small to do. We have independent Service Providers for jobs of any size and budget, covering 4 talents. Any work can be completed'
  },
  {
    id: 'pay-securely',
    icon: <BsCashStack color='#3c3c3c' size={92} />,
    title: 'Pay Securely',
    description:
      "Only pay for work when it has been completed and you're 100% satisfied with the Quality using our milestone payment system"
  },
  {
    id: 'we-help',
    icon: <FaRegHandshake color='#3c3c3c' size={92} />,
    title: 'We’re Here To Help',
    description:
      'Our talented team of recrutiers can help you find the best Service Provider for the job even manage the projects for you.'
  }
]

const ThingsDone = () => {
  return (
    <section id='things-done' className='py-5 w-100'>
      <h1 className='text-center fw-bold'>Want Things Done?</h1>
      <div className='container px-4 py-5 px-md-5'>
        <div className='row gap-2 gap-md-5'>
          {steps.map((step) => (
            <div
              id='things-done-card'
              key={step.id}
              className='col-md shadow-lg col-12 p-3 flex-column text-center '>
              <figure>{step.icon}</figure>
              <div>
                <div className='d-flex flex-column align-items-center'>
                  <h3 className='fs-3 fw-lighter'>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ThingsDone
