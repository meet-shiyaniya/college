import FormatePrice from "../helpers/FormatePrice"
import Quantity from "./Quantity"
import { FaTrash } from "react-icons/fa";
import { Usecart } from "../Context/CartContext"


function CartProduct(prod) {

    const { id, name, amount, image, price } = prod
    const { removeitem,Increase,Decrease } = Usecart()
    // const Decrease = () => {
    //     // amount > 1 ? setAmount(amount - 1) : setAmount(1)
    // }

    // const Increase = () => {
    //     // amount < stock ? setAmount(amount + 1) : setAmount(stock)
    // }
    return (
        <div className="grid grid-cols-5 max-md:grid-cols-4 mt-4 max-md:mt-3">
            <div className="flex items-center justify-start gap-2 max-sm:gap-1 max-md:col-span-2">
                <img src={image} alt="cart-img" className="w-[50px] max-sm:w-[35px] rounded-md" />
                <h3 className="tracking-wide max-sm:text-[12px]">{name}</h3>
            </div>
            <div className="max-md:hidden">
                <p className="text-center">
                    <FormatePrice price={price} />
                </p>
            </div>
            <div className="flex justify-center">
                <Quantity amount={amount} Increase={() => Increase(id)} Decrease={() => Decrease(id)} />
            </div>
            <div className="max-md:hidden">
                <p className="text-center"><FormatePrice price={price * amount} /></p>
            </div>
            <div className="flex justify-center items-center">
                <FaTrash className="cursor-pointer text-red-700 text-lg max-md:text-sm" onClick={() => removeitem(id)} />
            </div>
        </div>
    )
}
export default CartProduct