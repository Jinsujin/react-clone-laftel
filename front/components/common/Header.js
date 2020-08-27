import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/palette';
import LoginForm from '../LoginForm';
import UserProfile from './UserProfile';
import { useSelector } from 'react-redux';

const HeaderWrapper = styled.header`
  z-index: 999999;
  position: fixed;
  width: 100vw;
  background-color: white;
  box-shadow: rgb(238, 238, 238) 0px 1px 0px 0px;
`;

const Wrapper = styled(Responsive)`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  font-weight: 800;
  font-size: 2em;
  a:hover {
    color: inherit;
  }
`;

const MenulistWrapper = styled.ul`
  display: flex;
  font-weight: 600;
  font-size: 1.5em;
  margin-left: 2.5rem;

  li {
    margin-right: 2rem;
    a:hover {
      color: ${palette.violet[7]};
    }
  }
`;

const UtilsBlock = styled.div`
  margin-left: auto;
  width: 50%;
  a:hover {
    color: ${palette.violet[7]};
  }
`;

// 헤더가 fixed 로 되어있어, 페이지의 컨텐츠가 4rem 아래서 나타나게 해주는 컴포넌트
const Spacer = styled.div`
  height: 6rem;
`;

const Header = () => {
  const { isLoggedIn } = useSelector(state => state.user);

  return (
    <>
      <HeaderWrapper>
        <Wrapper>
          <LogoWrapper>
            <h1>
              <Link href="/">
                <a>Laftel</a>
              </Link>
            </h1>
          </LogoWrapper>
          <MenulistWrapper>
            <li>
              <Link href="/finder">
                <a>태그검색</a>
              </Link>
            </li>
            <li>
              <Link href="/themes">
                <a>테마추천</a>
              </Link>
            </li>
            <li>
              <Link href="/daily">
                <a>요일별 신작</a>
              </Link>
            </li>
            <li>
              <Link href="/add">
                <a>관리자</a>
              </Link>
            </li>
          </MenulistWrapper>
          <UtilsBlock>
            {/* <Link href="/login">
              <a>로그인/가입</a>
            </Link> */}
            {isLoggedIn ? <UserProfile /> : <LoginForm />}
          </UtilsBlock>
        </Wrapper>
      </HeaderWrapper>
      <Spacer />
    </>
  );
};

export default Header;
