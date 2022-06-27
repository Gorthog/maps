import { faker } from "@faker-js/faker";
import { Location, Mappable } from "./Mappable";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: Location;
  markerContent() {
    return `
    <div>
      <h1>Company name: ${this.companyName}</h1>
      <h3>Catch phrase: ${this.catchPhrase}</h3>
    </div>`;
  }
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  color: string = "red";
}
