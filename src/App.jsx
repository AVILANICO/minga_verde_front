

function App() {

  return (
    <>
    {/* header */}

    <div className="flex justify-center items-center h-28">
      <div className="flex w-4/5 justify-between">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke-width="1.5" stroke="#F9A8D4" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
          </div>
          <div>
            <img className="sm:w-8 md:w-12 lg:w-16" src="./src/assets/images/logo2.png" alt="" />
          </div>
        </div>
    </div>
    
    {/* carrousel */}

    <div className="flex justify-center mb-8">
      <div className="bg-cover bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] flex sm:w-4/5 md:h-48 justify-around rounded-lg">
        <div className="w-10 self-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF80" viewBox="0 0 24 24" stroke-width=".5" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <img className="self-center mb-4 md:h-52 md:w-48 md:mb-8 lg:h-64 lg:w-60" src="./src/assets/images/8b8e139c764c05a681947b2d6855bd331.png" alt="asdd" />
        <img className="self-center lg:mb-14 md:h-48 md:mb-10 lg:h-60 lg:w-44" src="./src/assets/images/image3.png" alt="asd" />
        <div className="flex-col lg:mt-16 md:w-40  lg:w-80">
          <h4 className="text-white text-2xl">Shonen</h4>
          <p className="text-white text-xs">Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
        </div>
        <div className="w-10 self-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF80" viewBox="0 0 24 24" stroke-width=".5" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </div>

    {/* narutobi sensei */}

    <div className="flex justify-center h-80">
      <div className="bg-cover bg-fondo-naruto w-4/5 rounded-lg flex items-center justify-center">
        <div>
          <h1 className="text-white md:text-center md:text-6xl mb-2">Live the emotion of the manga</h1>
          <h4 className="text-white text-xl md:flex md:justify-center lg:flex lg:justify-start mb-2">Find the perfect manga for you</h4>
          <p className="text-white md:flex md:justify-center lg:flex lg:justify-start mb-2">#MingaForever 🔥</p>
          <div className="md:flex md:justify-center lg:flex lg:justify-start">
            <button class="rounded-none bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] h-10 w-32 text-white">Explore</button>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center mt-4">
      <div className="w-4/5 h-80 ">
        <img className="rounded-[50%_50%_48%_52%_/_0%_0%_100%_100%]" src="./src/assets/images/Rectangle14.png" alt="asd" />
      </div>
    </div>

    {/* FOOTER */}

    <div className="flex justify-center">
      <div className="flex justify-between w-3/5">
        <div className="flex gap-8">
          <a href="#" >Home</a>
          <a href="#">Mangas</a>
        </div>
        <div>
          <img className="w-20" src="./src/assets/images/logo2.png" alt="ddd" />
        </div>
        <div>
          <div className="flex gap-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-vimeo" viewBox="0 0 16 16">
            <path d="M15.992 4.204c-.071 1.556-1.158 3.687-3.262 6.393-2.175 2.829-4.016 4.243-5.522 4.243-.933 0-1.722-.861-2.367-2.583L3.55 7.523C3.07 5.8 2.556 4.94 2.007 4.94c-.118 0-.537.253-1.254.754L0 4.724a209.56 209.56 0 0 0 2.334-2.081c1.054-.91 1.845-1.388 2.373-1.437 1.243-.123 2.01.728 2.298 2.553.31 1.968.526 3.19.646 3.666.36 1.631.756 2.446 1.186 2.445.334 0 .836-.53 1.508-1.587.671-1.058 1.03-1.863 1.077-2.415.096-.913-.263-1.37-1.077-1.37a3.022 3.022 0 0 0-1.185.261c.789-2.573 2.291-3.825 4.508-3.756 1.644.05 2.419 1.117 2.324 3.2z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
          </svg>
          </div>
          <div className="rounded-none bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] h-10 w-44 my-4 text-white flex items-center justify-center gap-4">
            <button class="">Donate</button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
