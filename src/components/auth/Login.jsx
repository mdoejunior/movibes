import React from "react";
import {NavLink} from "react-router-dom";
const Login = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-black'>
            <div className='flex flex-col items-center '>
                <h1 className='text-hover-color font-bold text-4xl mt-8 ml-8 mr-auto'>MOVIBES</h1>
                <h1 className='mt-48 text-center text-4xl text-white text-semibold'>Welcome back, Olivia</h1>
                <p className='text-center text-lg text-gray-700'>Welcome! Please enter your details</p>
                <button type="button"
                        className="mt-10 w-96 rounded-2xl text-white bg-transparent focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-transparent dark:focus:ring-gray-700 border dark:border-gray-700 relative">
                    <img src={'../src/assets/google.png'} className='w-12 h-12 ml-16' alt=''/><span
                    className='text-lg absolute right-20 top-5'>Log in with Google</span>
                </button>
                <div className='grid grid-cols-3 mt-10 flex flex-cols items-center'>
                    <hr className="w-32 bg-light-white dark:light-white border border-light-white  dark:light-white"/>
                    <h5 className='text-white ml-12'>Or</h5>
                    <hr className="w-32 bg-light-white dark:light-white border border-light-white  dark:light-white"/>
                </div>
                <form>
                    <div className='mt-10'>
                        <input type="email" id="email"
                               value='oliviabrooke3435@gmail.com'
                               className="w-96 text-xl border-b border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Email" required/>
                    </div>
                    <div className='mt-10'>
                        <input type="password" id="password"
                               value='issaally'
                               className="w-96 text-xl border-b border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Email" required/>
                    </div>
                </form>
                <div className="flex flex-cols items-center mt-5 gap-4">
                    <input className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-light-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label text-gray-600 inline-block text-white" htmlFor="flexCheckDefault">
                        Remember me for 30 days
                    </label>
                    <div>
                        <span className='text-white ml-auto'>Forgot password</span>
                        <hr className="w-32 bg-light-white dark:bg-light-white m-auto dark:light-white"/>
                    </div>
                </div>
                <button type="button"
                        className="mt-10 w-96 h-20 rounded-2xl text-black bg-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:focus:ring-gray-700 border dark:border-gray-700">
                    <span className='text-2xl text-center'>Log in</span>
                </button>
                <div>
                    <h1 className='text-white'>Dont have an account ? <NavLink className='text-white' to='/signup'>Sign up for free</NavLink></h1>
                </div>
            </div>
            <div className=''>
                <img
                    src='https://cdn1-production-images-kly.akamaized.net/Uefhk1NryRxtJ1UEx1c029ozllE=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4135956/original/053541200_1661433289-Top_Gun_Maverick_4.jpg'
                    className='w-full object-cover' alt=''/>
            </div>

        </div>
)
}

export default Login