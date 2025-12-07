import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { AddMeal } from './components/addMeal.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
        <App />
  },
  {
    path: "/addmeal",
    element:
      <AddMeal/>
  },
  //Fallback route
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router}  />
  </StrictMode>,
)
