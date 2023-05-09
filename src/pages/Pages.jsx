import Navbar from '../components/Navbarmobile'
import Footer from '../components/Footermobile'
import { useState, useEffect } from "react" 
import apiUrl from '../../api'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


export default function Pages() {
	let {id, page} = useParams()
	let navigate = useNavigate()
	let [order, setOrder] = useState()
	let [title, setTitle] = useState()
	let [allPages, setAllPages] = useState([])
	let [imgPages, setImgPages] = useState('')
	let [counter, setCounter] = useState(parseInt(page))

	useEffect(
		() => {axios(apiUrl + 'chapters/' + id)
		.then(res => {
			setAllPages(res.data.response.pages);
			setTitle(res.data.response.title);
			setOrder(res.data.response.order)
			// setCounter(parseInt(page));
			setImgPages(res.data.response.pages[parseInt(page)])
		})

		.catch(err => console.log(err))},
		[]
		)

		

		let next = () => {
			let newCounter = counter + 1;
			if (newCounter >= allPages.length - 1) {
			  newCounter = 0;
			}
			setCounter(newCounter);
			console.log(newCounter);
		 	navigate(`/chapters/${id}/${newCounter}`);
		} 

		let previous = () => {
			let newCounter = counter - 1;
		  if (counter === 0) {
			setCounter = allPages.length - 1
		  }
			setCounter(newCounter);
			navigate(`/chapters/${id}/${newCounter}`);
		}


		useEffect(() =>{
			setImgPages(allPages[counter])
		},[counter])
		


    return (
        <>
			<Navbar/>
						<p className='flex justify-center font-bold xsn: py-8 text-white bg-pink-500/90 xl:'>Chapter #{order} - {title}</p> 
			<div className="max-w-screen-2xl mx-auto pt-1 xsm:py-2">
			
				<div id="default-carousel" className="relative" data-carousel="static">
					<div className="flex justify-center items-center rounded-md ">
						<div>
							<img src={imgPages} className="w-auto my-2 " />
						</div>
						<button onClick={previous} type="button" className="flex absolute h-[50%] w-[50%] left-0 z-30  items-center px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
							<span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-gray-800/30 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
								<svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
								<span className="hidden">Previous</span>
							</span>
						</button>
						<button onClick={next} type="button" className="flex absolute h-[50%] w-[50%] right-0 z-30 justify-end items-center px-4 cursor-pointer group focus:outline-none" data-carousel-next>
							<span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10  dark:bg-gray-800/30 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
								<svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
								<span className="hidden">Next</span>
							</span>
						</button>
					</div>
				</div>
			</div>
			<div className=' flex justify-end w-4/5 '>
				<p className='text-black font-bold'>{counter}/{allPages.length}</p>
			</div>
			<Footer/>
        </>
    )
}
