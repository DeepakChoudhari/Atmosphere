import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'

import { AppComponent } from './app.component';
import { WeatherWidget } from './weather-widget/weather-widget.component';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, WeatherWidget ],
    bootstrap: [ AppComponent ]
})
export class AppModule{ }