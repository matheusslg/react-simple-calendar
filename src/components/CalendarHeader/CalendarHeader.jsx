import React from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';

/** Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

/** Reducers */
import { setMonthIndex } from '../../redux/reducers/calendar';

/** Styles */
import { StyledHeader, StyledMonthTitle, StyledControls } from './CalendarHeader.styles';

const CalendarHeader = () => {
  const { monthIndex } = useSelector(state => state.calendar);
  const dispatch = useDispatch();

  const handlePreviousMonth = () => {
    dispatch(setMonthIndex(monthIndex - 1));
  };

  const handleNextMonth = () => {
    dispatch(setMonthIndex(monthIndex + 1));
  };

  const handleToday = () => {
    dispatch(setMonthIndex(dayjs().month()));
  };

  return (
    <StyledHeader>
      <StyledMonthTitle>{dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY').toLocaleLowerCase()}</StyledMonthTitle>
      <StyledControls>
        <button type="button" onClick={handlePreviousMonth}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button type="button" onClick={handleToday}>
          today
        </button>
        <button type="button" onClick={handleNextMonth}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </StyledControls>
    </StyledHeader>
  );
};

export default CalendarHeader;
