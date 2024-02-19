import { NavLink } from "react-router-dom"
import Button from "./Button"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <>
            <main className="relative w-full">
                <section className="z-50 absolute left-[35%] -top-12">
                    <div className="bg-slate-100 rounded-md border border-blue-100  p-4 flex items-center justify-between space-x-8 max-lg:hidden">
                        <div className="flex flex-col items-start gap-1">
                            <h2 className="font-semibold capitalize text-gray-800">Ready to connect with us</h2>
                            <h3 className="font-medium capitalize text-gray-600">Talk to us</h3>
                        </div>
                        <NavLink to="/contect">
                            <Button name="Get started" />
                        </NavLink>
                    </div>
                </section >

                <footer className="bg-blue-700 lg:pt-12 lg-pb-5 py-4 mt-8 lg:mt-20 w-full ">
                    <div className="max-container">
                        <div className="grid grid-cols-4 items-start gap-3 justify-center max-md:grid-cols-1 lg:pb-10 pb-5">
                            <div>
                                <h2 className="footer-heading">TrendBazaar</h2>
                                <h3 className="footer-description">
                                    TrendBazaar styles curated for your fashion journey</h3>
                            </div>
                            <div>
                                <h2 className="footer-heading">contact on helpline number</h2>
                                <h3 className="footer-description">+91 7567234551</h3>
                            </div>
                            <div>
                                <h2 className="footer-heading">follow on social media</h2>
                                <div className="flex items-center justify-start gap-3 mt-3">
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border-black">
                                        <FaInstagram className="text-blue-500 text-[20px] cursor-pointer" />
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border-black">
                                        <FaFacebook className="text-blue-500 text-[20px] cursor-pointer" />
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border-black">
                                        <FaTwitter className="text-blue-500 text-[20px] cursor-pointer" />
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border-black">
                                        <FaYoutube className="text-blue-500 text-[20px] cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="footer-heading mb-3">subscribe to connect with us</h2>
                                <NavLink to="/contact" >
                                    <Button name="Get started" />
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottam">
                        <hr />
                        <div className="max-container">
                            <h3 className="mt-2 text-slate-300">© 2024 Your Company, Inc. All rights reserved.</h3>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    )
}
export default Footer