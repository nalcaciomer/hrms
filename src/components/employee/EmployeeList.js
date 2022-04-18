import {
  faPlus,
  faScrewdriverWrench,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import EmployeeService from "../../services/employeeService";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    let employeeService = new EmployeeService();
    employeeService
      .getEmployees()
      .then((result) => setEmployees(result.data.data));
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
          EMPLOYEE LIST
          <Button variant="success" size="sm" className="float-end me-3 px-3">
            <FontAwesomeIcon icon={faPlus} /> New
          </Button>
        </caption>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Is Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="text-center align-middle">
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.password}</td>
              <td>{employee.active ? "Active" : "Not Active"}</td>
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
