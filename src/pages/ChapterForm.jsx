import Navbarmobile from "../components/Navbarmobile"
import Footermobile from "../components/Footermobile"
const ChapterForm = () => {
    return (
        <>
        <Navbarmobile />
    <section className="grid h-[80vh] my-10 place-content-center text-slate-300">
        <div className="mb-10 text-center text-black">
        <h1 className="text-3xl -tracking-tight font-sans">New Chapter</h1>
        
        </div>
        <div className="flex flex-col items-center justify-center space-y-6 pt-14">
        <input type="text" id="title" name="title" placeholder="Insert title" className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0" />
        <div>
            <input type="text" id="Insert order" name="Insert order" placeholder="Insert order" className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0" />
        </div>
        <div>
        <input type="text" id="Insert order" name="Insert order" placeholder="Insert pages" className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 mb-20" />
        </div>
    
        <button className="rounded-full bg-pink-500 p-2 px-36 py-4 text-white t-10 font-bold text-lg"> Send</button>
        </div>
    </section>
        <Footermobile />
    </>
    )
  }

export default ChapterForm
