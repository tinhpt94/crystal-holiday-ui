import React, { Component } from "react";
import SiteWrapper from "../components/shared/SiteWrapper";

import {
  Page,
  Avatar,
  Icon,
  Grid,
  Card,
  Text,
  Table,
  Alert,
  Progress,
  colors,
  Dropdown,
  Button,
  StampCard,
  StatsCard,
  ProgressCard,
  Badge
} from "tabler-react";

class CustomerPage extends Component {
  customers = [
    {
      id: 1,
      name: "Phạm Trung Tính",
      phone: "9.72426521E8",
      address1: "82-84 ngõ 12 Chính Kinh, Thanh Xuân, Hà Nội",
      address2: "Ngũ Kiên, Vĩnh Tường, Vĩnh Phúc",
      teleSale: null,
      sale: {
        id: 11,
        name: "Sale"
      },
      saleAdmin: {
        id: 12,
        name: "Sale Admin"
      },
      saleManager: {
        id: 13,
        name: "Sale Manager"
      }
    },
    {
      id: 2,
      name: "Cao Thị Lan",
      phone: "9.68785313E8",
      address1: "82-84 ngõ 12 Chính Kinh, Thanh Xuân, Hà Nội",
      address2: "Ngũ Kiên, Vĩnh Tường, Vĩnh Phúc",
      teleSale: null,
      sale: {
        id: 11,
        name: "Sale"
      },
      saleAdmin: {
        id: 12,
        name: "Sale Admin"
      },
      saleManager: {
        id: 13,
        name: "Sale Manager"
      }
    }
  ];

  showItem = (customer) => {
    this.props.history.push("/customer/" + customer.id + "/orders")
  }

  render() {
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
                    {this.customers &&
                      this.customers.map(customer => (
                        <Table.Row>
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
                            {customer.teleSale && <div>{customer.teleSale.name}</div>}
                          </Table.Col>
                          <Table.Col>
                            {customer.sale && <div>{customer.sale.name}</div>}
                          </Table.Col>
                          <Table.Col>
                            {customer.saleAdmin && <div>{customer.saleAdmin.name}</div>}
                          </Table.Col>
                          <Table.Col>
                            {customer.saleManager && <div>{customer.saleManager.name}</div>}
                          </Table.Col>
                          <Table.Col>
                            <Button color="primary" outline onClick={() => this.showItem(customer)}>Chi tiết</Button>
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

export default CustomerPage;
