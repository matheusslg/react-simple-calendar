import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Popover } from '@mui/material';
import dayjs from 'dayjs';

/** Components */
import CalendarEventForm from '../CalendarEventForm';

/** Hooks */
import useResponsive from '../../hooks/useResponsive';

/** Styles */
import { StyledDay, StyledDayNumber, StyledEventsWrapper, StyledEvent } from './CalendarDay.styles';

/** Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

/** Reducers */
import { addNewEvent, resetSelectedEvent, setSelectedEvent } from '../../redux/reducers/calendar';

const CalendarDay = ({ day, ...props }) => {
  const dispatch = useDispatch();
  const { events, selectedEvent, monthIndex } = useSelector(state => state.calendar);
  const { darkMode } = useSelector(state => state.theme);
  const [anchorEl, setAnchorEl] = useState(null);
  const { isMobile } = useResponsive();
  let eventsRefs = [];

  /**
   * Check every time that selectedEvent change to handle popover visibility for event
   */
  useEffect(() => {
    if (Object.keys(selectedEvent).length) setAnchorEl(eventsRefs[selectedEvent.id]);
  }, [selectedEvent, events]);

  /**
   * Creates a new event when user use double click (desktop) inside a day / mobile is one touch
   */
  const handleNewEvent = e => {
    if (e.detail === 2 || (isMobile && e.target.id === 'dayWrapper')) {
      dispatch(
        addNewEvent({
          dateTime: dayjs(day).hour(dayjs().format('HH')).add(1, 'hour').format(),
        })
      );
    }
  };

  const handleSelectEvent = event => {
    dispatch(setSelectedEvent(event.id));
  };

  const handleClose = () => {
    setAnchorEl(null);
    dispatch(resetSelectedEvent());
  };

  const isCurrentDay = () => {
    return day.format('MM-DD-YY') === dayjs().format('MM-DD-YY');
  };

  const isFromAnotherMonth = () => {
    return dayjs(day).format('MM') !== dayjs().month(monthIndex).format('MM');
  };

  return (
    <>
      <StyledDay id="dayWrapper" onClick={handleNewEvent} isFromAnotherMonth={isFromAnotherMonth()} darkMode={darkMode} {...props}>
        <StyledDayNumber isCurrentDay={isCurrentDay()} isMobile={isMobile} darkMode={darkMode}>
          {`${day.format('DD')} ${isMobile ? day.format('ddd').toLowerCase() : ''}`}
        </StyledDayNumber>
        <StyledEventsWrapper>
          {events.map(
            event =>
              dayjs(event.dateTime).format('MM-DD-YY') === day.format('MM-DD-YY') && (
                <StyledEvent
                  data-testid={`CalendarEvent-${dayjs(event.dateTime).format('MM-DD')}`}
                  key={event.id}
                  ref={ref => (eventsRefs[event.id] = ref)}
                  labelColor={event.labelColor}
                  selected={selectedEvent.id === event.id}
                  onClick={() => handleSelectEvent(event)}
                  darkMode={darkMode}
                >
                  <FontAwesomeIcon icon={faCircle} />
                  <span>{event.name || 'New Event'}</span>
                  <span>{dayjs(event.dateTime).format('HH:mm')}</span>
                </StyledEvent>
              )
          )}
        </StyledEventsWrapper>
      </StyledDay>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
      >
        <CalendarEventForm event={selectedEvent} onClose={() => setAnchorEl(null)} />
      </Popover>
    </>
  );
};

export default CalendarDay;
