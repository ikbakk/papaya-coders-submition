const footerNav = [
  {
    headerTitle: 'Helpful Links',
    navs: [
      { title: 'FAQs', href: '/' },
      { title: 'Privacy Policy', href: '/' },
      { title: 'Terms of Use', href: '/' },
      { title: 'Service Providers Subscription Plan', href: '/' },
      { title: 'Equipment Subscription Plan', href: '/' }
    ]
  },
  {
    headerTitle: 'Quick Links',
    navs: [
      { title: 'Home', href: '/' },
      { title: 'About Us', href: '/' },
      { title: 'How it Works', href: '/' },
      { title: 'Contact Us', href: '/' }
    ]
  },
  {
    headerTitle: 'For Search',
    navs: [
      { title: 'Cinematographer', href: '/' },
      { title: 'Photo Editor', href: '/' },
      { title: 'Photographer', href: '/' },
      { title: 'Video Editor', href: '/' }
    ]
  }
]

const Footer = () => {
  return (
    <footer className='px-2 px-md-5 py-5 bg-dark d-flex flex-column align-items-around'>
      <section className='d-flex flex-column flex-md-row px-2 pt-5 align-content-center justify-content-md-between gap-5 px-md-5'>
        <figure className='d-flex align-items-center justify-content-center'>
          <img src='../assets/logo.png' width={200} />
        </figure>
        {footerNav.map((footernav, index) => (
          <section key={index} className='w-100'>
            <h4 className='text-danger'>{footernav.headerTitle}</h4>
            <ul className='nav flex-column'>
              {footernav.navs.map((nav, index) => (
                <li key={index} className='nav-item'>
                  <a href={nav.href} className='nav-link text-light'>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>
    </footer>
  )
}

export default Footer
