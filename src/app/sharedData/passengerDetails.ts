export interface IPassengerDetails {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phone: number;
}

export interface State {
  passengerDetails: IPassengerDetails;
}
