import logo from "../assets/image/logo-minga.png"
import VITE_API from "../../api";
import axios from "axios";
import { useState } from 'react';
import { Link as Anchor, Link, useNavigate } from "react-router-dom";


export default function Navbar() {

  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate()


  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }
  const role = localStorage.getItem("role")
  let token = localStorage.getItem('token')
  let headers = { headers: { 'authorization': `Bearer ${token}` } }
  let email = localStorage.getItem('email')
  let photo = localStorage.getItem('photo')

  function backHome() {
    axios.post(VITE_API + 'auth/signout', null, headers) //pongo null xq no tengo que enviar datos
      .then(res => {
        localStorage.clear();
        navigate('/')
      })
      .catch(err => alert(err))
  }

  return (
    <nav className="w-full px-8 pt-4 absolute flex justify-between items-center xsm:hidden">
      <div className="">
        <button onClick={handleMenuClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F472B6" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

        </button>
        
        {showMenu && (
          <div className="absolute top-full left-0 w-[30rem]  bg-[#F472B6]/80 rounded-md py-5 z-10 ">
            {token && <div className="flex items-center justify-center gap-4">
              <img className="w-12 h-12 object-cover rounded-full" src={photo} alt="imgUsuario" />
              <p className="text-xl">{email}</p>
            </div>}
            <ul>
              <li><Anchor className="flex justify-center px-4 py-2 text-black hover:bg-white hover:text-btn2 hover:rounded-md m-4" to="/">Home</Anchor></li>
              {role == 1 || role == 2 ?(<><li><Anchor className="flex justify-center px-4 py-2 text-black hover:bg-white hover:text-btn2 hover:rounded-md m-4" to="/manga-form">New mangas</Anchor></li>
</>):("")}
              {token && <li><a className="flex justify-center px-4 py-2 text-black hover:bg-white hover:text-btn2 hover:rounded-md m-4" href="#">Favorites</a></li>}
              {!token && <li><Anchor className="flex justify-center px-4 py-2 text-black hover:bg-white hover:text-btn2 hover:rounded-md m-4" to="/register">Register</Anchor></li>}
              {!token && <li><Anchor className="flex justify-center px-4 py-2 text-black hover:bg-white hover:text-btn2 hover:rounded-md m-4" to="/signin">Log In</Anchor></li>}
              {token && <li><a className="flex justify-center px-4 py-2 text-black hover:bg-white hover:text-btn2 hover:rounded-md m-4 cursor-pointer" onClick={backHome}>Sign Out</a></li>}
            </ul>
          </div>
        )}
      </div>
      <Link to="/">
        <img src={logo} className="w-[4rem]" alt="Logo-Minga" />
      </Link>
    </nav>
  )
}






