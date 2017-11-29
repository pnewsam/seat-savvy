import React from 'react';
import Student from './Student';
import styled from 'styled-components';

const Ul = styled.ul``;

const StudentList = props => {
  return (
    <Ul>
      {props.students.map(s => (
        <Student
          key={s.id}
          dataStudentid={s.id}
          handleClick={props.handleClick}
          name={s.name}
          selected={props.selectedStudentId == s.id}
        />
      ))}
    </Ul>
  );
};

export default StudentList;
