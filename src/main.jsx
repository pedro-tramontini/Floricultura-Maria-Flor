import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes'
import { theme } from './themes/Themes'
import { ThemeProvider } from '@emotion/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>,
)
