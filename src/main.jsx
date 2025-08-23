import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import ScrollProvider from './components/ScrollProvider.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </HashRouter>
  </React.StrictMode>,
)
