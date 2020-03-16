import {Country} from '../../models/Country';

export interface IAsiaCountryState {
  countries: Country[];
}

export const initialAsiaCountryState: IAsiaCountryState = {
  countries: null
};
