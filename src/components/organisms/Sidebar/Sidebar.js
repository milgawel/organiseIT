import React from 'react';
import styled from 'styled-components';
import NavButton from 'components/atoms/NavButton/NavButton';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : theme.notes};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledLogo = styled.a`
  width: 100px;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const Sidebar = ({ activeColor }) => (
  <Wrapper>
    <StyledLogo>organiseIT</StyledLogo>
  </Wrapper>
);

export default Sidebar;
