import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  CardHeader,
  CardFooter,
  CardBody,
  ButtonGroup
} from "reactstrap";
import classnames from "classnames";

class CustomerDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: [],
      activeTab: "1",
      customerId: Number(this.props.match.params.id)
    };
    this.change = this.change.bind(this);
  }

  change(id) {
    this.setState({ customerId: this.state.customerId + id });
    fetch(`/api/customers/${this.state.customerId + id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(async res => {
        const data = await res.json();
        this.setState({
          customer: data
        });
      })
      .catch(function(err) {
        console.log("ERROR!!! " + err.message);
      });
  }

  componentDidMount() {
    fetch(`/api/customers/${this.state.customerId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(async res => {
        const data = await res.json();
        this.setState({
          customer: data
        });
      })
      .catch(function(err) {
        console.log("ERROR!!! " + err.message);
      });
  }

  render() {
    const toggle = tab => {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    };

    return (
      <>
        <Card>
          <CardHeader>
            <Row>
              <Col md="4">
                <h4>
                  {this.state.customer.title}&nbsp;
                  {this.state.customer.firstname}&nbsp;
                  {this.state.customer.lastname}
                </h4>
              </Col>
              <Col md="4">
                <h4>Customer ID # {this.state.customer.id}</h4>
              </Col>
              <Col md="4">
                <h4
                  style={{
                    color: this.state.customer.balance < 1 ? "red" : "green"
                  }}
                >
                  Balance &nbsp;
                  <i>{this.state.customer.balance}</i>
                </h4>
              </Col>
            </Row>
          </CardHeader>

          <CardBody>
            <Row>
              <Col md="3">
                <Card>
                  <CardHeader>
                    <img src={this.state.customer.photo} />
                  </CardHeader>
                  <CardBody>
                    <b>
                      {this.state.customer.title}&nbsp;
                      {this.state.customer.firstname}&nbsp;
                      {this.state.customer.lastname}
                    </b>
                    <address>{this.state.customer.address}</address>
                    <a
                      href={`tel://${this.state.customer.mobile}`}
                      style={{ color: "grey" }}
                    >
                      {this.state.customer.mobile}
                    </a>
                    <br />
                    <a
                      href={`mailto:${this.state.customer.email}`}
                      style={{ color: "grey" }}
                    >
                      {this.state.customer.email}
                    </a>
                  </CardBody>
                </Card>
              </Col>
              <Col md="9">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab === "1"
                      })}
                      onClick={() => {
                        toggle("1");
                      }}
                    >
                      Basic Info
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab === "2"
                      })}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      Basic Info
                    </NavLink>
                  </NavItem>
                </Nav>

                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">Tab one</TabPane>
                  <TabPane tabId="2">Tab two</TabPane>
                  <TabPane tabId="3">Tab 3</TabPane>
                </TabContent>
                <br />
                <div className="d-flex justify-content-around">
                  <Router>
                    <Link
                      className="p-2 bg-warning"
                      style={{ width: 100, textAlign: "center" }}
                      to={`/customer/${this.state.customerId - 1}`}
                      onClick={() => this.change(-1)}
                    >
                      Previous
                    </Link>
                    <Link
                      className="p-2 bg-warning"
                      style={{ width: 100, textAlign: "center" }}
                      to={`/customer/${this.state.customerId + 1}`}
                      onClick={() => this.change(1)}
                    >
                      Next
                    </Link>
                  </Router>
                </div>
              </Col>
            </Row>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </>
    );
  }
}

export default CustomerDetails;
