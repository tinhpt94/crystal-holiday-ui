import React, { Component } from "react";

import { Descriptions, Card } from "antd";
import SiteWrapper from "../components/shared/SiteWrapper";
import { Page, Grid, StatsCard } from "tabler-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";

class CustomerDetailPage extends Component {
  componentDidMount = () => {
    this.props.actions.getCustomer(this.props.match.params.id);
  };

  shouldComponentUpdate = nextProps => {
    return nextProps.customer != this.props.customer;
  };

  render = () => {
    let customer = this.props.customer;
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
            <Grid.Col width={6} sm={6} lg={3}>
              <StatsCard
                layout={1}
                movement={0}
                total="43"
                label="Tổng số hợp đồng"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={6} lg={3}>
              <StatsCard
                layout={1}
                movement={6}
                total="500000000"
                label="Tổng giá trị hợp đồng"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={6} lg={3}>
              <StatsCard
                layout={1}
                movement={0}
                total="200000000"
                label="Đã thanh toán"
              />
            </Grid.Col>
            <Grid.Col width={6} sm={6} lg={3}>
              <StatsCard
                layout={1}
                movement={6}
                total="300000000"
                label="Chưa thanh toán"
              />
            </Grid.Col>
          </Grid.Row>
        </Page.Content>
      </SiteWrapper>
    );
  };
}

const mapStateToProps = state => ({
  customer: state.default.customer.customer,
  routing: state.routing.locationBeforeTransitions
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions.customer }, dispatch),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetailPage);
