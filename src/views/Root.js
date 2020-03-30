import React from 'react';
import theme from 'theme/mainTheme';
import { ThemeProvider } from 'styled-components';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const Root = () => (
  <ThemeProvider theme={theme}>
    <Sidebar />
  </ThemeProvider>
);

export default Root;
