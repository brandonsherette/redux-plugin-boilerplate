import React from 'react';
import { connect } from 'react-redux';
import { toggleGreeting } from './actions';

require('./plugin-name.scss');

const PluginName = ({greeting, handleToggleGretting, showGreeting}) => (
  <section className="plugin-name">
    <h1>Plugin Name</h1>
    {showGreeting && (<p>{greeting}</p>)}
    <div className="break-4x">
      <button onClick={handleToggleGretting} type="button" className="btn btn-primary">Toggle Greeting</button>
    </div>
  </section>
);

const mapStateToProps = (state) => {
  return {
    greeting: state.pluginName.greeting,
    showGreeting: state.pluginName.showGreeting
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleGretting: () => { dispatch(toggleGreeting()); }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PluginName);