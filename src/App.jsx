import Main from "./layouts/Main"
import Index from "./pages/Index"
import './App.css'
import apiUrl from "../api"
import Navbarmobile from "./components/Navbarmobile"
import Footermobile from "./components/Footermobile"
import Indexmobile from "./components/Indexmobile"


function App() {

    return (
        <>
            <>
                <Index />
            </>

            {/* //mobile */}
            <div className="flex flex-col justify-center xsm:h-full md:hidden">
                <div className="xsm:bg-[url(/src/assets/image/bg-mobile.png)] xsm:w-full xsm:h-screen xsm:bg-cover md:hidden">
                    <Indexmobile />
                </div>
                
            </div>
        </>
    )
}

export default App