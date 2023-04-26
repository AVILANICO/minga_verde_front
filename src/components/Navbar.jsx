import { useState } from "react";

export default function Navbar() {
  const [hidde, setHide] = useState(true)
  function show() {
    setHide(!hidde)
  }
  return (
    <>
      <nav className="flex justify-center items-center h-28 xsm:hidden">
        <div className="flex w-4/5 justify-between">
          <div>
            {hidde ? (
              <>
                <button className="flex items-center">
                  <svg onClick={show} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={1.5} stroke="#F9A8D4" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                </button>
              </>
            ) : (
              <>
                <button className="flex items-center">
                  <svg onClick={show} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={1.5} stroke="#F9A8D4" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                </button>
                <div className="relative">
                  <div className="bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] h-80 w-64 absolute flex flex-col items-center justify-evenly rounded-lg">
                    <button className="w-4/5 h-1 flex justify-end">
                      <svg onClick={show} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <a className="w-4/5 p-1 h-8 font-poppins font-semibold text-white text-center hover:bg-white hover:text-fuchsia-400 focus:outline-none focus:bg-white focus:text-fuchsia-400 focus:ring-violet-300 rounded-xl" href="#">Home</a>
                    <a className="w-4/5 p-1 h-8 font-poppins font-semibold text-white text-center hover:bg-white hover:text-fuchsia-400 focus:outline-none focus:bg-white focus:text-fuchsia-400 focus:ring-violet-300 rounded-xl" href="#">Mangas</a>
                    <a className="w-4/5 p-1 h-8 font-poppins font-semibold text-white text-center hover:bg-white hover:text-fuchsia-400 focus:outline-none focus:bg-white focus:text-fuchsia-400 focus:ring-violet-300 rounded-xl" href="#">My mangas</a>
                    <a className="w-4/5 p-1 h-8 font-poppins font-semibold text-white text-center hover:bg-white hover:text-fuchsia-400 focus:outline-none focus:bg-white focus:text-fuchsia-400 focus:ring-violet-300 rounded-xl" href="#">Favorites</a>
                    <a className="w-4/5 p-1 h-8 font-poppins font-semibold text-white text-center hover:bg-white hover:text-fuchsia-400 focus:outline-none focus:bg-white focus:text-fuchsia-400 focus:ring-violet-300 rounded-xl" href="#">Logout</a>
                  </div>
                </div>

              </>
            )}
          </div>
          <div>
            <img className="sm:w-12 md:w-16 lg:w-20" src="/images/Logo2.png" alt="logo" />
          </div>
        </div>
      </nav>
    </>
  )
}




