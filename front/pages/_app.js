import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import '../styles/reset.css';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <title>CloneLaftel</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
