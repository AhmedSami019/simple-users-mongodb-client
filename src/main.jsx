import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Users from './Components/Users.jsx';
import Home from './Components/Home.jsx';
import userDetails from './Components/userDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {index: true, Component: Home},
      {
        path: "users",
        Component: Users,
        loader: ()=> fetch("http://localhost:3002/users")
      },
      {
        path: "user/:id",
        loader: ({params})=> fetch(`http://localhost:3002/users/${params.id}`),
        Component: userDetails
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
