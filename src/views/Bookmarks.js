import React from 'react';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card/Card';
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

const mapStateToProps = ({ bookmarks }) => ({ bookmarks });

export default connect(mapStateToProps)(Bookmarks);
