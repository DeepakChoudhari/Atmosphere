import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'
import { RouterModule } from '@angular/router';

import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';
import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { WeatherService } from "./weather.service";
import { WeatherDetailsComponent } from "./weather-details/weather-details.component";

@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule,
        RouterModule.forRoot(
            [
                /* Routes must be configured in the order of more specific to generic routes  */
                {
                    path: 'main',
                    component: WeatherDashboardComponent
                },
                {
                    path: 'weather/:city',
                    component: WeatherDetailsComponent
                },
                {
                    path: '',
                    redirectTo: '/main',
                    pathMatch: 'full'
                }
                /*{
                    path: '**', // This component gets loaded for 404 scenarios
                    component: ErrorComponent
                }*/
            ]
        ) 
    ],
    declarations: [ 
                    AppComponent, 
                    WeatherWidgetComponent, 
                    WeatherDashboardComponent, 
                    WeatherDetailsComponent 
    ],
    providers: [ WeatherService ],
    bootstrap: [ AppComponent ]
})
export class AppModule{ }