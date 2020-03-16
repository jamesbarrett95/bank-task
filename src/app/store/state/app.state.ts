import { initialAsiaCountryState, IAsiaCountryState } from './asia-country.state';
import { initialEuropeCountryState, IEuropeCountryState } from './europe-country.state';

export interface IAppState {
  europeCountries: IEuropeCountryState;
  asiaCountries: IAsiaCountryState;
}

export const initialAppState: IAppState = {
  europeCountries: initialEuropeCountryState,
  asiaCountries: initialAsiaCountryState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
