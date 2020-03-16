import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { europeReducers } from './europe.reducers';
import { asiaReducers } from './asia.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  europeCountries: europeReducers,
  asiaCountries: asiaReducers
};
