import { useProductContext } from "../Context/Productcontext"
import Product from "./Product"

function FeatureProduct() {

    const { isLoading, featureProducts } = useProductContext()

    
    return (
        <section className="padding-y">
            <div className="max-container">
                <h2 className="text-center text-blue-400 font-semibold tracking-wide font-roboto text-lg">Trending Products</h2>
                <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
                    {isLoading && <h1 className="text-center font-semibold text-lg text-blue-400">Loading...</h1>}
                    {
                        featureProducts.map((item,index)=>(
                            <Product key={item.id} {...item} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default FeatureProduct