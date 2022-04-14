import {
  faPlus,
  faScrewdriverWrench,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import JobService from "../../services/jobService";

export default function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let jobService = new JobService();
    jobService.getJobs().then((result) => setJobs(result.data.data));
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
          JOB LIST
          <Button variant="success" size="sm" className="float-end me-3 px-3">
            <FontAwesomeIcon icon={faPlus} /> New
          </Button>
        </caption>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th className="col-md-9">Job Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="text-center align-middle">
              <td>{job.id}</td>
              <td>{job.name}</td>
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
