/// <reference types="@types/google.maps" />
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

export const mapDiv = document.getElementById("map");

if (mapDiv) {
  const map = new CustomMap(mapDiv);
  const user = new User();
  map.addMarker(user);

  const company = new Company();
  map.addMarker(company);
}
