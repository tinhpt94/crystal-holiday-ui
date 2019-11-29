import React, { Component } from "react";

import { Descriptions } from "antd";
import SiteWrapper from "../components/shared/SiteWrapper";
import { Page, Grid, Card } from "tabler-react";
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
        <Page.Content title="Customer Dashboard">
          <Grid.Row cards deck>
            <Grid.Col width={12}>
              <Card>
                {customer && (
                  <Descriptions title="User Info">
                    <Descriptions.Item label="UserName">
                      {customer.name}
                    </Descriptions.Item>
                    <Descriptions.Item label="Telephone">
                      {customer.phone}
                    </Descriptions.Item>
                    {/* <Descriptions.Item label="Live">
                      Hangzhou, Zhejiang
                    </Descriptions.Item>
                    <Descriptions.Item label="Remark">empty</Descriptions.Item>
                    <Descriptions.Item label="Address">
                      {customer.address1}
                    </Descriptions.Item> */}
                  </Descriptions>
                )}
              </Card>
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
