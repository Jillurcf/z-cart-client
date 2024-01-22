import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import MainLayout from './Layout/MainLayout.jsx';
import HowItWorks from './Pages/Home/HowItWorks.jsx';
import Pricing from './Pages/Home/Pricing.jsx';
import FAQ from './Pages/Home/FAQ.jsx';
import Contacts from './Pages/Home/Contacts.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/howItWorks",
        element: <HowItWorks></HowItWorks>,
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/contactus",
        element: <Contacts></Contacts>,
      },
     
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
