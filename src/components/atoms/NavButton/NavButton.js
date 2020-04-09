import styled from 'styled-components';

const NavButton = styled.a`
  color: white;
  display: block;
  margin: 0 auto 20px;
  width: 180px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: center;
  padding: 10px 10px 10px 35px;
  border-radius: 4px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-size: 16%;
  background-position: 3% 50%;
  border-left: 8px solid transparent;
  box-shadow: 0 0 5px black;

  ::first-letter {
    text-transform: uppercase;
  }

  &.active {
    border-left: 8px solid ${({ theme, activeColor }) => theme[activeColor]};
    box-shadow: 0 0 20px ${({ theme, activeColor }) => theme[activeColor]};
    transform: scale(1.15);
  }
`;

export default NavButton;
