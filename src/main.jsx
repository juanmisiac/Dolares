import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './Header'
import { TablaDeValores } from './TablaDeValores'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <TablaDeValores></TablaDeValores>
  </React.StrictMode>,
)
