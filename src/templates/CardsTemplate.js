import React from 'react';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';

const StyledGridTemplate = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const CardsTemplate = ({ children }) => (
  <UserPageTemplate>
    <StyledGridTemplate>{children}</StyledGridTemplate>
  </UserPageTemplate>
);

export default CardsTemplate;
