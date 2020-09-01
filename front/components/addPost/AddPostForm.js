import React, { useCallback, useRef, useState } from 'react';
import { Form, Button, Input } from 'antd';
import { addPostRequest } from '../../reducers/post';
import { useDispatch, useSelector } from 'react-redux';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const { addPostLoading } = useSelector(state => state.animation);
  const [text, setText] = useState('');
  const onChangeText = useCallback(e => {
    setText(e.target.value);
  }, []);

  // 버튼 눌러서 사진 업로드창 띄우기
  const imageInputEl = useRef(null);
  const onClickImageUpload = useCallback(() => {
    // imageInputEl.current.click(); // error
  }, [imageInputEl.current]);

  const onSubmit = useCallback(() => {
    dispatch(addPostRequest(text));
  }, [text]);

  return (
    <Form
      onFinish={onSubmit}
      encType="multipart/form-data"
      style={{ margin: '10px 0 20px' }}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="입력해주세요"
      />
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

export default AddPostForm;
