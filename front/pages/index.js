import React, { useEffect } from 'react';
import AppLayout from '../components/common/AppLayout';
import NewPostList from '../components/NewPostList';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from '../components/home/Carousel';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import Header from '../components/common/Header';
import Responsive from '../components/common/Responsive';

const images = Array(5)
  .fill()
  .map(() => ({
    imageSrc: 'http://via.placeholder.com/970x480',
  }));

const Home = () => {
  const dispatch = useDispatch();
  const { mainPosts, loadPostsLoading, loadPostsDone } = useSelector(
    state => state.post,
  );

  // TODO: GET caroucel images
  useEffect(() => {
    if (!loadPostsDone) {
      dispatch({
        type: LOAD_POSTS_REQUEST,
      });
    }
  }, [loadPostsDone]);

  return (
    <>
      <Header />
      <Carousel images={images} />
      <Responsive>
        <NewPostList header="2020년 3분기 기대신작 애니" data={mainPosts} />
        <NewPostList header="따끈따끈 신작 랭킹" data={mainPosts} />
        <NewPostList header="역대 인기 애니" data={mainPosts} />
      </Responsive>
    </>
  );
};

export default Home;
