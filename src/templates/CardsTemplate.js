import React from 'react';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import withContext from 'hoc/withContext';
import Header from 'components/atoms/Header/Header';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
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
`;
// #############################################################################
// #############################################################################
// #############################################################################

class CardsTemplate extends React.Component {
  state = {
    AddItemBarActive: null,
    searchInputValue: '',
  };

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
    let { children, pageContext, inputHandler } = this.props;

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
        </StyledHeader>
        <AddItemButton
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

export default withContext(CardsTemplate);
