import React, { useEffect } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { getBirthDayMonthEmployee } from '../../redux/EmployeesSlice/EmployeesSlice'; 
import { useDispatch, useSelector } from 'react-redux';


const birthdateInMonth = () => {
  const dispatch =useDispatch();
  const {BirthDay} = useSelector(state => state.employees)
  useEffect(()=>{
    dispatch(getBirthDayMonthEmployee());
  },[])
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
                    <th>Birth date</th>
                    <th>Alert</th>
                  </tr>
                </thead>
                <tbody>
                {BirthDay.length > 0 &&
                    BirthDay.map((employee, index) => {
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
                          <td>{employee.birthDay.toString().substring(0, 10)}</td>
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

export default birthdateInMonth;