import React from 'react';
import styled from 'styled-components';

const RoundedBtnWrap = styled.button`
  background: #816bff;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9.5rem;
  border-radius: 22px;
  color: #fff;
  font-size: 1.125rem;
  font-weight: 500;
  cursor: pointer;
`;
const RoundedBtn = ({ children }) => {
  return <RoundedBtnWrap>{children}</RoundedBtnWrap>;
};

export default RoundedBtn;
