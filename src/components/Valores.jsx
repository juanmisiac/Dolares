export const Valores = ({dolarType, buyValue, sellValue}) => {
  return (
    <div className="values">
      <h2 className="dolar-type">{dolarType}</h2>
      <div className="value">
        <p className="buy-value">Compra: ${buyValue}</p>
        <p className="sell-value">Venta: ${sellValue}</p>
      </div>
    </div>
  )
}
