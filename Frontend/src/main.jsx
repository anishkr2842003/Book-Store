import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ThemeController from './components/ThemeController.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <div className='dark:bg-slate-900 dark:text-white'>
    <App />
    </div>
    </BrowserRouter>
  </React.StrictMode>,
)
