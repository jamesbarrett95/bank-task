import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit, OnChanges {

  @Input() countryDataToView;

  public countryName: string;
  public countryCapital: string;
  public countryPopuation: number;
  public currencies: string[];
  public flag: string;

  constructor() { }

  ngOnInit() {
    const { name, capital, population, currencies, flag } = this.countryDataToView;
    this.countryName = name;
    this.countryCapital = capital;
    this.countryPopuation = population;
    this.currencies = currencies;
    this.flag = flag;
    console.log(currencies);
  }

  ngOnChanges() {

  }

}
