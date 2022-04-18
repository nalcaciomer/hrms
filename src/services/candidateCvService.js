import axios from "axios";

export default class CandidateCvService {
  getCandidateCvs() {
    return axios.get("http://localhost:8080/api/candidatecvs/getall");
  }

  getCandidateCvById(id) {
    return axios.get(`http://localhost:8080/api/candidatecvs/getbyid?id=${id}`);
  }

  getCandidateCvByCandidateId(candidateId) {
    return axios.get(
      `http://localhost:8080/api/candidatecvs/getbycandidateid?candidateId=${candidateId}`
    );
  }
}
