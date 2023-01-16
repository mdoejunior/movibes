import React from "react";
import {NavLink} from "react-router-dom";
const CreateAccount = () => {
    return (
        <div className='flex bg-black'>
            <div className='w-8/12'>
                <img
                    src='https://i.ebayimg.com/images/g/~wEAAOSwwfBi5~sl/s-l500.jpg'
                    className='w-full object-cover' alt=''/>
            </div>
            <div className='w-4/12 flex flex-col items-center '>
                <h1 className='mt-36 text-center text-4xl text-white text-semibold'>Create an account</h1>
                <p className='text-center text-xl font-bold text-gray-700'>Lets get started with your 30 days trial</p>
                <form>
                    <div className='mt-10'>
                        <input type="text" id="name"
                               className="w-96 text-xl border-b border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Name" required/>
                    </div>
                    <div className='mt-10'>
                        <input type="email" id="email"
                               className="w-96 text-xl border-b border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Email" required/>
                    </div>
                    <div className='mt-10'>
                        <input type="password" id="password"
                               className="w-96 text-xl border-b border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Email" required/>
                    </div>
                </form>
                <button type="button"
                        className="mt-10 w-96 h-20 rounded-2xl text-black bg-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:focus:ring-gray-700 border dark:border-gray-700">
                    <span className='text-2xl text-center'>Create account</span>
                </button>

                <button type="button"
                        className="mt-10 w-96 rounded-2xl text-white bg-transparent focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-transparent dark:focus:ring-gray-700 border dark:border-gray-700 relative">
                    <img src={'../src/assets/google.png'} className='w-8 h-8 ml-16' alt=''/><span
                    className='text-lg absolute right-20 top-3'>Sign up with Google</span>
                </button>
                <div>
                    <h1 className='text-white mt-3'>Already have an account ? <NavLink className='text-white' to='/login'>Log in</NavLink></h1>
                </div>
            </div>

        </div>
    )
}

export default CreateAccount