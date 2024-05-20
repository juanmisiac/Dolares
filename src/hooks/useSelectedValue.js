import { useState } from "react"

// Define el estado y la función dentro de un objeto
export const useSelectedValue = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  const selectedValue = (index, item) => {
    setSelectedItem(index)
  };

  // Retorna el estado y la función como parte del objeto
  return { selectedItem, selectedValue }
};
