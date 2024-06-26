import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilChartPie
 
} from "@coreui/icons";
import { CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavTitle,
    name: "Components",
  },
  {
    component: CNavItem,
    name: "HR Records",
    to: "/hrrecords",
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Total Number Of Days Off",
    to: "/totalnumberofdaysoff",
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
 
  {
    component: CNavItem,
    name: "Register Person",
    to: "/registerperson",
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Total Income",
    to: "/totalincome",
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Vacations",
    to: "/vacations",
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Benefit Plan",
    to: "/benefitplan",
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Anniversary Date",
    to: "/anniversarydate",
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Number Days Off",
    to: "/numberdaysoff",
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Birth Date In Month",
    to: "/birthdateinmonth",
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: "Benefits Plan Change",
    to: "/benefitsplanchange",
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
];

export default _nav;
