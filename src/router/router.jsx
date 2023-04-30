import { createBrowserRouter } from "react-router-dom";
import Main from '../App.jsx'
import Layout from '../layouts/Main.jsx'
import SignUp from "../pages/SignUp.jsx";
import SignIn from "../pages/SignIn.jsx";

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Main /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/signin', element: <SignIn /> }
    ]
  }
])

export default routers
