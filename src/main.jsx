import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from "./assets/router/router.jsx"
//el main.jsx contiene la logica necesaria para seleccionar al div root y crear/renderizar una app de REACT.
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router ={routes} />
)