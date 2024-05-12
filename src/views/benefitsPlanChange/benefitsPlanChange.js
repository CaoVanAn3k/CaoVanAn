import React, { useEffect } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { getBeneFil } from '../../redux/beneFitSlice/beneFitSlice'; 
import { useDispatch, useSelector } from 'react-redux';


const benefitsPlanChange = () => {
  const dispatch =useDispatch();
  const {Loading} = useSelector(state => state.beneFit)
  useEffect(()=>{
    dispatch(getBeneFil());
  },[])
  console.log(Loading);
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            
            <Card.Body>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Employee code</th>
                    <th>Full name</th>
                    <th>Ethnicity</th>
                    <th>Gender</th>
                    <th>Benefit plan new </th>
                    <th>Deductable new</th>
                    <th>Percentage copay new</th>
                    <th>Pay rate new</th>
               
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
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

export default benefitsPlanChange;