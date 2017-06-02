import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import 'rxjs/add/operator/switchMap';

import { WeatherService } from "../weather.service";
import { WeatherDataModel } from "../weatherDataModel";

@Component({
    /* If this component is part of routing, then 'selector' is not necessary */
    'moduleId': module.id,
    'templateUrl': 'weather-details.component.html'
})
export class WeatherDetailsComponent implements OnInit {

    constructor(private weatherService: WeatherService,
                private route: ActivatedRoute) {}
                
    weatherData: WeatherDataModel;
    city: string;

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => this.city = params['city'])

        this.route.params
        .switchMap((params: Params) => this.weatherService.getWeatherInfo(params['city']))
        .subscribe(weatherData => this.weatherData = weatherData);
    }
}