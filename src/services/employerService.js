import axios from "axios";

export default class EmployerService {
  getEmployers() {
    return axios.get("http://localhost:8080/api/employers/getall");
  }

  getEmployerById(id) {
    return axios.get(`http://localhost:8080/api/employers/getbyid?id=${id}`);
  }

  getEmployerByCompanyName(companyName) {
    return axios.get(
      `http://localhost:8080/api/employers/getbycompanyname?companyName=${companyName}`
    );
  }

  getEmployerByEmail(email) {
    return axios.get(
      `http://localhost:8080/api/employers/getbyemail?email=${email}`
    );
  }

  getEmployerByWebsite(website) {
    return axios.get(
      `http://localhost:8080/api/employers/getbywebsite?website=${website}`
    );
  }
}
