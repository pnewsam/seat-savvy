import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
  background-color: ${props =>
    props.selected ? 'hsl(171, 100%, 41%)' : 'none'};
  color: ${props => (props.selected ? '#fff' : 'hsl(0, 0%, 29%)')};
  &:hover {
    background-color: ${props =>
      props.selected ? 'hsl(171, 100%, 41%)' : 'whitesmoke'};
  }
  padding: 0.5rem;
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
