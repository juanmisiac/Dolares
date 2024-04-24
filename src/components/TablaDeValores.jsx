import { Valores } from "./Valores"
import { useState, useEffect } from "react"
import { useSelectedValue } from "../hooks/useSelectedValue"

export const TablaDeValores = ({ onSelectedItemChange }) => {
  const [data, setData] = useState([])
  const { selectedItem, selectedValue } = useSelectedValue()

  useEffect(() => {
    fetch("https://dolarapi.com/v1/dolares")
      .then(response => response.json())
      .then(data => setData(data))
  }, []);

  const handleItemClick = (index, item) => {
    selectedValue(index, item);
    onSelectedItemChange(index); // Llama a la función enviada desde main.jsx para pasarle los datos a Conversor.jsx
  };

  return (
    <section className="values-table">
      {data.map((item, index) => (
        <Valores
          onClick={() => handleItemClick(index, item)}
          key={index}
          className={selectedItem === index ? "values selected" : "values"}
          dolarType={item.nombre}
          buyValue={item.compra}
          sellValue={item.venta}
        />
      ))}
    </section>
  )
}
