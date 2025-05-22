import { createBrowserRouter, Navigate } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";

export const router = createBrowserRouter([
    { path: '/login',
      element: <Login />,
      children: []
    },
    { path: '/',
      element: <Navigate to='/login' />,
      children: []
    },
    { path: '/register',
      element: <Register />,
      children: []
    },
])