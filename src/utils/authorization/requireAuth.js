import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authenticate extends Component {
    componentWillMount() {
      if(!this.props.isAuthenticated) {
        this.context.router.history.push('/');           
      }
    }
    render() {
      return (
        <ComposedComponent {...this.props} />
      )
    }
    componentWillUpdate(nextProps) {
      if(!nextProps.isAuthenticated) {
        this.context.router.history.push('/');      
      }
    }  
  }

  Authenticate.contextTypes = {
    router: PropTypes.object.isRequired
  }

  Authenticate.PropTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.authorize.isAuthenticated
    }
  }

  return connect(mapStateToProps, {})(Authenticate);
}

