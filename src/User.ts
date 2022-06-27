import { faker } from "@faker-js/faker";
import { Location, Mappable } from "./Mappable";

export class User implements Mappable {
  name: string;
  location: Location;

  markerContent(): string {
    return `User name: ${this.name}`;
  }
  constructor() {
    this.name = faker.name.firstName();
    const lat = parseFloat(faker.address.latitude());
    const lng = parseFloat(faker.address.longitude());
    this.location = { lat, lng };
  }
  color: string = "blue";
}
