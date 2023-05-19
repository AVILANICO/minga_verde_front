import React from 'react'
import arroba from '../assets/image/@.png'
import profile from '../assets/image/profile.png'
import camara from '../assets/image/camera.png'
import candado from '../assets/image/lock1.png'
import VITE_API from '../../api'
import { useRef } from 'react'
import axios from 'axios'
import { Link as Anchor, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Register = (props) => {
  let name = useRef()
  let email = useRef()
  let photo = useRef()
  let password = useRef()
  let navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault()
    //usando el .current.value vemos lo que tiene adentro del name
    let data = {
      email: email.current.value,
      photo: photo.current.value,
      password: password.current.value
    }
    axios.post(VITE_API + "auth/register", data)
      .then(res => {

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
          title: 'Account Created successfully!',
        })

        navigate('/signin')
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: err.response.data.message,
        })
      })
  }

  return (
    <>
      
      <div className='xsm:w-full h-screen w-full flex justify-center items-center'>
        <div className="xsm:w-full xsm:mt-40 flex justify-center w-1/2">
          <div className="bg-white min-h-screen w-1/2 flex justify-center items-center">

            <div className='xsm:w-screen xsm:items-center flex flex-col'>
              <form className='xxsm:w-[16rem] xxsm:mr-4 xsm:w-full' onSubmit={(e) => handleForm(e)}>
                <div className='flex flex-col items-center'>
                  <span className="text-4xl text-center font-semibold text-gray-900">Welcome!</span>
                  <h1 className="text-sm text-center text-gray-600 mt-4">Discover manga, manhua and manhwa, track your progress, have fun, read manga.</h1>
                </div>
                <div className="mt-5">
                  <fieldset className='border-2 rounded-md flex'>
                    <legend className='text-sm ml-2 text-fuchsia-400 '>Name</legend>
                    <input ref={name} className="px-4 w-full  py-2 rounded-md text-sm outline-none" type="text" name="Name" placeholder="Krowl Bell" />
                    <img className='w-5 h-5  mr-2' src={profile} alt="profile" />
                  </fieldset>
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
                    <legend className='text-sm ml-2 text-fuchsia-400'>Photo</legend>
                    <input ref={photo} className="px-4 w-full  py-2 rounded-md text-sm outline-none" type="url" name="Photo" placeholder="Url" />
                    <img className='w-4 h-4 mr-2' src={camara} alt="profile" />
                  </fieldset>
                </div>
                <div className="mt-5">
                  <fieldset className='border-2 rounded-md flex items-center'>
                    <legend className='text-sm ml-2 text-fuchsia-400'>Password</legend>
                    <input ref={password} className="px-4 w-full  py-2 rounded-md text-sm outline-none" type="password" name="Password" placeholder="************" />
                    <img className='w-4 h-4 mr-2' src={candado} alt="profile" />
                  </fieldset>
                </div>

                <div className="flex justify-between mt-2">
                  <div>
                    <input className="cursor-pointer m-1" type="checkbox" name="Notification" />
                    <span className="text-sm">Send notification to my email</span>
                  </div>
                </div>
                <div className="">
                  <input className="mt-4 mb-3 w-full bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] text-white py-2 rounded-xl transition duration-100 shadow-cyan-600 font-bold text-md h-12 cursor-pointer" type='submit' value="Sign up" />
                </div>
              </form>
              <div className="flex space-x-2 justify-center items-end border-2 border-gray-300 text-gray-600 py-2 rounded-xl transition duration-100">
                <img className=" h-5 cursor-pointer" src="https://i.imgur.com/arC60SB.png" alt="asd" />
                <Anchor to="https://www.google.com.ar/"><button>Sign in with google</button></Anchor>
              </div>
              <div className='flex flex-col items-center'>
                {props.setShow ? (
                  <span className="mt-6 "> Already have an account? <span className="cursor-pointer text-sm text-fuchsia-400 font-bold" onClick={() => props.setShow(true)}>Log in</span></span>
                ) : (
                  <Anchor to="/signin" className="mt-6 ">Already have an account? <span className="cursor-pointer text-sm text-fuchsia-400 font-bold">Sign in</span></Anchor>
                )}
              </div>
              <div className='flex self-center'>
                <Anchor to="/" className="mt-2"> Go back to  <span className="cursor-pointer text-sm text-fuchsia-400 font-bold">Home page</span></Anchor>
              </div>
            </div>
          </div>
        </div >
        <div className='xsm:hidden w-1/2 p-4 flex justify-end h-screen bg-center bg-cover bg-[url(/src/assets/image/Rectangle81.png)]'>
        </div>
      </div >
    </>
  )
}

export default Register;
