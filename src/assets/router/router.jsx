import {createBrowserRouter } from 'react-router-dom'
import Main from "../../App.jsx"
import Layout from "../../layout/main.jsx"
import Chapter from '../../pages/Chapter.jsx'

const routes= createBrowserRouter([
    {path:"/", element :<Layout/>,children:[
        {path: "/", element:<Main/>},
        {path:"/chapters",element:<Chapter/>}


    ]}
])

export default routes