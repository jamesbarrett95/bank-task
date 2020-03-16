import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegionCountriesSelectorComponent } from './components/region-countries-selector/region-countries-selector.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { EffectsModule } from '@ngrx/effects';
import { CountryEffects } from './store/effects/country.effects';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    RegionCountriesSelectorComponent,
    CountryDetailsComponent
  ],
  imports: [
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([CountryEffects]),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
