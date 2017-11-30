import React, { Component } from 'react';
import Configuration from './Configuration';
import Seating from './Seating';
import Complete from './Complete';

class SeatingChartForm extends Component {
  constructor(props) {
    super(props);
    this.updateSeats = this.updateSeats.bind(this);
    this.progressPhase = this.progressPhase.bind(this);
    this.state = {
      phase: 1,
      seats: {},
    };
  }

  updateSeats(seats) {
    this.setState({
      seats: seats,
    });
    this.progressPhase();
  }

  progressPhase() {
    this.setState({
      phase: this.state.phase + 1,
    });
  }

  render() {
    switch (this.state.phase) {
      case 1:
        return (
          <div className="columns">
            <div className="column">
              <Configuration updateSeats={this.updateSeats} />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="columns">
            <div className="column">
              <Seating
                seats={this.state.seats}
                progressPhase={this.progressPhase}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="columns">
            <div className="column">
              <Complete />
            </div>
          </div>
        );
    }
  }
}

export default SeatingChartForm;
