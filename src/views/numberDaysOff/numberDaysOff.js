import React, { useEffect } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { getVacationEmployee } from '../../redux/EmployeesSlice/EmployeesSlice'; 
import { useDispatch, useSelector } from 'react-redux';


const numberDaysOff = () => {
  const dispatch =useDispatch();
  const {Vacation} = useSelector(state => state.employees);

  useEffect(()=>{
    dispatch(getVacationEmployee());
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
                    <th>Required working days</th>
                    <th>Actual working days</th>
                    <th>Vacation days</th>
                    <th>Alert</th>
                  </tr>
                </thead>
                <tbody>
                  {Vacation.length>0 && Vacation.map((employee,index)=>{
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
                          <td>{employee.dayRequired} Day</td>
                          <td>{employee.dayActual} Day</td>
                          <td>{employee.dayOff} Day</td>
                          <td><Button variant="outline-warning">Warning</Button></td>
                        </tr>
                    )
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

export default numberDaysOff;