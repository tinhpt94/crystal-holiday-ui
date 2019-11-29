import React, { Component } from "react";
import SiteWrapper from "../components/shared/SiteWrapper";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";

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

class ProductPage extends Component {

  componentDidMount = () => {
    this.props.actions.fetchProductRequest();
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    nextProps.products.forEach(product => {
      console.log(product.name)
    });
    return nextProps.products != this.props.products
  }

  render() {
    let products = this.props.products
    return (
      <SiteWrapper>
        <Page.Content title="Product Dashboard">
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
                      <Table.ColHeader>Tên chương trình</Table.ColHeader>
                      <Table.ColHeader>Loại thẻ</Table.ColHeader>
                      <Table.ColHeader alignContent="center">
                        Mùa du lịch
                      </Table.ColHeader>
                      <Table.ColHeader>Số phòng</Table.ColHeader>
                      <Table.ColHeader alignContent="center">
                        Đơn giá / 01 đêm
                      </Table.ColHeader>
                      <Table.ColHeader alignContent="center">
                        Giá trị thẻ
                      </Table.ColHeader>
                      <Table.ColHeader alignContent="center">
                        Phí thường niên
                      </Table.ColHeader>
                      <Table.ColHeader alignContent="center">
                        Phí đăng ký lại / lần
                      </Table.ColHeader>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {products &&
                      products.map(product => (
                        <Table.Row key={product.id}>
                          <Table.Col alignContent="center">
                            <Avatar
                              imageURL="demo/faces/female/26.jpg"
                              className="d-block"
                              status="red"
                            />
                          </Table.Col>
                          <Table.Col>
                            {/* {product.name} */}22
                          </Table.Col>
                          <Table.Col>
                            {product.cardType.name}22
                          </Table.Col>
                          <Table.Col>
                            {product.seasonType.name}22
                          </Table.Col>
                          <Table.Col>
                            {product.roomType.name}22
                          </Table.Col>
                          <Table.Col>
                            {product.unitPrice}22
                          </Table.Col>
                          <Table.Col>
                            {product.cardType.quantity}22
                          </Table.Col>
                          <Table.Col>
                            {product.annualFee}22
                          </Table.Col>
                          <Table.Col>
                            {product.reSignFee}22
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

const mapStateToProps = state => {
  return {
    products: state.default.product.products,
    routing: state.routing.locationBeforeTransitions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...actions.product }, dispatch),
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);