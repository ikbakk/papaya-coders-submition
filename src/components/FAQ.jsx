import FAQList from './FAQList'

const faqs = [
  {
    id: 'one',
    title: 'How Can I Register Myself ?',
    description:
      'It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.'
  },
  {
    id: 'two',
    title: 'Is my resume visivle to all employees ?',
    description:
      'It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.'
  },
  {
    id: 'three',
    title: 'How do I contact an employer?',
    description:
      'It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.'
  },
  {
    id: 'four',
    title: 'How much will I get paid ?',
    description:
      'It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.'
  }
]

const FAQ = () => {
  return (
    <section className='py-5 px-2 px-md-5 d-flex flex-column gap-5 align-items-center'>
      <h1 className='text-center text-danger fw-bold'>
        Frequently Asked Questions
      </h1>
      <div className='accordion text-danger accordion-flush w-50' id='faq'>
        {faqs.map((faq) => (
          <FAQList key={faq.id} {...faq} />
        ))}
      </div>
    </section>
  )
}

export default FAQ
