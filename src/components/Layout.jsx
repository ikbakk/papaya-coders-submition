import Blogs from './Blogs'
import Categories from './Categories'
import EquipmentProvided from './EquipmentProvided'
import Hero from './Hero'
import LatestJob from './LatestJob'
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
    </>
  )
}

export default Layout
