import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import {CountriesService} from '../../services/countries.service';
import { EMPTY, of } from 'rxjs';
import { EEuropeActions, GetEuropeCountries, GetEuropeCountriesSuccess } from '../actions/europe.actions';

@Injectable()
export class CountryEffects {

  public getEuropeCountries$ = createEffect(() => this.actions$.pipe(
    ofType<GetEuropeCountries>(EEuropeActions.GetEuropeCountries),
    switchMap(() => this.countriesService.getEuropeCoutries()),
    switchMap((blah: any) => of(new GetEuropeCountriesSuccess(blah.users)))
  ));

  public getAsiaCountries$ = createEffect(() => this.actions$.pipe(
    ofType('[Region Selector] Retrieve asia'),
    mergeMap(() => this.countriesService.getEuropeCoutries().pipe(
      map(countries => ({type: '[Asia API]', payload: countries})),
      catchError(() => EMPTY)
    ))
  ));

  constructor(
    private actions$: Actions,
    private countriesService: CountriesService
    ) {}
}
