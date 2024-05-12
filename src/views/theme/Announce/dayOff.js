import React, { useEffect, useState, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'
import logout_FILL0_wght400_GRAD0_opsz24 from '../../../assets/images/logout_FILL0_wght400_GRAD0_opsz24.png'
import avatar from '../../../assets/images/avatar_trang_2.jpg'
import close from '../../../assets/images/close_FILL0_wght400_GRAD0_opsz24.png'
import done from '../../../assets/images/done_FILL0_wght400_GRAD0_opsz24.png'
import '../../../scss/style.scss'
import {Link} from 'react-router-dom'
// const ThemeView = () => {
//   const [color, setColor] = useState('rgb(255, 255, 255)')
//   const ref = createRef()

//   useEffect(() => {
//     const el = ref.current.parentNode.firstChild
//     const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
//     setColor(varColor)
//   }, [ref])

//   return (
//     <table className="table w-100" ref={ref}>
//       <tbody>
//         <tr>
//           <td className="text-body-secondary">HEX:</td>
//           <td className="font-weight-bold">{rgbToHex(color)}</td>
//         </tr>
//         <tr>
//           <td className="text-body-secondary">RGB:</td>
//           <td className="font-weight-bold">{color}</td>
//         </tr>
//       </tbody>
//     </table>
//   )
// }

// const ThemeColor = ({ className, children }) => {
//   const classes = classNames(className, 'theme-color w-75 rounded mb-3')
//   return (
//     <CCol xs={12} sm={6} md={4} xl={2} className="mb-4">
//       <div className={classes} style={{ paddingTop: '75%' }}></div>
//       {children}
//       <ThemeView />
//     </CCol>
//   )
// }

// ThemeColor.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string,
// }



const locationEmployee =[
  {
    locationId:"1",
    locationName:"Chu tich"
  },
  {
    locationId:"2",
    locationName:"Pho chu tich"
  }
]
const teamEmployee =[
  {
    id:"1",
    teamId:"1",
    teamName:"Chu tich nuoc",
   
  },
  {
    id:"2",
    teamId:"2",
    teamName:"Pho chu tich nuoc"
  },
  {
    id:"3",
    teamId:"2",
    teamName:"Pho chu tich xa"
  }
  , {
    id:"4",
    teamId:"1",
    teamName:"Chu tich quoc hoi"
  }
]


const informationEmployee =[
  {
    id:"1",
    img: avatar,
    useName:"Chu tich nuoc Cao Van An",
    email:"caovanan3k@gmail.com",
    employeeId:"1",
    location:"Chu tich nuoc",

  },
  {
    id:"2",
    img: avatar,
    useName:"Pho chu tich nuoc Cao Van B",
    email:"nhathuy@gmail.com",
    employeeId:"2",
    location:"Pho chu tich nuoc",
    



  },
  {
    id:"3",
    img: avatar,
    useName:"Chu tich nuoc  Van B ",
    email:"caovanan3k@gmail.com",
    employeeId:"1",
    location:"Chu tich nuoc",
  },
  {
    id:"4",
    img: avatar,
    useName:"Pho chu tich nuoc Nguyen Van B",
    email:"caovanan3k@gmail.com",
    employeeId:"2",
    location:"Pho chu tich nuoc",
  },
  {
    id:"5",
    img: avatar,
    useName:"Pho chu tich xa Nguyen Van B",
    email:"caovanan3k@gmail.com",
    employeeId:"3",
    location:"Pho chu tich xa",

  },
  {
    id:"6",
    img: avatar,
    useName:"Chu tich quoc hoi Nguyen Van B",
    email:"caovanan3k@gmail.com",
    employeeId:"4",
    location:"Pho chu tich quoc hoi",

  },
]


const dayOff = () => {

  const [location,setLocation] =useState([])
  const [team,setTeam] =useState([])
  const [employee,setEmployee] =useState([])
  const [number,setNumber] =useState(0)
  const [selectedEmployees, setSelectedEmployees] = useState([]);




  

  
  useEffect(()=>{
    setLocation(locationEmployee)
  },[])

  useEffect(()=>{
    setTeam(teamEmployee)
  },[])
  useEffect(()=>{
    setTeam(informationEmployee)
  },[])

  const handleLocation =(id)=>{
    const teas =teamEmployee.filter(tea =>tea.teamId === id )
    setTeam(teas);
    // const selectedEmps = informationEmployee.filter(emp => {
    //   return teas.filter(team => team.teamId === emp.employeeId);
    // });
    setSelectedEmployees(teas);
  }
  const handleTeam =(id)=>{
    const emys = informationEmployee.filter(emy=>emy.employeeId === id)
    setEmployee(emys);
    
    // const selectedEmps = emys.filter(emp => {
    //   return emys.filter(team => team.teamId === emp.employeeId);
    // });
    setSelectedEmployees(emys);
    setNumber(emys.length);
  }
  const handleDeletd =(job)=>{
    const updatedEmployees = selectedEmployees.filter(emp => emp.id !== job);
    setEmployee(updatedEmployees);
    setNumber(updatedEmployees.length);
    setSelectedEmployees(updatedEmployees);
    }
    // const informationEmployeeData =encodeURIComponent(JSON.stringify(employee));
    // const hadnleClick =(id)=>{
    //   console.log(id);
    //   return (
    //     <Link to={`/thongbao/viewdetail?teamdata=${id}`}>View Details</Link>
    //   )
    // }
    
  

  return (
    <>
      <div className="announce-main">
        <div className="annouce-main-body">
          <div className="main-body-title">
            <div className="body-title-user">
              <div className="user-name">
                <span>User: </span>
                <span> Cao Van An</span>
              </div>
              <div className="user-email">
                <span>Email: </span>
                <span> caovanan3k@gmail.com</span>
              </div>
            </div>
            <div className="body-title-logout">
              <img src={logout_FILL0_wght400_GRAD0_opsz24} />
            </div>
          </div>
          <div className="main-body-overview">
            <div className="body-overview-list">
              <div className="overview-list-title">
                <h3>Month Overview</h3>
                <div className="list-title-location list-location">
                  <span>Location: </span>
                  <select onChange={(e)=>handleLocation(e.target.value)} >
                  <option value="0">Select Location</option>
                    {
                      location && location !== undefined &&
                      location.map((loc,index)=>{
                        return(
                          <option key={loc.locationId} value={loc.locationId}>{loc.locationName}</option>
                        )
                      })
                    }
                  </select>
                </div>
                <div className="list-title-location">
                  <span>Team: </span>
                  <select onChange={(e)=>handleTeam(e.target.value)}>
                  <option value="0">Select Team</option>
                    {
                      team && team !== undefined &&
                      team.map((tea,index)=>{
                        return(
                          <option key={tea.id} value={tea.id}>{tea.teamName}</option>
                        )
                      })
                    }
                  </select>
                </div>
              </div>
              <div className="overview-list-total">
                <h3>Number of Employees</h3>
                <span>{number}</span>
              </div>
            </div>
            <div className="body-overview-member">
              <div className="overview-member-item">
                {
                  employee.map((e,index) =>{
                    return(
                      <div key={index}>
                        {/* {deleted &&  */}
                          <div className="member-item-body">
                            <div className="item-body-avatar">
                              <img src={e.img} />
                            </div>
                            <div className="item-body-information">
                              <div className="body-informaion-main">
                                <h4 className="information-title">{e.useName}</h4>
                                <p className="information-email">{e.email}</p>
                                <p className="information-view">
                                  {/* {
                                    hadnleClick(e.id)
                                  } */}
                                  {/* <Link to={`/thongbao/viewdetail?teamId=${}`}>View Details</Link> */}
                                <Link to={`/thongbao/viewdetail?teamdata=${encodeURIComponent(JSON.stringify(e))}`}>View Details</Link>
                                </p>
                              </div>
                              <div className="item-body-button">
                                <button className="button button-close" onClick={()=>handleDeletd(e.id)}>
                                  <img src={close} />
                                </button>
                                <button className="button button-done">
                                  <img src={done} />
                                </button>
                              </div>
                            </div>
                          </div>
                        {/* } */}
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default dayOff
