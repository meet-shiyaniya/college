import Hero from "../components/Hero"
import aboutimg from "../assets/images/aboutimage.jfif"

function About() {
  return (
    <div className="about">
      <Hero name="Anything with Trendbazaar" img={aboutimg} />
    </div>
  )
}
export default About