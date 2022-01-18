import React, { useState, useEffect } from 'react';
import moment from 'moment';


const DateCountdownTimer = (props) => {
  const dateTimeNow = moment().format('YYYY-MM-DD HH:mm:ss');
  
  const currentTime = moment(dateTimeNow).valueOf();;
  const eventTime = props.eventTime;

  const diffTime = eventTime - currentTime;
  const startTimeDuration = moment.duration(diffTime, 'millisecond');

  const [countdown, setCountdown] = useState('');
  const [timeDuration, setTimeDuration] = useState(startTimeDuration);

  const decimal = (num) => {
    return num < 10 ? `0${num}` : num;
  };
  
  useEffect(() => {

    if (timeDuration < 0) {
      
      return false;
    }
    const timerId = setInterval(() => {
      let decreasingTime = startTimeDuration;
      
      setTimeDuration(moment.duration(decreasingTime, 'millisecond'));

      let text = `${decimal(Math.floor(timeDuration.asDays()))}d : ${decimal(timeDuration.hours())}h : ${decimal(
        timeDuration.minutes()
      )}m : ${decimal(timeDuration.seconds())}s`;
      
      setCountdown(text);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  });

  return <div>{countdown}</div>;
};

export default DateCountdownTimer;
