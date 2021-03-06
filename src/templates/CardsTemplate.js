import React from 'react';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import withContext from 'hoc/withContext';
import Header from 'components/atoms/Header/Header';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import PropTypes from 'prop-types';
import AddItemButton from 'components/atoms/AddItemButton/AddItemButton';
import AddItemBar from 'components/organisms/AddItemBar/AddItemBar';

const StyledGridTemplate = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (min-width: 100px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1350px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1700px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (min-width: 1900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  padding: 15px 50px 30px 50px;
  grid-gap: 35px;

  @media (max-width: 640px) {
    padding: 10px 25px 85px 25px;
    grid-gap: 25px;
  }
`;

const StyledHeading = styled(Header)`
  :first-letter {
    text-transform: uppercase;
  }
`;

const StyledHeader = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  padding-left: 45px;
  @media (max-width: 640px) {
    margin-top: 25px;
    margin-bottom: 10px;
    padding-left: 25px;
  }
`;
const StyledButton = styled.button`
  border: none;
  width: 20px;
  height: 20px;
  border-radius: 15px;
  color: black;
  background: orange;
  font-weight: ${({ theme }) => theme.bold};
  outline: none;
  &:hover {
    cursor: help;
  }
`;

const StyledMobileAddItemButton = styled(AddItemButton)`
  position: fixed;
  display: block;
  width: 40px;
  height: 40px;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 0px;
  box-shadow: none;
  background-size: 50%;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 10px;
  margin-bottom: 15px;
  @media (min-width: 640px) {
    display: none;
  }
`;

const StyledAddItemButton = styled(AddItemButton)`
  @media (max-width: 640px) {
    display: none;
  }
`;

// #############################################################################
// #############################################################################
// #############################################################################

class CardsTemplate extends React.Component {
  state = {
    AddItemBarActive: null,
    searchInputValue: '',
  };

  componentDidUpdate() {
    document.title = `Organise ${this.props.pageContext}`;
  }

  handleButtonToggle = () => {
    this.setState((prevState) => ({
      AddItemBarActive: !prevState.AddItemBarActive,
    }));
  };

  handleFilterInput = (e) => {
    console.log(`input filter ${e.target.value}`);
    this.setState({
      searchInputValue: e.target.value,
    });
    console.log(`costam ${this.state.searchInputValue}`);
  };

  render() {
    const { children, pageContext, inputHandler } = this.props;

    return (
      <UserPageTemplate active={this.state.searchInputValue}>
        <StyledHeader>
          <Input
            type="text"
            placeholder="search by title"
            activeColor={pageContext}
            search
            onChange={(e) => inputHandler(e.target.value.toLowerCase())}
          />

          <StyledHeading>
            {pageContext === 'tasks' ? 'Tasks' : pageContext}
          </StyledHeading>
          <Paragraph>
            {children.length}{' '}
            {children.length === 1
              ? pageContext.substring(0, pageContext.length - 1)
              : pageContext}
          </Paragraph>
          {pageContext === 'timers' ? (
            <StyledButton title="Remember to stop timer, and to not close browser during timer work, otherwise you will lose your progress">
              ?
            </StyledButton>
          ) : null}
        </StyledHeader>

        <StyledAddItemButton
          activeColor={pageContext}
          onClick={this.handleButtonToggle}
          isActive={this.state.AddItemBarActive}
        />
        <StyledMobileAddItemButton
          activeColor={pageContext}
          onClick={this.handleButtonToggle}
          isActive={this.state.AddItemBarActive}
        />
        <AddItemBar
          isActive={this.state.AddItemBarActive}
          clickAction={this.handleButtonToggle}
        />
        <StyledGridTemplate>{children}</StyledGridTemplate>
      </UserPageTemplate>
    );
  }
}

CardsTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'bookmarks', 'tasks', 'timers'])
    .isRequired,
  inputHandler: PropTypes.func.isRequired,
};

export default withContext(CardsTemplate);
