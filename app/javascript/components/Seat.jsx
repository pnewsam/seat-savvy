import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: solid 1px grey;
  height: ${props => props.seatWidth.toString()}px;
  width: ${props => props.seatWidth.toString()}px;
  position: absolute;
  transform: translateX(${props => (props.x * props.seatWidth).toString()}px)
    translateY(${props => (props.y * props.seatWidth).toString()}px);
  display: table;
`;

const P = styled.p`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
`;

const Seat = props => {
  console.log(typeof props.coords[0]);
  return (
    <Div x={props.coords[0]} y={props.coords[1]} seatWidth={props.seatWidth}>
      <P>Name</P>
    </Div>
  );
};

export default Seat;
