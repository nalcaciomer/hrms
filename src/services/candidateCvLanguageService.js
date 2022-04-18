import axios from "axios";

export default class CandidateCvLanguageService {
  getCandidateCvLanguages() {
    return axios.get("http://localhost:8080/api/candidatecvlanguages/getall");
  }

  getCandidateCvLanguageById(id) {
    return axios.get(
      `http://localhost:8080/api/candidatecvlanguages/getbyid?id=${id}`
    );
  }

  getCandidateCvLanguageByCandidateCvId(candidateCvId) {
    return axios.get(
      `http://localhost:8080/api/candidatecvlanguages/getbycandidatecvid?candidateCvId=${candidateCvId}`
    );
  }
}
