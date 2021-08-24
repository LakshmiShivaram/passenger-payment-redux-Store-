import { createReducer, on } from '@ngrx/store';
import { State } from '../sharedData/passengerDetails';
import {
  resetPassengerDetails,
  setPassengerDetails
} from '../passengerStore/passenger-details.actions';

const initialState: State = {
  passengerDetails: null
};

const _passengerDetailsReducer = createReducer(
  initialState,

  on(setPassengerDetails, (state, action) => {
    return { ...state, passengerDetails: action.passengerDetails };
  }),

  on(resetPassengerDetails, state => {
    return { ...state, passengerDetails: null };
  })
);

export function passengerDetailsReducer(state, action) {
  return _passengerDetailsReducer(state, action);
}
