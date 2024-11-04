import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './components/Root/Root.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Statistics from './components/Statistics/Statistics.jsx'

const router = createBrowserRouter([
  {
  path: '/',
  element: <Root></Root>,
  children: [{
    path: '/',
    element : <Home></Home>
  },
  {
    path: 'dash',
    element: <Dashboard></Dashboard>
  },
  {
    path: 'stat',
    element: <Statistics></Statistics>
  }

]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
