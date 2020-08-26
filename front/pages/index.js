import React from 'react';
import AppLayout from '../components/common/AppLayout';
import NewAnimationList from '../components/NewAnimationList';

const Home = () => {
  const newAnimationList = [
    {
      genre: '액션',
      title: '전직고수',
      imgUrl:
        'https://image.laftel.net/items/thumbs/large/7b749cb8-22d4-4133-ab25-d8799abda9b9.jpg',
    },
    {
      genre: '로맨틱',
      title: '역시 내청춘',
      imgUrl:
        'https://image.laftel.net/items/thumbs/large/f838ac8f-39c8-4f09-be41-3d3331717d92.jpg',
    },
    {
      genre: '개그',
      title: 'RE: 제로부터 시작하는',
      imgUrl:
        'https://image.laftel.net/items/thumbs/large/5f177f77-79c2-43d6-ae35-d63bb44ea81e.jpg',
    },
    {
      genre: '로맨스',
      title: '여친, 빌리겠습니다',
      imgUrl:
        'https://image.laftel.net/items/thumbs/large/5f177f77-79c2-43d6-ae35-d63bb44ea81e.jpg',
    },
    {
      genre: '판타지',
      title: '러브 앤 프로듀서',
      imgUrl:
        'https://image.laftel.net/items/thumbs/large/5f177f77-79c2-43d6-ae35-d63bb44ea81e.jpg',
    },
  ];

  return (
    <AppLayout>
      <NewAnimationList
        header="2020년 3분기 기대신작 애니"
        data={newAnimationList}
      />
      <NewAnimationList header="따끈따끈 신작 랭킹" data={newAnimationList} />
      <NewAnimationList header="역대 인기 애니" data={newAnimationList} />
    </AppLayout>
  );
};

export default Home;
