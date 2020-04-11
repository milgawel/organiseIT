import React from 'react';
import TimerCard from 'components/molecules/TimerCard/TimerCard';
import CardsTemplate from 'templates/CardsTemplate';

import { connect } from 'react-redux';

const Timers = ({ timers }) => (
  <CardsTemplate>
    {timers.map((timer) => (
      <TimerCard
        title={timer.title}
        created={timer.created}
        content={timer.content}
        id={timer.id}
      />
    ))}
  </CardsTemplate>
);

const mapStateToProps = ({ timers }) => ({ timers });

export default connect(mapStateToProps)(Timers);
