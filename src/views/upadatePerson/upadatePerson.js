import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import {
  Department,
  Division,
  Supervisor,
  Location,
  PayRate,
} from "../../service/APIService";

const upadatePerson = () => {
  const [person, setPerson] = useState(null);
  const [divisionView, setDivisionView] = useState([]);
  const [formData, setFormData] = useState({
    personId: "",
    hireDateForWorking: "",
    numberDayRequirementOfWorkingPerMonth: "",
    ssn: "",
    department: "",
    division: "",
    jobTitle: "",
    supervisor: "",
    location: "",
    typeOfWork: "",
    payRate: "",
  });
  const dataDepartment = Department();
  const dataDivision = Division();
  const dataSupervisor = Supervisor();
  const dataLocation = Location();
  const dataPayRate = PayRate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    if (name === "department") {
      const data = dataDivision.filter((item) => {
        return item.department === value;
      });
      setDivisionView(data[0].jobs);
    }
    if (name === "division") {
      const data = divisionView.find((item) => item.jobName === value);
      setFormData({ ...formData, jobTitle: data.jobTitle });
      return;
    }
    if(name==="hireDateForWorking"){
      const date= new Date(value);
      const now= new Date();
      console.log(date.getUTCDate());
      console.log(now.getUTCDate());
    }
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    setPerson(JSON.parse(sessionStorage.getItem("person")));
  }, []);
  return (
    <React.Fragment>
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Upadate Person</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row gy={3}>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridEmail"
                  >
                    <Form.Label>
                      Number Day Requirement Of Working PerMonth
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter number Day Requirement Of Working PerMonth"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridEmail"
                  >
                    <Form.Label>Type Of Work</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      name="typeOfWork"
                      value={formData.typeOfWork}
                      onChange={handleInputChange}
                    >
                      <option>Select type of work</option>
                      <option value="Full-Time">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <Row gy={3}>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridEmail"
                  >
                    <Form.Label>Department</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                    >
                      <option>Select department</option>
                      {dataDepartment.map((data) => {
                        return (
                          <option key={data.id} value={data.department}>
                            {data.department}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridPassword"
                  >
                    <Form.Label>Division</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      name="division"
                      value={formData.division}
                      onChange={handleInputChange}
                    >
                      <option>Select division</option>
                      {divisionView.map((data) => {
                        return (
                          <option key={data.jobId} value={data.jobName}>
                            {data.jobName}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Row gy={3}>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridPassword"
                  >
                    <Form.Label>HireDate ForWorking</Form.Label>
                    <Form.Control type="date" name="hireDateForWorking" value={formData.hireDateForWorking} onChange={handleInputChange} placeholder="Password" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridPassword"
                  >
                    <Form.Label>JobTitle</Form.Label>
                    <Form.Control
                      type="text"
                      readOnly
                      name="jobTitle"
                      value={formData.jobTitle}
                      placeholder="Job Title"
                    />
                  </Form.Group>
                </Row>
                <Row gy={3}>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridEmail"
                  >
                    <Form.Label>Supervisor</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      name="supervisor"
                      value={formData.supervisor}
                      onChange={handleInputChange}
                    >
                      <option>Select supervisor</option>
                      {dataSupervisor.map((data) => {
                        return (
                          <option key={data.id} value={data.supervisorName}>
                            {data.supervisorName}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridPassword"
                  >
                    <Form.Label>Location</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                    >
                      <option>Select location</option>
                      {dataLocation.map((data) => {
                        return (
                          <option key={data.id} value={data.location}>
                            {data.location}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Row gy={3}>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridPassword"
                  >
                    <Form.Label>SSN</Form.Label>
                    <Form.Control type="text" placeholder="SSN" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridPassword"
                  >
                    <Form.Label>Pay Rate</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      name="payRate"
                      value={formData.payRate}
                      onChange={handleInputChange}
                    >
                      <option>Select pay rate</option>
                      {dataPayRate.map((data) => {
                        return (
                          <option key={data.id} value={data.payRate}>
                            {data.payRate}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Button variant="primary">Update</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default upadatePerson;
