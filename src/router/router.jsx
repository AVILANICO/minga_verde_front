import { createBrowserRouter } from "react-router-dom";
import Main from '../App.jsx'
import Layout from '../layouts/Main.jsx'
import Signup from "../pages/SignUp.jsx";
import Signin from "../pages/SignIn.jsx";
import MangaForm from "../pages/MangaForm.jsx";
import ChapterForm from "../pages/ChapterForm.jsx";


const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Main /> },
      { path: '/signup', element: <Signup /> },
      { path: '/signin', element: <Signin /> },
      { path: '/manga-form', element: <MangaForm /> },
      {path:"/chapters-form/:id_manga",element:<ChapterForm/>}
    ]
  }
])

export default routers
