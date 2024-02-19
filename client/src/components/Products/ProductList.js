import Product from "../Product"
import { UseFilterPro } from "../../Context/FilterProContext"

function ProductList() {

    const { filter_products } = UseFilterPro()
    // const { search_product } = UseFilterPro()
    
    return (
        <section>
            <div className="grid grid-cols-3 gap-x-4 gap-y-2 max-sm:gap-y-1 max-lg:grid-cols-2 max-sm:grid-cols-1 ">
                {filter_products &&
                    // filter_products.filter((pro) => {
                    //     if (search_product.length === 0) {
                    //         return pro;
                    //     }
                       
                    //     else{
                    //         return pro.name.toLowerCase().includes(search_product.toLowerCase())
                    //     }
                    // })
                        filter_products.map((item) => (
                            <Product key={item.id} {...item} />
                        ))
                }
            </div>
        </section>
    )
}
export default ProductList