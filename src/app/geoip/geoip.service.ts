import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class GeoipService {
  private clientUrl = 'https://geoip-db.com/json/'

  constructor(private http: HttpClient) {}

  getGeoIp() {
    return this.http.get(this.clientUrl)
  }
}
