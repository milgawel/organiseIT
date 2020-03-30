import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import NavButton from 'components/atoms/NavButton/NavButton';
import bookmark from 'assets/bookmarkw.png';
import edit from 'assets/editw.png';
import list from 'assets/listw.png';
import timer from 'assets/timerw.png';
import withContext from 'hoc/withContext';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 230px;
  height: 100vh;
  background: linear-gradient(to right, #3455eb, blue);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border-image: linear-gradient(
    to right,
    #3455eb,
    ${({ pageColor, theme }) => theme[pageColor]}
  ); */
  /* box-shadow: inset 10px 0 10px -5px ${({ pageColor, theme }) =>
    theme[pageColor]}; */
  box-shadow: inset 10px 0 10px -5px red;
  transition: all ease-in 0.9s;
`;

const StyledLogoButton = styled.a`
  color: white;
  display: block;
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  margin: 50px auto 0;
  font-weight: ${({ theme }) => theme.bold};
  text-decoration: none;
`;

const StyledNavList = styled.ul`
  list-style: none;
`;

const StyledLogoutButton = styled.a`
  display: block;
  text-decoration: none;
  margin: 15px auto;
  color: white;
`;

const Sidebar = ({ pageContext }) => (
  <Wrapper pageColor={pageContext}>
    <StyledLogoButton as={NavLink} to="/">
      organise
      <br />
      IT
    </StyledLogoButton>
    <StyledNavList>
      <li>
        <NavButton
          as={NavLink}
          to="/notes"
          name="notes"
          icon={edit}
          activeColor="notes"
        >
          notes
        </NavButton>
      </li>
      <li>
        <NavButton
          as={NavLink}
          to="/bookmarks"
          name="bookmarks"
          icon={bookmark}
          activeColor="bookmarks"
        >
          bookmarks
        </NavButton>
      </li>

      <li>
        <NavButton
          as={NavLink}
          to="/todos"
          name="todos"
          icon={list}
          activeColor="todos"
        >
          todos
        </NavButton>
      </li>

      <li>
        <NavButton
          as={NavLink}
          to="/timer"
          name="timer"
          icon={timer}
          activeColor="timer"
        >
          timer
        </NavButton>
      </li>
    </StyledNavList>
    <StyledLogoutButton>Log Out</StyledLogoutButton>
  </Wrapper>
);

export default withContext(Sidebar);
