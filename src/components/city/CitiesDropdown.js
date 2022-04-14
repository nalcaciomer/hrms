import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import CityService from "../../services/cityService";

export default function CitiesDropdown() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCitiesByAsc().then((result) => setCities(result.data.data));
  }, []);

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Choose City
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {cities.map((city) => (
            <Dropdown.Item href="#/action-1" key={city.id}>
              {city.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
