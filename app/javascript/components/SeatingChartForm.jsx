import React, { Component } from 'react';
import Configuration from './Configuration';
import Seating from './Seating';

class SeatingChartForm extends Component {
  constructor(props) {
    super(props);
    this.updateSeats = this.updateSeats.bind(this);
    this.state = {
      phase: 1,
      seats: {},
    };
  }

  updateSeats(seats) {
    this.setState({
      seats: seats,
      phase: 2,
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
        console.log(this.state.seats);
        return (
          <div className="columns">
            <div className="column">
              <Seating seats={this.state.seats} />
            </div>
          </div>
        );
    }
  }
}

export default SeatingChartForm;
