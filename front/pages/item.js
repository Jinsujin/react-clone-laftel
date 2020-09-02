import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import { Button } from 'antd';
import { HeartOutlined, Heart } from '@ant-design/icons';
import styled from 'styled-components';
import TagsBox from '../components/item/TagsBox';
import SummaryBox from '../components/item/SummaryBox';
import ReviewList from '../components/item/ReviewList';
import Header from '../components/common/Header';
import Responsive from '../components/common/Responsive';
import Episode from '../components/item/Episode';
import cn from 'classnames';

const ResponsiveWrap = styled(Responsive)`
  display: flex;
`;

const ItemHead = styled.div`
  position: relative;
  background-color: #272b35;
  height: 500px;
  background: #282a35;
  padding-top: 104px;
  color: #fff;
  margin-bottom: 5rem;
`;

const HeadDetail = styled.div`
  margin-left: 1rem;
  & h1 {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 2.25rem;
    line-height: 2.5rem;
    height: 5.5rem;
    font-weight: bold;
    color: #fff;
  }

  .genre {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  .star-average {
    font-size: 1.2rem;
    margin-bottom: 1.8rem;
  }
`;

const AniImageWrap = styled.div`
  background-color: orange;
  position: relative;
  width: 268px;
  height: 361px;
  overflow: hidden;

  & img {
    border-radius: 4px;
    display: block;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #e9ecef;
    border: none;
  }
`;

const BottomContentWrap = styled.div`
  display: flex;
  .main {
    background-color: #fff;
    border: 1px solid #ecedef;
    padding: 1.5rem;
    border-radius: 4px;
    flex: 1 1;
  }
  .side {
    width: 20rem;
    margin-left: 1.5rem;

    & > article {
      margin-bottom: 0.7rem;
    }
  }
`;

const TabMenuList = styled.ul`
  display: flex;
  margin-bottom: 1.4rem;

  & > li {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    color: #495057;
    padding-bottom: 0.125rem;
    border-bottom: 3px solid transparent;
    cursor: pointer;
  }
  & > li.active {
    color: #816bff;
    border-bottom: 3px solid #816bff;
    font-weight: 600;
  }
`;

const Item = () => {
  const [activeTabNum, setActiveTabNum] = useState(0);

  const onClickMenu = useCallback(index => {
    setActiveTabNum(index);
  }, []);

  return (
    <>
      <Head>
        <title>상세 | CloneLaftel</title>
      </Head>
      <Header />
      <ItemHead>
        <ResponsiveWrap>
          <AniImageWrap>
            <img src="https://image.laftel.net/items/thumbs/large/45516aab-4eb0-4394-9a9d-36a36daf5283.jpg" />
          </AniImageWrap>
          <HeadDetail>
            <div>
              <span>극장판 | 전체 이용가</span>
            </div>
            <h1>이웃집 토토로</h1>
            <div className="genre">판타지 / 치유</div>
            <div className="star-average">평균 4.1</div>
            <div>별점 주기</div>
          </HeadDetail>
          <Button
            style={{
              color: '#816bff',
              position: 'absolute',
              right: '0',
              top: '0',
            }}
            icon={<HeartOutlined />}
          >
            좋아요
          </Button>
        </ResponsiveWrap>
      </ItemHead>
      <Responsive>
        <BottomContentWrap>
          <div className="main">
            <TabMenuList>
              <li className={cn({ active: activeTabNum === 0 })}>
                <a onClick={() => onClickMenu(0)}>리뷰</a>
              </li>
              <li className={cn({ active: activeTabNum === 1 })}>
                <a onClick={() => onClickMenu(1)}>에피소드</a>
              </li>
            </TabMenuList>
            {activeTabNum === 0 ? <ReviewList /> : <Episode />}
          </div>
          <div className="side">
            <TagsBox />
            <SummaryBox
              summary={
                '2020년 8월 1일 공개 예정입니다.] 1955년 일본의 아름다운 시골 마을. 상냥하고 의젓한 11살 사츠키와 장난꾸러기에 호기심...'
              }
            />
          </div>
        </BottomContentWrap>
      </Responsive>
    </>
  );
};

export default Item;
