import React from 'react';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card/Card';
import CardsTemplate from 'templates/CardsTemplate';

const Bookmarks = ({ bookmarks }) => (
  <CardsTemplate>
    {bookmarks.map((bookmark) => (
      <Card
        title={bookmark.title}
        id={bookmark.id}
        created={bookmark.created}
        content={bookmark.content}
      />
    ))}
  </CardsTemplate>
);

const mapStateToProps = ({ bookmarks }) => ({ bookmarks });

export default connect(mapStateToProps)(Bookmarks);
