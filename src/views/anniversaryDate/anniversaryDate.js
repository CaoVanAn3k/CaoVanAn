import React, { useEffect } from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { getAllEmployeeByAnniversary } from "../../redux/EmployeesSlice/EmployeesSlice";
import { useDispatch, useSelector } from "react-redux";

const anniversaryDate = () => {
  const dispatch = useDispatch();
  const { EmployeeeAnniversary } = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(getAllEmployeeByAnniversary());
  }, []);
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Employee code</th>
                    <th>Full name</th>
                    <th>Ethnicity</th>
                    <th>Gender</th>
                    <th>ShareHolder</th>
                    <th>Hire Date For Working</th>
                    <th>Alert</th>
                  </tr>
                </thead>
                <tbody>
                  {EmployeeeAnniversary.length > 0 &&
                    EmployeeeAnniversary.map((employee, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{employee.employeeCode}</td>
                          <td>{employee.fullName}</td>
                          <td>{employee.ethnicity}</td>
                          <td>{employee.gender}</td>
                          <td>
                            {employee.shareHolder == 1
                              ? "Shareholder"
                              : "Employee"}
                          </td>
                          <td>{employee.hireDateForWorking.toString().substring(0, 10)}</td>
                          <td><Button variant="outline-warning">Warning</Button></td>
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

export default anniversaryDate;
