import React, { useState, useCallback } from 'react';
import { Form, Button, Input, Row, Col } from 'antd';
import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';
import Responsive from '../components/common/Responsive';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user';

const GlobalStyled = createGlobalStyle`
  .ant-col {
    display: flex;
    align-items: center;
  }
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = useCallback(e => {
    setEmail(e.target.value);
  }, []);

  const onChangePassword = useCallback(e => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(
    e => {
      console.log(email, password);
      dispatch(loginAction({ email, password }));
    },
    [email, password],
  );

  return (
    <Form onFinish={onSubmitForm}>
      <GlobalStyled />
      <Input.Group size="large">
        <Row gutter={8}>
          <Col span={8}>
            <Input
              type="email"
              name="user-email"
              placeholder="이메일"
              value={email}
              onChange={onChangeEmail}
              required
            />
          </Col>
          <Col span={8}>
            <Input
              name="user-password"
              placeholder="비밀번호"
              type="password"
              value={password}
              onChange={onChangePassword}
              required
            />
          </Col>
          <Col>
            <Button type="primary" htmlType="submit" loading={false}>
              로그인
            </Button>
          </Col>
          <Col>
            <Link href="/signup">
              <a>
                <Button>회원가입</Button>
              </a>
            </Link>
          </Col>
        </Row>
      </Input.Group>
    </Form>
  );
};

export default LoginForm;
