import React, { Component } from "react";

import { Descriptions, Card, Table } from "antd";
import SiteWrapper from "../components/shared/SiteWrapper";
import { Page, Grid, StatsCard } from "tabler-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/order";

const columns = [
  {
    title: "Mã hoá đơn",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Ngày thanh toán",
    dataIndex: "paymentDate",
    key: "paymentDate"
  },
  {
    title: "Khoản thanh toán",
    dataIndex: "value",
    key: "value"
  },
  {
    title: "Khoản thanh toán (VAT)",
    dataIndex: "valueVat",
    key: "valueVat"
  },
  {
    title: "Loại hình thanh toán",
    dataIndex: "paymentType",
    key: "paymentType"
  },
  {
    title: "Ghi chú",
    dataIndex: "note",
    key: "note"
  }
]

const mapToDataSource = data => ({
  id: data.id,
  paymentDate: data.date,
  value: data.value,
  valueVat: data.valueVat,
  paymentType: data.type,
  note: data.comment
})

class OrderDetailPage extends Component {

  shouldComponentUpdate = nextProps => this.props.order !== nextProps.order

  componentDidMount = () => {
    this.props.actions.findOrderByIdRequest(this.props.match.params.id)
    this.props.actions.findPaymentHistoryByOrderIdRequest(this.props.match.params.id)
  }

  render = () => {
    let dataSource = this.props.order.paymentHistories ? this.props.order.paymentHistories.map(mapToDataSource) : null
    let order = this.props.order.order;
    return (
      <SiteWrapper>
        <Page.Content>
          <Grid.Row>
            <Grid.Col>
            <Card>
                {order && (
                  <Descriptions title="Thông tin chi tiết hợp đồng">
                    <Descriptions.Item label="Mã hợp đồng">
                      {order.id}
                    </Descriptions.Item>
                    <Descriptions.Item label="Tên dịch vụ">
                      {order.cardName}
                    </Descriptions.Item>
                    <Descriptions.Item label="Ngày thành lập">
                      {order.date}
                    </Descriptions.Item>
                    <Descriptions.Item label="Giá trị hợp đồng">
                      {order.contractValue}
                    </Descriptions.Item>
                    <Descriptions.Item label="Giá trị hợp đồng (VAT)">
                      {order.contractValueVat}
                    </Descriptions.Item>
                    <Descriptions.Item label="Chiết khấu">
                      {`${order.discount}%/70%`}
                    </Descriptions.Item>
                    <Descriptions.Item label="Trạng thái">
                      {order.status}
                    </Descriptions.Item>
                    <Descriptions.Item label="Tele Sale">
                      {order.teleSale ? order.teleSale.name : null}
                    </Descriptions.Item>
                    <Descriptions.Item label="Sale">
                      {order.sale ? order.sale.name : null}
                    </Descriptions.Item>
                    <Descriptions.Item label="Sale Admin">
                      {order.saleAdmin ? order.saleAdmin.name : null}
                    </Descriptions.Item>
                    <Descriptions.Item label="Sale Manager">
                      {order.saleManager ? order.saleManager.name : null}
                    </Descriptions.Item>
                  </Descriptions>
                )}
              </Card>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col width={12}>
              <Card>
                <Table dataSource={dataSource} columns={columns} />
              </Card>
            </Grid.Col>
          </Grid.Row>
        </Page.Content>
      </SiteWrapper>
    )
  }
}

const mapStateToProps = state => ({
  order: state.default.order
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetailPage);