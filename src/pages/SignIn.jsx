import React, { useState } from 'react'
import arroba from '../assets/image/@.png'
import candado from '../assets/image/lock1.png'
import { Link as Anchor } from 'react-router-dom'
import VITE_API from '../../api'
import { useRef } from 'react'
import axios from 'axios'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Swal from 'sweetalert2'


const Signin = () => {
  let email = useRef();
  let password = useRef();
  const [redirect, setRedirect] = useState(false);

  function handleForm(e) {
    e.preventDefault()
    //usando el .current.value vemos lo que tiene adentro del name
    let data = {
      email: email.current.value,
      password: password.current.value
    }

    axios.post(VITE_API + "auth/signin", data)
      .then(res => {
        const token = res.data.token;
        const role = res.data.user.role;

        //sweetAlert
        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully!',
        })

        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        setRedirect(true);
      })
      .catch(err => {
        console.log(err)
        alert(err.response.data.message)
      })
  }


  return (
    <>
      {redirect ? (
        <>
          <header className="mx-8">
            <Carousel />
          </header>
          <div className="bg-[url(/src/assets/image/bg-main.png)] bg-no-repeat bg-cover bg-center w-fill h-[500px] rounded-md mt-[1] flex flex-col justify-center items-start pl-[10%] gap-[10px] p-0 xsm:hidden mx-8">
            <h2 className="not-italic font-bold text-[64px] leading-[95.19%] text-white text-shadow: 1px 8px 50px rgba(255, 255, 255, 0.25)">Live the emotion of the manga</h2>
            <p className="font-normal text-2xl leading-[95.19%] text-white">Find the perfect manga for you</p>
            <span className="not-italic font-semibold text-base leading-[95.18%] text-white">#MingaForever 🔥</span>
            <Anchor to="/manga-form"><button className="text-white not-italic font-medium text-2xl leading-[95.19%] bg-gradient-to-r from-btn1 from-(-13.10%) to-btn2 to-58.69% rounded-md flex flex-row justify-center items-center gap-2.5 w-60 h-[55px] p-4">Explore</button></Anchor>
          </div>
          <Footer />
        </>
      ) : (
        <div className='h-screen w-full flex justify-center items-center'>
          <div className='w-1/2 p-4 flex justify-end h-full bg-center bg-cover bg-[url(/src/assets/image/Rectangle82.png)]'></div >
          <div className="flex justify-center w-1/2">
            <div className="bg-white min-h-screen w-1/2 flex justify-center items-center">

              <div className='flex flex-col'>
                <form onSubmit={(e) => handleForm(e)}>
                  <div className='flex flex-col items-center'>
                    <p className="text-4xl text-center font-semibold text-gray-900">Welcome <span className='text-fuchsia-400'>back</span>!</p>
                    <h1 className="text-sm text-center text-gray-600 mt-4">Discover manga, manhua and manhwa, track your progress, have fun, read manga.</h1>
                  </div>
                  <div className="mt-5">
                    <fieldset className='border-2 rounded-md flex items-center'>
                      <legend className='text-sm ml-2 text-fuchsia-400'>Email</legend>
                      <input ref={email} className="px-4 w-full  py-2 rounded-md text-sm outline-none" type="email" name="Email" placeholder="DragonballZ@Krowl.com" />
                      <img className='w-4 h-4 mr-2' src={arroba} alt="profile" />
                    </fieldset>
                  </div>
                  <div className="mt-5">
                    <fieldset className='border-2 rounded-md flex items-center'>
                      <legend className='text-sm ml-2 text-fuchsia-400'>Password</legend>
                      <input ref={password} className="px-4 w-full  py-2 rounded-md text-sm outline-none" type="password" name="Password" placeholder="************" />
                      <img className='w-4 h-4 mr-2' src={candado} alt="profile" />
                    </fieldset>
                  </div>
                  <div>
                    <input className="mt-4 mb-3 w-full bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] text-white py-2 rounded-xl transition duration-100 shadow-cyan-600 font-bold text-md h-12 cursor-pointer" type='submit' value="Sign in" />
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
      )}
    </>
  )
}

export default Signin