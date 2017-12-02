import React from 'react';
import styled from 'styled-components';
import { isEmpty } from 'lodash/lang';
import Seat from './Seat';

const Chart = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const FormifiedSeatingChart = props => {
  if (isEmpty(props.seats)) {
    return <div />;
  } else {
    const seatWidth = 100;
    let coords = Object.keys(props.seats).sort();
    let last = coords[coords.length - 1];
    let chartWidth = seatWidth * (Number(last[0]) + 1);
    let chartHeight = seatWidth * (Number(last[1]) + 1);
    return (
      <form action="" onSubmit={props.handleSubmit}>
        <Chart width={chartWidth} height={chartHeight}>
          {Object.entries(props.seats).map(s => (
            <Seat
              key={s[0]}
              coords={s[0]}
              seatWidth={seatWidth}
              value={s[1]}
              handleClick={props.handleSeatClick}
              students={props.students}
            >
              {s[0]}
            </Seat>
          ))}
        </Chart>
        <button type="submit" className="button is-primary">
          Submit
        </button>
      </form>
    );
  }
};

export default FormifiedSeatingChart;
