import { useState } from "react";


export default function Navbar() {
  const [hidde, setHide] = useState(false)
  function show() {
    console.log(hidde);
    setHide(!hidde)
  }
  return (
    <>
      <nav className="flex justify-center items-center h-28 xsm:hidden">
        <div className="flex w-4/5 justify-between">
          <div>
            {hidde ? (
              <>
                <button onClick={show} className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke-width="1.5" stroke="#F9A8D4" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                </button>
              </>
            ) : (
              <>
                <button onClick={show} className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke-width="1.5" stroke="#F9A8D4" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                </button>
                <div className="bg-red-500 h-12">
                  <p>ESCONDEME WACHIN!!</p>
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




