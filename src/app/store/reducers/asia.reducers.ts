import { AsiaActions, EAsiaActions } from '../actions/asia.actions';
import { IAsiaCountryState, initialAsiaCountryState } from '../state/asia-country.state';

export const asiaReducers = (
  state = initialAsiaCountryState,
  action: AsiaActions
): IAsiaCountryState => {
  switch (action.type) {
    case EAsiaActions.GetAsiaCountriesSuccess: {
      return {
        ...state,
        countries: action.payload
      };
    }
    default:
      return state;
  }
};



