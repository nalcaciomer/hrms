import axios from "axios";

export default class CandidateCvSkillService {
  getCandidateCvSkills() {
    return axios.get("http://localhost:8080/api/candidatecvskills/getall");
  }

  getCandidateCvSkillById(id) {
    return axios.get(
      `http://localhost:8080/api/candidatecvskills/getbyid?id=${id}`
    );
  }

  getCandidateCvSkillByCandidateCvId(candidateCvId) {
    return axios.get(
      `http://localhost:8080/api/candidatecvskills/getbycandidatecvid?candidateCvId=${candidateCvId}`
    );
  }
}
