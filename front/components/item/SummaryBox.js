import React from 'react';
import styled from 'styled-components';

const SummaryWrap = styled.article`
  background-color: #fff;
  border: 1px solid #ecedef;
  padding: 1.5rem;
  border-radius: 4px;

  h4 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.85rem;
    color: #494c62;
    text-align: justify;
    line-height: 1.5;
    margin: 0;
  }
`;

const SummaryBox = ({ summary }) => {
  return (
    <SummaryWrap>
      <h4>줄거리</h4>
      <p>{summary}</p>
    </SummaryWrap>
  );
};

export default SummaryBox;
