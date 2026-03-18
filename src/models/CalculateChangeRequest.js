// representar o request enviado para a API

export default class CalculateChangeRequest {
  constructor(customerName, purchaseAmount, amountPaid) {
    this.customerName = customerName;
    this.purchaseAmount = purchaseAmount;
    this.amountPaid = amountPaid;
  }
}