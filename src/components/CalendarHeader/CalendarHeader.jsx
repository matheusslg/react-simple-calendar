import React from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';

/** Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

/** Hooks */
import useResponsive from '../../hooks/useResponsive';

/** Reducers */
import { setMonthIndex } from '../../redux/reducers/calendar';
import { toggleDarkMode } from '../../redux/reducers/theme';

/** Styles */
import { StyledHeader, StyledMonthTitle, StyledControls } from './CalendarHeader.styles';

const CalendarHeader = () => {
  const { monthIndex } = useSelector(state => state.calendar);
  const { darkMode } = useSelector(state => state.theme);
  const { isMobile } = useResponsive();
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

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <StyledHeader isMobile={isMobile}>
      <StyledMonthTitle darkMode={darkMode}>
        {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY').toLocaleLowerCase()}
      </StyledMonthTitle>
      <StyledControls>
        <button type="button" onClick={handleDarkModeToggle}>
          {!darkMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
        </button>
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
