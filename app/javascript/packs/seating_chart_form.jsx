import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import SeatingChartForm from '../components/SeatingChartForm.jsx';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <SeatingChartForm />,
    document
      .getElementById('seating-chart-form')
      .appendChild(document.createElement('div')),
  );
});
