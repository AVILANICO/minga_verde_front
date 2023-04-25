import FlechaDerecha from "./FlechaDerecha"
import FlechaIzquierda from "./FlechaIzquierda"

export default function Carousel() {
  return (
    <>
      <div className="flex justify-center mb-8 xsm:hidden">
        <div className="bg-cover bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] flex xsm:hidden sm:w-4/5 sm:h-48 justify-around rounded-lg gap-1">

          <FlechaIzquierda />

          <img className="self-center mb-4 sm:h-48 sm:w-32 sm:mb-12 md:h-52 md:w-48 md:mb-8 lg:h-64 lg:w-60" src="/images/8b8e139c764c05a681947b2d6855bd331.png" alt="asdd" />
          <img className="self-center sm:h-48 sm:w-30 sm:mb-8 lg:mb-14 md:h-48 md:mb-10 lg:h-60 lg:w-44" src="./images/image3.png" alt="asd" />
          <div className="flex-col lg:mt-16 md:w-40  lg:w-80">
            <h4 className="text-white sm:text-lg text-2xl">Shonen</h4>
            <p className="text-white sm:w-40 xl:w-80 text-xs">Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
          </div>

          <FlechaDerecha />

        </div>
      </div>
    </>
  )
}

