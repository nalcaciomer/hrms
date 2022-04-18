import axios from "axios";

export default class EmployeeService {
  getEmployees() {
    return axios.get("http://localhost:8080/api/employees/getall");
  }

  getEmployeeById(id) {
    return axios.get(`http://localhost:8080/api/employees/getbyid?id=${id}`);
  }

  getEmployeeByEmail(email) {
    return axios.get(
      `http://localhost:8080/api/employees/getbyemail?email=${email}`
    );
  }

  getEmployeeByFirstNameAndLastName(firstName, lastName) {
    return axios.get(
      `http://localhost:8080/api/employees/getbyfirstnameandlastname?firstName=${firstName}&lastName=${lastName}`
    );
  }
}
