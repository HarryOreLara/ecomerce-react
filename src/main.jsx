import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { EcomerceApp } from './EcomerceApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EcomerceApp />
  </StrictMode>,
)
