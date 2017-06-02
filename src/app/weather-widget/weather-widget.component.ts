import { Component, Input } from '@angular/core';
import { WeatherDataModel } from '../weatherDataModel'

@Component({
    'moduleId': module.id,
    'selector': 'weather-widget',
    'templateUrl': 'weather-widget.component.html',
    'styles': ['a label { cursor: pointer; }']
})
export class WeatherWidgetComponent {
    @Input() weatherData: WeatherDataModel = null;

    showMoreWeatherInfo() {

    }
}