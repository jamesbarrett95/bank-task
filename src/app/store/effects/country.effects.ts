import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap, tap } from 'rxjs/operators';
import {CountriesService} from '../../services/countries.service';
import { EMPTY, of, Observable } from 'rxjs';
import { EEuropeActions, GetEuropeCountries, GetEuropeCountriesSuccess } from '../actions/europe.actions';
import { ICountryHttp } from 'src/app/models/http-models/country-http.interface';

@Injectable()
export class CountryEffects {

  public getEuropeCountries$ = createEffect(() => this.actions$.pipe(
    ofType<GetEuropeCountries>(EEuropeActions.GetEuropeCountries),
    switchMap(() => this.countriesService.getEuropeCoutries().pipe(
      // map((countries: ICountryHttp) => of(new GetEuropeCountriesSuccess(countries.countries)))
      tap((val: ICountryHttp) => of(new GetEuropeCountriesSuccess(val.countries))),
      mergeMap((countryHttpResp: ICountryHttp) => of(new GetEuropeCountriesSuccess(countryHttpResp.countries)))
    ))
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
