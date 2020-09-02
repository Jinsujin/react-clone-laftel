import React from 'react';
import styled from 'styled-components';

const TagsBoxWrap = styled.article`
  background-color: #fff;
  border: 1px solid #ecedef;
  padding: 1.5rem;
  border-radius: 4px;

  h4 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.75rem;
    color: #494c62;
    text-align: justify;
    line-height: 1.5;
    margin: 0;
  }
`;

const Tags = styled.div`
  display: flex;

  & + & {
    margin-right: 0.4rem;
  }

  & > div {
    margin-right: 0.5rem;
    font-size: 0.875rem;
    line-height: 2rem;
    color: #816bff;
    font-weight: 600;
    cursor: pointer;
  }
`;

const TagsBox = () => {
  return (
    <TagsBoxWrap>
      <h4>태그</h4>
      <Tags>
        <div>#따뜻</div>
        <div>#치유</div>
        <div>#성장</div>
        <div>#판타지</div>
      </Tags>
    </TagsBoxWrap>
  );
};

export default TagsBox;
