import ok from '../assets/image/Ok.png'
import noOk from '../assets/image/noOk.png'
import love from '../assets/image/love.png'
import sorprise from '../assets/image/sorprise.png'
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link as Anchor } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import actionsManga from '../store/actions/one_manga';
import actionsChapter from '../store/actions/one_chapter'
import axios from "axios";
import VITE_API from '../../api'
import React from 'react'

const { one_manga } = actionsManga;
const { one_chapter } = actionsChapter;

export default function Manga() {

  const store = useSelector(store => console.log(store))
  //con useSelector selecciono los estados que necesito
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // console.log({ id });
  const [mangas, setMangas] = useState([]);
  const [show, setShow] = useState([true])
  const [chapters, setChapters] = useState({ data: [], totalPages: 1 })
  const [page, setPage] = useState(1)
  const [reload, setReload] = useState(false)
  const [count, setCount] = useState(0)
  const [cantPages, setCantPages] = useState(0)

  useEffect(() => {
    axios.get(VITE_API + `mangas/${id}`)
      .then(res => {
        setMangas(res.data.response)
        dispatch(one_manga({
          title: res.data.response.title,
          cover_photo: res.data.response.cover_photo
        }))
      })
      .catch(err => console.log(err))
  }, [id])
  // console.log(mangas);

  useEffect(() => {
    axios.get(VITE_API + `chapters?manga_id=${id}&page=${page}&limit=`)
      .then(res => {
        const data = res.data.response
        setChapters(data)
        dispatch(one_chapter(data))
        setCount(res.data.count)
        setCantPages(res.data.cantPages)
      })
      .catch(err => console.log(err))
  },
    [id, page, reload]
  )
  // console.log(count);
  // console.log(chapters)
  console.log(cantPages);

  function next() {
    setPage(prevPage => prevPage + 1)
    navigate(`/manga/${id}/${page}`)
    setReload(!reload)
  }

  function prev() {
    if (page > 1) {
      setPage(prevPage => prevPage - 1)
      navigate(`/manga/${id}/${page}`)
      setReload(!reload)
    }
  }

  // console.log(page)
  return (
    <>
      {show ? (
        <div className="min-h-screen flex flex-col items-center">
          <img className="xsm:w-72 object-cover xsm:pt-0 xsm:mt-0 mt-20 xsm:h-80 w-80" src={mangas.cover_photo} alt="fotito" />
          <h2 className="text-3xl mt-4">{mangas.title}</h2>
          <div className="flex justify-evenly xsm:gap-40 xsm:w-4/5 w-3/5 mt-4">
            <h2 className="bg-rose-200 rounded-3xl xsm:w-16 xsm:h-8 flex items-center justify-center text-pink-400 hover:bg-pink-400 hover:text-white w-20 h-10" >{mangas.category_id?.name}</h2>
            <h2 className='font-montserrat xsm:text-lg font-semibold text-lg text-slate-500 hover:text-slate-800'>{mangas.author_id?.name.charAt(0).toUpperCase() + mangas.author_id?.name.slice(1)}</h2>
          </div>
          <div className='flex justify-evenly gap-1 xsm:w-4/5 w-2/5 mt-8'>
            <div className='bg-slate-300 hover:bg-slate-400 cursor-pointer rounded-full xsm:w-16  xsm:h-16 w-24 h-24 flex items-center justify-center '>
              <img className='xsm:w-10 w-14 object-cover' src={ok} alt="ok" />
            </div>
            <div className='bg-slate-300 hover:bg-slate-400 cursor-pointer rounded-full xsm:w-16  xsm:h-16 w-24 h-24 flex items-center justify-center'>
              <img className='xsm:w-10 w-14 object-cover' src={noOk} alt="ok" />
            </div>
            <div className='bg-slate-300 hover:bg-slate-400 cursor-pointer rounded-full xsm:w-16  xsm:h-16 w-24 h-24 flex items-center justify-center'>
              <img className='xsm:w-10 w-14 object-cover' src={sorprise} alt="ok" />
            </div>
            <div className='bg-slate-300 hover:bg-slate-400 cursor-pointer rounded-full xsm:w-16  xsm:h-16 w-24 h-24 flex items-center justify-center'>
              <img className='xsm:w-10 w-14 object-cover' src={love} alt="ok" />
            </div>
          </div>
          <div className='bg-slate-300 hover:bg-slate-400 cursor-pointer rounded-2xl mt-6 flex xsm:w-4/5 w-2/5 h-16 items-center justify-evenly'>
            <div className='flex flex-col'>
              <h3 className='text-center'>4.5/5</h3>
              <p>Rating</p>
            </div>
            |
            <div>
              <h3 className='text-center'>265</h3>
              <p>Chapters</p>
            </div>
            |
            <div>
              <h3 className='text-center'>Eng</h3>
              <p>Language</p>
            </div>
          </div>
          <div className="flex w-4/5 justify-center mt-12">
            <button className={`xsm:w-48 xsm:h-8 w-60  h-8 text-white bg-fuchsia-400 hover:bg-fuchsia-300 transition-all rounded-full ${show}`} onClick={() => setShow(true)}>Manga</button>
            <button className={`xsm:w-48 xsm:h-8 w-60  h-8 text-slate-500 hover:text-slate-600 hover:bg-slate-400 transition-all bg-slate-200 rounded-full ${!show}`} onClick={() => setShow(false)}>Chapters</button>
          </div>
          <p className="mt-8 xsm:w-4/5 w-3/5 text-center">{mangas.description}</p>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col items-center">
          <img className="xsm:w-72 xsm:pt-0 object-cover xsm:mt-0 pt-20 xsm:h-80 w-[20%] h-full" src={mangas.cover_photo} alt="fotito" />
          <h2 className="text-3xl mt-4">{mangas.title}</h2>
          <div className="flex justify-evenly xsm:gap-40 xsm:w-4/5 w-3/5 mt-4">
            <h2 className="bg-rose-200 rounded-3xl xsm:w-16 xsm:h-8 flex items-center justify-center text-pink-400 hover:bg-pink-400 hover:text-white w-20 h-10" >{mangas.category_id?.name}</h2>
            <h2 className='text-lg text-slate-500 hover:text-slate-800'>{mangas.author_id?.name.charAt(0).toUpperCase() + mangas.author_id?.name.slice(1)}</h2>
          </div>
          <div className='flex justify-evenly gap-1 xsm:w-4/5 w-2/5 mt-8'>
            <div className='bg-slate-300 hover:bg-slate-400 cursor-pointer rounded-full xsm:w-16  xsm:h-16 w-24 h-24 flex items-center justify-center '>
              <img className='xsm:w-10 w-14 object-cover' src={ok} alt="ok" />
            </div>
            <div className='bg-slate-300 hover:bg-slate-400 cursor-pointer rounded-full xsm:w-16  xsm:h-16 w-24 h-24 flex items-center justify-center'>
              <img className='xsm:w-10 w-14 object-cover' src={noOk} alt="ok" />
            </div>
            <div className='bg-slate-300 hover:bg-slate-400 cursor-pointer rounded-full xsm:w-16  xsm:h-16 w-24 h-24 flex items-center justify-center'>
              <img className='xsm:w-10 w-14 object-cover' src={sorprise} alt="ok" />
            </div>
            <div className='bg-slate-300 hover:bg-slate-400 cursor-pointer rounded-full xsm:w-16  xsm:h-16 w-24 h-24 flex items-center justify-center'>
              <img className='xsm:w-10 w-14 object-cover' src={love} alt="ok" />
            </div>
          </div>
          <div className='bg-slate-300 hover:bg-slate-400 cursor-pointer rounded-2xl mt-6 flex xsm:w-4/5 w-2/5 h-16 items-center justify-evenly'>
            <div className='flex flex-col'>
              <h3 className='text-center'>4.5/5</h3>
              <p>Rating</p>
            </div>
            |
            <div>
              <h3 className='text-center'>265</h3>
              <p>Chapters</p>
            </div>
            |
            <div>
              <h3 className='text-center'>Eng</h3>
              <p>Language</p>
            </div>
          </div>
          <div className="flex w-4/5 justify-center mt-12">
            <button className={`xsm:w-48 xsm:h-8 w-60  h-8 text-slate-500 hover:text-slate-600 hover:bg-slate-400 transition-all bg-slate-200 rounded-full ${show}`} onClick={() => setShow(true)}>Manga</button>
            <button className={`xsm:w-48 xsm:h-8 w-60  h-8 text-white bg-fuchsia-400 hover:bg-fuchsia-300 transition-all rounded-full ${!show}`} onClick={() => setShow(false)}>Chapters</button>
          </div>

          <div className="flex flex-col items-center mt-12 gap-4 xsm:mb-4 xsm:w-[90%] w-2/5">
            {chapters.map(each => <div key={each.title} className="flex items-center justify-between w-full">
              <img className="xsm:w-20 xsm:h-20 p-1 w-36 h-36 object-cover" src={each.cover_photo} alt="asd" />
              <div className=" flex flex-col items-center">
                <h3 className='text-center xsm:text-sm text-xl'>{each.title}</h3>
                <h3 className='text-center xsm:text-sm text-lg'>..202</h3>
              </div>
              <Anchor to={`/chapters/chapter/${each._id}/0`} className="flex justify-center items-center bg-fuchsia-400 hover:bg-fuchsia-300 transition-all text-neutral-50 rounded-full xsm:w-32 xsm:text-xl xsm:h-16 w-[20%] h-16 md:text-xl font-bold">Read</Anchor>
            </div>)}
          </div>
          {count > 5 && <div className="w-3/5 mt-4 mb-6 flex justify-center gap-8">
            {page != 1 && <input className={`xsm:w-24 xsm:h-12 w-40 h-16 bg-fuchsia-400 rounded-full cursor-pointer hover:bg-fuchsia-300 transition-all text-white text-lg font-bold`} type="button" value='Previus' onClick={prev}></input>}
            {page != cantPages && <input className={`xsm:w-24 xsm:h-12 w-40 h-16 bg-fuchsia-400 rounded-full cursor-pointer hover:bg-fuchsia-300 transition-all text-white text-lg font-bold`} type="button" value='Next' onClick={next}></input>}
          </div>}
        </div>
      )
      }
    </>
  )
}