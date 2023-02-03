import Blogs from './Blogs'
import Categories from './Categories'
import EquipmentProvided from './EquipmentProvided'
import Hero from './Hero'
import LatestJob from './LatestJob'
import Testimonials from './Testimonials'
import ThingsDone from './ThingsDone'

const Layout = () => {
  return (
    <>
      <Hero />
      <Categories />
      <LatestJob />
      <EquipmentProvided />
      <ThingsDone />
      <Blogs />
      <Testimonials />
    </>
  )
}

export default Layout
