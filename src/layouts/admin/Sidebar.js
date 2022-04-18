import {
  faBuilding,
  faBuildingUser,
  faCertificate,
  faCity,
  faClipboard,
  faGaugeHigh,
  faGlobe,
  faHouse,
  faListCheck,
  faUserGear,
  faUsers,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Sidebar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark border border-top-0 border-bottom-0 border-start-0"
      style={{ height: "100vh" }}
    >
      <a
        href="#"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <FontAwesomeIcon
          icon={faBuildingUser}
          className="bi me-2"
          width={40}
          height={32}
        />{" "}
        <span className="fs-4"> HRMS Admin Panel</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            <FontAwesomeIcon
              icon={faGaugeHigh}
              className="bi me-2"
              width={16}
              height={16}
            />{" "}
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <FontAwesomeIcon
              icon={faUsers}
              className="bi me-2"
              width={16}
              height={16}
            />
            Candidates
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <FontAwesomeIcon
              icon={faBuilding}
              className="bi me-2"
              width={16}
              height={16}
            />
            Employers
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <FontAwesomeIcon
              icon={faUserGear}
              className="bi me-2"
              width={16}
              height={16}
            />
            Employees
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <FontAwesomeIcon
              icon={faClipboard}
              className="bi me-2"
              width={16}
              height={16}
            />
            Job Advertisements
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <FontAwesomeIcon
              icon={faCity}
              className="bi me-2"
              width={16}
              height={16}
            />
            Cities
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <FontAwesomeIcon
              icon={faCertificate}
              className="bi me-2"
              width={16}
              height={16}
            />
            Jobs
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <FontAwesomeIcon
              icon={faGlobe}
              className="bi me-2"
              width={16}
              height={16}
            />
            Languages
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <FontAwesomeIcon
              icon={faListCheck}
              className="bi me-2"
              width={16}
              height={16}
            />
            Skills
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <FontAwesomeIcon
              icon={faWifi}
              className="bi me-2"
              width={16}
              height={16}
            />
            Websites
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://res.cloudinary.com/ddhorzejc/image/upload/v1629735160/xxay1zwejfozkciltqaf.jpg"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>Ömer Nalçacı</strong>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
