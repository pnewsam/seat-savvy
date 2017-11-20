import React, { Component } from 'react';
import SeatingChart from './SeatingChart';
import axios from 'axios';

class Seating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seats: props.seats,
      students: [],
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

  render() {
    return (
      <div>
        <h3 className="title is-3">Now, seat your students.</h3>
        <form />
        <SeatingChart seats={this.state.seats} />
        <ul>{this.state.students.map(s => <li key={s.id}>{s.name}</li>)}</ul>
        <button className="button is-warning">Back</button>
      </div>
    );
  }
}

export default Seating;
