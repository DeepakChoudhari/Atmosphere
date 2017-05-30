import { Component, OnInit } from '@angular/core';
import { WeatherDataModel } from './weatherDataModel';

@Component({
    'moduleId': module.id,
    'selector': 'angular-app',
    'templateUrl': 'app.component.html',
    'styles': ['a label {cursor: pointer;}'],
    'providers': [/*  Services that this component consumes go here */]
})
export class AppComponent {
    weatherDataJson : string = '{"location":{"name":"Paris","region":"Ile-de-France","country":"France","lat":48.87,"lon":2.33,"tz_id":"Europe/Paris","localtime_epoch":1495078661,"localtime":"2017-05-18 5:37"},"current":{"last_updated_epoch":1495078207,"last_updated":"2017-05-18 05:30","temp_c":16.0,"temp_f":60.8,"is_day":0,"condition":{"text":"Moderate rain","icon":"//cdn.apixu.com/weather/64x64/night/302.png","code":1189},"wind_mph":5.6,"wind_kph":9.0,"wind_degree":230,"wind_dir":"SW","pressure_mb":1013.0,"pressure_in":30.4,"precip_mm":0.8,"precip_in":0.03,"humidity":88,"cloud":75,"feelslike_c":16.0,"feelslike_f":60.8,"vis_km":10.0,"vis_miles":6.0}}';

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
        let weatherData = new WeatherDataModel(this.weatherDataJson);
        this.weatherDataForDefaultCity1 = weatherData;
        this.weatherDataForDefaultCity2 = weatherData;
        this.weatherDataForDefaultCity3 = weatherData;
    }
}
