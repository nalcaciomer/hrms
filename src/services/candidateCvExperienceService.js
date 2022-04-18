import axios from "axios";

export default class CandidateCvExperienceService {
  getCandidateCvExperiences() {
    return axios.get("http://localhost:8080/api/candidatecvexperiences/getall");
  }

  getCandidateCvExperienceById(id) {
    return axios.get(
      `http://localhost:8080/api/candidatecvexperiences/getbyid?id=${id}`
    );
  }

  getCandidateCvExperienceByCandidateCvId(candidateCvId) {
    return axios.get(
      `http://localhost:8080/api/candidatecvexperiences/getbycandidatecvid?candidateCvId=${candidateCvId}`
    );
  }

  getCandidateCvExperienceByCandidateCvIdOrderByQuitDateDesc(candidateCvId) {
    return axios.get(
      `http://localhost:8080/api/candidatecvexperiences/getbycandidatecvidorderbyquitdatedesc?candidateCvId=${candidateCvId}`
    );
  }
}
