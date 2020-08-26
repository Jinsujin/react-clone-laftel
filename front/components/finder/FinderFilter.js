import React from 'react';
import { Checkbox, Button } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';

const FinderFilterWrapper = styled.div`
  position: fixed;
  height: calc(100% - 80px);
  width: 260px;
  box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.05), -1px 1px 0 0 rgba(0, 0, 0, 0.05);
  overflow-y: auto;
  background-color: white;
  padding: 3rem 1.5rem;

  h3 {
    font-weight: bold;
    font-size: 1.2rem;
    color: #494c62;
  }
  & > section:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0;
  }
  & > section {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #f4f4f4;
  }
`;

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const optionsGenre = [
  { label: '액션', value: 'Action' },
  { label: '일상', value: 'Daily' },
  { label: '로맨스', value: 'Romance' },
  { label: '스포츠', value: 'Sports' },
  { label: '음악', value: 'Music' },
  { label: '범죄', value: 'Crime' },
];

const optionsTag = [
  { label: '성장', value: 'Grow' },
  { label: '야구', value: 'Baseball' },
  { label: '농구', value: 'Basketball' },
  { label: '탐정', value: 'Detective' },
];

const Global = createGlobalStyle`
    .ant-checkbox-group-item {
        display: block;
        margin-bottom: 0.6rem;
        font-size: 1rem;
        color: #494c62;
    }
`;

const SectionHead = styled.div`
  font-weight: 600;
  color: #494c62;
  margin-bottom: 0.8rem;
`;

const FinderFilter = () => {
  return (
    <FinderFilterWrapper>
      <Global />
      <section>
        <h3>필터</h3>
        <Button>초기화</Button>
      </section>
      <section>
        <SectionHead>장르</SectionHead>
        <Checkbox.Group
          options={optionsGenre}
          defaultValue={['Action']}
          onChange={onChange}
        />
      </section>
      <section>
        <SectionHead>태그</SectionHead>
        <Checkbox.Group
          options={optionsTag}
          defaultValue={['Grow']}
          onChange={onChange}
        />
      </section>
    </FinderFilterWrapper>
  );
};

export default FinderFilter;
