import { Component, OnInit } from '@angular/core';

import { WeatherDataModel } from '../weatherDataModel';
import { WeatherService } from '../weather.service';

@Component({
    /* 'selector' property is not necessary here since this component is loaded by router */
    'moduleId': module.id,
    'templateUrl': 'weather-dashboard.component.html',
    'styles': ['a label {cursor: pointer;}']
})
export class WeatherDashboardComponent implements OnInit {

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
        this.weatherService.getWeatherInfo('Chicago')
        .subscribe(data => this.weatherDataForDefaultCity1 = data);

        this.weatherService.getWeatherInfo('Boston')
        .subscribe(data => this.weatherDataForDefaultCity2 = data);
        
        this.weatherService.getWeatherInfo('Bangalore,India')
        .subscribe(data => this.weatherDataForDefaultCity3 = data);
    }
}
