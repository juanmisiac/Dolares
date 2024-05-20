export const Valores = ({dolarType, buyValue, sellValue, className, onClick}) => {
  return (
    <div className={className} onClick={onClick}>
      <h2 className="dolar-type">{dolarType}</h2>
      <div className="value">
        <p className="buy-value">Compra: ${buyValue}</p>
        <p className="sell-value">Venta: ${sellValue}</p>
      </div>
    </div>
  )
}
