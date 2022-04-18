import axios from "axios";

export default class CandidateCvImageService {
  getCandidateCvImages() {
    return axios.get("http://localhost:8080/api/candidatecvimages/getall");
  }

  getCandidateCvImageById(id) {
    return axios.get(
      `http://localhost:8080/api/candidatecvimages/getbyid?id=${id}`
    );
  }

  getCandidateCvImageByCandidateCvId(candidateCvId) {
    return axios.get(
      `http://localhost:8080/api/candidatecvimages/getbycandidatecvid?candidateCvId=${candidateCvId}`
    );
  }
}
