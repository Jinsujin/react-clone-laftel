import React from 'react';
import styled from 'styled-components';
import { Row, Col, Card } from 'antd';
import FinderCard from './FinderCard';

const FilterResultListWrapper = styled.div`
  margin-top: 3rem;
  width: calc(100% - 260px);
  position: absolute;
  right: 0;
  top: 0;
  /* overflow: hidden; */

  p {
    color: #494c62;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    margin-left: 2rem;

    span {
      font-size: 1.7rem;
      font-weight: 500;
      color: #816bff;
    }
  }
`;

const CardWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-left: 2rem;
  & > div {
    margin: 1.25rem 0.4rem;
  }
  & > div:nth-child(4) {
    margin-right: 0;
  }
  & > div:nth-child(4n + 1) {
    margin-left: 0;
  }
`;

const FilterResultList = ({ animationItems }) => {
  return (
    <FilterResultListWrapper>
      <p>
        총 <span>5,909</span>개의 작품이 검색되었어요!
      </p>
      <CardWrap>
        {/* {animationItems.map(v => (
          <ImageCard animation={v} />
        ))} */}
        <FinderCard />
        <FinderCard />
        <FinderCard />
        <FinderCard />
        <FinderCard />
        <FinderCard />
        <FinderCard />
      </CardWrap>
    </FilterResultListWrapper>
  );
};

export default FilterResultList;
