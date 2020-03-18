import { EEuropeActions } from '../actions/europe.actions';
import { EuropeActions } from '../actions/europe.actions';
import { initialEuropeCountryState, IEuropeCountryState } from '../state/europe-country.state';

export const europeReducers = (
  state = initialEuropeCountryState,
  action: EuropeActions
): IEuropeCountryState => {
  switch (action.type) {
    case EEuropeActions.GetEuropeCountriesSuccess: {
      console.log('GET COUNTRIES SUCCESS REDUCER');
      console.log(action.payload);
      return {
        ...state,
        countries: action.payload
      };
    }
    default:
      return state;
  }
};



