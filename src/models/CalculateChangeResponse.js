export default class CalculateChangeResponse {

  constructor(
    statusPayment,
    customerName,
    purchaseAmount,
    amountPaid,
    changeAmount,
    changeMoneyItems = [] // Isso evita erro quando a API retornar null ou vazio.
  ) {
    this.statusPayment = statusPayment;
    this.customerName = customerName;
    this.purchaseAmount = purchaseAmount;
    this.amountPaid = amountPaid;
    this.changeAmount = changeAmount;
    this.changeMoneyItems = changeMoneyItems;
  }
}