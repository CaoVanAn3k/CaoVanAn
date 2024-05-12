import total from '../../../../assets/images/toolbar_FILL0_wght400_GRAD0_opsz24.png'
import left from '../../../../assets/images/arrow_back_ios_FILL0_wght400_GRAD0_opsz24.png'
import right from '../../../../assets/images/arrow_forward_ios_FILL0_wght400_GRAD0_opsz24.png'
import avatar from '../../../../assets/images/avatar_trang_2.jpg'
import notification  from '../../../../assets/images/notifications_FILL0_wght400_GRAD0_opsz24.png'
import { useLocation } from 'react-router-dom';
import { Button, Navbar, Container, Row, Col } from 'react-bootstrap';

// Sau đó bạn có thể sử dụng teamEmployees trong file viewDetail

const viewDetail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const data = searchParams.get('teamdata');
  const dataInformation = data ? JSON.parse(decodeURIComponent(data)) :[];
  console.log(dataInformation);

  return (
    <>
     <div className="view-detail-home">
      <div className="detail-home-body">
        <div className="home-body-list">
          <div className="body-list-total">
            <div className="body-total-home">
              <div className="list-home-item list-total-main">
                <div className="list-img img-total">
                  <img src={total} />
                </div>
                <div className="item-info total-main-item">
                  <p  className="item-number total">13</p>
                  <p>Total Day(s)</p>
                </div>
              </div>
              <div className="list-home-item list-holiday-main">
                <div className="list-img img-holiday">
                  <img src={total} />
                </div>
                <div className="item-info holiday-main-item">
                  <p className="item-number holiday">00</p>
                  <p>Total holiday(s)</p>
                </div>
              </div>
              <div className="list-home-item list-birthday-main">
                <div className="list-img img-birthday">
                  <img src={total} />
                </div>
                <div className="item-info birthday-main-item">
                  <p className="item-number birthday">01</p>
                  <p>Total birthday(s)</p>
                </div>
              </div>
              <div className="list-home-item list-other-main">
                <div className="list-img img-other">
                  <img src={total} />
                </div>
                <div className="item-info other-main-item">
                  <p className="item-number other">02</p>
                  <p>Total other(s)</p>
                </div>
              </div>
            </div>
            <div className="body-total-information">
              <div className="total-information-list">
                <div className="information-list-item">
                  <span className="list-item-date">Ngày 15 Tháng 10 Năm 2023</span>
                  <span className="list-item-informaiton">Sinh nhật </span>
                  <span className="list-item-day">1 Day</span>
                  <span className="list-item-status">Pending</span>
                  <img src={notification} />
                </div>
                <div className="information-list-item">
                  <span className="list-item-date">Ngày 1 Tháng 02 Năm 2023</span>
                  <span className="list-item-informaiton">Ngày lễ </span>
                  <span className="list-item-day">6 Day</span>
                  <span className="list-item-status">Pending</span>
                  <img src={notification} />
                </div>
                <div className="information-list-item">
                  <span className="list-item-date">Ngày 4 Tháng 08 Năm 2023</span>
                  <span className="list-item-informaiton">Sinh nhật </span>
                  <span className="list-item-day">1 Day</span>
                  <span className="list-item-status">Rejected</span>
                  <img src={notification} />
                </div>
              </div>

            </div>
          </div>
          <div className="body-list-date">
            <div className="list-date-main">
              <div className="date-main-header">
                <div className="main-header-button">
                  <div className="button-left">
                    <img src={left} />
                  </div>
                  <div className="information-date">
                    <div>
                      <span>March 2020</span>
                    </div>
                  </div>
                  <div className="button-right">
                    <img src={right} />
                  </div>

                </div>
                <div className="main-header-rank">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
              <div className="date-main-body">
                <div className="main-body-day">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                  <span>11</span>
                  <span>12</span>
                  <span>13</span>
                  <span>14</span>
                  <span>15</span>
                  <span>16</span>
                  <span>17</span>
                  <span>18</span>
                  <span>19</span>
                  <span>20</span>
                </div>
                <div className="main-body-note">
                  <div className="note-list">
                    <div className="list-color color-holiday"> </div>
                    <span>Holiday</span>
                  </div>
                  <div className="note-list">
                    <div className="list-color color-birthday"> </div>
                    <span>Birthday</span>
                  </div>
                  <div className="note-list">
                    <div className="list-color color-other"> </div>
                    <span>Other</span>
                  </div>
                  {/* <div className="note-list">
                    <div className="list-color"> </div>
                    <span>Full Day</span>
                  </div> */}

                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="home-body-information">
          <div className="body-information-list">
            <div className="information-list-header">
              <div className="list-header-img">
                <img src={dataInformation.img} />
              </div>
              <div className="list-header-name">
                <p>{dataInformation.useName}</p>
              </div>
              {/* <div className="list-header-location">
                <p></p>
              </div> */}
              <div className="list-header-my">
                <p>My Profile </p>
                <p className="my-border">|</p>
                <p> My Team</p>
              </div>
            </div>
            <div className="information-list-body">
              <div className="list-body-item">
                <div className="item-id">
                  <span>EmployeeID: </span>
                  <span>{dataInformation.id}</span>
                </div>
                <div className="item-name">
                  <span>Name: </span>
                  <span>{dataInformation.useName}</span>
                </div>
                <div className="item-email">
                  <span>Email: </span>
                  <span>{dataInformation.email}</span>
                </div>
                <div className="item-id">
                  <span>Phòng : </span>
                  <span>{dataInformation.location}</span>
                </div> 
                {/* <div className="item-id">
                  <span>Vị trí: </span>
                  <span>Sale</span>
                </div>  */}
              </div>

            </div>

          </div>
        </div>
      </div>
      {/* <div className="caovananan">
        {
        dataInformation.map((item,index)=>(
          <div key={index} className="an">
            <p>{item.useName}</p>
          </div>
        ))
        }</div> */}
      
     </div>
    </>
  )
}
export default viewDetail
