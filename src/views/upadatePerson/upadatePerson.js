import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

const upadatePerson = () => {
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
                  <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                    <Form.Label>Person Id</Form.Label>
                    <Form.Control type="text" placeholder="Enter Person Id" />
                  </Form.Group>

                  <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
                    <Form.Label>HireDate ForWorking</Form.Label>
                    <Form.Control type="date" placeholder="Password" />
                  </Form.Group>
                </Row>

                <Row gy={3}>
                  <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                    <Form.Label>Number Day Requirement Of Working PerMonth</Form.Label>
                    <Form.Control type="text" placeholder="Enter number Day Requirement Of Working PerMonth" />
                  </Form.Group>

                  <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
                    <Form.Label>SSN</Form.Label>
                    <Form.Control type="text" placeholder="SSN" />
                  </Form.Group>
                </Row>

                <Row gy={3}>
                  <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                    <Form.Label>Department</Form.Label>
                    <Form.Control type="text" placeholder="Department" />
                  </Form.Group>

                  <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
                    <Form.Label>Division</Form.Label>
                    <Form.Control type="text" placeholder="Division" />
                  </Form.Group>
                </Row>
                <Row gy={3}>
                  <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                    <Form.Label>FromDate</Form.Label>
                    <Form.Control type="date" placeholder="department" />
                  </Form.Group>

                  <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
                    <Form.Label>JobTitle</Form.Label>
                    <Form.Control type="text" placeholder="Job Title" />
                  </Form.Group>
                </Row>
                <Row gy={3}>
                  <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                    <Form.Label>Supervisor</Form.Label>
                    <Form.Control type="text" placeholder="Supervisor" />
                  </Form.Group>

                  <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Location" />
                  </Form.Group>
                </Row>
                <Row gy={3}>
                  <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                    <Form.Label>Type Of Work</Form.Label>
                    <Form.Control type="text" placeholder="Type Of Work" />
                  </Form.Group>

                  <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
                    <Form.Label>Pay Rate Id</Form.Label>
                    <Form.Control type="text" placeholder="Pay Rate Id" />
                  </Form.Group>
                </Row>









{/* 
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>numberDayRequirementOfWorkingPerMonth</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group> */}

                {/* <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group> */}
                {/* <Row>
                  <Form.Group className="mb-3" as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group className="mb-3" as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-3" as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row> */}

                {/* <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}

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