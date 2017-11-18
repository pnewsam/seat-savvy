import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: solid 1px grey;
  height: ${props => props.seatWidth.toString()}px;
  width: ${props => props.seatWidth.toString()}px;
  position: absolute;
  transform: translateX(${props => (props.x * props.seatWidth).toString()}px)
    translateY(${props => (props.y * props.seatWidth).toString()}px);
`;

const Seat = props => {
  console.log(typeof props.coords[0]);
  return (
    <Div x={props.coords[0]} y={props.coords[1]} seatWidth={props.seatWidth}>
      <p>Name</p>
    </Div>
  );
};

export default Seat;
