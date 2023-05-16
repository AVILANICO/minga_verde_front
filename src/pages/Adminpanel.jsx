import React from "react";
import { useEffect, useState, useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import apiUrl from "../../api"
import { Link as Anchor, Link, useNavigate } from "react-router-dom";


    /* lista de autores con botones para activarlos/desactivarlos
    lista de editoriales con botones para activarlos/desactivarlos
    en ambos casos mostrar primero la lista de los inactivos y luego los activos
    manejar con redux los cambios de estados para no refetchear la API  */

    export default function Adminpanel() {
      return (
        <div>
           <div className=" w-full min-h-0 flex flex-col items-center  ">
                <div className=" w-full h-[80vh] flex flex-col justify-center items-center bg-cover bg-top bg-[url(/src/assets/image/panel.png)] xsm:h-[40vh]">
                    <h1 className="text-[5rem] xsm:text-4xl m-4  text-white font-bold  mt-12">Panel</h1>
    
                </div>
                <div className="w-full min-h-0  bg-slate-300 flex justify-center xsm:pt-[7%]">
                    <div className="rounded-[2rem] w-[90%] min-h-[50%] m-[-5rem] bg-white xsm:w-full xsm:rounded-[4rem]">

                        <div className='flex flex-col items-center min-h-[120vh] mt-4 xsm:mt-[10%] w-[100%]'>
                         <img className="h-[39px] w-15 mt-20" src="/src/assets/image/Entities.png" alt="" />
                         <div className="mt-3 mr-6 w-[10rem] h-4 flex flex-row justify-center bg-[#F9A8D4]"></div>
                         
                         
                         
                         <div className="mt-[7%] flex flex-row">

                         <button className="text-white not-italic font-medium text-2xl leading-[95.19%] bg-gradient-to-r from-btn1 from-(-13.10%) to-btn2 to-58.69% rounded-[10px_0px_0px_0px/10px_0px_0px_0px;] border-b-4 border-[#F9A8D4] flex flex-row justify-center items-center gap-2.5 w-[25vw] h-[55px] p-4"><b>Companies</b></button>
                         <button className="text-white not-italic font-medium text-2xl leading-[95.19%] bg-gradient-to-r from-btn1 from-(-13.10%) to-btn2 to-58.69% rounded-[0px_10px_0px_0px/0px_10px_0px_0px;] border-b-4 border-[#F9A8D4] flex flex-row justify-center items-center gap-2.5 w-[25vw] h-[55px] p-4"><b>Authors</b></button>

                         </div>

                         <div>

                            <div className="flex flex-row justify-between items-center w-[50vw] h-10 border-2 border-gray-200 ">
                                <div className="flex flex-row gap-3 ml-3"><img className="w-5" src="/src/assets/image/azul.png" alt="" />
                            <p>Blue team</p></div>
                            <p>www.blueteam.com</p>
                            <img className="w-5" src="/src/assets/image/azul.png" alt="" />
                           

                            <label className="mr-3 relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" class="sr-only peer" />
                                            <div class="w-5 h-3 bg-gray-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:right-[10px] after:top-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[0.5rem] after:w-[0.5rem] after:transition-all dark:border-gray-600 peer-checked:bg-pink-400"></div>
                                        </label>


                            </div>
                           

                         </div>
                         
                           

                        
                              
                            

                          
                        </div> 
                    </div>
                </div>
            </div>
        </div>
      )
    }
    
