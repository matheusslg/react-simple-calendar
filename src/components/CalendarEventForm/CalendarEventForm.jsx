import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from '@emotion/react';
import dayjs from 'dayjs';

/** Styles */
import { StyledEvent, StyledLabels, StyledLabelColor, StyledFooter } from './CalendarEventForm.styles';
import { deleteEvent, resetSelectedEvent, updateEvent } from '../../redux/reducers/calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

const CalendarEventForm = ({ event, onClose }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [eventData, setEventData] = useState({});

  useEffect(() => {
    if (Object.keys(event).length) setEventData(event);
  }, [event]);

  const handleChange = (name, value) => {
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateEvent(eventData));
    dispatch(resetSelectedEvent());
    onClose();
  };

  const handleDelete = event => {
    dispatch(deleteEvent(event.id));
    dispatch(resetSelectedEvent());
    onClose();
  };

  return (
    <StyledEvent data-testid="CalendarEventForm">
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          value={eventData.name || ''}
          maxLength={30}
          placeholder="New Event"
          autoFocus
          onChange={e => handleChange('name', e.target.value)}
        />
        <input
          required
          type="datetime-local"
          value={dayjs(eventData.dateTime).format('YYYY-MM-DDTHH:mm') || dayjs().format('YYYY-MM-DDTHH:mm')}
          onChange={e => handleChange('dateTime', e.target.value)}
        />
        <StyledFooter>
          <StyledLabels>
            {Object.keys(theme.labels).map(color => (
              <StyledLabelColor
                key={color}
                color={color}
                selected={color === eventData.labelColor}
                onClick={() => handleChange('labelColor', color)}
              />
            ))}
          </StyledLabels>
          <button type="submit">
            <FontAwesomeIcon icon={faSave} size="lg" />
          </button>
          <button type="button" onClick={() => handleDelete(event)}>
            <FontAwesomeIcon icon={faTrashAlt} size="lg" />
          </button>
        </StyledFooter>
      </form>
    </StyledEvent>
  );
};

export default CalendarEventForm;
