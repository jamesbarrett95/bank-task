import {Country} from '../../models/Country';

export interface IEuropeCountryState {
  countries: Country[];
}

export const initialEuropeCountryState: IEuropeCountryState = {
  countries: null
};
