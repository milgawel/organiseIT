import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import MobileSidebar from 'components/organisms/MobileSidebar/MobileSidebar';

const UserPageTemplate = ({ children }) => (
  <>
    <Sidebar desktop />
    <MobileSidebar mobile />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserPageTemplate;
