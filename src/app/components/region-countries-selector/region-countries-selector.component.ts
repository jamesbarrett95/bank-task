import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from 'src/app/models/Country';

@Component({
  selector: 'app-region-countries-selector',
  templateUrl: './region-countries-selector.component.html',
  styleUrls: ['./region-countries-selector.component.scss']
})
export class RegionCountriesSelectorComponent implements OnInit {

  public countryData: Country[];

  @Output() countryToViewEmitter = new EventEmitter<Country>();

  constructor(public countriesService: CountriesService) { }

  ngOnInit() {
  }

  public getCountries(region: string): void {
    this.countriesService.getCountriesFromRegion(region).subscribe(countryData => {
      this.countryData = countryData;
    })
  }

  public getCountryData(selectedCountry: string): void {
    const countryToView = this.countryData.find(country => country.name == selectedCountry);
    this.countryToViewEmitter.emit(countryToView);
  }

}
