import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
  background-color: ${props => (props.selected ? 'seagreen' : 'none')};
  color: ${props => (props.selected ? '#fff' : 'black')};
`;

const Student = props => {
  return (
    <Li
      data-studentid={props.dataStudentid}
      onClick={props.handleClick}
      selected={props.selected}
    >
      {props.name}
    </Li>
  );
};

export default Student;
