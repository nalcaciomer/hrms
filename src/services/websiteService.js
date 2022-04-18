import axios from "axios";

export default class WebsiteService {
  getWebsites() {
    return axios.get("http://localhost:8080/api/websites/getall");
  }

  getWebsiteById(id) {
    return axios.get(`http://localhost:8080/api/websites/getbyid?id=${id}`);
  }

  getWebsiteByName(name) {
    return axios.get(
      `http://localhost:8080/api/websites/getbyname?name=${name}`
    );
  }

  getWebsitesByAsc() {
    return axios.get("http://localhost:8080/api/websites/getallbynameasc");
  }

  getWebsitesByDesc() {
    return axios.get("http://localhost:8080/api/websites/getallbynamedesc");
  }
}
