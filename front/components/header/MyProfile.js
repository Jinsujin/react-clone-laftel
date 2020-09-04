import React, { useCallback } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Router from 'next/router';
import { logoutRequestAction } from '../../reducers/user';
import { useDispatch, useSelector } from 'react-redux';

const MyProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector(state => state.user);
  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  const onMyInfo = useCallback(() => {
    Router.push('/userinfo');
  }, []);

  return (
    <>
      <Button type="primary" shape="round" icon={<UserOutlined />} size="large">
        {me.nickname}
      </Button>
      <Button onClick={onLogout} loading={logOutLoading}>
        로그아웃
      </Button>
    </>
  );
};

export default MyProfile;
