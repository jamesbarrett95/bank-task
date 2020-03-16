import {Action} from '@ngrx/store';
import {Country} from '../../models/Country';

export enum EAsiaActions {
  GetAsiaCountries = '[Asia] Get Asia Countries',
  GetAsiaCountriesSuccess = '[Asia] Get Asia Countries Success'
}

export class GetAsiaCountries implements Action {
  public readonly type = EAsiaActions.GetAsiaCountries;
}

export class GetAsiaCountriesSuccess implements Action {
  public readonly type = EAsiaActions.GetAsiaCountriesSuccess;
  constructor(public payload: Country[]) {}
}

export type AsiaActions = GetAsiaCountries | GetAsiaCountriesSuccess;

