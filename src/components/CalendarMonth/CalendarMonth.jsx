import React from 'react';
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
            rowIndex === 0 &&
            row.map(
              (day, dayIndex) =>
                dayIndex < 7 && <StyledDayName key={day.format('ddd')}>{`${day.format('ddd').toLowerCase()}.`}</StyledDayName>
            )
        )}
      </StyledMonthHeader>
      <StyledMonth isMobile={isMobile} darkMode={darkMode}>
        {month.map((row, index) => row.map(day => <CalendarDay day={day} key={dayjs(day).format()} />))}
      </StyledMonth>
    </StyledMonthWrapper>
  );
};

export default CalendarMonth;
