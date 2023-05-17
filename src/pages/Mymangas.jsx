import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect, useRef } from 'react'
import categories_action from '../store/actions/categories'
import manga_action from '../store/actions/manga'
import { Link as Anchor, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Editmanga from './EditManga'

const { categories_read } = categories_action;
const { manga_read, manga_delete, manga_update } = manga_action;


export default function Mymangas() {

  const categories = useSelector(store => store.categories.categories)
  const mangas = useSelector(store => store.manga.manga)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  // let title = useRef();
  // let description = useRef();
  // let cover_photo = useRef()
  let category_id = useRef();

  console.log(mangas);
  console.log(categories);
  useEffect(() => {
    dispatch(categories_read())
    dispatch(manga_read())
  }, [])

  const alertEdit = () => {
    setOpen(true);
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
  const authorName = mangas.find(each => each.author_id)?.author_id.name;

  return (
    <>

      <div className=" w-full flex flex-col items-center ">
        <div className=" w-full h-[60vh] xsm:h-80 flex flex-col justify-center items-center bg-contain bg-top bg-[url(/src/assets/image/companyAuthor.png)]">
          <h1 className="text-[5rem] m-4 text-white font-bold mt-10">{authorName?.charAt(0).toUpperCase() + authorName?.slice(1)}</h1>
        </div>
        <div className='min-h-screen bg-white w-[90%] flex flex-col items-center rounded-3xl m-[-5rem]'>
          <div className="flex gap-4 p-6 w-full justify-center items-center">
            <form className='flex gap-2' ref={category_id}>
              {categories &&
                categories.map((category) => (
                  console.log(category.color),
                  <label className='xsm:h-12 xsm:w-20'
                    htmlFor={category._id}
                    key={category._id}
                    style={{
                      color: category.color,
                      backgroundColor: category.hover,
                      padding: "1rem",
                      borderRadius: "20px",
                      borderLeftColor: category.color
                    }}>
                    {category.name}
                    <input defaultChecked={categories.includes(category._id)} name="category_id" type="checkbox" value={category._id} id={category._id} />
                  </label>
                ))}
            </form>
          </div>
          <div className='pb-32 flex justify-center xsm:flex-col xsm:w-full flex-wrap w-4/5 gap-12 xsm:gap-2'>
            {mangas?.map((each =>
              <div key={each._id} className='shadow-lg h-52 lg:w-2/5 md:w-2/5 mt-4 flex flex-row items-center bg-slate-300 rounded-lg'>
                <div className='relative'>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute bottom-20 left-4 hover:scale-125 transition-all">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute bottom-20 left-12 hover:scale-125 transition-all">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                  </button>
                </div>
                <div className='h-[60%] w-2' style={{ backgroundColor: each.category_id.color }}>
                </div>
                <div className='flex flex-col p-5 w-full h-40 font-semibold'>
                  <h1 className='md:text-xl xsm:text-xl xsm:w-full'> {each.title} </h1>
                  <p style={{ color: each.category_id.color }}> {each.category_id.name}</p>
                  <div className='flex gap-4'>
                    <button onClick={() => alertEdit(() => dispatch(manga_update({
                      id: each._id,
                      data: {
                        _id: each._id,
                        title: 'holissss',
                        cover_photo: each.cover_photo,
                        description: 'dale wachin!'
                      }
                    })))} className="mt-10 w-20 bg-[#E0DBFF] text-[#8883F0] hover:bg-violet-400 hover:text-violet-600 cursor-pointer font-bold py-2 px-4 rounded-full hover:scale-125 transition-all">
                      <Anchor to="">Edit</Anchor>
                    </button>
                    <button onClick={() => alertDelete(() => dispatch(manga_delete({ id: each._id })))} className="mt-10 w-20 bg-[#FBDDDC] text-[#EE8380] hover:bg-red-400 hover:text-red-600 cursor-pointer font-bold py-2 px-4 rounded-full hover:scale-125 transition-all">
                      <Anchor to="">Delete</Anchor>
                    </button>
                  </div>
                </div>
                <img className="h-full w-36 object-cover rounded-[80px_8px_8px_100px/80px_8px_8px_100px;]" src={each.cover_photo} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Editmanga open={open} setOpen={setOpen} />
    </>
  )
}
