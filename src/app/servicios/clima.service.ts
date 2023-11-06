import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../enviroment';


@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  urlApi: string = `https://api.openweathermap.org/data/2.5/weather?q=`;

  APIkey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getClimaByCity(city:any) {
    return this.http.get(`${this.urlApi}${city}&appid=${this.APIkey}`);
  }
}
