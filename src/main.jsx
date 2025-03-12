import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Othercontext from './Components/Othercontext.jsx'

createRoot(document.getElementById('root')).render(
  <Othercontext>
    <App />
    </Othercontext>
  ,
)
