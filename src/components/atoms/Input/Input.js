import styled, { css } from 'styled-components';
import searchIcon from 'assets/search.png';

const Input = styled.input`
  margin: 0;
  padding: 5px 5px 5px 10px;
  border-radius: 5px;
  border: 2px solid ${({ theme, activeColor }) => theme[activeColor]};
  color: black;

  background-size: 9%;
  background-position: 2% 50%;
  background-repeat: no-repeat;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: 10px;

  ${({ search }) =>
    search &&
    css`
      background-image: url(${searchIcon});
      padding: 5px 5px 5px 35px;
    `}

  @media (max-width: 640px) {
    margin-bottom: 5px;
  }
`;

export default Input;
