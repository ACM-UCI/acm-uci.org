import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router";
import { Analytics } from '@vercel/analytics/next';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
      <Analytics />
    </HashRouter>
  </StrictMode>,
)
