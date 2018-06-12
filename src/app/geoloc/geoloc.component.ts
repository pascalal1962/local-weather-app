import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'
import { GeoipService } from '../geoip/geoip.service'
import { GeoLoc, GeoLocJson } from '../geoip/geoloc'

@Component({
  selector: 'app-geoloc',
  templateUrl: './geoloc.component.html',
  styleUrls: ['./geoloc.component.css'],
  providers: [Http, GeoipService],
})
export class GeolocComponent implements OnInit {
  myGeoLoc: GeoLoc = new GeoLoc(
    'FR',
    'France',
    'Rennes',
    '35000',
    '0000',
    '0000',
    '192.168.1.1',
    'Ille-et-Vilaine'
  )

  constructor(private geoipService: GeoipService) {}

  ngOnInit() {
    this.geoipService.getGeoIp().subscribe(data => {
      console.log(data)
      const dataJson: GeoLocJson = JSON.parse(JSON.stringify(data))
      this.myGeoLoc.countryCode = dataJson.country_code
      this.myGeoLoc.countryName = dataJson.country_name
      this.myGeoLoc.city = dataJson.city
      this.myGeoLoc.IPv4 = dataJson.IPv4
      this.myGeoLoc.latitude = dataJson.latitude.toString()
      this.myGeoLoc.longitude = dataJson.longitude.toString()
      this.myGeoLoc.postal = dataJson.postal
      this.myGeoLoc.state = dataJson.state
    })
  }
}
