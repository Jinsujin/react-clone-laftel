import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { END } from 'redux-saga';
import Router from 'next/router';
import { Form, Input, Checkbox, Button } from 'antd';
import styled from 'styled-components';
import RoundedBtn from '../components/common/RoundedBtn';
import { CaretRightOutlined } from '@ant-design/icons';
import { SIGN_UP_REQUEST } from '../reducers/user';
import AppLayout from '../components/common/AppLayout';

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

const Signup = () => {
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpError } = useSelector(
    state => state.user,
  );
  // 회원가입 완료시 메인페이지로
  useEffect(() => {
    if (signUpDone) {
      Router.push('/');
    }
  }, [signUpDone]);

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [nickname, setNickname] = useState('');

  const onChangeEmail = useCallback(e => {
    setEmail(e.target.value);
  });

  const onChangePassword = useCallback(e => {
    setPassword(e.target.value);
  }, []);

  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password],
  );

  const onChangeNickname = useCallback(e => {
    setNickname(e.target.value);
  }, []);

  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback(e => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (!term) {
      return setTermError(true);
    }

    console.log(email, nickname, password);
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, nickname },
    });
  }, [email, password, term]);

  return (
    <AppLayout>
      <FormStyle onFinish={onSubmit}>
        <h2>회원가입</h2>
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
          <label htmlFor="user-nickname">닉네임</label>
          <Input
            name="user-nickname"
            value={nickname}
            onChange={onChangeNickname}
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
        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            required
          />
        </div>
        {passwordError && (
          <ErrorMessage>비밀번호가 일치하지 않습니다</ErrorMessage>
        )}
        <div className="term-check">
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            이용약관 동의
          </Checkbox>
        </div>
        {termError && <ErrorMessage>약관 동의가 필요합니다.</ErrorMessage>}
        <div className="submit-button">
          <Button type="primary" htmlType="submit" loading={false}>
            가입하기
          </Button>
        </div>
      </FormStyle>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';

  if (context.req && cookie) {
    // 쿠키가 공유되는 문제를 막기위함
    axios.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });

  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Signup;
