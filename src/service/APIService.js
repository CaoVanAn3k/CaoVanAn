import axios from "axios";

const url = "http://localhost:8091/api/v1";
export const getAllEmployeesByTotalIncome = async () => {
  try {
    const respon = await axios.get(
      url + "/employee/find-all-employee/total-income",
    );
    return respon.data;
  } catch (error) {
    throw Error(error);
  }
};
export const getAllEmployeeTotalIncomeByCondition = async (type, value) => {
  try {
    const respon = await axios.get(
      url +
        `/employee/find-all-employee/total-income/condition?type=${type}&value=${value}`,
    );
    return respon.data;
  } catch (error) {
    throw Error(error);
  }
};

export const getAllEmployeeByVacation = async () => {
  try {
    const respon = await axios.get(
      url + "/employee/find-all-employee/vacations",
    );
    return respon.data;
  } catch (error) {
    throw Error(error);
  }
};

export const getAllEmployeeVacationCondition = async (type, value) => {
  try {
    const respon = await axios.get(
      url +
        `/employee/find-all-employee/vacations/condition?type=${type}&value=${value}`,
    );
    return respon.data;
  } catch (error) {
    throw Error(error);
  }
};

export const getAllEmployeeByBenefit = async () => {
  try {
    const respon = await axios.get(
      url + "/employee/find-all-employee/benefits",
    );
    return respon.data;
  } catch (error) {
    throw Error(error);
  }
};

export const getAllEmployeeBenefitsWithCondition = async (type, value) => {
  try {
    const respon = await axios.get(
      url +
        `/employee/find-all-employee/benefits/condition?type=${type}&value=${value}`,
    );
    return respon.data;
  } catch (error) {
    throw Error(error);
  }
};

export const getAllEmployeeHaveAnniversary = async () => {
  try {
    const respon = await axios.get(
      url + "/employee/find-all-employee/anniversary",
    );
    return respon.data;
  } catch (error) {
    throw Error(error);
  }
};

export const getAllEmployeeHaveActualDaySmallestReqDay = async () => {
  try {
    const respon = await axios.get(
      url + "/employee/find-all-employee/vacation-more-than-day-required",
    );
    return respon.data;
  } catch (error) {
    throw Error(error);
  }
};
export const getAllEmployeeHaveBirthDayMonth = async () => {
  try {
    const respon = await axios.get(
      url + "/employee/find-all-employee/birth-day-in-month",
    );
    return respon.data;
  } catch (error) {
    throw Error(error);
  }
};

export const getAllEmployeeHaveBenefitsPlanChange = async () => {
  try {
    const respon = await axios.get(
      url + "/employee/find-all-employee/benefits-plan-change",
    );
    return respon.data;
  } catch (error) {
    throw Error(error);
  }
};

// person

export const getAllPersonNotEmployee = async () => {
  try {
    const respon = await axios.get(url + "/person");
    return respon.data;
  } catch (error) {
    throw Error(error);
  }
};

// mock api
export const Department = () => {
  const data = [
    {
      id: 1,
      department: "IT",
    },
    {
      id: 2,
      department: "Finance",
    },
    {
      id: 3,
      department: "HR",
    },
    {
      id: 4,
      department: "Marketing",
    },
    {
      id: 5,
      department: "Operations",
    },
    {
      id: 6,
      department: "Sales",
    },
    {
      id: 7,
      department: "Engineering",
    },
    {
      id: 8,
      department: "Legal",
    },
    {
      id: 9,
      department: "Customer service",
    },
    {
      id: 10,
      department: "Research",
    },
  ];
  return data;
};

export const Division = () => {
  const data = [
    {
      id: 1,
      department: "IT",
      jobs: [
        {
          jobId: 1,
          jobName: "Software",
          jobTitle: "Software Engineer",
        },
        {
          jobId: 2,
          jobName: "Hardware",
          jobTitle: "Hardware Engineer",
        },
        {
          jobId: 3,
          jobName: "Network",
          jobTitle: "Network Engineer",
        },
        {
          jobId: 4,
          jobName: "Security",
          jobTitle: "Security Engineer",
        },
      ],
    },
    {
      id: 2,
      department: "Finance",
      jobs: [
        {
          jobId: 1,
          jobName: "Accounting",
          jobTitle: "Accountant",
        },
        {
          jobId: 2,
          jobName: "Finance",
          jobTitle: "Financial Analyst",
        },
        {
          jobId: 3,
          jobName: "Tax",
          jobTitle: "Tax Analyst",
        },
        {
          jobId: 4,
          jobName: "Legal",
          jobTitle: "Legal Analyst",
        },
      ],
    },
    {
      id: 3,
      department: "HR",
      jobs: [
        {
          jobId: 1,
          jobName: "Recruitment",
          jobTitle: "Recruitment Specialist",
        },
        {
          jobId: 2,
          jobName: "Training and Development",
          jobTitle: "Training Coordinator",
        },
        {
          jobId: 3,
          jobName: "Compensation and Benefits",
          jobTitle: "Benefits Analyst",
        },
        {
          jobId: 4,
          jobName: "Employee Relations",
          jobTitle: "Employee Relations Manager",
        },
      ],
    },
    {
      id: 4,
      department: "Marketing",
      jobs: [
        {
          jobId: 1,
          jobName: "Marketing Research",
          jobTitle: "Market Research Analyst",
        },
        {
          jobId: 2,
          jobName: "Advertising",
          jobTitle: "Advertising Manager",
        },
        {
          jobId: 3,
          jobName: "Brand Management",
          jobTitle: "Brand Manager",
        },
        {
          jobId: 4,
          jobName: "Public Relations",
          jobTitle: "Public Relations Specialist",
        },
      ],
    },
    {
      id: 5,
      department: "Operations",
      jobs: [
        {
          jobId: 1,
          jobName: "Supply Chain Management",
          jobTitle: "Supply Chain Manager",
        },
        {
          jobId: 2,
          jobName: "Logistics",
          jobTitle: "Logistics Coordinator",
        },
        {
          jobId: 3,
          jobName: "Quality Assurance",
          jobTitle: "Quality Assurance Specialist",
        },
        {
          jobId: 4,
          jobName: "Facilities Management",
          jobTitle: "Facilities Manager",
        },
      ],
    },
    {
      id: 6,
      department: "Sales",
      jobs: [
        {
          jobId: 1,
          jobName: "Sales Representative",
          jobTitle: "Sales Representative",
        },
        {
          jobId: 2,
          jobName: "Account Manager",
          jobTitle: "Account Manager",
        },
        {
          jobId: 3,
          jobName: "Sales Manager",
          jobTitle: "Sales Manager",
        },
        {
          jobId: 4,
          jobName: "Business Development",
          jobTitle: "Business Development Manager",
        },
      ],
    },
    {
      id: 7,
      department: "Engineering",
      jobs: [
        {
          jobId: 1,
          jobName: "Mechanical Engineer",
          jobTitle: "Mechanical Engineer",
        },
        {
          jobId: 2,
          jobName: "Electrical Engineer",
          jobTitle: "Electrical Engineer",
        },
        {
          jobId: 3,
          jobName: "Civil Engineer",
          jobTitle: "Civil Engineer",
        },
        {
          jobId: 4,
          jobName: "Software Engineer",
          jobTitle: "Software Engineer",
        },
      ],
    },
    {
      id: 8,
      department: "Legal",
      jobs: [
        {
          jobId: 1,
          jobName: "Corporate Lawyer",
          jobTitle: "Corporate Lawyer",
        },
        {
          jobId: 2,
          jobName: "Intellectual Property Lawyer",
          jobTitle: "Intellectual Property Lawyer",
        },
        {
          jobId: 3,
          jobName: "Litigation Lawyer",
          jobTitle: "Litigation Lawyer",
        },
        {
          jobId: 4,
          jobName: "Contract Lawyer",
          jobTitle: "Contract Lawyer",
        },
      ],
    },
    {
      id: 9,
      department: "Customer service",
      jobs: [
        {
          jobId: 1,
          jobName: "Customer Support Representative",
          jobTitle: "Customer Support Representative",
        },
        {
          jobId: 2,
          jobName: "Technical Support Specialist",
          jobTitle: "Technical Support Specialist",
        },
        {
          jobId: 3,
          jobName: "Client Success Manager",
          jobTitle: "Client Success Manager",
        },
        {
          jobId: 4,
          jobName: "Call Center Supervisor",
          jobTitle: "Call Center Supervisor",
        },
      ],
    },
    {
      id: 10,
      department: "Research",
      jobs: [
        {
          jobId: 1,
          jobName: "Market Research Analyst",
          jobTitle: "Market Research Analyst",
        },
        {
          jobId: 2,
          jobName: "Scientist",
          jobTitle: "Scientist",
        },
        {
          jobId: 3,
          jobName: "Data Analyst",
          jobTitle: "Data Analyst",
        },
        {
          jobId: 4,
          jobName: "Research Assistant",
          jobTitle: "Research Assistant",
        },
      ],
    },
  ];

  return data;
};
export const Supervisor = () => {
  const data = [
    {
      id: 1,
      supervisorName: "John Doe"
    },
    {
      id: 2,
      supervisorName: "Jane Smith"
    },
    {
      id: 3,
      supervisorName: "Adam Johnson"
    },
    {
      id: 4,
      supervisorName: "Emily Brown"
    },
    {
      id: 5,
      supervisorName: "Michael Williams"
    },
  ];
  return data;
};

export const Location=()=>{
  const data= [
    {
      id: 1,
      location: "New York",
    },
    {
      id: 2,
      location: "Los Angeles",
    },
    {
      id: 3,
      location: "Chicago",
    },
    {
      id: 4,
      location: "Houston",
    },
    {
      id: 5,
      location: "Dallas",
    },
    {
      id: 6,
      location: "San Francisco",
    },
    {
      id: 7,
      location: "Austin",
    },
    {
      id: 8,
      location: "Seattle",
    },
    {
      id: 9,
      location: "Miami",
    },
    {
      id: 10,
      location: "Boston",
    }
  ];
  return data;
}

export const PayRate= ()=>{
  const data= [
    {
      id: 1,
      payRate: "Standard",
    },
    {
      id: 2,
      payRate: "Premium",
    },
    {
      id: 3,
      payRate: "Executive",
    },
    {
      id: 4,
      payRate: "Hourly",
    },
    {
      id: 5,
      payRate: "Manager",
    },
    {
      id: 6,
      payRate: "Associate",
    },
    {
      id: 7,
      payRate: "Senior",
    },
    {
      id: 8,
      payRate: "Intern",
    },
    {
      id: 9,
      payRate: "Trainee",
    },
    {
      id: 10,
      payRate: "Junior",
    }
  ];
  return data;
}
