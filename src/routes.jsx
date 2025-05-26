import { createBrowserRouter, Navigate } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Home from "./components/Home";

export const router = createBrowserRouter([
    { path: '/login',
      element: <Login />,
      children: []
    },
    { path: '/',
      element: <Navigate to='/login' />,
      children: []
    },
    { path: '/*',
      element: <Navigate to='/login' />,
      children: []
    },
    { path: '/register',
      element: <Register />,
      children: []
    },
    { path: '/homepage',
      element: <HomePage />,
      children: [
        {
          path: 'home',
          element: <Home />,
          children:[]
        }
      ]
    },
])