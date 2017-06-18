import React, { Component } from 'react';
import { connect } from 'react-redux';
import PluginName from './plugin-name/index';

class AppComponent extends Component {
  render() {
    const { showGreeting } = this.props;

    return (
      <div className="app-component">
        <div className="app-header">
          <h1>Redux Plugin Boilerplate</h1>
          <h5>Boilerplate For Creating Redux Plugins.</h5>
        </div>
        <div className="container">
          <PluginName />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);