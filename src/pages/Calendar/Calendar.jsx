import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

/** Components */
import CalendarMonth from '../../components/CalendarMonth';
import CalendarHeader from '../../components/CalendarHeader/CalendarHeader';

/** Helpers */
import { getMonth } from '../../helpers/date';

/** Styles */
import { StyledCalendar } from './Calendar.styles';

const Home = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useSelector(state => state.calendar);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <StyledCalendar>
      <CalendarHeader />
      <CalendarMonth month={currentMonth} />
    </StyledCalendar>
  );
};

export default Home;
