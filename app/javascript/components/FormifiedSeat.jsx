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

const FormifiedSeat = props => {
  console.log(props.coords);
  return (
    <Div
      x={props.coords[0]}
      y={props.coords[1]}
      seatWidth={props.seatWidth}
      onClick={props.handleClick}
      data-coords={props.coords}
    >
      <input type="hidden" value={props.value} />
      <P>{props.value}</P>
    </Div>
  );
};

export default FormifiedSeat;
