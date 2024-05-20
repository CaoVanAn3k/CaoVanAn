import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNewPerson } from "../../redux/personSlice/personSlice";
import { toast } from "react-toastify";

const UpdatePerson = () => {
  const dispatch = useDispatch();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.currentFirstName === "" ||
      formData.currentMiddleName === "" ||
      formData.currentLastName === "" ||
      formData.birthDate === "" ||
      formData.ssn === "" ||
      formData.driverLicense === "" ||
      formData.currentAddress1 === "" ||
      formData.currentAddress2 === "" ||
      formData.currentCity === "" ||
      formData.currentCountry === "" ||
      formData.currentZip === "" ||
      formData.currentGender === "" ||
      formData.currentPhoneNumber === "" ||
      formData.currentPersonalEmail === "" ||
      formData.currentMaritalStatus === "" ||
      formData.ethnicity === "" ||
      formData.shareholderStatus === ""
    ) {
      toast.error("Please complete all information");
    } else {
      const processedFormData = {
        ...formData,
        currentMaritalStatus: formData.currentMaritalStatus === "Single" ? 1 : 2,
        shareholderStatus: formData.shareholderStatus === "Shareholder" ? 1 : 2,
        birthDate: new Date(formData.birthDate)
      };
      dispatch(addNewPerson(processedFormData));
      toast.success("Add person successfully");
      setTimeout(()=>{
        window.location.href="/#/hrrecords";
      },3000);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "birthDate") {
      const date = new Date(value);
      const now = new Date();
      const subtractYear = now.getFullYear() - date.getFullYear();
      if (subtractYear < 18) {
        toast.error("Person must be greater than or equals by 18");
        return;
      }
    }
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
              <Form onSubmit={handleSubmit}>
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
                    controlId="formGridEmail"
                  >
                    <Form.Label>Current Middle Name</Form.Label>
                    <Form.Control
                      name="currentMiddleName"
                      value={formData.currentMiddleName}
                      onChange={handleInputChange}
                      type="text"
                    />
                  </Form.Group>
                </Row>

                <Row gy={3}>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridPassword"
                  >
                    <Form.Label>Current Last Name</Form.Label>
                    <Form.Control
                      name="currentLastName"
                      value={formData.currentLastName}
                      onChange={handleInputChange}
                      type="text"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridPassword"
                  >
                    <Form.Label>Birth Date</Form.Label>
                    <Form.Control
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                      type="date"
                    />
                  </Form.Group>
                </Row>

                <Row gy={3}>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridEmail"
                  >
                    <Form.Label>Social Security Number</Form.Label>
                    <Form.Control
                      name="ssn"
                      value={formData.ssn}
                      onChange={handleInputChange}
                      type="text"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridPassword"
                  >
                    <Form.Label>Drivers License</Form.Label>
                    <Form.Control
                      name="driverLicense"
                      value={formData.driverLicense}
                      onChange={handleInputChange}
                      type="text"
                    />
                  </Form.Group>
                </Row>
                <Row gy={3}>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridEmail"
                  >
                    <Form.Label>Current Address1</Form.Label>
                    <Form.Control
                      name="currentAddress1"
                      value={formData.currentAddress1}
                      onChange={handleInputChange}
                      type="text"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridPassword"
                  >
                    <Form.Label>Current Address2</Form.Label>
                    <Form.Control
                      name="currentAddress2"
                      value={formData.currentAddress2}
                      onChange={handleInputChange}
                      type="text"
                    />
                  </Form.Group>
                </Row>
                <Row gy={3}>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridEmail"
                  >
                    <Form.Label>Current City</Form.Label>
                    <Form.Control
                      name="currentCity"
                      value={formData.currentCity}
                      onChange={handleInputChange}
                      type="text"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridPassword"
                  >
                    <Form.Label>Current Country</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      name="currentCountry"
                      value={formData.currentCountry}
                      onChange={handleInputChange}
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
                    <Form.Control
                      name="currentZip"
                      value={formData.currentZip}
                      onChange={handleInputChange}
                      type="text"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridPassword"
                  >
                    <Form.Label>Current Gender</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      name="currentGender"
                      value={formData.currentGender}
                      onChange={handleInputChange}
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
                    <Form.Control
                      name="currentPhoneNumber"
                      value={formData.currentPhoneNumber}
                      onChange={handleInputChange}
                      type="text"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridPassword"
                  >
                    <Form.Label>Current Personal Email</Form.Label>
                    <Form.Control
                      name="currentPersonalEmail"
                      value={formData.currentPersonalEmail}
                      onChange={handleInputChange}
                      type="text"
                    />
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
                      name="currentMaritalStatus"
                      value={formData.currentMaritalStatus}
                      onChange={handleInputChange}
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
                    <Form.Control
                      name="ethnicity"
                      value={formData.ethnicity}
                      onChange={handleInputChange}
                      type="text"
                    />
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
                      name="shareholderStatus"
                      value={formData.shareholderStatus}
                      onChange={handleInputChange}
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
                    <Button
                      type="submit"
                      variant="primary"
                      style={{ width: "max-content" }}
                    >
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
