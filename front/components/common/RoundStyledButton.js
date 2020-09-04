import React from 'react';
import { Button } from 'antd';
import styled, { css } from 'styled-components';
import palette from '../../lib/palette';

const StyledButton = styled(Button)`
  background-color: ${palette.violet[8]};
  font-size: 1.125rem;
  font-weight: 500;
  height: 43px;
  width: 9.5rem;
  color: #fff;
  border: none;

  & + & {
    margin-left: 1rem;
  }

  &:hover {
    background-color: ${palette.violet[6]};
  }

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      font-size: 1.225rem;
    `}

  ${props =>
    props.gray &&
    css`
      background-color: ${palette.gray[7]};
      &:hover {
        background-color: ${palette.gray[6]};
      }
    `}
`;

const RoundStyledButton = props => {
  return <StyledButton type="primary" shape="round" {...props} />;
};

export default RoundStyledButton;
