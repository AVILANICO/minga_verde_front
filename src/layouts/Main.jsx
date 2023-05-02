import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel';
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom';


export default function main() { //puedo desestructurar props en {children} y llamar directamente a la propiedad sin usar el props. 
  return (
    <>
      <header className="mx-8">
        <Navbar />
      </header>
     
      <Outlet />
      <Footer />
    </>
  )
}
