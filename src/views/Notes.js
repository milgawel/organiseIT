import React from 'react';
import styled from 'styled-components';
import Card from 'components/molecules/Card/Card';
import CardsTemplate from 'templates/CardsTemplate';
import { connect } from 'react-redux';

const Notes = ({ notes }) => (
  <CardsTemplate>
    {notes.map((note) => (
      <Card
        title={note.title}
        created={note.created}
        content={note.content}
        id={note.id}
      />
    ))}
  </CardsTemplate>
);

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);
