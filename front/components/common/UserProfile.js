import React, { useCallback } from 'react';
import { Button } from 'antd';

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <>
      <span>아이디</span>
      <Button onClick={onLogout}>로그아웃</Button>
    </>
  );
};

export default UserProfile;
