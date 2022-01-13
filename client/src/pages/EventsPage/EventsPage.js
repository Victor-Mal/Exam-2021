import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

function EventsPage() {
  const [eventDescription, setEventDescription] = useState('');

  let eventId = 0;
  let eventСontent = [];
  let keyList = [];

  const setPropAndIdArrays = () => {
    eventСontent.length = 0;
    keyList.length = 0;
    let obj = localStorage;
    let re = /eventId\s\d+/;
    for (let prop in obj) {
      if (re.test(prop)) {
        let idKey = parseInt(prop.match(/\d+/));
        eventСontent.push(obj[prop]);
        keyList.push(idKey);
      }
    }
  };

  const newEventId = () => {
    setPropAndIdArrays();
    eventId = Math.max.apply(null, keyList) + 1;
    if (eventId < 0) {
      eventId = 1;
    }
    return eventId;
  };

  const handleChange = (event) => {
    setEventDescription(event.target.value);
  };

  const handleFormSubmit = () => {
    newEventId();
    localStorage.setItem(`eventId ${eventId}`, eventDescription);
    setEventDescription('');
    eventsRender();
    console.log('list');
  };

  const eventsRender = () => (
    setPropAndIdArrays(),
    (
      <ul>
        {eventСontent.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    )
  );

  return (
    <div>
      <Header />
      <div>
        <form>
          <label>
            <input
              name="eventDescription"
              type="text"
              value={eventDescription}
              onChange={handleChange}
            />
          </label>
        </form>
        <button onClick={handleFormSubmit}>Sign In</button>
        <div id="list">{eventsRender()}</div>
      </div>
      <Footer />
    </div>
  );
}
export default connect(null)(EventsPage);
