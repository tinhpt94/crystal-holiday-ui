// @flow

import React, { Component } from "react";

import { Formik } from "formik";
import { LoginPage as TablerLoginPage } from "tabler-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";
import { Redirect } from "react-router-dom";

class LoginPage extends Component {
  render() {
    return this.props.isAuthenticated ? (
      <Redirect to="/" />
    ) : (
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validate={values => {
          // same as above, but feel free to move this into a class method now.
          let errors = {};
          if (!values.email) {
            errors.email = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          this.props.actions.loginRequest({
            username: values.email,
            password: values.password
          });
        }}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <TablerLoginPage
            onSubmit={handleSubmit}
            onChange={handleChange}
            onBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}
          />
        )}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.default.auth.isAuthenticated,
    routing: state.routing.locationBeforeTransitions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...actions.auth }, dispatch),
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
