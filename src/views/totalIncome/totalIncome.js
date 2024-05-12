import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch,useSelector } from 'react-redux';
import {useEffect} from 'react'
import {getEmployeesByTotalIncome} from '../../redux/totalIncomeSlice/totalIncomeSlice'
const totalIncome = () => {
  const dispatch=useDispatch();
  const{Loading,EmployessTotalIncome}=useSelector(state=>state.totalIncome)
  useEffect(()=>{
    dispatch(getEmployeesByTotalIncome());
  },[])

console.log(EmployessTotalIncome);
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <DropdownButton id="dropdown-basic-button" title="Member">
                  <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Shareholder</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Employee</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Gender">
                  <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Men</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Woman</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Ethnicity">
                  <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Caucasion</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">African American</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Asia</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Hispanic</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Department">
                  <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">IT</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Finance</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">HR</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Marketing</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Operations</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Sales</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Engineering</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Legal</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Customer service</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Research</Dropdown.Item>
                </DropdownButton>
              </div>
            </Card.Header>
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
                    <th>Total income</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
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