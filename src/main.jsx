import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CompanyContextProvider } from './components/Dashboard/Context/CompanyContextProvider'
import { HomeContextProvider } from './components/Home/Context/HomeContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HomeContextProvider>
    <CompanyContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CompanyContextProvider>
  </HomeContextProvider>
)
