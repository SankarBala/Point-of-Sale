import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardFooter, CardHeader, Col, Row, Table } from 'reactstrap';


function UserRow(props) {
  const user = props.user
  const userLink = `/users/${user.id}`

  const getBalance = (balance) => {
    return balance < 0 ? 'text-danger' :
      balance === 0 ? 'text-secondary' :
        'text-success'
  }

  return (

    <tr key={user.id.toString()}>

      <th scope="row"><Link to={userLink}>{user.id}</Link></th>
      <td scope="row"><Link to={userLink}><img width={40} src={user.photo} /></Link></td>
      <td scope="row"><Link to={userLink}>{user.title} {user.firstname} {user.lastname}</Link>
        <br />
        {user.mobile}
      </td>
      <th scope="row"><span className={getBalance(user.balance)}>{user.balance}</span></th>
      <th scope="row">{user.created_at}</th>
      <th scope="row">{user.district}</th>
    </tr>
  )
}

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customersData: [],
    }
  }

  componentDidMount() {
    fetch("/api/customers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(async res => {
        const data = await res.json();
        this.setState({
          customersData: data.data
        })
      })
      .catch(function (err) {
        console.log('ERROR!!! ' + err.message);
      });
    console.log('ok');
  }

  render() {

    const userList = this.state.customersData;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Cusomer List
              </CardHeader>
              <div>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Photo</th>
                      <th scope="col">Name</th>
                      <th scope="col">Balance</th>
                      <th scope="col">Customer from</th>
                      <th scope="col">District</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) =>
                      <UserRow key={index} user={user} />
                    )}
                  </tbody>
                </Table>
              </div>
              <CardFooter>
              
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users;
