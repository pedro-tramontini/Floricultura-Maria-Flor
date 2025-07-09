import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes' 
import { theme } from './themes/themes'
import { ThemeProvider } from '@emotion/react'

createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
)
