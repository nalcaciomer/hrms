import React from "react";
import { Col, Row } from "react-bootstrap";
import CandidateList from "../../components/candidate/CandidateList";
import Sidebar from "./Sidebar";

export default function Admin() {
  return (
    <div className="bg-dark">
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={10}>
          <CandidateList />
        </Col>
      </Row>
    </div>
  );
}
