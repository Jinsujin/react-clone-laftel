import React from 'react';
import Header from './Header';
import { Menu, Input, Col, Row } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
