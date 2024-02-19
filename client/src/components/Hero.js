import { NavLink } from "react-router-dom"
import Button from "./Button"

function Hero({name,img}) {
  return (
    <section className="md:py-15 py-10 bg-slate-50">
        <div className="max-container">
            <div className="grid grid-cols-2 max-md:grid-cols-1 items-center max-md:space-y-8">
                <div className="text-data">
                    <h4 className="text-md text-blue-400 font-light">Welcome to</h4>
                    <h2 className="text-[22px] font-semibold tracking-wide mt-1">{name}</h2>
                    <p className="text-2xl text-slate-900 max-md:text-xl font-normal mt-2 mb-4 font-roboto tracking-wide"> Elevate your style with the latest fashion trends, offering curated collections for every trendsetter</p>
                    <NavLink to="/products">
                        <Button name="Shop now"></Button>
                    </NavLink>
                </div>
                <div className="hero-image flex">
                    <img src={img} alt="heroimg" className="w-full md:h-[350px] h-[280px] rounded-lg"/>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Hero