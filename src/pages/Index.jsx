import BotonExplore from "../components/BotonExplore"

export default function Index() {
  return (
    <>
      <div className="flex justify-center xsm:hidden">
        <div className="bg-cover bg-fondo-naruto w-4/5 h-[55vh] rounded-lg flex items-center justify-center">
          <div>
            <h1 className="text-white md:text-center md:text-6xl mb-2">Live the emotion of the manga</h1>
            <h4 className="text-white text-xl md:flex md:justify-center lg:flex lg:justify-start mb-2">Find the perfect manga for you</h4>
            <p className="text-white md:flex md:justify-center lg:flex lg:justify-start mb-2">#MingaForever 🔥</p>
            <BotonExplore />
          </div>
        </div>
      </div>
    </>
  )
}

