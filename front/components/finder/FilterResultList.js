import React from 'react';
import styled from 'styled-components';
import { Row, Col, Card } from 'antd';
import FinderCard from './FinderCard';

const FilterResultListWrapper = styled.div`
  margin-top: 3rem;
  margin-left: 260px;
  width: calc(100% - 260px);
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
