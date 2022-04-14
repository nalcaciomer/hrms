import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faPlus,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import CityService from "../../services/cityService";

export default function CityList() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  }, []);

  return (
    <div className="m-3">
      <Table
        responsive
        striped
        bordered
        hover
        variant="dark"
        size="sm"
        className="caption-top"
      >
        <caption className="align-middle bg-dark text-danger text-center font-monospace">
          CITY LIST
          <Button variant="success" size="sm" className="float-end me-3 px-3">
            <FontAwesomeIcon icon={faPlus} /> New
          </Button>
        </caption>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>City Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => (
            <tr key={city.id} className="text-center align-middle">
              <td>{city.id}</td>
              <td>{city.name}</td>
              <td>
                <Button variant="primary" className="mx-3">
                  <FontAwesomeIcon icon={faScrewdriverWrench} />
                </Button>
                <Button variant="danger">
                  <FontAwesomeIcon icon={faX} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
