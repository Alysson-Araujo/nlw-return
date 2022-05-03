import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // uma forma de evitar que erros aconteçam <React.StrictMode>
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
