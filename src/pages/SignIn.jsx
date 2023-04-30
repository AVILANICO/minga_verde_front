import React from 'react'
import arroba from '../assets/image/@.png'
import candado from '../assets/image/lock1.png'
import { Link as Anchor } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <div className='h-screen w-full flex justify-center items-center'>
        <div className='w-1/2 p-4 flex justify-end h-full bg-center bg-cover bg-[url(/src/assets/image/Rectangle82.png)]'></div>
        <div className="flex justify-center w-1/2">
          <div className="bg-white min-h-screen w-1/2 flex justify-center items-center">

            <div className='flex flex-col'>
              <form>
                <div className='flex flex-col items-center'>
                  <p className="text-4xl text-center font-semibold text-gray-900">Welcome <span className='text-fuchsia-400'>back</span>!</p>
                  <h1 className="text-sm text-center text-gray-600 mt-4">Discover manga, manhua and manhwa, track your progress, have fun, read manga.</h1>
                </div>
                <div className="mt-5">
                  <fieldset className='border-2 rounded-md flex items-center'>
                    <legend className='text-sm ml-2 text-fuchsia-400'>Email</legend>
                    <input className="px-4 w-full  py-2 rounded-md text-sm outline-none" type="email" name="Email" placeholder="DragonballZ@Krowl.com" />
                    <img className='w-4 h-4 mr-2' src={arroba} alt="profile" />
                  </fieldset>
                </div>
                <div className="mt-5">
                  <fieldset className='border-2 rounded-md flex items-center'>
                    <legend className='text-sm ml-2 text-fuchsia-400'>Password</legend>
                    <input className="px-4 w-full  py-2 rounded-md text-sm outline-none" type="password" name="Password" placeholder="************" />
                    <img className='w-4 h-4 mr-2' src={candado} alt="profile" />
                  </fieldset>
                </div>
                <div className="">
                  <button className="mt-4 mb-3 w-full bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] text-white py-2 rounded-xl transition duration-100 shadow-cyan-600 font-bold text-md h-12">Sing in</button>
                </div>
              </form>
              <div className="flex space-x-2 justify-center items-end border-2 border-gray-300 text-gray-600 py-2 rounded-xl transition duration-100">
                <img className=" h-5 cursor-pointer" src="https://i.imgur.com/arC60SB.png" alt="asd" />
                <a href="https://www.google.com.ar/"><button>Sign in with google</button></a>
              </div>
              <div className='flex flex-col items-center'>
                <Anchor to="/signup" className="mt-6 ">You don't have an account yet? <span className="cursor-pointer text-sm text-fuchsia-400 font-bold">Sign up</span></Anchor>
                <Anchor to="/" className="mt-2"> Go back to  <span className="cursor-pointer text-sm text-fuchsia-400 font-bold">Home page</span></Anchor>
              </div>
            </div>
          </div>
        </div >
      </div >
    </>
  )
}

export default Signin