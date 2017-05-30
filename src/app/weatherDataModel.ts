/*
    Class definition to hold weather information for a location.
*/
export class WeatherDataModel
{
    constructor(data: string) {
        try 
        {
            let parsedData = JSON.parse(data);

            this.name = parsedData.location.name;
            this.region = parsedData.location.region;
            this.country = parsedData.location.country;
            this.localTime = parsedData.location.localtime;
            this.lastUpdatedWeatherTime = parsedData.current.last_updated;
            this.temperatureInC = parsedData.current.temp_c;
            this.temperatureInF = parsedData.current.temp_f;
            this.conditionText = parsedData.current.condition.text;
            this.conditionIconUrl = parsedData.current.condition.icon;
            this.windMph = parsedData.current.wind_mph;
            this.windKph = parsedData.current.wind_kph;
            this.windDir = parsedData.current.wind_dir;
            this.humidity = parsedData.current.humidity;
            this.feelsLikeC = parsedData.current.feelslike_c;
            this.feelsLikeF = parsedData.current.feelslike_f;
        }
        catch (ex)
        {
            console.log(`Unable to parse weather data - ${ex.message} [${data}]`);
        }
    }

    name: string;
    region: string;
    country: string;
    localTime: string;
    lastUpdatedWeatherTime: string;
    temperatureInC: number;
    temperatureInF: number;
    conditionText: string;
    conditionIconUrl: string;
    windMph: number;
    windKph: number;
    windDir: string;
    humidity: number;
    feelsLikeC: number;
    feelsLikeF: number;
}