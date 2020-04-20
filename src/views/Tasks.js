import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import CardsTemplate from 'templates/CardsTemplate';

class Tasks extends React.Component {
  state = {
    filterName: '',
  };

  handleInputFilter = (data) => {
    this.setState({
      filterName: data,
    });
  };

  render() {
    const { tasks } = this.props;
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(this.state.filterName),
    );

    return (
      <CardsTemplate inputHandler={this.handleInputFilter}>
        {filteredTasks.map((todo) => (
          <Card
            title={todo.title}
            id={todo.id}
            created={todo.created}
            deadline={todo.deadline}
            content={todo.content}
            key={todo.id}
          />
        ))}
      </CardsTemplate>
    );
  }
}

const mapStateToProps = ({ tasks }) => ({ tasks });

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      deadline: PropTypes.string.isRequired,
    }),
  ),
};

Tasks.defaultProps = {
  tasks: [],
};

export default connect(mapStateToProps)(Tasks);
