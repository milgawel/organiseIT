import styled from 'styled-components';

const Button = styled.button`
  width: 100px;
  margin: 0;
  margin-top: 20px;
  padding: 10px 25px;
  border: 0;
  border-radius: 15px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme, activeColor }) => theme[activeColor]};
  color: ${({ activeColor }) => (activeColor === 'notes' ? 'white' : 'black')};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export default Button;
