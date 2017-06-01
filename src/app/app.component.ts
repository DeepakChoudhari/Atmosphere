import { Component, OnInit } from '@angular/core';

import { WeatherDataModel } from './weatherDataModel';
import { WeatherService } from './weather.service';

@Component({
    'moduleId': module.id,
    'selector': 'angular-app',
    'templateUrl': 'app.component.html',
    'styles': ['a label {cursor: pointer;}'],
    'providers': [ WeatherService ]
})
export class AppComponent implements OnInit {

    constructor(private weatherService: WeatherService) { }

    cityName: string;
    weatherDataForDefaultCity1: WeatherDataModel;
    weatherDataForDefaultCity2: WeatherDataModel;
    weatherDataForDefaultCity3: WeatherDataModel; 

    onSubmit()
    {
        console.log(this.cityName);
    }

    ngOnInit() {
        /* Get weather data for 3 places as per configuration to display when the app is first loaded  */
        this.weatherService.getWeatherInfo('Chicago').then(data => this.weatherDataForDefaultCity1 = data);
        this.weatherService.getWeatherInfo('Boston').then(data => this.weatherDataForDefaultCity2 = data);
        this.weatherService.getWeatherInfo('Houston').then(data => this.weatherDataForDefaultCity3 = data);
    }
}
