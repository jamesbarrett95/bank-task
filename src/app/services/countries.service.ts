import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Country } from '../models/Country';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  private regionsUrl = 'https://restcountries.eu/rest/v2/region';

  public getEuropeCoutries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.regionsUrl}/europe`).pipe(
      catchError(err => {
        return throwError(
          {
            error: {...err},
            region: 'europe'
          });
      })
    );
  }

  public getAsiaCoutries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.regionsUrl}/asia`).pipe(
      catchError(err => {
        return throwError(
          {
            error: {...err},
            region: 'asia'
          });
      })
    );
  }
}
