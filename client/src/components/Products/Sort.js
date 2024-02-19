import { UseFilterPro } from "../../Context/FilterProContext"

function Sort() {

  const { filter_products,sorting } = UseFilterPro()
  return (
    <section className="bg-slate-100 p-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <h3 className="text-blue-400">{`${filter_products.length}`}</h3>
        <p className="font-medium tracking-wide font-roboto">Products Availabel</p>
      </div>
      <div className="">
        <form>
          <label htmlFor="cate"></label>
          <select name="cate" id="cate" className="p-1" onClick={sorting}>
            <option value="lowest">Price(lowest)</option>
            <option value="highest">Price(highest)</option>
            <option value="a-z">Price(a-z)</option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </section>
  )
}
export default Sort