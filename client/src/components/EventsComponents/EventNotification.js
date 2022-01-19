import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import styles from './Events.module.sass';

const classNames = require('classnames');
const { localStorageHandler } = require('./LocalStorageEventHandlers');

const EventNotification = () => {
  const [stoppedTimers, setStoppedTimers] = useState(0);
  const { eventСontent } = localStorageHandler();

  const flagStyle = classNames(styles.eventNotification, {
    [styles.hide]: stoppedTimers === 0,
    [styles.show]: !(stoppedTimers === 0),
  });

  useEffect(() => {
    const ass = [];
    
    const eventNum = setInterval(() => {
      ass.length = 0;

      const dateTimeNow = moment().format('YYYY-MM-DD HH:mm:ss');
      const currentTime = moment(dateTimeNow).valueOf();

      eventСontent.forEach((value) => {
        let eventTime = value.split(',')[0];

        if (eventTime === currentTime || eventTime < currentTime) {
          ass.push(eventTime);
        }
      });

      setStoppedTimers(ass.length);
    }, 1000);
    return () => {
      clearInterval(eventNum);
    };
  });

  return (
      <Link to="/eventsPage" className={flagStyle}>
        <span>Check your events: {stoppedTimers}</span>
      </Link>
  );
};

export default EventNotification;
