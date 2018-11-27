import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

  const person = props.person;
  const status = props.status;
  const timeStamp = props.timeStamp;

  return (
    <section className="timeline-event">
      <div className="event-person"> {person} </div>
      <div className="event-status"> {status} </div>
      <div className="event-time"> <Timestamp time={timeStamp}/> </div>
    </section>
  );
};


export default TimelineEvent;
