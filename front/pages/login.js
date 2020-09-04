import React, { useState } from 'react';
import AppLayout from '../components/common/AppLayout';
import LoginForm from '../components/common/LoginForm';
import Head from 'next/head';

const Login = () => {
  return (
    <>
      <Head>
        <title>로그인 | CloneLaftel</title>
      </Head>
      <AppLayout>
        <LoginForm />
      </AppLayout>
    </>
  );
};

export default Login;
