
import { UseFilterPro } from "../../Context/FilterProContext";

function FilterSection() {

  const { filterpro, all_products,clearfilter } = UseFilterPro()
  const { filter: { text } } = UseFilterPro()

  // const [search, setSearch] = useState("");
  // const handlesearch = (e) => {
  //   setSearch(e.target.value)
  // }

  // useEffect(() => {
  //   searchproduct(search)
  // }, [search])

  // category
  const getuniqdata = (data, cat) => {
    let newval = data.map((curElem) => {
      return curElem[cat]
    })
    return newval = ["All", ...new Set(newval)]
  }

  const categorydata = getuniqdata(all_products, "category")
  const companydata = getuniqdata(all_products, "company")

  return (
    <section>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="search" placeholder="Search.." className=" outline-none border border-slate-200 p-2 text-blue-400 text-sm tracking-wider cursor-pointer hover:border hover:border-blue-400 transition duration-300" onChange={filterpro} value={text} name="text" />
        </form>
      </div>
      <div className="my-3">
        <h3 className="font-semibold font-roboto tracking-wide text-blue-300">Category</h3>
        <div className="flex flex-col items-start gap-2 py-2">
          {
            categorydata.map((curElem, index) => {
              return <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                onClick={filterpro}
                className="font-medium font-roboto tracking-wide hover:border-b-2 hover:border-b-blue-500 transition-all duration-300"
              >
                {curElem}
              </button>
            })
          }
        </div>
      </div>
      <div>
        <h2 className="font-semibold font-roboto tracking-wide text-blue-300">Company</h2>
        <form className="py-2">
          <select name="company" onClick={filterpro} className="border border-slate-300">
            {
              companydata.map((curElem, index) => {
                return <option key={index} name="company" value={curElem}>{curElem}</option>
              })
            }
          </select>
        </form>
      </div>
      <div className="my-3">
        <button className="bg-red-400 border-none outline-none p-2 text-sm rounded-lg text-gray-200" onClick={clearfilter}>Clear Filter</button>
      </div>
    </section>
  )
}
export default FilterSection