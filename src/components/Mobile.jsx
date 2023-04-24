export default function Mobile() {
  return (
    <>
      <div className="flex justify-center xsm:h-screen sm:hidden">
        <div className="xsm:bg-fondo-naruto2 xsm:w-full xsm:h-full xsm:bg-cover">
          <div className="flex justify-center items-center h-20">
            <div className="flex w-full mx-4 justify-between">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke-width="1.5" stroke="#F9A8D4" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
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
        </div>
      </div>
    </>
  )
}

