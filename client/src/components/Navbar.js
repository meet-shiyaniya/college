import { Badge } from "@mui/material"
import { NavLink } from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from "react";
import { Usecart } from "../Context/CartContext";

function Navbar() {

    const [nav, setNav] = useState(false)

    const handlenav = () => {
        setNav((prev) => !prev)
    }

    const { total_item } = Usecart()

    return (
        <>
            <ul className={nav ? 'max-md:top-[150%] nav' : 'nav nav-links'}>

                <li className="hidden"><NavLink to="/" className={({ isActive }) =>
                    `nav-links ${isActive ? "text-blue-500" : "text-gray-900"}`
                }>Home</NavLink></li>
                <li><NavLink to="/" className={({ isActive }) =>
                    `nav-links ${isActive ? "text-blue-500" : "text-gray-900"}`
                }>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) =>
                    `nav-links ${isActive ? "text-blue-500" : "text-gray-900"}`
                }>About</NavLink></li>
                <li><NavLink to="/products" className={({ isActive }) =>
                    `nav-links ${isActive ? "text-blue-500" : "text-gray-900"}`
                }>Product</NavLink></li>
                <li><NavLink to="/cart" className={({ isActive }) =>
                    `nav-links ${isActive ? "text-blue-500" : "text-gray-900"}`
                }>Cart</NavLink></li>
                <li><NavLink to="/contect" className={({ isActive }) =>
                    `nav-links ${isActive ? "text-blue-500" : "text-gray-900"}`
                }>Contect</NavLink></li>
                <li>
                    <NavLink to="/cart">
                        <Badge color="secondary" badgeContent={total_item} className="text-blue-600 cursor-pointer">
                            <ShoppingCartIcon />
                        </Badge>
                    </NavLink>
                </li>

            </ul>
            <div className="menu-icon text-blue-500 cursor-pointer hidden max-md:block">
                {nav ?
                    <CancelIcon onClick={handlenav} />:
                    <MenuIcon onClick={handlenav} /> 
                }
            </div>
        </>
    )
}
export default Navbar