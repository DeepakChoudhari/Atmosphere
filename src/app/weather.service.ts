import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { WeatherDataModel } from "./weatherDataModel";

@Injectable()
export class WeatherService {
    private weatherApiBaseUrl: string = "https://weatherdatasvc.azurewebsites.net/api/WeatherDataService?code=R7EHeMJGrdEOtyLPeDy1IVqjN3tdNBrkrZoKhRBwTsZvanuhq/92WA==&location=";

    constructor(private http: Http) {}

    getWeatherInfo(cityName: string): Observable<WeatherDataModel> {
        let apiUrl = this.weatherApiBaseUrl + cityName;
        return this.http.get(apiUrl)
        .map((response: Response) => new WeatherDataModel(JSON.stringify(response.json())))
        .catch(this.handleError);
    }

    private handleError(error: any)
    {
        return Observable.throw(error);
    }
}