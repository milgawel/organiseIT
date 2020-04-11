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

  @media (min-width: 600px) {
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

class CardsTemplate extends React.Component {
  state = {
    AddItemBarActive: null,
  };

  handleButtonToggle = () => {
    this.setState((prevState) => ({
      AddItemBarActive: !prevState.AddItemBarActive,
    }));
  };

  render() {
    const { children, pageContext } = this.props;

    return (
      <UserPageTemplate>
        <StyledHeader>
          <Input
            type="text"
            placeholder="search by title"
            activeColor={pageContext}
            search
          />
          <StyledHeading>
            {pageContext === 'todos' ? 'Tasks' : pageContext}
          </StyledHeading>
          <Paragraph>
            6 {pageContext === 'todos' ? 'Tasks' : pageContext}
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
