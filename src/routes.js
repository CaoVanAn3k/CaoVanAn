import React from 'react'



const Charts = React.lazy(() => import('./views/addStaff/addStaff'))
const filterEmployee = React.lazy(() => import('./views/filterEmployee/filterEmployee'))
const TotalNumberOfDaysOff = React.lazy(() => import('./views/TotalNumberOfDaysOff/TotalNumberOfDaysOff'))
const upadatePerson = React.lazy(() => import('./views/upadatePerson/upadatePerson'))
const registerPerson = React.lazy(() => import('./views/RegisterPerson/RegisterPerson'))
const hrRecords = React.lazy(() => import('./views/hrRecords/hrRecords'))
const totalIncome = React.lazy(() => import('./views/totalIncome/totalIncome'))
const vacations = React.lazy(() => import('./views/vacations/vacations'))
const benefitPlan = React.lazy(() => import('./views/benefitPlan/benefitPlan'))
const anniversaryDate = React.lazy(() => import('./views/anniversaryDate/anniversaryDate'))
const numberDaysOff = React.lazy(() => import('./views/numberDaysOff/numberDaysOff'))
const birthdateInMonth = React.lazy(() => import('./views/birthdateInMonth/birthdateInMonth'))
const benefitsPlanChange = React.lazy(() => import('./views/benefitsPlanChange/benefitsPlanChange'))




const routes = [  
  { path: '/', exact: true,element:hrRecords, name: 'Home' },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/filter', name: 'Filter Employee', element: filterEmployee },
  { path: '/total', name: 'Total Income', element: totalIncome },
  { path: '/totalnumberofdaysoff', name: 'Total Number Of Days Off', element: TotalNumberOfDaysOff },
  { path: '/upadateperson', name: 'Upadate Person', element: upadatePerson },
  { path: '/registerperson', name: 'Register Person', element: registerPerson },
  { path: '/hrrecords', name: 'HR Records', element: hrRecords },
  { path: '/totalincome/*', name: 'Total Income', element: totalIncome },
  { path: '/totalincome', name: 'Total Income', element: totalIncome },
  { path: '/vacations', name: 'Vacations', element: vacations },
  { path: '/vacations/*', name: 'Vacations', element: vacations },
  { path: '/benefitplan', name: 'Benefit Plan', element: benefitPlan },
  { path: '/benefitplan/*', name: 'Benefit Plan', element: benefitPlan },
  { path: '/anniversarydate', name: 'Anniversary Date', element: anniversaryDate },
  { path: '/numberdaysoff', name: 'Number Days Off', element: numberDaysOff },
  { path: '/birthdateinmonth', name: 'Birth Date In Month', element: birthdateInMonth },
  { path: '/benefitsplanchange', name: 'Benefits Plan Change', element: benefitsPlanChange },
]

export default routes
