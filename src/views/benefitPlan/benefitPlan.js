import React, { useEffect } from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { getAllEmployeeWithBenefit,getAllEmployeesBeneFitSliceCondition } from "../../redux/beneFitSlice/beneFitSlice";
import { useDispatch, useSelector } from "react-redux";

const benefitPlan = () => {
  const dispatch = useDispatch();
  const { Benefits } = useSelector((state) => state.beneFit);

  const handleClickFilterBenefitsCondition = (type, value) => {
    window.location.href = `/#/benefitplan/condition?type=${type}&value=${value}`;
    const data = {
      type,
      value,
    };
    dispatch(getAllEmployeesBeneFitSliceCondition(data));
  };
  const handleClickAll = (e) => {
    e.preventDefault();
    window.location.href = `/#/benefitplan/all`;
    dispatch(getAllEmployeeWithBenefit());
  };
  useEffect(() => {
    dispatch(getAllEmployeeWithBenefit());
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
                      handleClickFilterBenefitsCondition(
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
                      handleClickFilterBenefitsCondition(
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
                      handleClickFilterBenefitsCondition("gender", "Male");
                    }}
                  >
                    Male
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterBenefitsCondition("gender", "Female");
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
                      handleClickFilterBenefitsCondition(
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
                      handleClickFilterBenefitsCondition(
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
                      handleClickFilterBenefitsCondition(
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
                      handleClickFilterBenefitsCondition(
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
                      handleClickFilterBenefitsCondition("department", "IT");
                    }}
                  >
                    IT
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterBenefitsCondition(
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
                      handleClickFilterBenefitsCondition("department", "HR");
                    }}
                  >
                    HR
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickFilterBenefitsCondition(
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
                      handleClickFilterBenefitsCondition(
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
                      handleClickFilterBenefitsCondition(
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
                      handleClickFilterBenefitsCondition(
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
                      handleClickFilterBenefitsCondition(
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
                      handleClickFilterBenefitsCondition(
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
                      handleClickFilterBenefitsCondition(
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
                    <th>Benefit Name</th>
                    <th>Benefit Deductable</th>
                    <th>Percentage Copay</th>
                  </tr>
                </thead>
                <tbody>
                  {Benefits.length > 0 &&
                    Benefits.map((employee, index) => {
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
                          <td>{employee.benefitName}</td>
                          <td>
                            {employee.deductable.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </td>
                          <td>{employee.percentageCopay}%</td>
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

export default benefitPlan;
