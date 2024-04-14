import { Valores } from "./Valores"
import { useState, useEffect } from "react"

export const TablaDeValores = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch("https://dolarapi.com/v1/dolares")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  
  return (
    <section className="values-table">
      {data.map((item, index) => (
        <Valores
          key={index}
          dolarType={item.nombre}
          buyValue={item.compra}
          sellValue={item.venta}
        />
      ))}
    </section>
  )
}
