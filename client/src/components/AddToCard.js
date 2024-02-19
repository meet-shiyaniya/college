import { useState } from "react"
import Button from "./Button"
import { Link } from "react-router-dom";
import { Usecart } from "../Context/CartContext";
import Quantity from "./Quantity";

function AddToCard({ stock, product }) {

    const { addtocart } = Usecart()
    const [amount, setAmount] = useState(1);
    const { id } = product

    const Decrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    }

    const Increase = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock)
    }

    return (
        <div className="flex flex-col gap-3">
            <Quantity amount={amount} Increase={Increase} Decrease={Decrease} />
            <Link to="/cart" onClick={() => addtocart(id, amount, product)} ><Button name="Add To Card" /></Link>
        </div>
    )
}
export default AddToCard