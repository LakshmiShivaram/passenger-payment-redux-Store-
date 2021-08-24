import { createAction, props } from '@ngrx/store';
import { IPassengerDetails } from '../sharedData/passengerDetails';

export const SET_PASSENGER_DETAILS = '[passenger details page] set details';
export const RESET_PASSENGER_DETAILS = '[passenger details page] reset details';

export const setPassengerDetails = createAction(
  SET_PASSENGER_DETAILS,
  props<{ passengerDetails: IPassengerDetails }>()
);

export const resetPassengerDetails = createAction(RESET_PASSENGER_DETAILS);
