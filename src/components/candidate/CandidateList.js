import {
  faPlus,
  faScrewdriverWrench,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import CandidateService from "../../services/candidateService";

export default function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidates()
      .then((result) => setCandidates(result.data.data));
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
          CANDİDATE LIST
          <Button variant="success" size="sm" className="float-end me-3 px-3">
            <FontAwesomeIcon icon={faPlus} /> New
          </Button>
        </caption>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>National Identity</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date Of Birth</th>
            <th>Email</th>
            <th>Password</th>
            <th>Is Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.id} className="text-center align-middle">
              <td>{candidate.id}</td>
              <td>{candidate.nationalIdentity}</td>
              <td>{candidate.firstName}</td>
              <td>{candidate.lastName}</td>
              <td>{candidate.dateOfBirth}</td>
              <td>{candidate.email}</td>
              <td>{candidate.password}</td>
              <td>{candidate.active ? "Active" : "Not Active"}</td>
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
