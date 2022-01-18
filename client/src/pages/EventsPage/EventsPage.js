import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import EventsList from '../../components/EventsComponents/EventsList';
import Footer from '../../components/Footer/Footer';


function EventsPage() {
  return (
    <div>
      <Header />
      <EventsList />
      <Footer />
    </div>
  );
}

export default connect(null)(
  EventsPage
);
