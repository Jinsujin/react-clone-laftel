import React from 'react';
import AppLayout from '../components/common/AppLayout';
import NewAnimationList from '../components/NewAnimationList';
import { useSelector } from 'react-redux';

const Home = () => {
  const { mainAnimations } = useSelector(state => state.animation);

  return (
    <AppLayout>
      <NewAnimationList
        header="2020년 3분기 기대신작 애니"
        data={mainAnimations}
      />
      <NewAnimationList header="따끈따끈 신작 랭킹" data={mainAnimations} />
      <NewAnimationList header="역대 인기 애니" data={mainAnimations} />
    </AppLayout>
  );
};

export default Home;
