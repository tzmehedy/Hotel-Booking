import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Root from './Layout/Root'
import router from './Routes/Router'

createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={router}>
    <Root></Root>
  </RouterProvider>
  
  </>,
)
