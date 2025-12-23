import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Users from "./Components/Users.jsx";
import Home from "./Components/Home.jsx";
import userDetails from "./Components/userDetails.jsx";
import UpdateUser from "./Components/UpdateUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      {
        path: "users",
        loader: () => fetch("http://localhost:3002/users"),
        Component: Users,
      },
      {
        path: "user/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3002/users/${params.id}`),
        Component: userDetails,
      },
      {
        path: "update/:id",
        loader: ({params})=> fetch(`http://localhost:3002/users/${params.id}`),
        Component: UpdateUser
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
