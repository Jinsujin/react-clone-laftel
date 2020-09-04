import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/palette';

const AuthTemplateWrap = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  border: 2px solid ${palette.violet[8]};
  background-color: #fff;
  padding: 2rem;
  width: 768px;

  & > div {
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-bottom: 1.6rem;
    & > label {
      width: 11rem;
      margin-right: 1rem;
      font-size: 1.2em;
    }
    &.term-check label {
      width: 100%;
    }
    &.submit-button {
      justify-content: center;
    }
  }
`;

const AuthTemplate = ({ children, title }) => {
  return (
    <AuthTemplateWrap>
      <h2>{title}</h2>
      {children}
    </AuthTemplateWrap>
  );
};

export default AuthTemplate;
