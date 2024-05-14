import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";

const UpdatePerson = () => {
  const [formData, setFormData] = useState({
    currentFirstName: "",
    currentLastName: "",
    currentMiddleName: "",
    birthDate: "",
    ssn: "",
    driverLicense: "",
    currentAddress1: "",
    currentAddress2: "",
    currentCity: "",
    currentCountry: "",
    currentZip: "",
    currentGender: "",
    currentPhoneNumber: "",
    currentPersonalEmail: "",
    currentMaritalStatus: "",
    ethnicity: "",
    shareholderStatus: "",
  });
  const [countryList, setCountryList] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const fetchDataCountry = async () => {
      const data = await fetch("https://restcountries.com/v3.1/all?fields=name")
        .then((res) => res.json())
        .then((res) => {
          return res;
        });
      setCountryList(data);
    };
    fetchDataCountry();
  }, []);
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
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridEmail"
                  >
                    <Form.Label>Current First Name</Form.Label>
                    <Form.Control
                      name="currentFirstName"
                      value={formData.currentFirstName}
                      onChange={handleInputChange}
                      type="text"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridPassword"
                  >
                    <Form.Label>Current Last Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Row>

                <Row gy={3}>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridEmail"
                  >
                    <Form.Label>Current Middle Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridPassword"
                  >
                    <Form.Label>Birth Date</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Row>

                <Row gy={3}>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridEmail"
                  >
                    <Form.Label>Social Security Number</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridPassword"
                  >
                    <Form.Label>Drivers License</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Row>
                <Row gy={3}>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridEmail"
                  >
                    <Form.Label>Current Address1</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridPassword"
                  >
                    <Form.Label>Current Address2</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Row>
                <Row gy={3}>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridEmail"
                  >
                    <Form.Label>Current City</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridPassword"
                  >
                    <Form.Label>Current Country</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      // name="typeOfWork"
                      // value={formData.typeOfWork}
                      // onChange={handleInputChange}
                    >
                      <option>Select country</option>
                      {countryList.length > 0 &&
                        countryList.map((country, index) => {
                          return (
                            <option key={index} value={country.name.common}>
                              {country.name.common}
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
                    controlId="formGridEmail"
                  >
                    <Form.Label>Current Zip</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridPassword"
                  >
                    <Form.Label>Current Gender</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      // name="typeOfWork"
                      // value={formData.typeOfWork}
                      // onChange={handleInputChange}
                    >
                      <option>Select gender</option>
                      <option value="Full-Time">Male</option>
                      <option value="Part-Time">Female</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Row gy={3}>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridEmail"
                  >
                    <Form.Label>Current Phone Number</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridPassword"
                  >
                    <Form.Label>Current Personal Email</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Row>
                <Row gy={3}>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridEmail"
                  >
                    <Form.Label>Current Marital Status</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      // name="typeOfWork"
                      // value={formData.typeOfWork}
                      // onChange={handleInputChange}
                    >
                      <option>Select marital status</option>
                      <option value="Full-Time">Single</option>
                      <option value="Part-Time">Married</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridPassword"
                  >
                    <Form.Label>Ethnicity</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Row>
                <Row gy={3}>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridPassword"
                  >
                    <Form.Label>Shareholder Status</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      // name="typeOfWork"
                      // value={formData.typeOfWork}
                      // onChange={handleInputChange}
                    >
                      <option>Select shareholder status</option>
                      <option value="Full-Time">Shareholder</option>
                      <option value="Part-Time">Employee</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridEmail"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <Form.Label>Add new person</Form.Label>
                    <Button variant="primary" style={{ width: "max-content" }}>
                      Add Person
                    </Button>
                  </Form.Group>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default UpdatePerson;
