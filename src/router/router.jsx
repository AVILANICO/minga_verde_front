import { createBrowserRouter } from "react-router-dom";
import Main from '../App.jsx'
import Layout from '../layouts/Main.jsx'
import Singup from "../pages/Singup.jsx";
import Singin from "../pages/singIn.jsx";

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Main /> },
      { path: '/signup', element: <Singup /> },
      { path: '/singin', element: <Singin /> }
    ]
  }
])

export default routers