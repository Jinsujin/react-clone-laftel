import React from 'react';
import PropTypes from 'prop-types';
import { List, Button, Card } from 'antd';
// import { StopOutlined } from '@ant-design/icons';

const NewAnimationList = ({ header, data }) => {
  return (
    <List
      style={{ marginBottom: 20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        // 더보기 버튼
        <div style={{ textAlign: 'center', margin: '10px 0' }}>
          <Button>더보기</Button>
        </div>
      }
      dataSource={data}
      renderItem={item => (
        <List.Item style={{ marginTop: 20 }}>
          <Card
            hoverable
            style={{ width: 200 }}
            // actions={[<StopOutlined key="stop" />]}
            cover={<img alt="example" src={item.imgUrl} />}
          >
            <Card.Meta title={item.genre} description={item.title} />
          </Card>
        </List.Item>
      )}
    />
  );
};

export default NewAnimationList;
