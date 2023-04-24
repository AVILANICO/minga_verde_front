export default function Carousel() {
  return (
    <>
      <div className="flex justify-center mb-8 xsm:hidden">
        <div className="bg-cover bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] flex xsm:hidden sm:w-4/5 sm:h-48 justify-around rounded-lg gap-1">
          <div className="w-10 self-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF80" viewBox="0 0 24 24" stroke-width=".5" stroke="currentColor" class="w-10 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <img className="self-center mb-4 sm:h-48 sm:w-32 sm:mb-12 md:h-52 md:w-48 md:mb-8 lg:h-64 lg:w-60" src="./assets/images/8b8e139c764c05a681947b2d6855bd331.png" alt="asdd" />
          <img className="self-center sm:h-48 sm:w-30 sm:mb-8 lg:mb-14 md:h-48 md:mb-10 lg:h-60 lg:w-44" src="./assets/images/image3.png" alt="asd" />
          <div className="flex-col lg:mt-16 md:w-40  lg:w-80">
            <h4 className="text-white sm:text-lg text-2xl">Shonen</h4>
            <p className="text-white sm:w-40 xl:w-80 text-xs">Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
          </div>
          <div className="w-10 self-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF80" viewBox="0 0 24 24" stroke-width=".5" stroke="currentColor" class="w-10 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

