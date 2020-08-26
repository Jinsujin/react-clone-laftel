import React, { useState } from 'react';
import Header from './Header';
import { Menu, Input, Col, Row } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Responsive from './Responsive';

const ResponsiveWrapper = styled(Responsive)``;

const AppLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <ResponsiveWrapper>{children}</ResponsiveWrapper>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
