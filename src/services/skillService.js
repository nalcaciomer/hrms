import axios from "axios";

export default class SkillService {
  getSkills() {
    return axios.get("http://localhost:8080/api/skills/getall");
  }

  getSkillById(id) {
    return axios.get(`http://localhost:8080/api/skills/getbyid?id=${id}`);
  }

  getSkillByName(name) {
    return axios.get(`http://localhost:8080/api/skills/getbyname?name=${name}`);
  }

  getSkillsByAsc() {
    return axios.get("http://localhost:8080/api/skills/getallbynameasc");
  }

  getSkillsByDesc() {
    return axios.get("http://localhost:8080/api/skills/getallbynamedesc");
  }
}
