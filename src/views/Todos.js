import React from 'react';

import { connect } from 'react-redux';
import Card from 'components/molecules/Card/Card';
import CardsTemplate from 'templates/CardsTemplate';

const Todos = ({ todos }) => (
  <CardsTemplate>
    {todos.map((todo) => (
      <Card
        title={todo.title}
        id={todo.id}
        created={todo.created}
        deadline={todo.deadline}
        content={todo.content}
      />
    ))}
  </CardsTemplate>
);

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(mapStateToProps)(Todos);
