import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './assets/style/css/style.css';
import Acceuil from './routes/acceuil';
import Error from './routes/error';
import Formation from './components/content/formation';
import Realisations from './components/content/realisations';
import Experiences from './components/content/experiences';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Acceuil/>,
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);