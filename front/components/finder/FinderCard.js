import React from 'react';
import styled from 'styled-components';

const ImageCardWrap = styled.div`
  cursor: pointer;
  position: relative;

  & .thumbnail {
    position: relative;
  }
  & > img {
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
  & > .title {
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: #494c62;
    margin-top: 0.25rem;
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
  }
`;

const FinderCard = () => {
  return (
    <ImageCardWrap>
      <div className="thumbnail">
        <img
          src="https://image.laftel.net/items/thumbs/big/9940a153-7a77-4ce9-bdf4-a714756b8c3e.jpg"
          alt=""
        />
      </div>
      <div className="title">암살교실 2기</div>
    </ImageCardWrap>
  );
};

export default FinderCard;
