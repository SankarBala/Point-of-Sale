import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardFooter, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import Pagination from "react-js-pagination";

function CustomerRow(props) {
  const customer = props.customer
  const customerLink = `/customer/${customer.id}`

  const getBalance = (balance) => {
    return balance < 0 ? 'text-danger' :
      balance === 0 ? 'text-secondary' :
        ''
  }

  return (

    <tr key={customer.id.toString()}>

      <th scope="row"><Link to={customerLink}>{customer.id}</Link></th>
      <td scope="row"><Link to={customerLink}><img width={40} src={customer.photo} /></Link></td>
      <td scope="row"><Link to={customerLink}>{customer.title} {customer.firstname} {customer.lastname}</Link>
        <br />
        {customer.mobile}
      </td>
      <th scope="row"><span className={getBalance(customer.balance)}>{customer.balance}</span></th>
      <th scope="row">{customer.created_at}</th>
      <th scope="row">{customer.district}</th>
    </tr>
  )
}

class customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customersData: [],
      activePage: 1,
      totalItemsCount: '',
    }
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
    fetch(`/api/customers?page=${pageNumber}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(async res => {
        const data = await res.json();
        this.setState({
          customersData: data.data,
        })
      })
  }

  componentDidMount() {
    fetch('/api/customers', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(async res => {
        const data = await res.json();
        this.setState({
          customersData: data.data,
          totalItemsCount: data.total
        })
      })
      .catch(function (err) {
        console.log('ERROR!!! ' + err.message);
      });
    console.log('ok');
  }

  render() {

    const customerList = this.state.customersData;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <div className=" clearfix">
                  <div className="float-left">
                    <i className="fa fa-align-justify"></i> Cusomer List

                  </div>
                  <div className="float-right">
                    <nav aria-label="Page navigation">
                      <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={20}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={10}
                        onChange={this.handlePageChange}
                        prevPageText="Previous"
                        firstPageText="First page"
                        lastPageText="Last page"
                        nextPageText="Next"
                        innerClass="pagination justify-content-end"
                        itemClass="page-item"
                        disabledClass="disabled"
                        linkClass="page-link"
                      />
                    </nav>
                  </div>
                </div>

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
                    {customerList.map((customer, index) =>
                      <CustomerRow key={index} customer={customer} />
                    )}
                  </tbody>
                </Table>
              </div>

            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default customers;
