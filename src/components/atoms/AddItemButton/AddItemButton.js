import styled from 'styled-components';
import plus from 'assets/plus.png';
import plusw from 'assets/plusw.png';

const AddItemButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  border: 2px solid
    ${({ activeColor }) => (activeColor === 'notes' ? 'white' : 'black')};
  background: url(${({ activeColor }) =>
    activeColor === 'notes' ? plusw : plus});
  box-shadow: 0 0 7px 1px black;
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: 50%, 50%;
  background-color: ${({ theme, activeColor }) => theme[activeColor]};
  cursor: pointer;
  z-index: 9999;
`;

export default AddItemButton;
