import { createReducer, on } from '@ngrx/store';
import { State } from '../common/paymentDetails';
import {
  resetPaymentDetails,
  setPaymentDetails
} from '../paymentStore/paymentDetails.actions';

const initialState: State = {
  paymentDetails: null
};
const _paymentDetailsReducer = createReducer(
  initialState,
  on(setPaymentDetails, (state, action) => {
    return { ...state, paymentDetails: action.paymentDetails };
  }),
  on(resetPaymentDetails, state => {
    return { ...state, paymentDetails: null };
  })
);

export function paymentDetailsReducer(state, action) {
  return _paymentDetailsReducer(state, action);
}
