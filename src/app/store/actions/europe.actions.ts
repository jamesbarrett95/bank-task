import {Action} from '@ngrx/store';
import {Country} from '../../models/Country';

export enum EEuropeActions {
  GetEuropeCountries = '[Europe] Get Europe Countries',
  GetEuropeCountriesSuccess = '[Europe] Get Europe Countries Success'
}

export class GetEuropeCountries implements Action {
  public readonly type = EEuropeActions.GetEuropeCountries;
}

export class GetEuropeCountriesSuccess implements Action {
  public readonly type = EEuropeActions.GetEuropeCountriesSuccess;
  constructor(public payload: Country[]) {
    console.log('GetEuropeCountriesSuccess Dispatched');
  }
}

export type EuropeActions = GetEuropeCountries | GetEuropeCountriesSuccess;

