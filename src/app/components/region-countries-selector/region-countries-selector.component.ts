import { Component, OnInit, Output, EventEmitter, NgZone } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from 'src/app/models/Country';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { GetEuropeCountries } from 'src/app/store/actions/europe.actions';
import { GetAsiaCountries } from 'src/app/store/actions/asia.actions';
import { selectEuropeanCountriesList } from 'src/app/store/selectors/europe.selectors';
import { IAppState } from 'src/app/store/state/app.state';


@Component({
  selector: 'app-region-countries-selector',
  templateUrl: './region-countries-selector.component.html',
  styleUrls: ['./region-countries-selector.component.scss']
})
export class RegionCountriesSelectorComponent implements OnInit {

  public euCountryData$ = this.store.pipe(select(selectEuropeanCountriesList));

  constructor(
    public countriesService: CountriesService,
    private store: Store<IAppState>
    ) { }

  ngOnInit() {
  }

  public handleDropdownChange(selectedRegion: string): void {

    selectedRegion === 'Europe'
      ? this.store.dispatch(new GetEuropeCountries())
      : this.store.dispatch(new GetAsiaCountries());
  }
}
