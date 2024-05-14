import React, { useReducer } from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployeeByVacation,getAllEmployeeByVacationAndCondition } from "../../redux/vacationSlice/vacationSlice";
const vacation = () => {
  const dispatch = useDispatch();
  const { EmployeesVacation } = useSelector((state) => state.vacations);

  const handleClickFilterVacationCondition = (type, value) => {
    window.location.href = `/#/vacations/condition?type=${type}&value=${value}`;
    const data = {
      type,
      value,
    };
    dispatch(getAllEmployeeByVacationAndCondition(data));
  };
  const handleClickAll = (e) => {
    e.preventDefault();
    window.location.href = `/#/vacations/all`;
    dispatch(getAllEmployeeByVacation());
  };

  useEffect(() => {
    dispatch(getAllEmployeeByVacation());
  }, []);
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <div
                style={{ display: "flex", alignItems: "center", gap: "2rem" }}
              >
                <DropdownButton id="dropdown-basic-button" title="Member">
                  <Dropdown.Item href="" onClick={handleClickAll}>
                    All
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterVacationCondition(
                        "member",
                        "Shareholder",
                      );
                    }}
                  >
                    Shareholder
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterVacationCondition(
                        "member",
                        "Employee",
                      );
                    }}
                  >
                    Employee
                  </Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Gender">
                  <Dropdown.Item href="" onClick={handleClickAll}>
                    All
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterVacationCondition("gender", "Male");
                    }}
                  >
                    Male
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterVacationCondition("gender", "Female");
                    }}
                  >
                    Female
                  </Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Ethnicity">
                  <Dropdown.Item href="" onClick={handleClickAll}>
                    All
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterVacationCondition(
                        "ethnicity",
                        "African American",
                      );
                    }}
                  >
                    African American
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterVacationCondition(
                        "ethnicity",
                        "Caucasian",
                      );
                    }}
                  >
                    Caucasian
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterVacationCondition(
                        "ethnicity",
                        "Asian",
                      );
                    }}
                  >
                    Asian
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterVacationCondition(
                        "ethnicity",
                        "Hispanic",
                      );
                    }}
                  >
                    Hispanic
                  </Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Department">
                  <Dropdown.Item href="" onClick={handleClickAll}>
                    All
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterVacationCondition("department", "IT");
                    }}
                  >
                    IT
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterVacationCondition(
                        "department",
                        "Finance",
                      );
                    }}
                  >
                    Finance
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterVacationCondition("department", "HR");
                    }}
                  >
                    HR
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterVacationCondition(
                        "department",
                        "Marketing",
                      );
                    }}
                  >
                    Marketing
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterVacationCondition(
                        "department",
                        "Operations",
                      );
                    }}
                  >
                    Operations
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterVacationCondition(
                        "department",
                        "Sales",
                      );
                    }}
                  >
                    Sales
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterVacationCondition(
                        "department",
                        "Engineering",
                      );
                    }}
                  >
                    Engineering
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterVacationCondition(
                        "department",
                        "Legal",
                      );
                    }}
                  >
                    Legal
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterVacationCondition(
                        "department",
                        "Customer service",
                      );
                    }}
                  >
                    Customer service
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterVacationCondition(
                        "department",
                        "Research",
                      );
                    }}
                  >
                    Research
                  </Dropdown.Item>
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
                    <th>Vacations</th>
                  </tr>
                </thead>
                <tbody>
                  {EmployeesVacation.length > 0 &&
                    EmployeesVacation.map((employee, index) => {
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
                          <td>{employee.vacationNumber} day / year</td>
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

export default vacation;
