import React from 'react';
import styled from 'styled-components';

/**
 * 반응형 디자인을 위한 컴포넌트
 */

const ResponsiveBlock = styled.div`
  width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

/**
 * style, className 등의 props 를 사용할 수 있도록
 * ...rest 를 사용하여 ResponsiveBlock 에게 전달
 */
const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
