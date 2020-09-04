import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const WriteActionButtonsWrap = styled.div`
  margin: 1rem 0 3rem;
  button + button {
    margin-left: 0.5rem;
  }
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  height: 2rem;
`;

const WriteActionButtons = ({ onCancel, onPublish }) => {
  return (
    <WriteActionButtonsWrap>
      <StyledButton gray onClick={onCancel}>
        취소
      </StyledButton>
      <StyledButton onClick={onPublish}>게시글 등록</StyledButton>
    </WriteActionButtonsWrap>
  );
};

export default WriteActionButtons;
