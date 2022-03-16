import React from 'react';
import { nanoid } from '@reduxjs/toolkit';

/** Components */
import CalendarDay from '../CalendarDay';

/** Styles */
import { StyledMonthWrapper, StyledMonthHeader, StyledMonth, StyledDayName } from './CalendarMonth.styles';

const CalendarMonth = ({ month }) => {
  return (
    <StyledMonthWrapper>
      <StyledMonthHeader>
        {month.map(
          (row, rowIndex) =>
            rowIndex === 0 && (
              <React.Fragment key={nanoid()}>
                {row.map(
                  (day, dayIndex) => dayIndex < 7 && <StyledDayName key={nanoid()}>{`${day.format('ddd').toLowerCase()}.`}</StyledDayName>
                )}
              </React.Fragment>
            )
        )}
      </StyledMonthHeader>
      <StyledMonth>
        {month.map(row => (
          <React.Fragment key={nanoid()}>
            {row.map(day => (
              <CalendarDay day={day} key={nanoid()} />
            ))}
          </React.Fragment>
        ))}
      </StyledMonth>
    </StyledMonthWrapper>
  );
};

export default CalendarMonth;
