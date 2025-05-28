import { createBrowserRouter, Navigate } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Home from "./components/Home";
import RegisterFlower from "./pages/RegisterFlower";
import LoggedPage from "./pages/LoggedPage";
import HomeLogged from "./components/HomeLogged";

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
    { path: '/registerflower',
      element: <RegisterFlower />,
      children: []
    },

    //Página logada
    { path: '/logged',
      element: <LoggedPage />,
      children: [
        {
          path: 'homelogged',
          element: <HomeLogged />,
          children:[]
        }
      ]
    },
    
    //Página não logada, do cliente
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