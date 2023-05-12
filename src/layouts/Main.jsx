import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Navbarmobile from '../components/Navbarmobile';
import Footermobile from '../components/Footermobile';
import { Outlet } from 'react-router-dom';


export default function main() { //puedo desestructurar props en {children} y llamar directamente a la propiedad sin usar el props. 
  return (
    <>
      <div className=''>
        <Navbarmobile />
      </div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <div className=''>
        <Footermobile />
      </div>
      <Footer />
    </>
  )
}
