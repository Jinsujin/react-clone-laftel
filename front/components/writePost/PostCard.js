import React, { useCallback } from 'react';
import { StarFilled, CaretRightOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import RoundedBtn from '../common/RoundedBtn';
import Router from 'next/router';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_POST_REQUEST } from '../../reducers/post';

const AnimationCardWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #e9e9ea;
  height: 364px;
  display: flex;
  padding: 1.5rem;
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

const DeleteButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9999;
`;

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { removePostLoading } = useSelector(state => state.post);

  const onClickDelete = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, []);

  const onClick = useCallback(() => {
    // 상세 페이지 이동
    Router.push(`/post/${post.id}`);
  }, []);
  return (
    <AnimationCardWrapper>
      <AniImageWrap>
        <img src={post.thumbnailImage} />
      </AniImageWrap>
      <AniInfosWrap>
        <DeleteButton
          danger
          onClick={onClickDelete}
          loading={removePostLoading}
        >
          삭제
        </DeleteButton>
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
        <RoundedBtn onClick={onClick}>
          <CaretRightOutlined />
          지금 재생
        </RoundedBtn>
      </AniInfosWrap>
    </AnimationCardWrapper>
  );
};

export default PostCard;
