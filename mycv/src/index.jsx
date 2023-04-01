import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './assets/style/css/style.css';
import Home from './routes/home';
import Error from './routes/error';
import Formation from './components/content/formation';
import Realisations from './components/content/realisations';
import Experiences from './components/content/experiences';
import Competences from "./components/content/competences";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>,
    children: [
      {
        path: "formation",
        element: <Formation />,
      },
      {
        path: "realisations",
        element: <Realisations />,
      },
      {
        path: "experiences",
        element: <Experiences />,
      },
      {
        path: "competences",
        element: <Competences />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);