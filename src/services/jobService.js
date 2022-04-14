import axios from "axios";

export default class JobService {
  getJobs() {
    return axios.get("http://localhost:8080/api/jobs/getall");
  }

  getJobById(id) {
    return axios.get(`http://localhost:8080/api/jobs/getbyid?id=${id}`);
  }

  getJobByName(name) {
    return axios.get(`http://localhost:8080/api/jobs/getbyname?name=${name}`);
  }

  getJobsByAsc() {
    return axios.get("http://localhost:8080/api/jobs/getallbynameasc");
  }

  getJobsByDesc() {
    return axios.get("http://localhost:8080/api/jobs/getallbynamedesc");
  }
}
