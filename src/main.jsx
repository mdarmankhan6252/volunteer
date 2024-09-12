import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import Donate from './pages/Donate';
import AddVolunteer from './components/AddVolunteer';
import AuthProvider from './Provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './routes/PrivateRoute';
import BeVolunteer from './components/BeVolunteer';
import MyPost from './components/MyPost';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/beVolunteer',
        element:<PrivateRoute><BeVolunteer/></PrivateRoute>

      },
      {
        path:'/donate',
        element:<PrivateRoute><Donate/></PrivateRoute>
      },
      {
        path:'/addVolunteer',
        element:<PrivateRoute><AddVolunteer/></PrivateRoute>
      },
      {
        path:'/myPost',
        element:<MyPost/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    <Toaster />
  </StrictMode>,
)
