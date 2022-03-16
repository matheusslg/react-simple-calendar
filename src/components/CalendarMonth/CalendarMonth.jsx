import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

/** Components */
import CalendarDay from '../CalendarDay';

/** Hooks */
import useResponsive from '../../hooks/useResponsive';

/** Styles */
import { StyledMonthWrapper, StyledMonthHeader, StyledMonth, StyledDayName } from './CalendarMonth.styles';

const CalendarMonth = ({ month }) => {
  const { darkMode } = useSelector(state => state.theme);
  const { isMobile } = useResponsive();

  return (
    <StyledMonthWrapper>
      <StyledMonthHeader isMobile={isMobile}>
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
      <StyledMonth isMobile={isMobile} darkMode={darkMode}>
        {month.map((row, index) => (
          <React.Fragment key={index}>
            {row.map(day => (
              <CalendarDay day={day} key={dayjs(day).format()} />
            ))}
          </React.Fragment>
        ))}
      </StyledMonth>
    </StyledMonthWrapper>
  );
};

export default CalendarMonth;
