import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Mobile from '../components/Mobile';
import {Outlet} from "react-router-dom"

export default function Main() { //puedo desestructurar props en {children} y llamar directamente a la propiedad sin usar el props. 
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer />
      <Mobile />
    </>
  )
}
