import FilterSection from "../components/Products/FilterSection"
import ProductList from "../components/Products/ProductList"
import Sort from "../components/Products/Sort"

function Products() {

  return (
    <section className="padding-y">
      <div className="max-container">
        <main className="grid grid-cols-[20%_auto]">
          <div className="filtersection">
            <FilterSection />
          </div>
          <div>
            <div className="sort">
              <Sort />
            </div>
            <div className="product-lists">
              <ProductList />
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}
export default Products