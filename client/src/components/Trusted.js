import { AiFillAmazonSquare } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { CgAdidas } from "react-icons/cg";
import { SiBeatsbydre } from "react-icons/si";
import { FaShopify } from "react-icons/fa";

function Trusted() {
    return (
        <section className="padding-y bg-slate-50">
            <div className="max-container">
                <h2 className="text-lg max-lg:text-md text-center capitalize text-blue-600 font-semibold mt-4">trusted by more than 200+ companies</h2>
                <main className="lg:mt-10 mt-6 flex flex-wrap items-center justify-evenly ">
                    <div className="company">
                        <AiFillAmazonSquare className="trusted-company"/>
                    </div>
                    <div className="company">
                        <FaFacebookSquare className="trusted-company"/>
                    </div>
                    <div className="company">
                        <CgAdidas className="trusted-company"/>
                    </div>
                    <div className="company">
                        <SiBeatsbydre className="trusted-company"/>
                    </div>
                    <div className="company">
                        <FaShopify className="trusted-company"/>
                    </div>
                </main>
            </div>
        </section>
    )
}
export default Trusted