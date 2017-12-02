import React, { Component } from 'react';
import axios from 'axios';
import SeatingChart from '../SeatingChart/SeatingChart';

class GradesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seats: {},
    };
  }

  componentDidMount() {
    let ids, sectionId, students, seatingChart;
    ids = window.location.pathname.match(/^\d+|\d+\b|\d+(?=\w)/g);
    sectionId = ids[0];
    axios({
      method: 'get',
      url: `/sections/${sectionId}/seating_chart`,
      dataType: 'application/json',
    })
      .then(r => {
        console.log(r.data);
        this.setState({ seats: r.data });
      })
      .catch(e => console.log(e));
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h2 className="title is-2">Seating Chart Grades Form</h2>
        <SeatingChart seats={this.state.seats} students={this.state.students} />
      </div>
    );
  }
}

export default GradesForm;
