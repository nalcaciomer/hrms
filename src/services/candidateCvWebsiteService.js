import axios from "axios";

export default class CandidateCvWebsiteService {
  getCandidateCvWebsites() {
    return axios.get("http://localhost:8080/api/candidatecvwebsites/getall");
  }

  getCandidateCvWebsiteById(id) {
    return axios.get(
      `http://localhost:8080/api/candidatecvwebsites/getbyid?id=${id}`
    );
  }

  getCandidateCvWebsiteByCandidateCvId(candidateCvId) {
    return axios.get(
      `http://localhost:8080/api/candidatecvwebsites/getbycandidatecvid?candidateCvId=${candidateCvId}`
    );
  }
}
