import React, { useEffect,useState } from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPerson,
  deletePersonByPersonId,
  updatePersonalListAfterBecomeToEmployee
} from "../../redux/personSlice/personSlice";

const totalIncome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Personals } = useSelector((state) => state.person);
  const [openModal,setOpenModal] =useState(false);
  const [personDelete,setPersonDelete] = useState(null);

  useEffect(() => {
    dispatch(getAllPerson());
  }, []);
  const handleUpdateToEmployee = (person) => {
    sessionStorage.setItem("person", JSON.stringify(person));
    window.location.href = "/#/upadateperson";
  };
  const showModalView = (person) => {
    setOpenModal(true);
    setPersonDelete(person);
    
  };
  const handleDeletePerson= ()=>{
    setOpenModal(false);
    dispatch(deletePersonByPersonId(personDelete.personalId));
    dispatch(updatePersonalListAfterBecomeToEmployee(personDelete.personalId));
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
                    Personals.map((person, index) => {
                      return (
                        <tr key={person.personalId}>
                          <td>{index + 1}</td>
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
                            <div style={{ display: "flex", gap: "0.5rem" }}>
                              <Button
                                variant="outline-danger"
                                type="button"
                                onClick={() => showModalView(person)}
                                style={{
                                  width: "30px",
                                  height: "30px",
                                  fontSize: "12px",
                                }}
                              >
                                X
                              </Button>
                              <Button
                                variant="outline-success"
                                type="button"
                                onClick={() => handleUpdateToEmployee(person)}
                                style={{
                                  width: "30px",
                                  height: "30px",
                                  fontSize: "12px",
                                }}
                              >
                                ➞
                              </Button>
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
        {openModal && <div
          className="modal show"
          style={{ display: "block", position: "fixed",top: "10%", left: "50%", transform: "translateX(-50%)"}}
        >
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Warning</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Are you sure delete the person?</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" type="button" onClick={()=>setOpenModal(false)}>Cancel</Button>
              <Button variant="primary" type="button" onClick={handleDeletePerson}>Yes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>}
      </Row>
    </React.Fragment>
  );
};

export default totalIncome;
