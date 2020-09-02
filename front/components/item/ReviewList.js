import React from 'react';
import styled from 'styled-components';
import ReviewRow from './ReviewRow';

const ReviewListWrap = styled.div`
  span {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  .sorter {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.6rem;
    & > div {
      margin-left: 1rem;
      font-size: 1.1rem;
      cursor: pointer;
    }
    & > div.active {
      color: #816bff;
      font-weight: 600;
    }
  }
`;

const ReviewList = () => {
  return (
    <ReviewListWrap>
      <span>총 평점 4.5 / 5.0 (287 명)</span>
      <div className="sorter">
        <div className="active">최신순</div>
        <div>좋아요순</div>
      </div>
      <ReviewRow />
      <ReviewRow />
      <ReviewRow />
      <ReviewRow />
      <ReviewRow />
      <ReviewRow />
    </ReviewListWrap>
  );
};

export default ReviewList;
