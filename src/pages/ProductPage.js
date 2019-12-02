import React, { Component } from "react";
import SiteWrapper from "../components/shared/SiteWrapper";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";

import { Page, Grid, Card } from "tabler-react";

import { Table } from "antd";

const columns = [
  {
    title: "Tên chương trình",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Loại thẻ",
    dataIndex: "cardType",
    key: "cardType"
  },
  {
    title: "Mùa du lịch",
    dataIndex: "seasonType",
    key: "seasonType"
  },
  {
    title: "Số phòng",
    dataIndex: "roomType",
    key: "roomType"
  },
  {
    title: "Đơn giá / 01 đêm",
    dataIndex: "unitPrice",
    key: "unitPrice"
  },
  {
    title: "Giá trị thẻ",
    dataIndex: "cardValue",
    key: "cardValue"
  },
  {
    title: "Phí thường niên",
    dataIndex: "annualFee",
    key: "annualFee"
  },
  {
    title: "Phí đăng ký lại / lần",
    dataIndex: "reSignFee",
    key: "reSignFee"
  }
];

const mapProductToDataSource = product => ({
  name: product.name,
  cardType: product.cardType.name,
  seasonType: product.seasonType.name,
  roomType: product.roomType.name,
  unitPrice: product.unitPrice,
  cardValue: 7 * product.unitPrice * product.cardType.quantity,
  annualFee: product.annualFee,
  reSignFee: product.reSignFee
});

class ProductPage extends Component {
  componentDidMount = () => {
    this.props.actions.fetchProductRequest();
  };

  shouldComponentUpdate = nextProps => {
    return nextProps.products != this.props.products;
  };

  render() {
    let dataSource =
      this.props.products && this.props.products.map(mapProductToDataSource);
    return (
      <SiteWrapper>
        <Page.Content title="Product Dashboard">
          <Grid.Row cards deck>
            <Grid.Col width={12}>
              <Card>
                <Table dataSource={dataSource} columns={columns} />
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