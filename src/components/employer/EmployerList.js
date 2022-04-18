import {
  faPlus,
  faScrewdriverWrench,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { getFormattedPhoneNumber } from "../../pipes/FormatPhoneNumber";
import EmployerService from "../../services/employerService";

export default function EmployerList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);

  return (
    <div>
      <Table
        responsive
        striped
        bordered
        hover
        variant="dark"
        size="sm"
        className="caption-top"
      >
        <caption className="align-middle bg-dark text-danger text-center">
          EMPLOYER LIST
          <Button variant="success" size="sm" className="float-end me-3 px-3">
            <FontAwesomeIcon icon={faPlus} /> New
          </Button>
        </caption>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Company Name</th>
            <th>Website</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Password</th>
            <th>Is Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employers.map((employer) => (
            <tr key={employer.id} className="text-center align-middle">
              <td>{employer.id}</td>
              <td>{employer.companyName}</td>
              <td>{employer.website}</td>
              <td>{getFormattedPhoneNumber(employer.phoneNumber)}</td>
              <td>{employer.email}</td>
              <td>{employer.password}</td>
              <td>{employer.active ? "Active" : "Not Active"}</td>
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
