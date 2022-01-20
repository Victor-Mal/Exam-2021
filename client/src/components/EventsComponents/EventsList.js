import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import moment from 'moment';
import CONSTANTS from '../../constants';
import DateCountdownTimer from '../../components/EventsComponents/DateCountdownTimer';
import styles from './Events.module.sass';
const classNames = require('classnames');

const {
  localStorageHandler,
  newEventId,
} = require('./LocalStorageEventHandlers');

function EventsList() {
  const dateNow = moment().format('YYYY-MM-DD');
  const timeNow = moment().format('HH:mm');

  const [eventDescription, setEventDescription] = useState('');
  const [date, setDate] = useState(dateNow);
  const [time, setTime] = useState(timeNow);

  const eventTime = moment(`${date} ${time}`).valueOf();
  const { eventСontent, keyList } = localStorageHandler();
  
  const activeEvent = classNames({
    [styles.hide]: eventСontent.length === 0,
    [styles.show]: !(eventСontent.length === 0),
  });

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

  const eventsRender = () => (
    <ul>
      {eventСontent.sort().map((value, index) => (
        <li key={index}>
          <div className={styles.eventInfo}>
            {value.split(',')[1]}
            <DateCountdownTimer eventTime={value.split(',')[0]} />
          </div>
          <button
            className={styles.delete}
            onClick={() => handleRemoveEvent(keyList.sort()[index])}
          >
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}/svg/delete.svg`}
              alt="delete"
            />
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <div className={styles.events}>
        <div className={styles.createEvent}>
          <form>
            <label className={styles.description}>
              <span>Description: </span>
              <input
                className={styles.descriptionInp}
                name="eventDescription"
                type="text"
                value={eventDescription}
                onChange={handleChangeDescription}
              />
            </label>
            <div className={styles.dateTime}>
              <label>
                <span>Date: </span>
                <input
                  className={styles.dateInp}
                  type="date"
                  name="date"
                  min={dateNow}
                  value={date}
                  onChange={handChangeDate}
                />
              </label>
              <label>
                <span>Time: </span>
                <input
                  className={styles.timeInp}
                  type="time"
                  name="time"
                  value={time}
                  onChange={handChangeTime}
                />
              </label>
            </div>
          </form>
          <button className={styles.btn} onClick={handleFormSubmit}>
            Add Event
          </button>
        </div>
        <div className={styles.eventList}>
          <h2 className={activeEvent}>Active events</h2>
          {eventsRender()}
        </div>
      </div>
    </div>
  );
}

export default EventsList;
