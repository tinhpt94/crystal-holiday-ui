import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./../actions";

class LogoutPage extends Component {

    componentWillMount() {
        this.props.actions.logout();
      }
    
      render() {
        return (
          <Redirect to="/" />
        );
      }
}

const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators({ ...actions.auth }, dispatch),
      dispatch
    };
  };

export default connect(null, mapDispatchToProps)(LogoutPage);