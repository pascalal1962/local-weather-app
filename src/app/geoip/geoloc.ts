export class GeoLoc {
  constructor(
    public countryCode: string,
    public countryName: string,
    public city: string,
    public postal: string,
    public latitude: string,
    public longitude: string,
    public IPv4: string,
    public state: string
  ) {}
}

export class GeoLocJson {
  country_code: string,
  country_name: string,
  city: string,
  postal: string,
  latitude: number,
  longitude: number,
  IPv4: string,
  state: string
}
