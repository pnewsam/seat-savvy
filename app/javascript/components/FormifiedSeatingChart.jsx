import React from 'react';
import styled from 'styled-components';
import { isEmpty } from 'lodash/lang';
import FormifiedSeat from './FormifiedSeat';

const Chart = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const FormifiedSeatingChart = props => {
  console.log(props.handleSeatClick);
  if (isEmpty(props.seats)) {
    return <div />;
  } else {
    const seatWidth = 100;
    let coords = Object.keys(props.seats).sort();
    let last = coords[coords.length - 1];
    let chartWidth = seatWidth * (Number(last[0]) + 1);
    let chartHeight = seatWidth * (Number(last[1]) + 1);
    return (
      <Chart width={chartWidth} height={chartHeight}>
        {Object.entries(props.seats).map(s => (
          <FormifiedSeat
            key={s[0]}
            coords={s[0]}
            seatWidth={seatWidth}
            value={s[1]}
            handleClick={props.handleSeatClick}
          >
            {s[0]}
          </FormifiedSeat>
        ))}
      </Chart>
    );
  }
};

export default FormifiedSeatingChart;