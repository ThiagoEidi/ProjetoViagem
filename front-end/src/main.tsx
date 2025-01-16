import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/globe.tsx'
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="h-full w-full bg-red-300">
      <App/>
    </div>
  </StrictMode>,
)
