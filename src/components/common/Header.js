import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.scss';

const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <div className="logo-wrap">
          <h1>
            <Link to="/">Laftel</Link>
          </h1>
        </div>
        <ul className="menu-list">
          <li>
            <Link to="/finder">태그검색</Link>
          </li>
          <li>
            <Link to="/themes">테마추천</Link>
          </li>
          <li>
            <Link to="/daily">요일별 신작</Link>
          </li>
          <li>
            <Link to="/voucher">멤버쉽</Link>
          </li>
        </ul>
        <div className="utils">로그인/가입</div>
      </div>
    </header>
  );
};

export default Header;
