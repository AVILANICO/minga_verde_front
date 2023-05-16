import { createBrowserRouter } from "react-router-dom";
import Main from '../App.jsx'
import Layout from '../layouts/Main.jsx'
import Register from "../pages/Register.jsx";
import Signin from "../pages/SignIn.jsx";
import Authform from "../pages/Authform.jsx";
import MangaForm from "../pages/MangaForm.jsx";
import ChapterForm from "../pages/ChapterForm.jsx";
import Mangas from "../pages/Mangas.jsx";
import Pages from "../pages/Pages.jsx";
import Manga from "../pages/Manga.jsx";
import Adminpanel from "../pages/Adminpanel.jsx"


// let token = localStorage.getItem('token')

const routers = createBrowserRouter([
  {
    path: '/', element: <Layout />,
    children: [
      { path: '/', element: <Main /> },
      { path: '/auth', element: <Authform /> },
      { path: '/register', element: <Register /> },
      { path: '/signin', element: <Signin /> },
      { path: '/mangas/:page', element: <Mangas /> },
      { path: '/manga-form', element: <MangaForm /> },
      { path: "/chapters-form/:id_manga", element: <ChapterForm /> },
      { path: "/chapters/:url/:id/:page", element: <Pages />},
      { path: '/mangas/:id', element: <Manga /> },
      { path: '/admin', element: <Adminpanel /> }
    ]
  }
])

export default routers
