import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { EcomerceApp } from './EcomerceApp'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <EcomerceApp />
    </BrowserRouter>
  </StrictMode >,
)
