import React, { useEffect, useRef, useState } from "react"
import { useParams,  Navigate} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import Swal from "sweetalert2"

import chapters_actions from '../store/actions/chapters'
const { read_chapters, read_manga, delete_chapter } = chapters_actions

export default function EditChapter() {
    let mangas = useSelector(store => store.chapters.mangas.title)
    console.log(mangas);
    let chapters = useSelector(store => store.chapters.chapters)
    console.log(chapters)
    let dispatch = useDispatch()
    let {id_manga} = useParams()
    // console.log(id_manga);
    let title_chapter = useRef()
    let [coverFoto, setCoverFoto] = useState('')
    let [title, setTitle] = useState('')
    let [order, setOrder] = useState('')
    let [idDelete, setIdDelete] = useState('')

    let delete_Id = () => {
        dispatch(delete_chapter({
            id:idDelete}))
            setCoverFoto('')
        }


    useEffect(() => {
        dispatch(read_chapters({id_manga}))
        dispatch(read_manga({id_manga}))
    },[])



function handleForm(e){
    e.preventDefault()
    let data = {
        id_chapter: title_chapter.current.value
    }

    setIdDelete(data.id_chapter)
    
    let cover = chapters.filter(image => image._id === data.id_chapter)
    setCoverFoto(cover[0].cover_photo)
    let titleChapter = chapters.filter(title => title._id === data.id_chapter)
    setTitle(titleChapter[0].title)
    let orderChapter = chapters.filter(order => order._id === data.id_chapter)
    setOrder(orderChapter[0].order)
    console.log(data.id_chapter)
}

let alertDelete = (deleteFunctions) =>{
    Swal.fire({
        title:'Are you sure you want to delete',
        text:'You won`t be able to revert your changes',
        icon:'warning',
        showCancelButton: true,
        confirmButtonColor:'#34D399',
        cancelButtonColor:'#d33',
        confirmButtonText:'Yes, delete it!',
    }).then((result) => {
        if(result.isConfirmed){
            deleteFunctions();
            Swal.fire(
                'Delete!',
                'Your file has been deleted',
                'success'
            )
        } else {
            Swal.fire(
                'Cancelled',
                'Your chapter is safe',
                'error'
            )
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
                    <form onChange={(e) => handleForm(e)} className="flex flex-col items-center justify-center space-y-6 pt-14">
                        <input type="text" id="" name="" placeholder="Name of the manga" className="w-80 appearance-none  border-0  p-2 px-4 text-black border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0" value={mangas?? ''} disabled= {true}/>
                        <div>
                            <select  placeholder="Insert order" className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0  text-slate-400" name="chapters" ref={title_chapter}>
                            {chapters.map((chapter, index) => (
                            <option key={index} value={chapter._id}>{chapter.title}</option>
                            ))}
                            </select>
                        </div>
                        <div>
                            <select  placeholder="Insert order" className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500 text-slate-400" name="chapters">
                                <option value="" key="rr">Select data</option>
                                <option value="title" key="title">Title</option>
                                <option value="order" key="order">Order</option>
                                <option value="cover-photo" key="cover-photo">Cover_photo</option>
                                <option value="pages" key="pages">Pages</option>
                            </select>
                        </div>
                        <div>
                            <input type="text" id="Insert order" name="Insert order" placeholder="Data to edit" className="w-80 appearance-none  border-0  p-2 px-4 text-black border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 mb-16"  />
                        </div>
                    </form>
                            <button className="rounded-full bg-[#34D399] p-2 px-32 py-4 text-white t-10 font-bold text-lg mb-8"> Send</button>

                            <button onClick= { ()=>alertDelete(delete_Id)} className="rounded-full bg-[#FBDDDC] p-2 px-32 py-4 text-[#EE8380] t-10 font-bold text-lg"> Delete</button>
                </section>       
                <div className="grid place-content-center pt-36 h-full xsm:hidden">
                    <p className="text-center mb-5 font-bold">Chapter #{order} - {title}</p>
                    <img className="h-[35rem] w-auto" src={coverFoto}/>
                </div>
                </div>
            </>
        ) : (
            <Navigate to= '/' />
        )}
    </>
  )
}
