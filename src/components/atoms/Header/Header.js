import styled from 'styled-components';

const Header = styled.h1`
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-overflow: ellipsis;
  overflow: hidden;
  width: 200px;
`;

export default Header;
