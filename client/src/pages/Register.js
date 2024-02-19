import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Register() {

    const [logindata, setLogindata] = useState({})

    const handlechange = (e) => {
        setLogindata({ ...logindata, [e.target.name]: e.target.value })
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/regestration', { logindata }).then((res) => console.log(res.data)).catch(e => console.log(e))
        } catch (error) {
            console.log("error")
        }
    }

    const handletest = async () => {
        // e.preventDefault();
        try {
            const res = await axios.post('/regestration',{name:"name",pass:"pass"}).then((res) => console.log("testing is",res.data)).catch(e => console.log(e))
        } catch (error) {
            console.log("error")
        }
    }


    // useEffect(() => {
    //     const getdata = async () => {
    //         try {
    //             const res = await axios.get('/users').then((res) => console.log(res.data)).catch(e => console.log(e))
    //         } catch (error) {
    //             console.log("error")
    //         }
    //     }

    //     getdata()
    // }, [])

    return (
        // <div>
        //     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        //         <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        //             <div
        //                 className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        //             </div>
        //             <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        //                 <div className="max-w-md mx-auto">
        //                     <div>
        //                         <h1 className="text-2xl font-semibold">Login Form with Floating Labels</h1>
        //                     </div>
        //                     <div className="divide-y divide-gray-200">
        //                         <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
        //                             <div className="relative">
        //                                 <input autoComplete="off" id="uname" name="uname" type="uname" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" onChange={handlechange} />
        //                                 <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">name</label>
        //                             </div>
        //                             <div className="relative">
        //                                 <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" onChange={handlechange} />
        //                                 <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
        //                             </div>
        //                             <div className="relative">
        //                                 <input autoComplete="off" id="mo" name="mo" type="number" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" onChange={handlechange} />
        //                                 <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Mo</label>
        //                             </div>
        //                             <div className="relative">
        //                                 <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" onChange={handlechange} />
        //                                 <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
        //                             </div>
        //                             <div className="relative">
        //                                 <input autoComplete="off" id="cpassword" name="cpassword" type="cpassword" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" onChange={handlechange} />
        //                                 <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">CPassword</label>
        //                             </div>

        //                             <div className="relative">
        //                                 <button className="bg-blue-500 text-white rounded-md px-2 py-1" onClick={handlesubmit}>Submit</button>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </div>
        <div>
        <form onSubmit={handlesubmit} className='flex flex-col gap-10 max-container py-10'>
            <input type='text' id='uname' name='name' placeholder='uname' onChange={handlechange}></input>
            <input type='email' id='email' name='email' placeholder='email' onChange={handlechange}></input>
            <input type='number' id='ph' name='phone' placeholder='phone' onChange={handlechange}></input>
            <input type='password' id='password' name='password' placeholder='password' onChange={handlechange}></input>
            <input type='cpassword' id='cpassword' name='cpassword' placeholder='cpassword' onChange={handlechange}></input>
            <button type='submit'>register</button>
        </form>


        <button onClick={handletest}>test</button>
        </div>
    )
}

export default Register
