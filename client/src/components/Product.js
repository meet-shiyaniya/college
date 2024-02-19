import { NavLink } from "react-router-dom"
import FormatePrice from "../helpers/FormatePrice"

function Product(item) {
    const { id, name, image, price, category } = item
    return (
        <NavLink to={`/singlproduct/${id}`}>
            <div className="card shadow-md shadow-slate-200 p-2 mt-5 hover:scale-105 transitio duration-300">
                <figure className="relative">
                    <img src={image} alt="products.." className="w-full rounded-md" />
                    <figcaption className="absolute top-3 right-2 bg-slate-100 p-1 rounded-md text-blue-700 font-medium text-base max-md:text-sm">{category}</figcaption>
                </figure>
                <div className="flex items-center justify-between pt-3">
                    <h3 className="ml-1 font-roboto tracking-wide font-medium ">{name}</h3>
                    <h3 className="mr-1 font-semibold text-blue-400 tracking-wide ">{<FormatePrice price={price} />}</h3>
                </div>
            </div>
        </NavLink>
    )
}
export default Product