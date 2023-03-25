import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx';
import Menu from './Menu.jsx';
import Status from './Status.jsx';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/menu',
      element: <Menu />
    },
    {
      path:'/status',
      element:<Status />
    }

  ]);

  return <div>
    <RouterProvider router={ router } />

  </div>

}


export default App
