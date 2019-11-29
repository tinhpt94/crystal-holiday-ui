import React, { Component } from "react";
import SiteWrapper from "../components/shared/SiteWrapper";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";

import { Page, Avatar, Grid, Card, Text, Table, Button } from "tabler-react";

class CustomerPage extends Component {
  componentDidMount = () => {
    this.props.actions.getCustomers();
  };

  shouldComponentUpdate = nextProps => {
    return nextProps.customers != this.props.customers;
  };

  showItem = customer => {
    this.props.history.push("/customer/" + customer.id);
  };

  render() {
    let customers = this.props.customers;
    return (
      <SiteWrapper>
        <Page.Content title="Customer Dashboard">
          <Grid.Row cards deck>
            <Grid.Col width={12}>
              <Card>
                <Table
                  responsive
                  highlightRowOnHover
                  hasOutline
                  verticalAlign="center"
                  cards
                  className="text-nowrap"
                >
                  <Table.Header>
                    <Table.Row>
                      <Table.ColHeader alignContent="center" className="w-1">
                        <i className="icon-people" />
                      </Table.ColHeader>
                      <Table.ColHeader>Name</Table.ColHeader>
                      <Table.ColHeader>Tele Sale</Table.ColHeader>
                      <Table.ColHeader alignContent="center">
                        Sale
                      </Table.ColHeader>
                      <Table.ColHeader>Sale Admin</Table.ColHeader>
                      <Table.ColHeader alignContent="center">
                        Sale Manager
                      </Table.ColHeader>
                      <Table.ColHeader alignContent="center">
                        <i className="icon-settings" />
                      </Table.ColHeader>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {customers &&
                      customers.map(customer => (
                        <Table.Row key={customer.id}>
                          <Table.Col alignContent="center">
                            <Avatar
                              imageURL="demo/faces/female/26.jpg"
                              className="d-block"
                              status="red"
                            />
                          </Table.Col>
                          <Table.Col>
                            <div>{customer.name}</div>
                            <Text size="sm" muted>
                              Phone: {customer.phone}
                            </Text>
                          </Table.Col>
                          <Table.Col>
                            {customer.teleSale && (
                              <div>{customer.teleSale.name}</div>
                            )}
                          </Table.Col>
                          <Table.Col>
                            {customer.sale && <div>{customer.sale.name}</div>}
                          </Table.Col>
                          <Table.Col>
                            {customer.saleAdmin && (
                              <div>{customer.saleAdmin.name}</div>
                            )}
                          </Table.Col>
                          <Table.Col>
                            {customer.saleManager && (
                              <div>{customer.saleManager.name}</div>
                            )}
                          </Table.Col>
                          <Table.Col>
                            <Button
                              color="primary"
                              outline
                              onClick={() => this.showItem(customer)}
                            >
                              Chi tiết
                            </Button>
                          </Table.Col>
                        </Table.Row>
                      ))}
                  </Table.Body>
                </Table>
              </Card>
            </Grid.Col>
          </Grid.Row>
        </Page.Content>
      </SiteWrapper>
    );
  }
}

const mapStateToProps = state => ({
  customers: state.default.customer.customers,
  routing: state.routing.locationBeforeTransitions
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions.customer }, dispatch),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerPage);
