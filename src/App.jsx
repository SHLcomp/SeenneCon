import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Services from './pages/Services'
import ServicesFilter from './componenets/filters/ServicesFilter'
import Products from './pages/Products'
import Projects from './pages/Projects'
import ProductsFilter from './componenets/filters/ProductsFilter'

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
      path: "/products/:prodId",
      element:<ProductsFilter />
    },
    {
      path: "/products",
      element: < Products />
    },
    {
      path:"/projects",
      element: <Projects />
    },
    {
      path: "/projects/:projId",
      // element:<ProductsFilter />
    },
  
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
