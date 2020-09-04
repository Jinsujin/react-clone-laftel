import React, { useState, useEffect, useCallback } from 'react';
import AppLayout from '../components/common/AppLayout';
import Head from 'next/head';
import { Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loginRequestAction } from '../reducers/user';
import Router from 'next/router';
import AuthTemplate from '../components/common/AuthTemplate';
import RoundStyledButton from '../components/common/RoundStyledButton';

const ErrorMessage = styled.div`
  color: red;
`;

const Login = () => {
  const dispatch = useDispatch();
  const { logInLoading, logInError, logInDone } = useSelector(
    state => state.user,
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (logInDone) {
      Router.push('/');
    }
  }, [logInDone]);

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  const onChangeEmail = useCallback(e => {
    setEmail(e.target.value);
  }, []);

  const onChangePassword = useCallback(e => {
    setPassword(e.target.value);
  }, []);

  const onSignup = useCallback(() => {
    Router.push('/signup');
  }, []);

  const onSubmitForm = useCallback(
    e => {
      console.log(email, password);
      dispatch(loginRequestAction({ email, password }));
    },
    [email, password],
  );

  return (
    <AppLayout>
      <Form onFinish={onSubmitForm}>
        <AuthTemplate title="로그인">
          <div>
            <label htmlFor="user-email">이메일</label>
            <Input
              name="user-email"
              type="email"
              value={email}
              onChange={onChangeEmail}
              required
            />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <Input
              name="user-password"
              type="password"
              value={password}
              onChange={onChangePassword}
              required
            />
          </div>
          <div className="submit-button">
            <RoundStyledButton gray onClick={onSignup}>
              회원가입
            </RoundStyledButton>
            <RoundStyledButton htmlType="submit" loading={logInLoading}>
              로그인
            </RoundStyledButton>
          </div>
        </AuthTemplate>
      </Form>
    </AppLayout>
  );
};

export default Login;
