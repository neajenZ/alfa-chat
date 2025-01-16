import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme/index.ts'
import {GlobalStyles} from "@styles/globalStyles.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
            <App />
            <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
