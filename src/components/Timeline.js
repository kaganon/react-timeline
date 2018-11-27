import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import Timestamp from './Timestamp';


const Timeline = (props) => {

  const data = props.events;

  const timelineData = data.map((event, i) => {
    return <ul className="App-each-data"><TimelineEvent key={i} person={event.person} status={event.status} timeStamp={event.timeStamp} /></ul>;
  });

  return (
    <section className="timeline">
      {timelineData}
    </section>

  );
};


export default Timeline;
