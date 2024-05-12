import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

const upadatePerson = () => {
  return (
    <React.Fragment>
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Register Person</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row gy={3}>
                  <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                    <Form.Label>Current First Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
                    <Form.Label>Current Last Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Row>

                <Row gy={3}>
                  <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                    <Form.Label>Current Middle Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
                    <Form.Label>Birth Date</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Row>

                <Row gy={3}>
                  <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                    <Form.Label>Social Security Number</Form.Label>
                    <Form.Control type="text"  />
                  </Form.Group>

                  <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
                    <Form.Label>Drivers License</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Row>
                <Row gy={3}>
                  <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                    <Form.Label>Current Address1</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>

                  <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
                    <Form.Label>Current Address2</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Row>
                <Row gy={3}>
                  <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                    <Form.Label>Current City</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
                    <Form.Label>Current Country</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Row>

                <Row gy={3}>
                  <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                    <Form.Label>Current Zip</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
                    <Form.Label>Current Gender</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>
                </Row>
                <Row gy={3}>
                  <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                    <Form.Label>Current Phone Number</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>

                  <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
                    <Form.Label>Current Personal Email</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Row>
                <Row gy={3}>
                  <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                    <Form.Label>Current Marital Status</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>

                  <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
                    <Form.Label>Ethnicity</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>
                </Row>
                <Row gy={3}>
                <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
                    <Form.Label>Shareholder Status</Form.Label>
                    <Form.Control type="text"/>
                  </Form.Group>
               
                  <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                    <Form.Label>Type Of Work</Form.Label>
                    <Form.Control type="text"/>
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

                <Button variant="primary">Register Person</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default upadatePerson;