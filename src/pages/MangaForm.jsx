import React from 'react'
import apiUrl from "../../api"
import { useEffect, useState } from "react"
import axios from 'axios'




export default function MangaForm() {
  useEffect(
    () => { axios(apiUrl + 'categories').then(res =>categories(res.data.categories)).catch(err => console.error(err)) },
    []                                    //array de dependecias vacio ya que necesitamos fechar una unica vez al mostrarse el componente
  )
  let [categor, categories] = useState([])
console.log(categor)

const options = () => {
  return categor.map(a => <option key={a._id}  value={a.name} >{a.name}</option>);
  }



  return (
    

    <section className="grid h-screen place-content-center text-slate-300">
    <div className="mb-10 text-center text-black">
      <h1 className="text-3xl font-bold">New Manga</h1>
     
    </div>
    <div className="flex flex-col items-center justify-center space-y-6 pt-14">
      <input type="text" id="title" name="title" placeholder="Insert title" className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500  focus:outline-none focus:ring-0" />
      <div>
    <select placeholder="Insert order" className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500" name="categories">
      <option value="">Insert Category</option>
      {options()}
    </select>
      </div>
      <div>
        <input type="text" id="Insert description" name="Insert order" placeholder="Insert order" className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0" />
      </div>
 
   
      <button className="rounded-full bg-pink-500 p-2 px-16 py-4 text-white t-10 font-bold text-lg"> Send</button>
    </div>
  </section>
  
  )
}
