import { Link, NavLink } from "react-router-dom"
import { Usecart } from "../Context/CartContext"
import CartProduct from "../components/CartProduct"
import Button from "../components/Button"
import FormatePrice from "../helpers/FormatePrice"

function Cart() {
  const { cart, clearcart,total_amount,shipping_fee} = Usecart()

  if (cart?.length === 0) {
    return (
      <div className="flex items-center justify-center flex-col gap-4 h-[50vh]">
        <h2 className=" text-red-600 text-lg font-medium">Your Cart is empty</h2>
        <Link to="/products"><Button name="Shop Now"></Button></Link>
      </div>
    )
  }

  return (
    <section className="padding-y">
      <div className="max-container">
        <div className="grid grid-cols-5 max-md:grid-cols-4 pb-2 text-center">
          <h2 className="cart-heading max-md:col-span-2 text-left">Item</h2>
          <h2 className="cart-heading max-md:hidden">Price</h2>
          <h2 className="cart-heading">Quantity</h2>
          <h2 className="cart-heading max-md:hidden">SubTotal</h2>
          <h2 className="cart-heading">Remove</h2>
        </div>
        <hr className="w-full bg-blue-400 border" />
        <div className="flex flex-col">
          {
            cart?.map((prod, index) => (
              <CartProduct key={prod.id} {...prod} />
            ))
          }
        </div>
        <hr className="my-4 border border-slate-200" />
        <div className="flex justify-between">
          <NavLink to="/products" className="">
            <Button name="Shop More"></Button>
          </NavLink>
          <div className="flex justify-center">
            <button className="md:mr-16 border-none outline-none px-3 py-2 bg-red-400 rounded-md text-sm font-medium cursor-pointer hover:scale-105 transition-all" onClick={clearcart}>Clear Cart</button>
          </div>
        </div>
        <div className="flex md:justify-end md:mr-16 mt-8">
          <div className="bg-slate-200 rounded-md p-3 flex flex-col gap-2">
            <div className="flex items-center justify-between gap-5">
              <h2 className="font-roboto tracking-wide">Subtotal:</h2>
              <p className="font-semibold"><FormatePrice price={total_amount} /></p>
            </div>
            <div className="flex items-centerjustify-between gap-5">
              <h2 className="font-roboto tracking-wide">Shipping Fee:</h2>
              <p className="font-semibold"><FormatePrice price={shipping_fee} /></p>
            </div>
            <hr className="border border-gray-500"/>
            <div className="flex items-center justify-between">
              <h1 className="font-medium font-roboto tracking-wide">Total:</h1>
              <p className="text-blue-500 font-semibold"><FormatePrice price={total_amount + shipping_fee}/></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Cart