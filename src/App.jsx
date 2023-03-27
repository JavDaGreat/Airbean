import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx';
import Menu from './Menu.jsx';
import Status from './Status.jsx';
import About from './about.jsx';

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
    },
    {
      path:'/about',
      element:<About />
    }

  ]);

  return <div>
    <RouterProvider router={ router } />

  </div>

}


export default App
