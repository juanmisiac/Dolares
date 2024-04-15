import { Valores } from "./Valores"
import { useState, useEffect } from "react"

export const TablaDeValores = () => {
  const [data, setData] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)
  
  const selectedValue = (index) => {
    setSelectedItem(index)
  }

  useEffect(() => {
    fetch("https://dolarapi.com/v1/dolares")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  
  return (
    <section className="values-table">
      {data.map((item, index) => (
        <Valores
          onClick={() => selectedValue(index)}
          key={index}
          className={selectedItem === index ? "values selected" : "values"} // Aquí aplicamos la clase "selected" si el índice coincide con el seleccionado
          dolarType={item.nombre}
          buyValue={item.compra}
          sellValue={item.venta}
        />
      ))}
    </section>
  )
}
