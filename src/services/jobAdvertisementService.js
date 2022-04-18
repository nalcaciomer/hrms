import axios from "axios";

export default class JobAdvertisementService {
  getJobAdvertisements() {
    return axios.get("http://localhost:8080/api/jobadvertisements/getall");
  }

  getJobAdvertisementsByIsActiveTrue() {
    return axios.get(
      "http://localhost:8080/api/jobadvertisements/getallbyisactivetrue"
    );
  }

  getJobAdvertisementsByIsActiveTrueAndEmployer(employerId) {
    return axios.get(
      `http://localhost:8080/api/jobadvertisements/getallbyisactivetrueandemployer?employerId=${employerId}`
    );
  }

  getJobAdvertisementsByIsActiveTrueOrderByApplicationDeadlineDesc() {
    return axios.get(
      "http://localhost:8080/api/jobadvertisements/getallbyisactivetrueorderbyapplicationdeadlinedesc"
    );
  }

  getJobAdvertisementById(id) {
    return axios.get(
      `http://localhost:8080/api/jobadvertisements/getbyid?id=${id}`
    );
  }
}
