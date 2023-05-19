import React from 'react'
import { useDispatch } from 'react-redux'
import { Link as Anchor } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Editmanga from '../pages/EditManga'
import manga_action from '../store/actions/manga'

const { manga_delete } = manga_action

const MyMangasCard = ({ each, categories }) => {

  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const alertEdit = () => {
    setOpen(true);
  }

  function urlChapter() {
    navigate(`/chapters-form/${each._id}`)
  }

  function urlEdit() {
    navigate(`/edit/${each._id}`)
  }

  const alertDelete = (httpCb) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00BA88',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        httpCb()
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
        )
      }
      else {
        Swal.fire(
          'Cancelled',
          'Your manga is safe :)',
          'error'
        )
      }
    })
  }
  return (
    <div key={each._id} className='shadow-lg xsm:h-56 xsm:w-full md:w-80 md:h-52 lg:h-48 lg:w-2/5 mt-4 flex flex-row items-center bg-slate-200 rounded-lg'>
      <div className='relative mt-4'>
        <button onClick={urlChapter}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute bottom-20 left-4 hover:scale-125 transition-all">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <button onClick={urlEdit}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1 absolute bottom-20 left-12 hover:scale-125 transition-all">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        </button>
      </div>
      <div className='h-32 w-3 rounded-lg' style={{ backgroundColor: each?.category_id?.color }}></div>
      <div className='flex flex-col md:h-40 p-5 w-full h-40 font-semibold'>
        <h1 className='md:text-xl xsm:text-xl xsm:w-full'> {each?.title} </h1>
        <p style={{ color: each?.category_id?.color }}> {each?.category_id?.name}</p>
        <div className='flex gap-4'>
          <button onClick={() => alertEdit()} className="mt-10 w-20 bg-[#E0DBFF] text-[#8883F0] hover:bg-violet-400 hover:text-violet-600 cursor-pointer font-bold py-2 px-4 rounded-full hover:scale-125 transition-all">
            Edit
          </button>
          <button onClick={() => alertDelete(() => dispatch(manga_delete({ id: each?._id })))} className="mt-10 w-20 bg-[#FBDDDC] text-[#EE8380] hover:bg-red-400 hover:text-red-600 cursor-pointer font-bold py-2 px-4 rounded-full hover:scale-125 transition-all">
            Delete
          </button>
        </div>
      </div>
      <img className="h-full w-[30%] xsm:h-full object-cover rounded-[80px_8px_8px_100px/80px_8px_8px_100px;]" src={each?.cover_photo} alt="" />
      <Editmanga mangas={each} categories={categories} open={open} setOpen={setOpen} />
    </div>
  )
}

export default MyMangasCard