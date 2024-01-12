import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./routes/Login.jsx"
import Vagas from "./routes/Vagas.jsx"
import VagasEditar from "./routes/VagasEditar.jsx"

const router = createBrowserRouter ([

  {
    path: "/",
    element: <Login/>,
  },

  {
    path: "Vagas",
    element:<Vagas />,
  },

  {
    path: "VagasEditar",
    element: <VagasEditar />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
