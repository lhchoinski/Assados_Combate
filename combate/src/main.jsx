import React from 'react'
import './index.css'
import App from './App';
import ReactDOM from "react-dom/client";

//Configurando o router e importando arquivos das paginas

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from '../../routes/home';
import Contact from '../../routes/contact';
import Empresa from '../../routes/empresa';
import Cardapio_carnes from '../../routes/Cardapio_carnes';
import Cardapio_acompanhamentos from '../../routes/Cardapio_acompanhamentos';
import Cardapio_sobremesas from '../../routes/Cardapio_sobremesas';
import Cardapio_massas from '../../routes/Cardapio_massas';

//Rotas das Paginas

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home />,
      },
      {
        path:"Contact",
        element: <Contact />,
      },
      {
        path:"Cardapio_carnes",
        element: <Cardapio_carnes />,
      },
      {
        path:"Cardapio_acompanhamentos",
        element: <Cardapio_acompanhamentos />,
      },
      {
        path:"Cardapio_sobremesas",
        element: <Cardapio_sobremesas />,
      },
      {
        path:"Cardapio_massas",
        element: <Cardapio_massas />,
      },
      {
        path:"Empresa",
        element: <Empresa />,
      },
    ]
  },

]);

//Aplicando RouterProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
