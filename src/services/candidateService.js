import axios from "axios";

export default class CandidateService {
  getCandidates() {
    return axios.get("http://localhost:8080/api/candidates/getall");
  }

  getCandidateById(id) {
    return axios.get(`http://localhost:8080/api/candidates/getbyid?id=${id}`);
  }

  getCandidateByEmail(email) {
    return axios.get(
      `http://localhost:8080/api/candidates/getbyemail?email=${email}`
    );
  }

  getCandidateByNationalIdentity(nationalIdentity) {
    return axios.get(
      `http://localhost:8080/api/candidates/getbynationalidentity?nationalIdentity=${nationalIdentity}`
    );
  }
}
