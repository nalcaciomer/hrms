import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import JobService from "../../services/jobService";

export default function JobsDropdown() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let jobService = new JobService();
    jobService.getJobsByAsc().then((result) => setJobs(result.data.data));
  }, []);

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Choose Job
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {jobs.map((job) => (
            <Dropdown.Item href="#/action-1" key={job.id}>
              {job.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
