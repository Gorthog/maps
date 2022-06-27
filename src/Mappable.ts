export interface Mappable {
  location: Location;
  markerContent(): string;
  color: string;
}

export type Location = {
  lat: number;
  lng: number;
};
