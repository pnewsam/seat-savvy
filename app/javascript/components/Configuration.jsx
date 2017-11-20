import React, { Component } from 'react';
import SeatingChart from './SeatingChart';

class Configuration extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSeats = props.updateSeats;
    this.state = {
      columns: 5,
      rows: 5,
    };
  }

  generateSeats() {
    var seats = {};
    for (let i = 0; i < this.state.columns; i++) {
      for (let j = 0; j < this.state.rows; j++) {
        let s = '';
        s += i.toString() + j.toString();
        seats[s] = null;
      }
    }
    return seats;
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.updateSeats(this.generateSeats());
  }

  render() {
    return (
      <div>
        <h3 className="title is-3">
          First, select the number of columns and rows.
        </h3>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="rows" className="label">
              Number of rows
            </label>
            <div className="control">
              <input
                name="rows"
                type="number"
                className="input"
                value={this.state.rows}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="columns" className="label">
              Number of columns
            </label>
            <div className="control">
              <input
                name="columns"
                type="number"
                className="input"
                value={this.state.columns}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button className="button is-primary" type="submit">
            Submit
          </button>
        </form>
        <SeatingChart seats={this.generateSeats()} />
      </div>
    );
  }
}

export default Configuration;
