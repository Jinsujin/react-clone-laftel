import React from 'react';
import styled from 'styled-components';
import { LikeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import StarPoint from './StarPoint';

const ReviewWrap = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 0.875rem;
  border-top: 1px solid #ecedef;

  .review-head {
    display: inline-flex;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;

    .username {
      margin-right: 1rem;
    }
  }
  p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.4rem;
    color: #494c62;
  }
  .foot {
    font-size: 0.75rem;
    color: #868e96;
    display: flex;
    align-items: center;
    & > .right {
      margin-left: auto;
    }
  }
`;

const ReviewRow = () => {
  return (
    <ReviewWrap>
      <div className="review-head">
        <div className="username">youb***</div>
        <StarPoint point={5} />
      </div>
      <p>
        어릴때 정말 많이 봤어요ㅠㅋㅋㅋㅋ전 맛쿠로쿠로스케를 제일 좋아했슴다
        키힣ㅎ 메이도 너무 사랑스럽고 잔잔하게 감동도있어요 역시 여름쯤의 숲을
        색감을 정말 예쁘게 잡아서 좋아해요ㅠㅠ
      </p>
      <div className="foot">
        <div className="created-date">2016-09-26</div>
        <div className="right">
          <Button icon={<LikeOutlined />} loading={false}>
            82
          </Button>
        </div>
      </div>
    </ReviewWrap>
  );
};

export default ReviewRow;
