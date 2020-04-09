import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSize.m};

  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
    `}
`;

export default Paragraph;
