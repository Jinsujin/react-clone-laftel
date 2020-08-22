import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Daily from './pages/DailyPage';
import Finder from './pages/FinderPage';
import Themes from './pages/ThemesPage';
import Voucher from './pages/VoucherPage';
import './styles/reset.css';
import Header from './components/common/Header';

const App = () => {
  return (
    <>
      <Header />
      <Route component={Home} path="/" exact />
      <Route component={Daily} path="/daily" />
      <Route component={Finder} path="/finder" />
      <Route component={Themes} path="/themes" />
      <Route component={Voucher} path="/voucher" />
    </>
  );
};

export default App;
