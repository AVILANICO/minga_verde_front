import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './router/router.jsx'
import { Provider } from 'react-redux'
import store from './store/store.jsx'

//el main.jsx contiene la logica necesaria para seleccionar al div root y crear/renderizar una app de REACT.
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routers} />
  </Provider>,
)
