import React, { useEffect } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { getBenefitsPlanChange } from '../../redux/EmployeesSlice/EmployeesSlice'; 
import { useDispatch, useSelector } from 'react-redux';


const benefitsPlanChange = () => {
  const dispatch =useDispatch();
  const {BenefitsPlan} = useSelector(state => state.employees);

  useEffect(()=>{
    dispatch(getBenefitsPlanChange());
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
                    <th>Benefit plan new </th>
                    <th>Deductable new</th>
                    <th>Percentage copay new</th>
                    <th>Pay rate new</th>
                    <th>Alert</th>
                  </tr>
                </thead>
                <tbody>
                  {BenefitsPlan.length>0 && BenefitsPlan.map((employee,index)=>{
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
                          <td>{employee.benefitPlanName}</td>
                          <td>{employee.deductable.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}</td>
                          <td>{employee.percentageCopay}%</td>
                          <td>{employee.payRateName}</td>
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

export default benefitsPlanChange;