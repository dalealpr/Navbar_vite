import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Rutas
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/routes.tsx'
// Estilos 
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
