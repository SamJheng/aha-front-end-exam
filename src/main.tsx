import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@mui/material'
import theme from './lib/theme.tsx'
import CssBaseline from '@mui/material/CssBaseline';
import { router } from './router.tsx'
import { RouterProvider } from 'react-router-dom'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
