import React from 'react'
import Navbarmobile from '../components/Navbarmobile'
import Footermobile from '../components/Footermobile'

export default function Mangas() {
    return (
        <>
            <Navbarmobile />
            <div className=" w-full h-auto flex flex-col items-center  ">
                <div className=" w-full h-[100%] flex flex-col justify-center items-center bg-cover bg-top bg-[url(/src/assets/image/fondomanga.png)] xsm:h-[40vh]">
                    <h1 className="text-[5rem] xsm:text-4xl m-4  text-white font-bold xsm: mb-[12%] mt-10">Mangas</h1>
                    <form className="flex justify-center rounded-lg items-center bg-white w-[63%] h-16 xsm:w-[90%] xsm:rounded-full xsm:mb-8  mb-[10%]">
                        <label type="button" className="flex justify-center">
                            <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16.9584" cy="17.4584" r="10.7917" stroke="#F97316" strokeWidth="2" />
                                <path d="M30.8333 31.3333L26.2083 26.7083" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </label>
                        <input type="search" placeholder=" Find your manga here" className="h-full w-[90%] rounded-lg text-xl xsm:w-[70%] xsm:rounded-full" />
                    </form>
                </div>
                <div className="w-full h-[100vh]  bg-slate-300 flex justify-center xsm:pt-[7%]">
                    <div className="rounded-[2rem] w-[90%] m-[-5rem] bg-white xsm:w-full xsm:rounded-[4rem]">
                        <h2 className=' text-[1.5rem] font-bold mt-[10%] ml-5 w-[100%] md:hidden'>Explore</h2>
                        <div className='flex flex-col items-center mt-4 xsm:mt-[10%] w-[100%]'>

                            <div className='flex flex-row justify-evenly w-full md:hidden'>
                                <div className='relative h-[7rem] w-[7rem] rounded-lg bg-cover text-white bg-[url(/src/assets/image/adventu.png)] flex flex-col justify-end items-center'>
                                    <div className='z-10'>Adventure</div>
                                    <div className='absolute inset-0 bg-black opacity-50 rounded-lg'></div>
                                </div>
                                <div className='relative h-[7rem] w-[7rem] rounded-lg bg-cover text-white bg-[url(/src/assets/image/nostalgic.png)] flex flex-col justify-end items-center'>
                                    <div className='z-10'>Nostalgic</div>
                                    <div className='absolute inset-0 bg-black opacity-50 rounded-lg'></div>
                                </div>
                                <div className='relative h-[7rem] w-[7rem] rounded-lg bg-cover text-white bg-[url(/src/assets/image/popular.png)] flex flex-col justify-end items-center'>
                                    <div className='z-10'>Popular</div>
                                    <div className='absolute inset-0 bg-black opacity-50 rounded-lg'></div>
                                </div>
                            </div>
                            <div className='flex flex-row md:w-full md:ml-[30%] md:mt-[2%] md:mb-5 md:gap-5  xsm:mt-3 xsm:gap-3'>
                                <button className="xsm:hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full">
                                    All
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full">
                                    Shojo
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full">
                                    Shojo
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full">
                                    Shojo
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full">
                                    Shojo
                                </button>
                                <img className='w-10 md:hidden' src="/src/assets/image/Icon.jpg" alt="" />

                            </div>
                            <div className='flex xsm:flex-col xsm:items-center md:flex-wrap w-[70%] gap-[10%] xsm:w-full '>
                                <div className='shadow-lg h-[12vw] mt-4 flex flex-row items-center w-[45%] xsm:w-[80%] xsm:h-[40%] bg-white rounded-lg'>
                                    <div className='bg-blue-500 h-[60%] w-2 xsm:w-2 xsm:h-[10vh]'>

                                    </div>
                                    <div className='flex flex-col p-5 w-[60%]  font-bold'>
                                        <h1 className='md:text-[1.5rem]'> Naruto Volume 41 </h1>
                                        <p>Type</p>
                                        <button class="xsm:hidden mt-10 w-[40%] bg-green-200 hover:bg-green-700 text-green-500 font-bold py-2 px-4 rounded-full">
                                            Read
                                        </button>
                                    </div>
                                    <img className='h-[100%] w-[40%] xsm:h-[40%] xsm:w-[40%]' src="/src/assets/image/popular.png" alt="" />
                                </div>

                                <div className='shadow-lg h-[12vw] mt-4 flex flex-row items-center w-[45%] xsm:w-[80%] xsm:h-[40%] bg-white rounded-lg'>
                                <div className='bg-blue-500 h-[60%] w-2 xsm:w-2 xsm:h-[10vh]'>

                                    </div>
                                    <div className='flex flex-col p-5 w-[60%]  font-bold'>
                                        <h1 className='md:text-[1.5rem]'> Naruto Volume 41 </h1>
                                        <p>Type</p>
                                        <button class="xsm:hidden mt-10 w-[40%] bg-green-200 hover:bg-green-700 text-green-500 font-bold py-2 px-4 rounded-full">
                                            Read
                                        </button>
                                    </div>
                                    <img className='h-[100%] w-[40%] xsm:h-[40%] xsm:w-[40%]' src="/src/assets/image/popular.png" alt="" />
                                </div>
                                <div className='shadow-lg h-[12vw] mt-4 flex flex-row items-center w-[45%] xsm:w-[80%] xsm:h-[40%] bg-white xms:bg-[#EBEBEB] rounded-lg'>
                                <div className='bg-blue-500 h-[60%] w-2 xsm:w-2 xsm:h-[10vh]'>

                                    </div>
                                    <div className='flex flex-col p-5 w-[60%]  font-bold'>
                                        <h1 className='md:text-[1.5rem]'> Naruto Volume 41 </h1>
                                        <p>Type</p>
                                        <button class="xsm:hidden mt-10 w-[40%] bg-green-200 hover:bg-green-700 text-green-500 font-bold py-2 px-4 rounded-full">
                                            Read
                                        </button>
                                    </div>
                                    <img className='h-[100%] w-[40%] xsm:h-[40%] xsm:w-[40%]' src="/src/assets/image/popular.png" alt="" />
                                </div>
                                <div className='shadow-lg h-[12vw] mt-4 flex flex-row items-center w-[45%] xsm:w-[80%] xsm:h-[40%] bg-white rounded-lg'>
                                <div className='bg-blue-500 h-[60%] w-2 xsm:w-2 xsm:h-[10vh]'>

                                    </div>
                                    <div className='flex flex-col p-5 w-[60%]  font-bold'>
                                        <h1 className='md:text-[1.5rem]'> Naruto Volume 41 </h1>
                                        <p>Type</p>
                                        <button class="xsm:hidden mt-10 w-[40%] bg-green-200 hover:bg-green-700 text-green-500 font-bold py-2 px-4 rounded-full">
                                            Read
                                        </button>
                                    </div>
                                    <img className='h-[100%] w-[40%] xsm:h-[40%] xsm:w-[40%]' src="/src/assets/image/popular.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='xsm:pt-[30%]'>
                <Footermobile />
            </div>
        </>

    )
}
