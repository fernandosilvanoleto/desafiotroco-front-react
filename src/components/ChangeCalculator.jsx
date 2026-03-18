import { calculateChange } from "../services/salesServices";
import CalculateChangeRequest from "../models/CalculateChangeRequest";
import { useState } from "react";
import "./ChangeCalculator.css";

export default function ChangeCalculator() {

  const [customerName, setCustomerName] = useState("");
  const [purchaseAmount, setPurchaseAmount] = useState("");
  const [amountPaid, setAmountPaid] = useState("");
  const [result, setResult] = useState(null); // vamos guardar o resultado da API em um state
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    setError(null);

    const request = new CalculateChangeRequest(
      customerName,
      parseFloat(purchaseAmount),
      parseFloat(amountPaid)
    );

    try {

      const result = await calculateChange(request);

      setResult(result);

      /*
      console.log("===== RESULTADO DO TROCO =====");

      console.log("Status:", result.statusPayment);
      console.log("Cliente:", result.customerName);
      console.log("Compra:", result.purchaseAmount);
      console.log("Pago:", result.amountPaid);
      console.log("Troco:", result.changeAmount);

      console.log("Itens do troco:");

      result.changeMoneyItems.forEach(item => {
        console.log(
          `${item.quantity} ${item.typeMoney} de R$ ${item.value}`
        );
      });
      */

    } catch (error) {
      setResult(null); // limpa resultado
      setError(error.message);
    }
  }

   return (
    <div className="change-container">

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Nome do Cliente</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Digite o nome"
          />
        </div>

        <div className="form-group">
          <label>Valor da Compra</label>
          <input
            type="number"
            step="0.01"
            value={purchaseAmount}
            onChange={(e) => setPurchaseAmount(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Valor Pago</label>
          <input
            type="number"
            step="0.01"
            value={amountPaid}
            onChange={(e) => setAmountPaid(e.target.value)}
          />
        </div>

        <button type="submit">
          Calcular Troco
        </button>

      </form>

      {error && (
        <div className="error">
          {error}
        </div>
      )}

      {result && (
        <div className="result">

          <h3>Cálculo de Troco</h3>

          <p><strong>Valor da Compra:</strong> R$ {result.purchaseAmount.toFixed(2)} </p>
          <p><strong>Valor Pago:</strong> R$ {result.amountPaid.toFixed(2)} </p>
          <p><strong>Troco Total:</strong> R$ {result.changeAmount.toFixed(2)} </p>

          <p><strong>Resultado:</strong></p>

          {result.changeMoneyItems && result.changeMoneyItems.length > 0 ? (
      
            <ul>
              {result.changeMoneyItems.map((item, index) => (
                <li key={index}>
                  {item.quantity} {item.typeMoney} de R$ {item.value.toFixed(2)}
                </li>
              ))}
            </ul>

          ) : (
            
            <p>{result.statusPayment}</p>

          )}

        </div>
      )}

    </div>
  );
  
}