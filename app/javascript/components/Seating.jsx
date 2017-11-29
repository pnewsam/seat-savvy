import React, { Component } from 'react';
import SeatingChart from './SeatingChart';
import FormifiedSeatingChart from './FormifiedSeatingChart';
import StudentList from './StudentList';
import axios from 'axios';

class Seating extends Component {
  constructor(props) {
    super(props);
    this.handleStudentClick = this.handleStudentClick.bind(this);
    this.handleSeatClick = this.handleSeatClick.bind(this);
    this.state = {
      seats: props.seats,
      students: [],
      selectedStudentId: null,
    };
  }

  componentDidMount() {
    let ids = window.location.pathname.match(/^\d+|\d+\b|\d+(?=\w)/g);
    let sectionId = ids[0];
    console.log(sectionId);
    axios({
      method: 'get',
      url: `/sections/${sectionId}/students`,
      dataType: 'application/json',
    })
      .then(r => {
        console.log(r.data);
        this.setState({ students: r.data });
      })
      .catch(e => console.log(e));
  }

  updateSelectedStudentId() {
    console.log(updateSelectedStudentId);
  }

  handleStudentClick(e) {
    let id = e.target.getAttribute('data-studentid');
    this.setState({
      selectedStudentId: id,
    });
  }

  handleSeatClick(e) {
    console.log('seat click!');
    let coords = e.currentTarget.getAttribute('data-coords');
    this.setState({
      seats: Object.assign(
        this.state.seats,
        {},
        {
          [coords]: this.state.selectedStudentId,
        },
      ),
    });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h3 className="title is-3">Now, seat your students.</h3>
        <form />
        <div className="columns">
          <div className="column is-8">
            <FormifiedSeatingChart
              seats={this.state.seats}
              handleSeatClick={this.handleSeatClick}
            />
          </div>
          <div className="column is-4">
            <StudentList
              students={this.state.students}
              selectedStudentId={this.state.selectedStudentId}
              handleClick={this.handleStudentClick}
            />
          </div>
        </div>
        <button className="button is-warning">Back</button>
      </div>
    );
  }
}

export default Seating;
