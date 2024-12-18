import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Root from './Layout/Root'
import router from './Routes/Router'
import AuthProvider from './Provider/AuthProvider'
import  { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <RouterProvider router={router}>
        <Root></Root>
      </RouterProvider>
      <Toaster></Toaster>
    </AuthProvider>
  </>
);
