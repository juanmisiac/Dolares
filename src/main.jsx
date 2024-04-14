import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header'
import { Presentacion } from './components/Presentacion'
import { TablaDeValores } from './components/TablaDeValores'
import { Conversor } from './components/Conversor'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <div id='main'>
      <Presentacion></Presentacion>
      <TablaDeValores></TablaDeValores>
      <Conversor></Conversor>
    </div>
  </React.StrictMode>,
)
