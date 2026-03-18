import CalculateChangeResponse from "../models/CalculateChangeResponse";

export async function calculateChange(request) {

     const requestBody = {
        customerName: request.customerName,
        purchaseAmount: request.purchaseAmount,
        amountPaid: request.amountPaid
    };

  const response = await fetch(
    "https://localhost:7163/api/sales/calculateChange",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.log(data.message);
    throw new Error(data.message || "Erro ao calcular troco");
  }

return new CalculateChangeResponse(
    data.statusPayment,
    data.customerName,
    data.purchaseAmount,
    data.amountPaid,
    data.changeAmount,
    data.changeMoneyItems ?? []
  );
}