import React from 'react'
import apiUrl from "../../api"
import { useEffect, useState, useRef } from "react"
import axios from 'axios'
import VITE_API from '../../api'
import Swal from 'sweetalert2'
import Index from './Index'
import Navbar from '../components/Navbarmobile'
import Footer from '../components/Footermobile'
import App from '../App'

export default function MangaForm() {
  useEffect(
    () => { axios(apiUrl + 'categories').then(res => categories(res.data.categories)).catch(err => console.error(err)) },
    []                                    //array de dependecias vacio ya que necesitamos fechar una unica vez al mostrarse el componente
  )
  let [categor, categories] = useState([])
  console.log(categor)

  const options = () => {
    return categor.map(a => <option key={a._id} value={a._id}>{a.name}</option>);
  }
  console.log(categor)

  const title = useRef()
  const category = useRef()
  const description = useRef()
  function handleForm(e) {
    e.preventDefault()
    let data = {
      title: title.current.value,
      category_id: category.current.value,
      description: description.current.value
    }
    axios.post(VITE_API + "mangas", data)
      .then(res => {
        console.log(res)
        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          timer: 2000,
          width: "400px",
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: 'Your manga was successfully created',
        })
      })
      .catch(error => {
        const err = error.response.data.message
        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          width: "400px",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'error',
          title: err,
        })
      })
  }
  let role = localStorage.getItem("role")
  console.log(role)
  return (
<<<<<<< HEAD
<>
    {role == 1 || role == 2 ?(
      <>
<Navbar/>
      <section className="grid h-screen place-content-center text-slate-300">
    <div className="mb-10 text-center text-black">
      <h1 className="text-3xl font-bold">New Manga</h1>
     
    </div>
    <form onSubmit={(e)=>handleForm(e)}>
    <div className="flex flex-col items-center justify-center space-y-6 pt-14">
      <input ref={title} type="text" id="title" name="title" placeholder="Insert title" className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500  text-black focus:outline-none focus:ring-0" />
      <div>
    <select ref={category} placeholder="Insert order" className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500  text-black" name="categories">
      <option value="" key="rr">Insert Category</option>
      {options()}
    </select>
      </div>
      <div>
        <input ref={description} type="text" id="Insert description" name="Insert order" placeholder="Insert order" className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent  text-black focus:outline-none focus:ring-0" />
      </div>
 
   
      <button className="rounded-full bg-pink-500 p-2 px-16 py-4 text-white t-10 font-bold text-lg"> Send</button>
    </div>
    </form>
  </section>
  <Footer/>
  </>
   ):(
    <>
   <Index/>
   <App/>
   </>
   )}
   </>
   
  
=======
    <>
      {role == 1 || role == 2 ? (
        <>
          <Navbar />
          <section className="grid h-screen place-content-center text-slate-300">
            <div className="mb-10 text-center text-black">
              <h1 className="text-3xl font-bold">New Manga</h1>

            </div>
            <form onSubmit={(e) => handleForm(e)}>
              <div className="flex flex-col items-center justify-center space-y-6 pt-14">
                <input ref={title} type="text" id="title" name="title" placeholder="Insert title" className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500  text-black focus:outline-none focus:ring-0" />
                <div>
                  <select ref={category} placeholder="Insert order" className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500  text-black" name="categories">
                    <option value="" key="rr">Insert Category</option>
                    {options()}
                  </select>
                </div>
                <div>
                  <input ref={description} type="text" id="Insert description" name="Insert order" placeholder="Insert order" className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent  text-black focus:outline-none focus:ring-0" />
                </div>


                <button className="rounded-full bg-pink-500 p-2 px-16 py-4 text-white t-10 font-bold text-lg"> Send</button>
              </div>
            </form>
          </section>
          <Footer />
        </>
      ) : (
        <>
          <Index />
          <App />
        </>
      )}
    </>
>>>>>>> 75297bd12d72b0754e0bfdc5c0e5477f1ea9cad8
  )
}
