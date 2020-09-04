import React, { useCallback, useRef, useState } from 'react';
import { Form, Button, Input, Checkbox } from 'antd';
import { addPostRequest } from '../../reducers/post';
import { useDispatch, useSelector } from 'react-redux';
import TagFormBox from './TagFormBox';
import styled from 'styled-components';
import palette from '../../lib/palette';

const TitleInput = styled(Input)`
  font-size: 3rem;
  outline: none;
  border: none;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 1.2rem;
`;

const GenreWrap = styled.div`
  border-top: 1px solid ${palette.gray[2]};
  margin-bottom: 1rem;
  padding-top: 0.7rem;
`;

const optionsGenre = [
  { label: '판타지', value: 'Fantagy' },
  { label: '로맨스', value: 'Romance' },
  { label: '액션', value: 'Action' },
  { label: '일상', value: 'Daily' },
  { label: '스포츠', value: 'Sports' },
  { label: '음악', value: 'Music' },
  { label: '범죄', value: 'Crime' },
];

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const WritePostForm = () => {
  const dispatch = useDispatch();
  const { addPostLoading } = useSelector(state => state.post);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [summary, setSummary] = useState('');

  const onChangeContent = useCallback(e => {
    setContent(e.target.value);
  }, []);

  const onChangeTitle = useCallback(e => {
    setTitle(e.target.value);
  }, []);

  const onChangeSummary = useCallback(e => {
    setSummary(e.target.value);
  }, []);

  // 버튼 눌러서 사진 업로드창 띄우기
  const imageInputEl = useRef(null);
  const onClickImageUpload = useCallback(() => {
    // imageInputEl.current.click(); // error
  }, [imageInputEl.current]);

  const onSubmit = useCallback(() => {
    dispatch(addPostRequest(title));
  }, [title]);

  return (
    <Form
      onFinish={onSubmit}
      encType="multipart/form-data"
      style={{ margin: '10px 0 20px' }}
    >
      <TitleInput
        value={title}
        onChange={onChangeTitle}
        maxLength={100}
        placeholder="제목을 입력하세요"
      />
      <Input.TextArea
        value={content}
        onChange={onChangeContent}
        maxLength={140}
        placeholder="내용을 입력해주세요"
      />
      <Input.TextArea
        value={summary}
        onChange={onChangeSummary}
        maxLength={140}
        placeholder="줄거리를 입력해주세요"
      />
      <TagFormBox />
      <GenreWrap>
        <h4>장르</h4>
        <Checkbox.Group
          options={optionsGenre}
          defaultValue={['Action']}
          onChange={onChange}
        />
      </GenreWrap>
      <div>
        <Input type="file" multiple hidden ref={imageInputEl} />
        <Button onClick={onClickImageUpload}>이미지 업로드 </Button>
        <Button
          loading={addPostLoading}
          type="primary"
          style={{ float: 'right' }}
          htmlType="submit"
        >
          작성
        </Button>
      </div>
    </Form>
  );
};

export default WritePostForm;
