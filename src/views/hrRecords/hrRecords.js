import React, { useEffect } from "react";
import { Row, Col, Card, Table, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPerson } from "../../redux/personSlice/personSlice";

const totalIncome = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate()
  const { Personals } = useSelector((state) => state.person);

  useEffect(() => {
    dispatch(getAllPerson());
  }, []);
  const handleUpdateToEmployee=(person)=>{
    sessionStorage.setItem("person",JSON.stringify(person));
    window.location.href="/#/upadateperson";
  }
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  justifyContent: "right",
                }}
              >
                <Link to="/registerperson">
                  <Button variant="primary">+ PERSON</Button>
                </Link>
              </div>
            </Card.Header>
            <Card.Body>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Full name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Birth Date</th>
                    <th> Phone Number</th>
                    <th>Drivers License</th>
                    <th>Address</th>
                    <th>Postal code</th>
                    <th>Social security number</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Personals.length > 0 &&
                    Personals.map((person,index) => {
                      return (
                        <tr key={person.personalId}>
                          <td>{index+1}</td>
                          <td>
                            {person.currentFirstName} {person.currentMiddleName}{" "}
                            {person.currentLastName}
                          </td>
                          <td>{person.currentPersonalEmail}</td>
                          <td>{person.currentGender}</td>
                          <td>
                            {person.birthDate.toString().substring(0, 10)}
                          </td>
                          <td>{person.currentPhoneNumber}</td>
                          <td>{person.driversLicense}</td>
                          <td>
                            {person.currentAddress1 +
                              " " +
                              person.currentAddress2}
                            , {person.currentCity}, {person.currentCountry}
                          </td>
                          <td>{person.currentZip}</td>
                          <td>{person.socialSecurityNumber}</td>
                          <td>
                            <div style={{display: "flex", gap: "0.5rem"}}>
                            <Button variant="outline-danger" style={{width: "30px", height: "30px", fontSize: "12px"}}>X</Button>
                            <Button variant="outline-success" type="button" onClick={()=>handleUpdateToEmployee(person)} style={{width: "30px", height: "30px",fontSize: "12px"}}>➞</Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default totalIncome;
