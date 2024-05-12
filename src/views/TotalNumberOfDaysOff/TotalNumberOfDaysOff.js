import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

const TotalNumberOfDaysOff = () => {
  return (
    <React.Fragment>
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Form Grid</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row gy={3}>
                  <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
                <Row>
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
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary">Sign In</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default TotalNumberOfDaysOff;