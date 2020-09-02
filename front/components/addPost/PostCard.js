import React, { useCallback } from 'react';
import { StarFilled, CaretRightOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import RoundedBtn from '../common/RoundedBtn';
import Router from 'next/router';

const AnimationCardWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #e9e9ea;
  height: 364px;
  display: flex;
  padding: 1.5rem;
  cursor: pointer;
  & {
    margin-bottom: 1rem;
  }
`;

const AniImageWrap = styled.div`
  background-color: orange;
  width: 236px;
  position: relative;

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

const AniInfosWrap = styled.div`
  flex: 1 1;
  margin-left: 1.1rem;
  position: relative;
  & > h3 {
    font-size: 1.75rem;
    line-height: 3rem;
    font-weight: bold;
    color: #494c62;
  }
  & > .tags {
    display: flex;
    align-items: center;
    margin-bottom: 1.2rem;
  }

  & > p {
    font-size: 1.4rem;
    line-height: 1.5;
    white-space: pre-wrap;
    color: #494c62;
  }
  & > button {
    margin-left: auto;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const TagLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0.25rem;
  background: #ecedef;
  height: 29px;
  padding: 4px 8px;

  border-radius: 4px;
  font-size: 0.875rem;
  color: #816bff;
  font-weight: 500;
`;

const StarpointBtn = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0.25rem;
  background: #ecedef;
  height: 29px;
  padding: 4px 8px;

  border-radius: 4px;
  font-size: 0.875rem;
  color: #816bff;
  font-weight: 500;
  line-height: 1;
  pointer-events: none;
`;

const PostCard = ({ post }) => {
  const onClick = useCallback(() => {
    console.log('onclick');

    // 상세 페이지 이동
    Router.push('/item');
  }, []);
  return (
    <AnimationCardWrapper onClick={onClick}>
      <AniImageWrap>
        <img src={post.thumbnailImage} />
      </AniImageWrap>
      <AniInfosWrap>
        <h3>{post.title}</h3>
        <div className="tags">
          <StarpointBtn>
            {' '}
            <StarFilled /> 평점 {post.starpoint}
          </StarpointBtn>
          <TagLink>스릴러</TagLink>
          <TagLink>스릴러</TagLink>
          <TagLink>스릴러</TagLink>
        </div>
        <p>{post.content}</p>
        <RoundedBtn>
          <CaretRightOutlined />
          지금 재생
        </RoundedBtn>
      </AniInfosWrap>
    </AnimationCardWrapper>

    // <div>
    //   <Card
    //     cover={<AniThumbnailImage image={animation.thumbnailImage} />}
    //     actions={[<RetweetOutlined key="retweet" />]}
    //   >
    //     <Card.Meta
    //       avatar={<Avatar>{animation.User.nickname[0]}</Avatar>}
    //       title={animation.title}
    //       description={animation.content}
    //     />
    //   </Card>
    // </div>
  );
};

export default PostCard;
