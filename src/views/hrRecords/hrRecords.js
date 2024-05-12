import React from 'react';
import { Row, Col, Card, Table,Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import done from '../../assets/images/done_FILL0_wght400_GRAD0_opsz24.png'
import close from '../../assets/images/close_FILL0_wght400_GRAD0_opsz24.png'

import classNames from 'classnames'

const totalIncome = () => {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem',justifyContent:'right' }}>
             
             <Link to="/registerperson">
             <Button variant="primary">Add</Button>
               </Link>
              </div>
            </Card.Header>
            <Card.Body>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th> Middle Name</th>
                    <th>Birth Date</th>
                    <th> Phone Number</th>
                    <th>Action</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">
                      1
                    </td>
                    <td scope="row">
                     
                      Mark
                    
                    </td>
                    <td scope="row">
                     
                      Otto
                    
                    </td>
                    <td scope="row">
                     
                      mdo
                  
                    </td>
                    <td scope="row">
                   
                      mdo
                    
                    </td>
                    <td scope="row">
                     
                      mdo
                    
                    </td>
                    <td scope="row">
                     
                      mdo
                     
                    </td>
                    <td scope="row" >
                    {/* <Link to="/upadateperson"> */}
                      <img style={{ background: 'red',borderRadius:'12px' }} src={close} />
                      {/* </Link> */}
                    <Link to="/upadateperson">
                      <img style={{ background: 'green',borderRadius:'12px',marginLeft:'10px' }} src={done} />
                      </Link>
                    </td>
                   
                  </tr>
                
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
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