import React, { Component } from 'react';
import SeatingChart from '../SeatingChart/SeatingChart';
import StudentList from './StudentList';
import axios from 'axios';

class Seating extends Component {
  constructor(props) {
    super(props);
    this.handleStudentClick = this.handleStudentClick.bind(this);
    this.handleSeatClick = this.handleSeatClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.progressPhase = props.progressPhase;
    this.state = {
      seats: props.seats,
      students: [],
      selectedStudentId: null,
      token: document
        .querySelector('meta[name=csrf-token]')
        .getAttribute('content'),
    };
  }

  componentDidMount() {
    let ids = window.location.pathname.match(/^\d+|\d+\b|\d+(?=\w)/g);
    let sectionId = ids[0];
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

  handleSubmit(e) {
    e.preventDefault();
    let ids = window.location.pathname.match(/^\d+|\d+\b|\d+(?=\w)/g);
    let sectionId = ids[0];
    axios({
      method: 'post',
      url: `/sections/${sectionId}/seating_chart`,
      headers: {
        'X-CSRF-Token': this.state.token,
      },
      data: {
        section: {
          seating_chart: this.state.seats,
        },
      },
      contentType: 'application/json',
    })
      .then(r => {
        console.log(r);
        this.progressPhase();
      })
      .catch(e => {
        console.log(e);
      });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h3 className="title is-3">Now, seat your students.</h3>
        <div className="columns">
          <div className="column is-8">
            <SeatingChart
              seats={this.state.seats}
              handleSeatClick={this.handleSeatClick}
              students={this.state.students}
              handleSubmit={this.handleSubmit}
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
