import React, { useEffect } from 'react';
import { END } from 'redux-saga';
import axios from 'axios';
import AppLayout from '../components/common/AppLayout';
import NewPostList from '../components/NewPostList';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from '../components/home/Carousel';
import Header from '../components/common/Header';
import Responsive from '../components/common/Responsive';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';

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

/**
 * Home 보다 먼저 실행되어, 데이터가 채워진 상태로 화면을 그림
 */
export const getServerSideProps = wrapper.getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';

  if (context.req && cookie) {
    // 쿠키가 공유되는 문제를 막기위함
    axios.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });

  context.store.dispatch({
    type: LOAD_POSTS_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Home;
