import React, { useCallback, useRef, useState } from 'react';
import { Form, Button, Input } from 'antd';
import { addAni } from '../../reducers/animation';
import { useDispatch } from 'react-redux';

const AddAnimationForm = () => {
  const dispatch = useDispatch();
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
    dispatch(addAni(text));
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
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">
          작성
        </Button>
      </div>
    </Form>
  );
};

export default AddAnimationForm;
