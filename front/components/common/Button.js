import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/palette';
import Link from 'next/link';

const buttonStyle = css`
  border: none;
  background: #816bff;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9.5rem;
  padding: 1.5rem 0;
  border-radius: 22px;
  color: #fff;
  font-size: 1.125rem;
  font-weight: 500;
  cursor: pointer;

  background-color: ${palette.violet[8]};
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
      background-color: ${palette.gray[8]};
      &:hover {
        background-color: ${palette.gray[6]};
      }
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = props => {
  return props.to ? <StyledLink {...props} /> : <StyledButton {...props} />;
};

export default Button;
