import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useProductContext } from "../Context/Productcontext";
import PageNavigate from "./PageNavigate";
import { ColorRing } from "react-loader-spinner";
import SingleProimg from "./SingleProimg";
import FormatePrice from "../helpers/FormatePrice";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplaceFilled } from "react-icons/tb";
import { FaProductHunt } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import Star from "./Star";
import AddToCard from "./AddToCard";

const api = "https://api.pujakaitem.com/api/products";

function Singleproduct() {
  const { id } = useParams()
  const { getsingleproduct, isSingleLoading, singleProduct } = useProductContext();

  const { id: alias, image, name, company, description, stock, stars, reviews, price } = singleProduct

  useEffect(() => {
    getsingleproduct(`${api}?id=${id}`)
  }, [])



  return (
    <>
      <div className="max-container">
        <PageNavigate title={name} />
      </div>
      <section className="padding-y">
        <div className="max-container">
          {
            isSingleLoading ? (
              <div className="grid place-items-center h-[50vh]">
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperClass="blocks-wrapper"
                  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
              </div>
            ) :
              <div className="grid grid-cols-2 gap-10 items-center max-md:grid-cols-1">
                <SingleProimg image={image} />
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-lg tracking-wide">{name}</h2>
                    <div className="flex items-center gap-2">
                      <Star stars={stars} reviews={reviews} />
                    </div>
                    <p>MRP:
                      <del className="font-semibold">
                        <FormatePrice price={price + 250000} />
                      </del>
                    </p>
                    <p className="text-blue-400">
                      Deal of the Day: <FormatePrice price={price} />
                    </p>
                    <p className="font-base tracking-wide font-roboto">{description}</p>
                  </div>
                  <div className="flex items-center justify-between flex-wrap my-2">
                    <div className="flex items-center justify-center flex-col gap-1">
                      <TbTruckDelivery className="text-blue-400 text-2xl" />
                      <h3 className="font-medium text-base font-roboto tracking-wide">Free Delivery</h3>
                    </div>
                    <div className="flex items-center justify-center flex-col gap-1">
                      <TbReplaceFilled className="text-blue-400 text-2xl" />
                      <h3 className="font-medium text-base font-roboto tracking-wide">7 Days Replacement</h3>
                    </div>
                    <div className="flex items-center justify-center flex-col gap-1">
                      <FaProductHunt className="text-blue-400 text-2xl" />
                      <h3 className="font-medium text-base font-roboto tracking-wide">Best Product</h3>
                    </div>
                    <div className="flex items-center justify-center flex-col gap-1">
                      <MdOutlineSecurity className="text-blue-400 text-2xl" />
                      <h3 className="font-medium text-base font-roboto tracking-wide">2 Year Warranty</h3>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1">

                    <h3>Availabel <span className="font-semibold"> {stock > 0 ? "In Stock" : "Out of Stock"}</span></h3>
                    {/* <h3>ID: <span className="font-semibold"> {id}</span></h3> */}
                    <h3>Brand: <span className="font-semibold">{company}</span></h3>
                  </div>
                  <hr className="border border-slate-300" />
                  <AddToCard stock={stock} product={singleProduct} />
                </div>
              </div>
          }
        </div>

      </section>
    </>
  )
}
export default Singleproduct