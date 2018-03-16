import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AgentTable from '../../components/AgentTable';
import EventsTable from '../../components/EventsTable';
import {connect} from 'react-redux';
import * as actions from '../../actions/UserActions';
import * as reducers from '../../reducers';

import Button from 'material-ui/Button';


class Main extends Component {

  renderTable() {
    return this.props.events.length === 0 ? <AgentTable/>: <EventsTable events={this.props.events}/>;
  }

  render() {
    return (
      <div>
        {this.renderTable()}
      </div>
    );
  }
}

Main.propTypes = {
  events: PropTypes.array.isRequired
};


const mapStateToProps = (state) => ({
  events: reducers.getEvents(state)
});

export default connect(mapStateToProps, actions)(Main);