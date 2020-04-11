import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap'); */



*,*::after,*::before{
  margin:0;
  padding:0;
  box-sizing:border-box;
   }

html{
  font-family: 'Montserrat', sans-serif;
  padding-left:230px
}

`;

export default GlobalStyle;
