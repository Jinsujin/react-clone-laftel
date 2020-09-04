import React, { useState, useEffect, useCallback } from 'react';
import AppLayout from '../components/common/AppLayout';
import Head from 'next/head';
import { Form, Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loginRequestAction } from '../reducers/user';
import Router from 'next/router';

const ErrorMessage = styled.div`
  color: red;
`;

const FormStyle = styled(Form)`
  margin: 0 auto;
  margin-top: 3rem;
  border: 2px solid rgb(129, 107, 255);
  background-color: #fff;
  padding: 2rem;
  width: 768px;

  & > div {
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-bottom: 1.6rem;
    & > label {
      width: 11rem;
      margin-right: 1rem;
      font-size: 1.2em;
    }
    &.term-check label {
      width: 100%;
    }
    &.submit-button {
      justify-content: center;
    }
  }
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

  const onSubmitForm = useCallback(
    e => {
      console.log(email, password);
      dispatch(loginRequestAction({ email, password }));
    },
    [email, password],
  );

  return (
    <AppLayout>
      <FormStyle onFinish={onSubmitForm}>
        <h2>로그인</h2>
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
          <Button type="primary" htmlType="submit" loading={false}>
            로그인
          </Button>
        </div>
      </FormStyle>
    </AppLayout>
  );
};

export default Login;
