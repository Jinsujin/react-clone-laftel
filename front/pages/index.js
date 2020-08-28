import React from 'react';
import AppLayout from '../components/common/AppLayout';
import NewAnimationList from '../components/NewAnimationList';
import { useSelector } from 'react-redux';
import Carousel from '../components/home/Carousel';
import { useDispatch } from 'react-redux';

const images = Array(5)
  .fill()
  .map(() => ({
    imageSrc: 'http://via.placeholder.com/970x480',
  }));

const Home = () => {
  const dispatch = useDispatch();
  const { mainAnimations } = useSelector(state => state.animation);

  // TODO: GET caroucel images
  // useEffect(() => {
  //   dispatch({
  //   });
  // }, []);

  return (
    <>
      <AppLayout>
        <Carousel images={images} />
        <NewAnimationList
          header="2020년 3분기 기대신작 애니"
          data={mainAnimations}
        />
        <NewAnimationList header="따끈따끈 신작 랭킹" data={mainAnimations} />
        <NewAnimationList header="역대 인기 애니" data={mainAnimations} />
      </AppLayout>
    </>
  );
};

export default Home;
