import React, { Component } from 'react';
import Configuration from './Configuration';
import Seating from './Seating';

class SeatingChartForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: 1,
    };
  }

  componentDidMount() {}

  render() {
    switch (this.state.phase) {
      case 1:
        return (
          <div className="columns">
            <div className="column">
              <Configuration />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="columns">
            <div className="column is-8">
              <Seating />
            </div>
          </div>
        );
    }
  }
}

export default SeatingChartForm;
