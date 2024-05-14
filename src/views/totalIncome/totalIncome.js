import React from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getEmployeesByTotalIncome,
  getAllEmployeesByTotalIncomeCondition,
} from "../../redux/totalIncomeSlice/totalIncomeSlice";
const totalIncome = () => {
  const dispatch = useDispatch();
  const { EmployessTotalIncome } = useSelector((state) => state.totalIncome);

  const handleClickFilterTotalIncomeCondition = (type, value) => {
    window.location.href = `/#/totalincome/condition?type=${type}&value=${value}`;
    const data = {
      type,
      value,
    };
    dispatch(getAllEmployeesByTotalIncomeCondition(data));
  };
  const handleClickAll = (e) => {
    e.preventDefault();
    window.location.href = `/#/totalincome/all`;
    dispatch(getEmployeesByTotalIncome());
  };

  useEffect(() => {
    dispatch(getEmployeesByTotalIncome());
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
                      handleClickFilterTotalIncomeCondition(
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
                      handleClickFilterTotalIncomeCondition(
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
                      handleClickFilterTotalIncomeCondition("gender", "Male");
                    }}
                  >
                    Male
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterTotalIncomeCondition("gender", "Female");
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
                      handleClickFilterTotalIncomeCondition(
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
                      handleClickFilterTotalIncomeCondition(
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
                      handleClickFilterTotalIncomeCondition(
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
                      handleClickFilterTotalIncomeCondition(
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
                      handleClickFilterTotalIncomeCondition("department", "IT");
                    }}
                  >
                    IT
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterTotalIncomeCondition(
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
                      handleClickFilterTotalIncomeCondition("department", "HR");
                    }}
                  >
                    HR
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterTotalIncomeCondition(
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
                      handleClickFilterTotalIncomeCondition(
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
                      handleClickFilterTotalIncomeCondition(
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
                      handleClickFilterTotalIncomeCondition(
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
                      handleClickFilterTotalIncomeCondition(
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
                      handleClickFilterTotalIncomeCondition(
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
                      handleClickFilterTotalIncomeCondition(
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
                    <th>Total income</th>
                  </tr>
                </thead>
                <tbody>
                  {EmployessTotalIncome.length > 0 &&
                    EmployessTotalIncome.map((employee, index) => {
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
                          <td>
                            {employee.totalIncome.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
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
