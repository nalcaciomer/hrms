import axios from "axios";

export default class LanguageService {
  getLanguages() {
    return axios.get("http://localhost:8080/api/languages/getall");
  }

  getLanguageById(id) {
    return axios.get(`http://localhost:8080/api/languages/getbyid?id=${id}`);
  }

  getLanguageByName(name) {
    return axios.get(
      `http://localhost:8080/api/languages/getbyname?name=${name}`
    );
  }

  getLanguagesByAsc() {
    return axios.get("http://localhost:8080/api/languages/getallbynameasc");
  }

  getLanguagesByDesc() {
    return axios.get("http://localhost:8080/api/languages/getallbynamedesc");
  }
}
