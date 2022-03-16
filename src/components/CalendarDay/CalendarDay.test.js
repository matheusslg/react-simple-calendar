import React from 'react';
import dayjs from 'dayjs';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/** Helpers */
import { getMonth } from '../../helpers/date';
import render from '../../helpers/renderForTests';

/** Components */
import CalendarDay from './CalendarDay';

describe('CalendarDay Component', () => {
  test('Must be visible', () => {
    render(<CalendarDay day={dayjs(new Date())} data-testid="CalendarDay" />);

    expect(screen.getByTestId('CalendarDay')).toBeVisible();
  });

  test('Must show the date number', () => {
    render(<CalendarDay day={dayjs(new Date(2022, 3, 16))} data-testid="CalendarDay" />);

    expect(screen.getByTestId('CalendarDay')).toBeVisible();
    expect(screen.getByRole('heading', { level: 3 })).toBeVisible();
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('16');
  });

  test('Must create an event on double click', async () => {
    render(<CalendarDay day={dayjs(new Date(2022, 3, 16))} data-testid="CalendarDay" />);

    expect(screen.getByTestId('CalendarDay')).toBeVisible();

    userEvent.dblClick(screen.getByTestId('CalendarDay'));

    expect(screen.getByTestId('CalendarEventForm')).toBeInTheDocument();
  });

  test('Must create an event, fill the fields and save it', async () => {
    render(
      getMonth(2).map((row, index) => (
        <React.Fragment key={index}>
          {row.map(day => (
            <CalendarDay data-testid={`CalendarDay-${dayjs(day).format('MM-DD')}`} day={day} key={dayjs(day).format()} />
          ))}
        </React.Fragment>
      ))
    );

    expect(screen.getByTestId('CalendarDay-03-01')).toBeVisible();

    userEvent.dblClick(screen.getByTestId('CalendarDay-03-01'));

    expect(screen.getByTestId('CalendarEventForm')).toBeInTheDocument();

    const formElements = screen.getByTestId('CalendarEventForm').childNodes[0].childNodes;

    fireEvent.change(formElements[0], { target: { value: 'My new event' } });
    fireEvent.change(formElements[1], { target: { value: '2022-03-01 14:00' } });

    expect(formElements[0]).toHaveValue('My new event');
    expect(formElements[1]).toHaveValue('2022-03-01T14:00');

    const saveButton = formElements[2].childNodes[1];

    fireEvent.click(saveButton);

    expect(screen.getByTestId('CalendarEvent-03-01')).toBeVisible();

    await waitFor(() => {
      expect(screen.getByTestId('CalendarEvent-03-01').childNodes[1]).toHaveTextContent('My new event');
    });
  });

  test('Must delete an event', async () => {
    render(
      getMonth(2).map((row, index) => (
        <React.Fragment key={index}>
          {row.map(day => (
            <CalendarDay data-testid={`CalendarDay-${dayjs(day).format('MM-DD')}`} day={day} key={dayjs(day).format()} />
          ))}
        </React.Fragment>
      ))
    );

    expect(screen.getByTestId('CalendarDay-03-01')).toBeVisible();

    userEvent.dblClick(screen.getByTestId('CalendarDay-03-01'));

    expect(screen.getByTestId('CalendarEventForm')).toBeInTheDocument();

    const deleteButton = screen.getByTestId('CalendarEventForm').childNodes[0].childNodes[2].childNodes[2];

    userEvent.click(deleteButton);
  });
});
