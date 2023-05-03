import logo from "../assets/image/logo-minga.png"
import { useState } from 'react';
import { Link as Anchor } from "react-router-dom";


export default function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }
  const role = localStorage.getItem("role")
  return (
    <nav className="w-full flex justify-between items-center xsm:hidden mt-8">
      <div className="relative">
        <button onClick={handleMenuClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F472B6" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

        </button>
        
        {showMenu && (
          <div className="absolute top-full left-0 w-[30rem]  bg-[#F472B6]/80 rounded-md py-5 z-10 ">
            <div className="flex justify-end">
            <svg onClick={handleMenuClick} className="w-4 h-4 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </div>
            <ul>
              <li><Anchor className="flex justify-center px-4 py-2 text-black hover:bg-white hover:text-btn2 hover:rounded-md m-4" to="/">Home</Anchor></li>
              {role == 1 || role == 2 ?(<><li><Anchor className="flex justify-center px-4 py-2 text-black hover:bg-white hover:text-btn2 hover:rounded-md m-4" to="/manga-form">New mangas</Anchor></li>
</>):("")}
              <li><Anchor className="flex justify-center px-4 py-2 text-black hover:bg-white hover:text-btn2 hover:rounded-md m-4" to="/chapters-from">Chapters</Anchor></li>
              <li><a className="flex justify-center px-4 py-2 text-black hover:bg-white hover:text-btn2 hover:rounded-md m-4" href="#">Favorites</a></li>
              <li><a className="flex justify-center px-4 py-2 text-black hover:bg-white hover:text-btn2 hover:rounded-md m-4" href="#">Logout</a></li>
            </ul>
          </div>
        )}
      </div>
      <a href="http://localhost:5173/">
        <img src={logo} className="w-[4rem]" alt="Logo-Minga" />
      </a>
    </nav>
  )
}






