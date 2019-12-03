import React, { Component } from "react";

import { Descriptions, Card, Table } from "antd";
import SiteWrapper from "../components/shared/SiteWrapper";
import { Page, Grid, StatsCard } from "tabler-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";
import OrderTable from "../components/shared/OrderTable";

class CustomerDetailPage extends Component {
  componentDidMount = () => {
    this.props.actions.getCustomer(this.props.match.params.id);
    this.props.actions.getCustomerOrders(this.props.match.params.id);
  };

  shouldComponentUpdate = nextProps => {
    return nextProps.customer !== this.props.customer;
  };

  render = () => {
    let customer = this.props.customer.customer;
    let orders = this.props.customer.orders;
    return (
      <SiteWrapper>
        <Page.Content title="">
          <Grid.Row cards deck>
            <Grid.Col width={12}>
              <Card>
                {customer && (
                  <Descriptions title="Thông tin khách hàng">
                    <Descriptions.Item label="Họ tên">
                      {customer.name}
                    </Descriptions.Item>
                    <Descriptions.Item label="Điện thoại">
                      {customer.phone}
                    </Descriptions.Item>
                    <Descriptions.Item label="Trạng thái">
                      Active
                    </Descriptions.Item>
                    <Descriptions.Item label="Địa chỉ">
                      {customer.address1}
                    </Descriptions.Item>
                  </Descriptions>
                )}
              </Card>
            </Grid.Col>
            <Grid.Col width={0} sm={0} lg={3} />
            
            <Grid.Col width={6} sm={6} lg={3}>
              {orders && <StatsCard
                layout={1}
                movement={0}
                total={orders.length}
                label="Tổng số hợp đồng"
              />}
            </Grid.Col>
            <Grid.Col width={6} sm={6} lg={3}>
              {orders && <StatsCard
                layout={1}
                movement={6}
                total={orders.reduce((sum, order) => sum + order.contractValueVat, 0)}
                label="Tổng giá trị hợp đồng"
              />}
            </Grid.Col>
            <Grid.Col width={0} sm={0} lg={3} />
          </Grid.Row>
          <Grid.Row>
            <Grid.Col width={12}>
              <Card>
                <OrderTable dataSource={this.props.customer.orders} />
              </Card>
            </Grid.Col>                  
          </Grid.Row>
        </Page.Content>
      </SiteWrapper>
    );
  };
}

const mapStateToProps = state => ({
  customer: state.default.customer,
  routing: state.routing.locationBeforeTransitions
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions.customer }, dispatch),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetailPage);
