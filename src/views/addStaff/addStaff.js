import save from '../../../src/assets/images/save_FILL0_wght400_GRAD0_opsz24 (1).png'
import avatar from '../../../src/assets/images/avatar_trang_2.jpg'

const Charts = () => {
 

  return (
   <div className="add-staff">
     <div className="add-staff-main">
        <div className="staff-main-left">
          <div className="main-left-search">
            <input className="header-left-input" placeholder="Search"></input>
            <button className="header-button-add">Add new</button>
          </div>
          <div className="main-left-list">
            <ul className="left-list-item">
              <li className="list-item-main">
                <div className="item-main-img">
                  <img src={avatar} />
                </div>
                <div className="item-main-name">
                  <span>Nguyen Van B</span>
                </div>
              </li>
              <li className="list-item-main">
                <div className="item-main-img">
                  <img src={avatar} />
                </div>
                <div className="item-main-name">
                  <span>Nguyen Van B</span>
                </div>
              </li>
              <li className="list-item-main">
                <div className="item-main-img">
                  <img src={avatar} />
                </div>
                <div className="item-main-name">
                  <span>Nguyen Van B</span>
                </div>
              </li>

            </ul>
          </div>
        </div>
        <div className="staff-main-right">
          <div className="main-right-button">
            <img className="right-button-img" src={save} />
            <span className="right-button-name">Save</span>
          </div>
          <div className="main-right-list">
            <div className="right-list-img">
              <div className="list-img-item">
                <img src={avatar}  />
              </div>
            </div>
            <div className="right-list-right">
              <div className="right-list-information">
                <div className="information-left">
                  <div className="information-item">
                    <h3>FIRST_NAME</h3>
                    <input />
                  </div>
                  <div className="information-item">
                    <h3>MIDDLE_NAME</h3>
                    <input />
                  </div>
                  <div className="information-item">
                    <h3>SOCIAL_SECURITY_NUMBER</h3>
                    <input />
                  </div>
                  <div className="information-item">
                    <h3>ADDRESS_1</h3>
                    <input />
                  </div>
                  <div className="information-item">
                    <h3>CITY</h3>
                    <input />
                  </div>
                  <div className="information-item">
                    <h3>GENDER</h3>
                    <input />
                  </div>
                  <div className="information-item">
                    <h3>EMAIL</h3>
                    <input />
                  </div>
                  <div className="information-item">
                    <h3>ETHNICITY</h3>
                    <input />
                  </div>
                </div>
                <div className="information-right">
                  <div className="information-item">
                    <h3>LAST_NAME</h3>
                    <input />
                  </div>
                  
                  <div className="information-item">
                    <h3>BIRTH_NAME</h3>
                    <input />
                  </div>
                  
                  <div className="information-item">
                    <h3>DRIVERS_LICENSE</h3>
                    <input />
                  </div>
                
                  <div className="information-item">
                    <h3>ADDRESS_2</h3>
                    <input />
                  </div>
                  
                  <div className="information-item">
                    <h3>COUNTRY</h3>
                    <input />
                  </div>
                  
                  <div className="information-item">
                    <h3>PHONE_NUMBER</h3>
                    <input />
                  </div>
                  
                  <div className="information-item">
                    <h3>MARITAL_STATUS</h3>
                    <input />
                  </div>
                  
                  <div className="information-item">
                    <h3>SHAREHOLDER_STATUS</h3>
                    <input />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-list-check">
              <div className="list-check-main">
                <h3>Duty</h3>
                <div className="check-main-input">
                  <div className="input-list">
                    <input type="radio" />
                    <span>Employee</span>
                  </div>
                  <div className="input-list">
                    <input type="radio" />
                    <span>Admin</span>
                  </div>
                  <div className="input-list">
                    <input type="radio" />
                    <span>Initem</span>
                  </div>
                  <div className="input-list">
                    <input type="radio" />
                    <span>Manager</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
     </div>
   </div>
  )
}

export default Charts
