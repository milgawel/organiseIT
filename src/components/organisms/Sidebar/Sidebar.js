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
  box-shadow: 5px 0 10px 1px ${({ theme, pageColor }) => theme[pageColor]};
  transition: all ease-in 0.5s;
`;

const StyledLogoButton = styled.a`
  color: white;
  display: block;
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  margin: 50px auto 0;
  font-weight: ${({ theme }) => theme.bold};
  text-decoration: none;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledNavList = styled.ul`
  list-style: none;
`;

const StyledLogoutButton = styled.a`
  display: block;
  text-decoration: none;
  margin: 15px auto;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

const Sidebar = ({ pageContext }) => (
  <Wrapper pageColor={pageContext}>
    <StyledLogoButton as={NavLink} to="/notes">
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
          to="/timers"
          name="timers"
          icon={timer}
          activeColor="timers"
        >
          timers
        </NavButton>
      </li>
    </StyledNavList>
    <StyledLogoutButton>Log Out</StyledLogoutButton>
  </Wrapper>
);

export default withContext(Sidebar);
