import Hero from "../components/Hero"
import heroimg from "../assets/images/heroimage.jfif"
import Services from "../components/Services"
import Trusted from "../components/Trusted"
import FeatureProduct from "../components/FeatureProduct"

function Home() {
  return (
    <>
      <Hero name="TrendBazaar" img={heroimg} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  )
}
export default Home