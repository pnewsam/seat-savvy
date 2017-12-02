import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import GradesForm from '../components/GradesForm/GradesForm';

document.addEventListener('turbolinks:load', () => {
  ReactDOM.render(
    <GradesForm />,
    document
      .getElementById('grades-form')
      .appendChild(document.createElement('div')),
  );
});
