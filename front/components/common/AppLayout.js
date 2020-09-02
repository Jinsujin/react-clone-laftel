import React, { useState } from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import Responsive from './Responsive';

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Responsive>{children}</Responsive>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
