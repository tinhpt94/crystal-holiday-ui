import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import './loading.css';

export default class Loading extends Component {

  render() {
    if (this.props.isLoading) {
      return (
        <div className='loading-wrapper'>
          <div className='loading'>
            <span>{ this.props.loadingText }</span>
            <Spinner name="three-bounce" />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}