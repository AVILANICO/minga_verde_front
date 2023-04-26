import { useState, useEffect } from "react";
//traigo el useEffect para controlar el efecto una peticion externa con esta funcion.
import axios from "axios";
//mejor axios que fetch por métodos y sintaxis. Traigo el modulo de axios para fetchear con el mismo.
import VITE_API from "../../api";

export default function Carousel() {
  useEffect(
    () => {
      axios(VITE_API + 'categories').then(res => setCategories(res.data.categories)).catch(err => console.log(err))

    },
    [] //array de dependencias tiene que estar siempre vacío ya que necesitamos fetchear una unica vez aal montarse el componente (y despues esos datos no deberian cambiar)
  )
  let [categories, setCategories] = useState([])
  //guardo los datos de categories en una variable global de estado para que cada vez que los mismos se modifiquen, tambien se modifique la vista. El useEffect va de la mano con el useState.
  //inicialmente arranca como un array vacío que cuando se carguen los datos va a cambiar la vista
  //sintaxis del Hook
  //"counter" es el valor inicial del useState
  //"setCounter" es la funcion que trabaja con ese valor "counter"
  let [counter, setCounter] = useState(0)
  let sumar = () => {
    setCounter(counter + 1);
    if (counter === categories.length - 1) {
      setCounter(0)
    }
  }
  let restar = () => {
    setCounter(counter - 1);
    if (counter === 0) {
      setCounter(categories.length - 1)
    }
  }
  return (
    <>
      <div className="flex justify-center mb-8 xsm:hidden">
        <div className="bg-cover bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] flex xsm:hidden sm:w-4/5 sm:h-48 justify-around rounded-lg gap-1">
          <button onClick={restar} className="w-10 self-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF80" viewBox="0 0 24 24" stroke-width=".5" stroke="currentColor" class="w-10 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <img className="self-center mb-4 sm:h-48 sm:w-32 sm:mb-12 md:h-52 md:w-48 md:mb-8 lg:h-64 lg:w-60" src={categories[counter]?.character_photo} alt={categories[counter]?.name} />
          <img className="self-center sm:h-48 sm:w-30 sm:mb-8 lg:mb-14 md:h-48 md:mb-10 lg:h-60 lg:w-44" src={categories[counter]?.cover_photo} alt={categories[counter]?.name} />

          <div className="flex-col lg:mt-16 md:w-40  lg:w-80">
            <h4 className="text-white sm:text-lg xl:text-3xl">{categories[counter]?.name}</h4>
            <p className="text-white sm:w-40 xl:w-80 sm:text-sm">{categories[counter]?.description}</p>
          </div>

          <button onClick={sumar} className="w-10 self-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF80" viewBox="0 0 24 24" stroke-width=".5" stroke="currentColor" class="w-10 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

