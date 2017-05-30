import { Component, Input } from '@angular/core';
import { WeatherDataModel } from '../weatherDataModel'

@Component({
    'moduleId': module.id,
    'selector': 'weather-widget',
    'templateUrl': 'weather-widget.component.html'
})
export class WeatherWidget {
    @Input() weatherData: WeatherDataModel;
}