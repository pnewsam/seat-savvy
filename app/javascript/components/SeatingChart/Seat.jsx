import React from 'react';
import styled from 'styled-components';
import { find } from 'lodash/collection';

const Div = styled.div`
  border: solid 1px hsl(0, 0%, 86%);
  height: ${props => props.seatWidth.toString()}px;
  width: ${props => props.seatWidth.toString()}px;
  position: absolute;
  transform: translateX(${props => (props.x * props.seatWidth).toString()}px)
    translateY(${props => (props.y * props.seatWidth).toString()}px);
  display: table;
  background-color: ${props =>
    props.occupied ? 'hsl(171, 100%, 41%)' : 'none'};
  color: ${props => (props.occupied ? 'white' : 'none')};
`;

const P = styled.p`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
`;

const Seat = props => {
  let name;
  if (props.value) {
    name = find(props.students, function(s) {
      return s.id == props.value;
    }).name;
  }
  return (
    <Div
      x={props.coords[0]}
      y={props.coords[1]}
      seatWidth={props.seatWidth}
      onClick={props.handleClick}
      data-coords={props.coords}
      occupied={props.value != undefined}
    >
      <input type="hidden" value={props.value || ''} />
      <P>{name || 'Empty'}</P>
    </Div>
  );
};

export default Seat;
