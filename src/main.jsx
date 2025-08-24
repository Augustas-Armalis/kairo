import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ScrollProvider from './components/ScrollProvider.jsx'
import App from './App.jsx'
import './index.css'

// Handle redirect before React renders to prevent flash
const urlParams = new URLSearchParams(window.location.search);
const redirectPath = urlParams.get('redirect');

if (redirectPath) {
  // Remove the redirect parameter from the URL
  urlParams.delete('redirect');
  const newUrl = redirectPath + (urlParams.toString() ? '?' + urlParams.toString() : '');
  
  // Update the URL without reloading the page
  window.history.replaceState(null, null, newUrl);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollProvider>
          <App />
        </ScrollProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
