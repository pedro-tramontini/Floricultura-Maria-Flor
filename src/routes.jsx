import { createBrowserRouter, Navigate } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import RegisterFlower from "./pages/RegisterFlower";
import LoggedPage from "./pages/LoggedPage";
import ShopingCart from "./pages/ShopingCart";
import ShoppingCartFlowers from "./components/ShoppingCartFlowers";
import AdminHome from "./components/AdminHome";
import ClientHome from "./components/ClientHome";
import EditFlower from "./components/EditFlower";
import RegisterFornecedor from "./pages/RegisterFornecedor";
import RegisterFuncionario from "./pages/RegisterFuncionario";

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
    { path: '/register-fornecedor',
      element: <RegisterFornecedor />,
      children: []
    },
    { path: '/register-funcionario',
      element: <RegisterFuncionario />,
      children: []
    },
    { path: '/registerflower',
      element: <RegisterFlower />,
      children: []
    },
    //Edição do card
    {
      path: '/editflower/:id',
      element: <EditFlower />,
      children: []
    },

    { path: '/shopingcart',
      element: <ShopingCart />,
      children: [
        {
          path: 'shoppingcartflowers',
          element: <ShoppingCartFlowers />,
          children: []
        }
      ]
    },

    { path: '/logged',
      element: <LoggedPage />,
      children: [
        //Página logada sendo admin
        {
          path: 'administrador',
          element: <AdminHome />,
          children:[]
        },
        //Página logada sendo usuário normal
        {
          path: 'cliente',
          element: <ClientHome />,
          children:[]
        }
      ]
    },
    
    //Página não logada, do cliente
    { path: '/homepage',
      element: <HomePage />,
      children: [
        {
          path: 'initialhome',
          element: <ClientHome />,
          children:[]
        }
      ]
    }
])