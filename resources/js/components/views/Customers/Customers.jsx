import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import customersData from './CustomerData'

function UserRow(props) {
  const user = props.user
  const userLink = `/users/${user.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
     
    <tr key={user.id.toString()}>
     
      <th scope="row"><Link to={userLink}>{user.id}</Link></th>
      <td scope="row"><Link to={userLink}><img width={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRuYXtL1d3sceTSHEPqfJeWw5hUG_HpnZMYbDH5mOqzQIz01SBw&s"/></Link></td>
      <td scope="row"><Link to={userLink}>{user.name}</Link></td>
      <td scope="row"><Link to={userLink}>{user.registered}</Link></td>
      <td scope="row"><Link to={userLink}>{user.role}</Link></td>
      <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td>
       
    </tr>
  )
}

class Users extends Component {

  render() {

    const userList = customersData.filter((user) => user.id < 30)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Cusomer List 
                <i className="fa fa-align-justify"></i> Cusomer List 
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Photo</th>
                      <th scope="col">Name</th>
                      <th scope="col">Registered Date</th>
                      <th scope="col">Role</th>
                      <th scope="col">Rank</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) =>
                      <UserRow key={index} user={user}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users;
