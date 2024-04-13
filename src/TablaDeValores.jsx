import { Valores } from "./Valores"

export const TablaDeValores = () => {
  return (
    <section className="values-table">
      <Valores dolarType="Oficial" buyValue="300" sellValue="400"></Valores>
      <Valores dolarType="Blue" buyValue="400" sellValue="450"></Valores>
      <Valores dolarType="MEP" buyValue="300" sellValue="600"></Valores>
      <Valores dolarType="Tarjeta" buyValue="700" sellValue="800"></Valores>
    </section>
  )
}
