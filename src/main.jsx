import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import { Header } from './components/Header'
import { Presentacion } from './components/Presentacion'
import { TablaDeValores } from './components/TablaDeValores'
import { Conversor } from './components/Conversor'
import './index.css'

const Main = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const handleSelectedItemChange = (index, item) => {
    setSelectedItemIndex({index, item});
  };

  /* Se envia a TablaDeValores.jsx la función handleSelectedItemChange bajo el nombre de "onSelectedItemChange",
  esta función recibe el valor del index y el item seleccionado y lo trae hacia el main.jsx (padre) 
  para pasarselo al Conversor.jsx */

  return (
    <React.StrictMode>
      <Header></Header>
      <div id='main'>
        <Presentacion></Presentacion>
        <TablaDeValores onSelectedItemChange={handleSelectedItemChange}></TablaDeValores>
        <Conversor selectedItemIndex={selectedItemIndex}></Conversor>
      </div>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);