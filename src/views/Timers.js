import React from 'react';
import TimerCard from 'components/molecules/TimerCard/TimerCard';
import CardsTemplate from 'templates/CardsTemplate';

import { connect } from 'react-redux';

class Timers extends React.Component {
  state = {
    filterName: '',
  };

  handleInputFilter = (data) => {
    this.setState({
      filterName: data,
    });
  };

  render() {
    const { timers } = this.props;
    const filteredTimers = timers.filter((timer) =>
      timer.title.toLowerCase().includes(this.state.filterName),
    );

    return (
      <CardsTemplate inputHandler={this.handleInputFilter}>
        {filteredTimers.map((timer) => (
          <TimerCard
            title={timer.title}
            created={timer.created}
            time={timer.time}
            id={timer.id}
            key={timer.id}
          />
        ))}
      </CardsTemplate>
    );
  }
}

const mapStateToProps = ({ timers }) => ({ timers });

export default connect(mapStateToProps)(Timers);
