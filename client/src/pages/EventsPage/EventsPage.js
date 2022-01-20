import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import EventsList from '../../components/EventsComponents/EventsList';
import Footer from '../../components/Footer/Footer';
import styles from './EventsPage.module.sass';

function EventsPage() {
  return (
    <div>
      <Header />
      <div className={styles.header}>
        <h1 className={styles.h1}>Welcome to your personal events page</h1>
        <h2 className={styles.h2}>
          Create a timer and get a message when it ends
        </h2>
      </div>
      <EventsList />
      <Footer />
    </div>
  );
}

export default connect(null)(EventsPage);
