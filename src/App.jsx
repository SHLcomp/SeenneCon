import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Services from './pages/Services'
import ServicesFilter from './componenets/filters/ServicesFilter'
import Products from './pages/Products'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/services",
      element: <Services />
    },
    {
      path: "/services/:serviceId",
      element: <ServicesFilter />
    },
    {
      path: "/products",
      element:<Products />
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
