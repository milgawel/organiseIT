import React from 'react';
import PropTypes from 'prop-types';
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

Timers.propTypes = {
  timers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Timers.defaultProps = {
  timers: [],
};

export default connect(mapStateToProps)(Timers);
