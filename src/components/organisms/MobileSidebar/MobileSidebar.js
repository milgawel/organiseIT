import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import NavButton from 'components/atoms/NavButton/NavButton';
import bookmark from 'assets/bookmarkw.png';
import edit from 'assets/editw.png';
import list from 'assets/listw.png';
import timer from 'assets/timerw.png';
import withContext from 'hoc/withContext';
import AddItemButton from 'components/atoms/AddItemButton/AddItemButton';

const Wrapper = styled.div`
  display: block;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 70px;
  background: linear-gradient(to right, #1455eb, lightblue);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 5px 0 10px 1px ${({ theme, pageColor }) => theme[pageColor]};
  transition: all ease-in 0.5s;
  z-index: 999;
  @media (min-width: 640px) {
    display: none;
  }
`;

const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const StyledListItem = styled.li`
  width: 100%;
`;

const StyledNavButton = styled(NavButton)`
  width: 100%;
  height: 100%;
  background-size: 50%;
  justify-content: center;
  margin: 0;
  padding: 0;
  background-position: 50% 50%;
  box-shadow: none;
  border: 2px solid transparent;
  &:hover {
    transform: scale(1);
    box-shadow: none;
  }
  &.active {
    border-left: none;
    box-shadow: none;
    transform: scale(1);
  }
`;

const Spacer = styled.div``;

const MobileSidebar = ({ pageContext }) => (
  <Wrapper pageColor={pageContext}>
    <StyledNavList>
      <StyledListItem>
        <StyledNavButton
          as={NavLink}
          to="/notes"
          name="notes"
          icon={edit}
          activeColor="notes"
        />
      </StyledListItem>
      <StyledListItem>
        <StyledNavButton
          as={NavLink}
          to="/bookmarks"
          name="bookmarks"
          icon={bookmark}
          activeColor="bookmarks"
        />
      </StyledListItem>
      <StyledListItem>
        <Spacer />
      </StyledListItem>
      <StyledListItem>
        <StyledNavButton
          as={NavLink}
          to="/tasks"
          name="tasks"
          icon={list}
          activeColor="tasks"
        />
      </StyledListItem>
      <StyledListItem>
        <StyledNavButton
          as={NavLink}
          to="/timers"
          name="timers"
          icon={timer}
          activeColor="timers"
        />
      </StyledListItem>
    </StyledNavList>
  </Wrapper>
);

export default withContext(MobileSidebar);
