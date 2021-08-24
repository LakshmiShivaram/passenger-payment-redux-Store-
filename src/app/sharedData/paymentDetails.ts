export interface IPaymentDetails {
  cardNumber: number;
  expirationDate: number;
  cva: number;
}

export interface State {
  paymentDetails: IPaymentDetails;
}
