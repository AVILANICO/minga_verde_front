import React, { useRef } from "react"
import { useParams, useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import chapter_actions from '../store/actions/edit_chapter'
import Index from "./Index"
import Swal from "sweetalert2"


const {edit_chapters, delete_chatpter, update_chapter} = chapter_actions


export default function EditChapter() {
    // let chapters = useSelector(store => store.chapters)
    // console.log(chapters);
    let dispatch = useDispatch()
    let id = useParams()
    // console.log(id.id_manga);
    let title = useRef()


function handleForm(e){
    e.preventDefault()
    let data = {
        manga_id: id.id_manga,
        title: title.current.value,
    }

}
let alert = (title) =>{
    Swal.fire({
        title,
        showDenyButton: false,
        showCancelButton: false,
        confirmButtonText:'save',
        denyButtonText:'cancel',
    }).then((result) =>{
        if(result.isConfirme){
            Swal.fire({
                //aqui va la peticion
            })
        }else {
            Swal.fire({
                html: 'cancel',
            })
        }
    })
}


let role = localStorage.getItem('role')


  return (
    <>
        {role == 1 || role == 2 ? (
            <>
                <div className="flex justify-around">
            
                <section className="grid h-[80vh] mb-[11rem] place-content-center text-slate-300 pt-52">
                    <div className="mb-10 text-center text-black">
                                    <h1 className="text-3xl -tracking-tight font-sans">Edit Chapter</h1>
                    </div>
                    <form onSubmit={(e) => handleForm(e)} className="flex flex-col items-center justify-center space-y-6 pt-14">
                        <input type="text" id="" name="" placeholder="Name of the manga" className="w-80 appearance-none  border-0  p-2 px-4 text-black border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0" ref={title} />
                        <div>
                            <select  placeholder="Insert order" className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0  text-slate-400" name="chapters">
                                <option value="" key="rr">Select chapter</option>
                            </select>
                        </div>
                        <div>
                            <select  placeholder="Insert order" className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500 text-slate-400" name="chapters">
                                <option value="" key="rr">Select data</option>
                            </select>
                        </div>
                        <div>
                            <input type="text" id="Insert order" name="Insert order" placeholder="Data to edit" className="w-80 appearance-none  border-0  p-2 px-4 text-black border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 mb-16"  />
                        </div>
                            <button className="rounded-full bg-[#34D399] p-2 px-32 py-4 text-white t-10 font-bold text-lg"> Send</button>
                            <button onClick={()=>alert('you want to delete?',() => dispatch(delete_chatpter({})))} className="rounded-full bg-[#FBDDDC] p-2 px-32 py-4 text-[#EE8380] t-10 font-bold text-lg"> Delete</button>
                    </form>
                </section>
                <div className="grid place-content-center pt-36 h-full xsm:hidden">
                    <p className="text-center mb-5 font-bold">Chapter #1 - Discover the word</p>
                    <img className="h-[35rem] w-auto" src='https://i.postimg.cc/Nj4bXyr2/main-shingeki-no-kyojin.png'/>
                </div>
                </div>
            </>
        ) : (
            <Index />
        )}
    </>
  )
}
