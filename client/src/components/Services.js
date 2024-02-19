import { FaTruckFast } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

function Services() {
    return (
        <section className="padding-y bg-slate-100">
            <div className="max-container">
                <div className="grid grid-rows-2 grid-flow-col items-center gap-3 max-sm:grid-rows-4">
                    <div className="lg:row-span-2 bg-slate-200 flex flex-col justify-center items-center py-5 gap-3 rounded-2xl">
                        <div className="icon w-16 h-16 flex items-center justify-center rounded-full bg-blue-500">
                            <FaTruckFast className="text-4xl text-white" />
                        </div>
                        <h3 className="text-base capitalize font-roboto">super fast and free delivery</h3>
                    </div>
                    <div className="bg-slate-200 flex flex-col justify-center items-center py-5 gap-3 rounded-2xl">
                        <div className="icon w-16 h-16 flex items-center justify-center rounded-full bg-blue-500">
                            <MdSecurity className="text-4xl text-white" />
                        </div>
                        <h3 className="text-base capitalize font-roboto">non contact shipping</h3>
                    </div>
                    <div className="rounded-2xl bg-slate-200 flex flex-col justify-center items-center py-5 gap-3">
                        <div className="icon w-16 h-16 flex items-center justify-center rounded-full bg-blue-500">
                            <GiReceiveMoney className="text-4xl text-white" />
                        </div>
                        <h3 className="text-base capitalize font-roboto">money-back guaranteed</h3>
                    </div>
                    <div className="lg:row-span-2 rounded-2xl bg-slate-200 flex flex-col justify-center items-center py-5 gap-3">
                        <div className="icon w-16 h-16 flex items-center justify-center rounded-full bg-blue-500">
                            <RiSecurePaymentLine className="text-4xl text-white" />
                        </div>
                        <h3 className="text-base capitalize font-roboto">super secure payment system</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Services