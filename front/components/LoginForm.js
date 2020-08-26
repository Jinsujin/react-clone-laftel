import React, { useState, useCallback } from 'react';
import { Form, Button, Input, Row, Col } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';

const LoginFormBlock = styled(Responsive)``;

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = useCallback(e => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback(e => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(
    e => {
      console.log(id, password);
      setIsLoggedIn(true);
    },
    [id, password],
  );

  return (
    <LoginFormBlock>
      <Form onFinish={onSubmitForm}>
        <Input.Group size="large">
          <Row gutter={8}>
            <Col span={4}>
              <Input name="user-id" value={id} onChange={onChangeId} required />
            </Col>
            <Col span={4}>
              <Input
                name="user-password"
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

        {/* <label htmlfor="user-id">아이디</label> */}
        {/* <label htmlFor="user-password">비밀번호</label> */}
      </Form>
    </LoginFormBlock>
  );
};

export default LoginForm;
