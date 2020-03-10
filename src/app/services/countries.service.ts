import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/Country';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  private regionsUrl = "https://restcountries.eu/rest/v2/region";

  // public getCountriesFromRegion(region: string): Observable<Country[]> {
  //   return this.http.get<Country[]>(`${this.regionsUrl}/${region}`);
  // }

  public getEuropeCoutries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.regionsUrl}/europe`);
  }

  public getAsiaCoutries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.regionsUrl}/asia`);
  }
}
