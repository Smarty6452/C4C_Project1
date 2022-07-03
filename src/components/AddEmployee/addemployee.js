import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import Card from "react-bootstrap/Card";

import { Row, Col, Container } from "react-bootstrap";

import Sidebar from "../sidebar";

const addemployee = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} id="sidebar-wrapper">
          <Sidebar />
        </Col>
        <Col md={10} id="page-content-wrapper">
          <div className="employees ">
            <span>
              <AiOutlineUser className="employe-icon" />
              Employees
            </span>
            <button>Add New Employee +</button>
          </div>
          <Row className="employee-detail">
            <Col md={6}>
              <Card>
                <Card.Body className=" ">
                  <div className=""></div>
                  <div className="">
                    <h6> Total Employees</h6>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              {" "}
              <Card>
                <Card.Body className=" ">
                  <div className=""></div>
                  <div className="">
                    <h6> Total Employees</h6>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* entries  */}
          <Row>
          <Col  id="page-content-wrapper">
          <div className="entries">
            <span>
              show dropdown entries
            </span>
           <div>search <input type="text" /></div>
          </div>
          </Col >
          </Row>


        </Col>
      </Row>
    </Container>
  );
};

export default addemployee;
