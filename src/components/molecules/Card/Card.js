import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';
import withContext from 'hoc/withContext';
import Header from 'components/atoms/Header/Header';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import notesIcon from 'assets/editw.png';
import bookmarksIcon from 'assets/bookmark.png';
import todosIcon from 'assets/list.png';

const CardWrapper = styled.div`
  max-height: 360px;
  box-shadow: 0px 0px 10px 2px black;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.2fr 1fr;
`;

const CardContent = styled.div`
  padding: 15px 15px;
  background-color: white;
  position: relative;
  max-height: 280px;

  ${({ heading }) =>
    heading &&
    css`
    background-color: ${({ theme, activeColor }) => theme[activeColor]}};
    color:${({ activeColor }) =>
      activeColor === 'notes' ? 'white' : 'black'}};
  `}

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const Icon = styled.img`
  position: absolute;
  margin: 0;
  padding: 0;
  width: 40px;
  height: 40px;
  top: 0;
  right: 0;
  transform: translate(-50%, 40%);
`;

const StyledLink = styled.a`
  display: block;
  text-decoration: none;
  color: black;

  @media (max-width: 640px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const WebsiteImg = styled.img`
  position: relative;
  width: 260px;
  height: 130px;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 5px 0 5px;
  height: 100%;
  overflow-y: auto;
`;

const Card = ({
  pageContext,
  title,
  created,
  content,
  id,
  deadline,
  removeItem,
}) => {
  return (
    <CardWrapper>
      <CardContent heading activeColor={pageContext}>
        <Header>
          {pageContext === 'bookmarks' ? (
            <StyledLink href={`https://${title}`}>{title}</StyledLink>
          ) : (
            title
          )}
        </Header>
        <Paragraph small>created {created}</Paragraph>

        {pageContext === 'tasks' && (
          // <Paragraph small>deadline {JSON.stringify(deadline)}</Paragraph>
          <Paragraph small>
            deadline {deadline.toLocaleString().substring(0, 10)}
          </Paragraph>
        )}
        {pageContext === 'notes' && <Icon src={notesIcon} />}
        {pageContext === 'bookmarks' && <Icon src={bookmarksIcon} />}
        {pageContext === 'tasks' && <Icon src={todosIcon} />}
      </CardContent>
      <CardContent flex>
        <StyledParagraph>{content}</StyledParagraph>
        {pageContext === 'bookmarks' && (
          <a href={`https://${title}`}>
            <WebsiteImg
              src={`http://api.miniature.io/?width=260&height=130&url=${title}`}
            />
          </a>
        )}

        <Button
          activeColor={pageContext}
          onClick={() => removeItem(pageContext, id)}
        >
          Remove
        </Button>
      </CardContent>
    </CardWrapper>
  );
};

Card.propTypes = {
  pageContext: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  deadline: PropTypes.string,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  deadline: '',
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
  };
};

export default connect(null, mapDispatchToProps)(withContext(Card));
