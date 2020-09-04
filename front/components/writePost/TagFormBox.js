import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import palette from '../../lib/palette';

const TagBoxWrap = styled.div`
  width: 100%;
  border-top: 1px solid red;
  padding-bottom: 2rem;
`;

const TagForm = styled.form`
  display: flex;
  width: 340px;
  border: 1px solid ${palette.violet[9]};
  font-size: 1rem;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1rem;

  input,
  button {
    outline: none;
    border: none;
  }
  input {
    flex: 1;
    padding: 0.5rem;
  }
  button {
    cursor: pointer;
    padding: 0 1rem;
    background-color: ${palette.violet[9]};
    color: #fff;
    font-weight: bold;
    &:hover {
      background-color: ${palette.violet[6]};
    }
  }
`;

const TagListWrap = styled.div`
  display: flex;
`;

const Tag = styled.div`
  margin-right: 0.5rem;
  cursor: pointer;
  color: ${palette.gray[6]};
  &:hover {
    opacity: 0.5;
  }
`;

// React.memo:  tag 값이 바뀔때만 리렌더링
const TagItem = React.memo(({ tag, onRemove }) => (
  <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));

const TagList = React.memo(({ tags, onRemove }) => (
  <TagListWrap>
    {tags.map(tag => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListWrap>
));

const TagFormBox = () => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState(['태그1', '태그2', '태그3']);

  const onRemove = useCallback(
    tag => {
      setLocalTags(localTags.filter(t => t !== tag));
    },
    [localTags],
  );

  const onChange = useCallback(e => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (!input) return;
      if (localTags.includes(input)) return;
      setLocalTags([...localTags, input]);
      setInput('');
    },
    [input],
  );

  return (
    <TagBoxWrap>
      <h4>태그</h4>
      <TagForm onSubmit={onSubmit}>
        <input
          placeholder="태그를 입력하세요"
          value={input}
          onChange={onChange}
        />
        <button type="submit">추가</button>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove} />
    </TagBoxWrap>
  );
};

export default TagFormBox;
