import { useState } from "react";

export default function Mobile() {
  const [hidde, setHide] = useState(true)
  function show() {
    setHide(!hidde)
  }
  return (
    <>
      <nav className="flex justify-center xsm:h-screen sm:hidden">
        {hidde ? (
          <>
            <div className="xsm:bg-fondo-naruto2 xsm:w-full xsm:h-full xsm:bg-cover">
              <div className="flex justify-center items-center h-20">
                <div className="flex w-full mx-4 justify-between">
                  <div className="flex items-center">
                    <svg onClick={show} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth="1.5" stroke="#F9A8D4" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                  </div>
                  <div>
                    <img className="xsm:w-12" src="/images/Logo2.png" alt="asd" />
                  </div>
                </div>
              </div>
              <div>
                <div className="xsm:flex xsm:flex-col xsm:mt-40">
                  <h1 className="text-white xsm:text-4xl xsm:text-center xsm:font-bold">Live the emotion of the manga</h1>
                  <h4 className="text-white xsm:text-base xsm:self-center xsm:mb-2">Find the perfect manga for you</h4>
                  <div className="xsm:self-center">
                    <button className="rounded-3xl bg-gradient-to-b from-[#df5aa3] to-[#F472B6] h-10 w-60  text-white">Explore</button>
                  </div>
                </div>
              </div>
              <div className="w-screen mt-48">
                <div className="flex justify-between items-center m-4">
                  <a className="text-white font-semibold" href="">Home</a>
                  <img className="w-12" src="/images/Logo2.png" alt="ddd" />
                  <a className="text-white font-semibold" href="">Mangas</a>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <div className="bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] h-screen w-screen flex flex-col items-center justify-between">
                <div className="flex justify-between w-full mt-2 gap-2" >
                  <img className="w-12 rounded-full" src="/images/perfilGmail.jpg" alt="nico" />
                  <div>
                    <p className="text-sm text-white font-bold">Alejandro Nicolás Avila</p>
                    <p className="text-sm text-white">wowaura833@gmail.com</p>
                  </div>
                  <button className="w-4/5 h-1 flex justify-end">
                    <svg onClick={show} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col w-full items-center gap-2 mb-72">
                  <a className="w-4/5  h-10 p-2 font-poppins text-sm text-white text-center hover:bg-white hover:text-fuchsia-400 focus:outline-none focus:bg-white focus:text-fuchsia-400 focus:ring-violet-300 rounded-lg" href="#">Home</a>
                  <a className="w-4/5  h-10 p-2 font-poppins text-sm text-white text-center hover:bg-white hover:text-fuchsia-400 focus:outline-none focus:bg-white focus:text-fuchsia-400 focus:ring-violet-300 rounded-lg" href="#">Mangas</a>
                  <a className="w-4/5  h-10 p-2 font-poppins text-sm text-white text-center hover:bg-white hover:text-fuchsia-400 focus:outline-none focus:bg-white focus:text-fuchsia-400 focus:ring-violet-300 rounded-lg" href="#">My mangas</a>
                  <a className="w-4/5  h-10 p-2 font-poppins text-sm text-white text-center hover:bg-white hover:text-fuchsia-400 focus:outline-none focus:bg-white focus:text-fuchsia-400 focus:ring-violet-300 rounded-lg" href="#">Favorites</a>
                  <a className="w-4/5  h-10 p-2 font-poppins text-sm text-white text-center hover:bg-white hover:text-fuchsia-400 focus:outline-none focus:bg-white focus:text-fuchsia-400 focus:ring-violet-300 rounded-lg" href="#">Logout</a>
                </div>
              </div>

            </div>
          </>
        )
        }
      </nav>
    </>

  )

}

