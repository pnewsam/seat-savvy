import React, { Component } from 'react';
import SeatingChart from './SeatingChart';

class Configuration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 5,
      columns: 5,
      seats: {},
    };
  }

  componentWillMount() {
    this.generateSeats();
  }

  generateSeats() {
    var seats = {};
    for (let i = 0; i < this.state.rows; i++) {
      for (let j = 0; j < this.state.columns; j++) {
        let s = '';
        s += i.toString() + j.toString();
        seats[s] = null;
      }
    }
    this.setState({
      seats: seats,
    });
  }

  render() {
    return (
      <div>
        <h3 className="title is-3">
          First, select the number of rows and columns.
        </h3>
        <form action="">
          <div className="field">
            <label htmlFor="columns" className="label">
              Number of Columns
            </label>
            <div className="control">
              <input type="number" className="input" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="Rows" className="label">
              Number of Rows
            </label>
            <div className="control">
              <input type="number" className="input" />
            </div>
          </div>
          <button className="button is-primary" type="submit">
            Submit
          </button>
        </form>
        <SeatingChart seats={this.state.seats} />
      </div>
    );
  }
}

export default Configuration;
