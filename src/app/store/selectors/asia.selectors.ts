import { createSelector } from '@ngrx/store';

import {IAppState} from '../state/app.state';
import {IAsiaCountryState} from '../state/Asia-country.state';

const selectAsiaCountries = (state: IAppState) => state.asiaCountries;

export const selectAsianCountriesList = createSelector(
  selectAsiaCountries,
  (state: IAsiaCountryState) => state.countries
);
