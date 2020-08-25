import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const HeaderWrapper = styled.header`
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
`;

const MenulistWrapper = styled.ul`
  display: flex;
  font-weight: 600;
  font-size: 1.5em;
  margin-left: 2.5rem;

  li {
    margin-right: 2rem;
    a:hover {
      color: $color_main_accent;
    }
  }
`;

const UtilsBlock = styled.div`
  margin-left: auto;
`;

// 헤더가 fixed 로 되어있어, 페이지의 컨텐츠가 4rem 아래서 나타나게 해주는 컴포넌트
const Spacer = styled.div`
  height: 6rem;
`;

const Header = () => {
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
              <Link href="/voucher">
                <a>멤버쉽</a>
              </Link>
            </li>
          </MenulistWrapper>
          <UtilsBlock>로그인/가입</UtilsBlock>
        </Wrapper>
      </HeaderWrapper>
      <Spacer />
    </>
  );
};

export default Header;
