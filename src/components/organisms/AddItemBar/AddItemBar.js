import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import Header from 'components/atoms/Header/Header';

const StyledWrapper = styled.div`
  position: fixed;
  background: white;
  top: 0;
  right: 0;
  width: 650px;
  height: 100vh;
  z-index: 99;
  display: flex;
  flex-direction: column;
  padding: 50px 50px;
  border-left: 10px solid ${({ theme, activeColor }) => theme[activeColor]};
  box-shadow: 0 0 10px 2px;
  transition: transform 0.3s ease-in-out;
  transform: translatex(${({ isActive }) => (isActive ? '0' : '100%')});
`;

const StyledTextArea = styled(Input)`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.lightgrey};
  border: none;
  height: 300px;
`;

const StyledHeader = styled(Header)`
  width: 400px;
`;

const StyledInput = styled(Input)`
  background-color: ${({ theme }) => theme.lightgrey};
  border: none;
  margin-top: 10px;
`;

const AddItemBar = ({ pageContext, isActive }) => (
  <StyledWrapper activeColor={pageContext} isActive={isActive}>
    <StyledHeader>Add new {pageContext}</StyledHeader>
    <StyledInput placeholder="title" />
    <StyledTextArea as="textarea" placeholder="title" />
    <Button activeColor={pageContext}>Add</Button>
  </StyledWrapper>
);

export default withContext(AddItemBar);
