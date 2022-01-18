import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import moment from 'moment';
import CONSTANTS from '../../constants';
import DateCountdownTimer from '../../components/EventsComponents/DateCountdownTimer';
import styles from './Events.module.sass';
const {localStorageHandler, newEventId} = require('./LocalStorageEventHandlers');


function EventsList() {
  const dateNow = moment().format('YYYY-MM-DD');
  const timeNow = moment().format('HH:mm');

  const [eventDescription, setEventDescription] = useState('');
  const [date, setDate] = useState(dateNow);
  const [time, setTime] = useState(timeNow);


  const eventTime = moment(`${date} ${time}`).valueOf();

  const handleChangeDescription = (event) => {
    setEventDescription(event.target.value);
  };

  const handChangeDate = (event) => {
    setDate(event.target.value);
  };

  const handChangeTime = (event) => {
    setTime(event.target.value);
  };

  const handleFormSubmit = () => {
    const eventId = newEventId();
    localStorage.setItem(`eventId ${eventId}`, [eventTime, eventDescription]);
    setEventDescription('');
  };

  const handleRemoveEvent = (removeKey) => {
    localStorage.removeItem(removeKey);
    document.location.reload();
  };

  const {eventСontent, keyList} = localStorageHandler();

  const eventsRender = () => (
    (
      <ul>
        {eventСontent.sort().map((value, index) => (
          <li key={index}>
            <div>
              {value.split(',')[1]}
              <DateCountdownTimer eventTime={value.split(',')[0]} />
            </div>
            <button onClick={() => handleRemoveEvent(keyList.sort()[index])}>
              <img src = {`${CONSTANTS.STATIC_IMAGES_PATH}/svg/delete.svg`} alt='delete'/>
            </button>
          </li>
        ))}
      </ul>
    )
  );

  return (
    <div>
      <div className={styles.events}>
        <form>
          <label>
            <input
              name="eventDescription"
              type="text"
              value={eventDescription}
              onChange={handleChangeDescription}
            />

            <input
              type="date"
              name="date"
              min={dateNow}
              value={date}
              onChange={handChangeDate}
            />

            <input
              type="time"
              name="time"
              value={time}
              onChange={handChangeTime}
            />
          </label>
        </form>
        <button onClick={handleFormSubmit}>Add Event</button>
        <div>{eventsRender()}</div>
      </div>
    </div>
  );
}

export default EventsList;
