import axios from "axios";

export default class CandidateCvEducationService {
  getCandidateCvEducations() {
    return axios.get("http://localhost:8080/api/candidatecveducations/getall");
  }

  getCandidateCvEducationById(id) {
    return axios.get(
      `http://localhost:8080/api/candidatecveducations/getbyid?id=${id}`
    );
  }

  getCandidateCvEducationByCandidateCvId(candidateCvId) {
    return axios.get(
      `http://localhost:8080/api/candidatecveducations/getbycandidatecvid?candidateCvId=${candidateCvId}`
    );
  }

  getCandidateCvEducationByCandidateCvIdOrderByDateOfGraduationDesc(
    candidateCvId
  ) {
    return axios.get(
      `http://localhost:8080/api/candidatecveducations/getbycandidatecvidorderbydateofgraduationdesc?candidateCvId=${candidateCvId}`
    );
  }
}
