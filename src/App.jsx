import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home';
import PostDetails from './Components/PostDetails/PostDetails';
import Layout from './Components/Layout/Layout';


function App() {

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [

        {
          index: true,
          element: <Home />,
        },
        {
          path: 'post-details/:id',
          element: <PostDetails />
        }

      ]
    }
  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App
