import React from 'react';
import { Comment, List, Card, Popover, Button, Avatar } from 'antd';
import {
  RetweetOutlined,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
  HeartTwoTone,
} from '@ant-design/icons';

const AnimationCard = ({ animation }) => {
  return (
    <div>
      <Card
        cover={animation.thumbnailImage}
        actions={[<RetweetOutlined key="retweet" />]}
      >
        <Card.Meta
          avatar={<Avatar>{animation.User.nickname[0]}</Avatar>}
          title={animation.User.nickname}
          description={animation.content}
        />
      </Card>
    </div>
    // <ReviewForm />
    // reviewList
  );
};

export default AnimationCard;
