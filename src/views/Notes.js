import React from 'react';
import Card from 'components/molecules/Card/Card';
import PropTypes from 'prop-types';
import CardsTemplate from 'templates/CardsTemplate';
import { connect } from 'react-redux';

class Notes extends React.Component {
  state = {
    filterName: '',
  };

  handleInputFilter = (data) => {
    this.setState({
      filterName: data,
    });
  };

  render() {
    const { notes } = this.props;
    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.filterName),
    );

    return (
      <CardsTemplate inputHandler={this.handleInputFilter}>
        {filteredNotes.map((note) => (
          <Card
            title={note.title}
            created={note.created}
            content={note.content}
            id={note.id}
          />
        ))}
      </CardsTemplate>
    );
  }
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);
