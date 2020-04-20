import React from 'react';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card/Card';
import PropTypes from 'prop-types';
import CardsTemplate from 'templates/CardsTemplate';

class Bookmarks extends React.Component {
  state = {
    filterName: '',
  };

  handleInputFilter = (data) => {
    this.setState({
      filterName: data,
    });
  };

  render() {
    const { bookmarks } = this.props;
    const filteredBookmarks = bookmarks.filter((bookmark) =>
      bookmark.title.toLowerCase().includes(this.state.filterName),
    );

    return (
      <CardsTemplate inputHandler={this.handleInputFilter}>
        {filteredBookmarks.map((bookmark) => (
          <Card
            title={bookmark.title}
            id={bookmark.id}
            created={bookmark.created}
            content={bookmark.content}
            key={bookmark.id}
          />
        ))}
      </CardsTemplate>
    );
  }
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Bookmarks.defaultProps = {
  bookmarks: [],
};

const mapStateToProps = ({ bookmarks }) => ({ bookmarks });

export default connect(mapStateToProps)(Bookmarks);
