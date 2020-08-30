import React, { useCallback } from 'react';
import { Button, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Router from 'next/router';
import { logoutRequestAction } from '../../reducers/user';

const UserProfileWrapper = styled.div`
  /* display: flex;
  align-items: center; */
  span {
    font-size: 1.2em;
  }
`;

const ColStyled = styled(Col)`
  display: flex;
  align-items: center;
`;

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector(state => state.user);
  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  const onMyInfo = useCallback(() => {
    Router.push('/userinfo');
  }, []);

  return (
    <UserProfileWrapper>
      <Row gutter={16}>
        <ColStyled>
          <span>{me.nickname}</span>
        </ColStyled>
        <Col span={8}>
          <Button
            type="primary"
            icon={<UserOutlined />}
            loading={false}
            onClick={onMyInfo}
          >
            내정보
          </Button>
        </Col>
        <Col span={8}>
          <Button onClick={onLogout} loading={logOutLoading}>
            로그아웃
          </Button>
        </Col>
      </Row>
    </UserProfileWrapper>
  );
};

export default UserProfile;
