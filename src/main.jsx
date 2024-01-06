import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Root } from './Root/Root';
import { Home } from './component/Home/Home';
import { Donation } from './component/Donation/Donation';
import { Statistics } from './component/Statistics/Statistics';
import { DonationDetails } from './component/Home/DonationDetails/DonationDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:"/donation",
        element: <Donation></Donation>,
        loader: () => fetch('../data.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: '/details/:id',
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('../data.json'),
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
