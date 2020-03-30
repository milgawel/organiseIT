import React from 'react';
import styled from 'styled-components';
import Card from 'components/molecules/Card/Card';
import CardsTemplate from 'templates/CardsTemplate';

const Todos = () => (
  <CardsTemplate>
    <h1>Todos View</h1>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </CardsTemplate>
);

export default Todos;
