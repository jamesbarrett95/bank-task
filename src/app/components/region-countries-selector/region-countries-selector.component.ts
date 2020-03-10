import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/Country';

@Component({
  selector: 'app-region-countries-selector',
  templateUrl: './region-countries-selector.component.html',
  styleUrls: ['./region-countries-selector.component.scss']
})
export class RegionCountriesSelectorComponent implements OnInit {

  public countries$: Observable<Country[]>;

  constructor(public countriesService: CountriesService) { }

  ngOnInit() {
  }

  getCountries(region: string): void {
    this.countries$ = this.countriesService.getCountriesFromRegion(region);
    this.countries$.subscribe(data => console.log(data));
  }

}
