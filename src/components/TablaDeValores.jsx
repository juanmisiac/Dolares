import { Valores } from "./Valores"
import { useState, useEffect } from "react"
import { useSelectedValue } from "../hooks/useSelectedValue"

export const TablaDeValores = () => {
  const [data, setData] = useState([])
  const { selectedItem, selectedValue } = useSelectedValue()

  useEffect(() => {
    fetch("https://dolarapi.com/v1/dolares")
      .then(response => response.json())
      .then(data => setData(data))
  }, []);

  return (
    <section className="values-table">
      {data.map((item, index) => (
        <Valores
          onClick={() => selectedValue(index, item)}
          key={index}
          className={selectedItem === index ? "values selected" : "values"} // Aplica un className para mostrar la cotizacion seleccionada
          dolarType={item.nombre}
          buyValue={item.compra}
          sellValue={item.venta}
        />
      ))}
    </section>
  )
}
