import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import CityList from "./components/city/CityList";
import JobsDropdown from "./components/job/JobsDropdown";
import JobList from "./components/job/JobList";
import CandidateList from "./components/candidate/CandidateList";

function App() {
  return (
    <div>
      <CityList />
      <JobsDropdown />
      <JobList />
      <CandidateList />
    </div>
  );
}

export default App;
