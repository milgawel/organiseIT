import React from 'react';
import styled from 'styled-components';
import withContext from 'hoc/withContext';

const CardWrapper = styled.div`
  width: 200px;
  height: 360px;
  border: 2px solid;
`;

const Card = ({ withContext }) => (
  <CardWrapper>
    <h1>Card</h1>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nihil
      saepe illo eaque rem earum. Veniam incidunt quaerat explicabo quidem,
      blanditiis laboriosam amet fugiat et quos quam ipsum obcaecati voluptate?
    </p>
  </CardWrapper>
);

export default withContext(Card);
