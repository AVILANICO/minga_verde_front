import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel';
import Footer from '../components/Footer'
import Mobile from '../components/Mobile';

export default function main(props) { //puedo desestructurar props en {children} y llamar directamente a la propiedad sin usar el props. 
  return (
    <>
      <Navbar />
      <Carousel />
      {props.children}
      <Footer />
      <Mobile />
    </>
  )
}
