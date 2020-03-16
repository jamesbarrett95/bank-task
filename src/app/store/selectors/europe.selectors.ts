import { createSelector } from '@ngrx/store';

import {IAppState} from '../state/app.state';
import {IEuropeCountryState} from '../state/europe-country.state';

const selectEuropeCountries = (state: IAppState) => state.europeCountries;

export const selectEuropeanCountriesList = createSelector(
  selectEuropeCountries,
  (state: IEuropeCountryState) => state.countries
);
