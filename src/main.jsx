import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './components/Root/Root.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Statistics from './components/Statistics/Statistics.jsx'
import ItemDetails from './components/Items/ItemDetails/ItemDetails.jsx'
import Category from './components/Categories/Category.jsx'
import Items from './components/Items/Items.jsx'
import Wishlist from './components/WishList/Wishlist.jsx'
import Cart from './components/Cart/Cart.jsx'
import { AppProvider } from './AppContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [{
      path: '/',
      element: <Home></Home>,
      loader: () => fetch(`/items.json`)
    },
    {
      path: 'dash',
      element: <Dashboard></Dashboard>
    },
    {
      path: 'stat',
      element: <Statistics></Statistics>
    },
    {
      path: 'item/:item_id',
      element: <ItemDetails></ItemDetails>,
      loader: () => fetch(`/items.json`),

    },
    {
      path: 'cart',
      element: <Cart></Cart>
    },
    {
      path: 'wishlist',
      element: <Wishlist></Wishlist>
    }
      // {
      //   path: 'category/:categoryId',
      //   element: <Home></Home>,
      //   loader: () => fetch(`/items.json`),
      // }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>,
)
