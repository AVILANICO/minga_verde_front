import ok from '../assets/image/Ok.png'
import noOk from '../assets/image/noOk.png'
import love from '../assets/image/love.png'
import sorprise from '../assets/image/sorprise.png'
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VITE_API from '../../api'
import React from 'react'

export default function Manga() {

  const { id } = useParams()
  // console.log({ id });

  const [mangas, setMangas] = useState([]);
  const [show, setShow] = useState([true])

  useEffect(() => {
    axios.get(VITE_API + `mangas/${id}`)
      .then(res => setMangas(res.data.response))
      .catch(err => console.log(err))
  }, [])
  console.log(mangas);


  // const [showChapters, setShowChapters] = useState([true])
  const [chapters, setChapters] = useState({ data: [], totalPages: 1 })
  const [page, setPage] = useState(1)
  const [reload, setReload] = useState(false)

  useEffect(() => {
    axios.get(VITE_API + `chapters?manga_id=${id}&page=${page + 1}&limit=4`)
      .then(res => setChapters(res.data.response))
      .catch(err => console.log(err))

    axios.get(VITE_API + `chapters?manga_id=${id}&page=${page - 1}&limit=4`)
      .then(res => setChapters(res.data.response))
      .catch(err => console.log(err))
  },
    [page, reload]
  )

  function next() {
    setPage(page + 1)
    setReload(!reload)
  }

  function prev() {
    if (chapters)
      setPage(page - 1)
    setReload(!reload)
  }

  // console.log(chapters);

  return (
    <>
      {show ? (
        <div className="min-h-screen pt-20 flex flex-col items-center">
          <img className="xsm:w-72 xsm:h-80" src={mangas.cover_photo} alt="fotito" />
          <h2 className="text-3xl">{mangas.title}</h2>
          <div className="flex justify-between w-4/5">
            <h2 className="bg-rose-200 rounded-3xl w-16 h-8 flex items-center justify-center text-pink-400" >{mangas.category_id?.name}</h2>
            <h2>Author</h2>
          </div>
          <div className='flex justify-between w-72 mt-8'>
            <div className='bg-slate-200 shadow-2xl rounded-full w-16 h-16 flex items-center justify-center '>
              <img className='w-10' src={ok} alt="ok" />
            </div>
            <div className='bg-slate-300 rounded-full w-16 h-16 flex items-center justify-center'>
              <img className='w-10' src={noOk} alt="ok" />
            </div>
            <div className='bg-slate-300 rounded-full w-16 h-16 flex items-center justify-center'>
              <img className='w-10' src={sorprise} alt="ok" />
            </div>
            <div className='bg-slate-300 rounded-full w-16 h-16 flex items-center justify-center'>
              <img className='w-10' src={love} alt="ok" />
            </div>
          </div>
          <div className='bg-slate-300 rounded-2xl mt-6 flex w-3/5 h-16 items-center justify-evenly'>
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
            <button className={`w-1/2 bg-slate-600 rounded-xl ${show}`} onClick={() => setShow(true)}>Manga</button>
            <button className={`w-1/2 bg-orange-600 rounded-xl ${!show}`} onClick={() => setShow(false)}>Chapters</button>
          </div>
          <p className="mt-8 w-4/5">{mangas.description}</p>
        </div>
      ) : (
        <div className="min-h-screen pt-20 flex flex-col items-center">
          <img className="xsm:w-[80%] w-[20%]" src={mangas.cover_photo} alt="fotito" />
          <h3>Chapters</h3>
          <div className="w-3/5 mt-4">
            <input className={`w-1/2 bg-slate-600 rounded-l`} type="button" value='previus' onClick={prev}></input>
            <input className={`w-1/2 bg-orange-600 rounded-l`} type="button" value='next' onClick={next}></input>
          </div>
          <div className="flex w-4/5 justify-center mt-12">
            <button className={`w-1/2 bg-slate-600 rounded-xl ${show}`} onClick={() => setShow(true)}>Manga</button>
            <button className={`w-1/2 bg-orange-600 rounded-xl ${!show}`} onClick={() => setShow(false)}>Chapters</button>
          </div>
          <div className="flex flex-col mt-12">
            {chapters.map(each => <div key={each._id} className="flex items-center justify-between w-full">
              <img className="w-20 h-20" src={each.cover_photo} alt="" />
              <div className=" flex flex-col items-center">
                <h3>{each.title}</h3>
                <h3>#######</h3>
              </div>
              <button className="bg-gradient-to-r from-btn1 from-(-13.9%) to-btn2 to-58.69% text-neutral-50 rounded-3xl w-24 h-12">Read</button>
            </div>)}
          </div>
        </div>
      )
      }
    </>
  )
}
