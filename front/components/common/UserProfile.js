import React, { useCallback } from 'react';
import { Button } from 'antd';
import { logoutAction } from '../../reducers/user';
import { useDispatch } from 'react-redux';

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <>
      <span>아이디</span>
      <Button onClick={onLogout}>로그아웃</Button>
    </>
  );
};

export default UserProfile;
