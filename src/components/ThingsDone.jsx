import React from 'react'
import { FiMonitor } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BsCashStack } from 'react-icons/bs'
import { FaRegHandshake } from 'react-icons/fa'

const steps = [
  {
    id: 'post-requirements',
    icon: <FiMonitor size={92} />,
    title: 'Post Requirements',
    description:
      "Easily for free post a job.Just provide a title, description,and budegt, and you'll receive Quotation in a regarding the job"
  },
  {
    id: 'select-service',
    icon: <HiOutlineShoppingBag size={92} />,
    title: 'Select Service',
    description:
      'Nothing is too large or small to do. We have independent Service Providers for jobs of any size and budget, covering 4 talents. Any work can be completed'
  },
  {
    id: 'pay-securely',
    icon: <BsCashStack size={92} />,
    title: 'Pay Securely',
    description:
      "Only pay for work when it has been completed and you're 100% satisfied with the Quality using our milestone payment system"
  },
  {
    id: 'we-help',
    icon: <FaRegHandshake size={92} />,
    title: 'We’re Here To Help',
    description:
      'Our talented team of recrutiers can help you find the best Service Provider for the job even manage the projects for you.'
  }
]

const ThingsDone = () => {
  return (
    <section
      id='things-done'
      className='py-5 w-100 bg-dark text-light px-2 px-md-5'>
      <h1 className='text-center fw-bold text-uppercase text-light-outline text-dark'>
        service
      </h1>
      <h3 className='text-center py-3 fw-light'>
        Our service is to make customer be able to use a professional and better
        equipment
      </h3>
      <div className='container py-5 px-md-5'>
        <div className='row gap-2 gap-md-5'>
          {steps.map((step, index) => {
            const position =
              index % 2 === 0
                ? 'flex-md-row flex-column text-center text-md-start'
                : 'flex-md-row-reverse flex-column text-md-end text-center'
            return (
              <div
                key={step.id}
                className={`d-flex ${position} p-3 align-items-center justify-content-between`}>
                <h1 className='display-1 d-flex d-md-none'>{index + 1}</h1>
                <div
                  className={`d-flex w-75 ${position} gap-3 align-items-center px-md-5`}>
                  <figure>{step.icon}</figure>
                  <div>
                    <h3 className='fs-3 fw-bolder'>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
                <h1 className='display-1 d-none d-md-flex'>{index + 1}</h1>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ThingsDone
